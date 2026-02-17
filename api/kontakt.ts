import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema matching the frontend
const contactFormSchema = z.object({
  name: z.string().min(2, "Navn må være minst 2 tegn").max(100, "Navn kan ikke være lengre enn 100 tegn"),
  email: z.string().email("Ugyldig e-postadresse"),
  phone: z.string().optional(),
  message: z.string().min(10, "Melding må være minst 10 tegn").max(2000, "Melding kan ikke være lengre enn 2000 tegn"),
  captchaToken: z.string().optional(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method Not Allowed' 
    });
  }

  // CORS headers for production
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Fail fast if Resend is not configured
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set in Vercel environment variables');
    return res.status(503).json({
      success: false,
      message: 'E-posttjenesten er ikke konfigurert. Vennligst prøv igjen senere.',
    });
  }

  try {
    // Validate input data
    const validated = contactFormSchema.parse(req.body);

    // Get contact email from environment or use default
    const contactEmail = process.env.CONTACT_EMAIL || 'info@commitcare.no';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@commitcare.no';

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: validated.email,
      subject: `Ny melding fra kontaktskjemaet - ${validated.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #0d9488; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #0d9488; }
              .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; }
              .message-box { margin-top: 10px; padding: 15px; background-color: white; border-left: 4px solid #0d9488; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">Ny melding fra kontaktskjemaet</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Navn:</div>
                  <div class="value">${validated.name}</div>
                </div>
                <div class="field">
                  <div class="label">E-post:</div>
                  <div class="value"><a href="mailto:${validated.email}">${validated.email}</a></div>
                </div>
                ${validated.phone ? `
                <div class="field">
                  <div class="label">Telefon:</div>
                  <div class="value"><a href="tel:${validated.phone.replace(/\s/g, '')}">${validated.phone}</a></div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Melding:</div>
                  <div class="message-box">${validated.message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Ny melding fra kontaktskjemaet

Navn: ${validated.name}
E-post: ${validated.email}
${validated.phone ? `Telefon: ${validated.phone}` : ''}

Melding:
${validated.message}
      `.trim(),
    });

    if (emailResult.error) {
      console.error('Resend error:', emailResult.error);
      const hint = process.env.VERCEL ? ' Sjekk at RESEND_FROM_EMAIL er et verifisert domene i Resend.' : '';
      return res.status(500).json({
        success: false,
        message: 'Kunne ikke sende e-post.' + hint + ' Vennligst prøv igjen senere.',
      });
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Meldingen din er sendt! Vi tar kontakt så snart som mulig.',
    });

  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: error.errors[0]?.message || 'Ugyldig skjemadata',
      });
    }

    // Handle other errors
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      message: 'En uventet feil oppstod. Vennligst prøv igjen senere.',
    });
  }
}

