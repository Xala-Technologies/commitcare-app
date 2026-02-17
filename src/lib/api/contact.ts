// API functions for contact form submission
import { z } from "zod";

// Validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Navn må være minst 2 tegn").max(100, "Navn kan ikke være lengre enn 100 tegn"),
  email: z.string().email("Ugyldig e-postadresse"),
  phone: z.string().optional(),
  message: z.string().min(10, "Melding må være minst 10 tegn").max(2000, "Melding kan ikke være lengre enn 2000 tegn"),
  captchaToken: z.string().optional(), // hCaptcha token
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Simple rate limiting (client-side, can be enhanced with server-side)
const RATE_LIMIT_KEY = "contact_form_submissions";
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS = 3;

export function checkRateLimit(): { allowed: boolean; remainingTime?: number } {
  if (typeof window === "undefined") {
    return { allowed: true };
  }

  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  if (!stored) {
    return { allowed: true };
  }

  const data = JSON.parse(stored);
  const now = Date.now();
  const timeSinceFirst = now - data.firstSubmission;

  if (timeSinceFirst > RATE_LIMIT_WINDOW) {
    localStorage.removeItem(RATE_LIMIT_KEY);
    return { allowed: true };
  }

  if (data.count >= MAX_SUBMISSIONS) {
    const remainingTime = RATE_LIMIT_WINDOW - timeSinceFirst;
    return { allowed: false, remainingTime };
  }

  return { allowed: true };
}

export function recordSubmission(): void {
  if (typeof window === "undefined") {
    return;
  }

  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  const now = Date.now();

  if (!stored) {
    localStorage.setItem(
      RATE_LIMIT_KEY,
      JSON.stringify({
        firstSubmission: now,
        count: 1,
      })
    );
    return;
  }

  const data = JSON.parse(stored);
  const timeSinceFirst = now - data.firstSubmission;

  if (timeSinceFirst > RATE_LIMIT_WINDOW) {
    localStorage.setItem(
      RATE_LIMIT_KEY,
      JSON.stringify({
        firstSubmission: now,
        count: 1,
      })
    );
  } else {
    localStorage.setItem(
      RATE_LIMIT_KEY,
      JSON.stringify({
        ...data,
        count: data.count + 1,
      })
    );
  }
}

// API endpoint: Vercel serverless function (when deployed on Vercel)
// Override with VITE_CONTACT_API_URL for one.com (e.g. point to Vercel API URL)
const API_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL || "/api/kontakt";

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // Check rate limit
    const rateLimit = checkRateLimit();
    if (!rateLimit.allowed) {
      const minutes = Math.ceil((rateLimit.remainingTime || 0) / (60 * 1000));
      return {
        success: false,
        message: `Du har sendt for mange meldinger. Vennligst prøv igjen om ${minutes} minutt${minutes > 1 ? "er" : ""}.`,
      };
    }

    // Validate data
    const validated = contactFormSchema.parse(data);

    // Submit to API
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validated),
    });

    let result: { success?: boolean; message?: string };
    try {
      result = await response.json();
    } catch {
      // Server returned non-JSON (e.g. HTML error page)
      const statusHint = response.status === 404
        ? " (API ikke funnet – sjekk at du er på riktig domene/deploy)"
        : response.status >= 500
          ? " (serverfeil – sjekk Vercel/Resend-innstillinger)"
          : "";
      return {
        success: false,
        message: `Kunne ikke sende melding${statusHint}. Vennligst prøv igjen senere.`,
      };
    }

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Kunne ikke sende melding. Vennligst prøv igjen senere.",
      };
    }

    // Record successful submission
    recordSubmission();

    return {
      success: result.success ?? true,
      message: result.message || "Meldingen din er sendt! Vi tar kontakt så snart som mulig.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0]?.message || "Ugyldig skjemadata",
      };
    }
    // Network error (fetch failed, no response)
    if (error instanceof TypeError && (error.message === "Failed to fetch" || error.message.includes("NetworkError"))) {
      return {
        success: false,
        message: "Kunne ikke nå serveren. Sjekk internettforbindelsen og prøv igjen.",
      };
    }
    return {
      success: false,
      message: "En uventet feil oppstod. Vennligst prøv igjen senere.",
    };
  }
}

