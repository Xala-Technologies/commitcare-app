# API Setup for Contact Form

Dette dokumentet forklarer hvordan du setter opp backend for kontaktskjemaet.

## Krav

- Validering av input (zod)
- hCaptcha verifisering
- E-post sending (Resend/SendGrid)
- Rate limiting
- Ingen lagring i database

## Alternativer

### 1. Serverless Functions (Anbefalt)

#### Netlify Functions

Opprett `/netlify/functions/kontakt.ts`:

```typescript
import { Handler } from '@netlify/functions';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10).max(2000),
  captchaToken: z.string(),
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Verify hCaptcha
    const captchaResponse = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.HCAPTCHA_SECRET_KEY!,
        response: JSON.parse(event.body || '{}').captchaToken,
      }),
    });
    
    const captchaData = await captchaResponse.json();
    if (!captchaData.success) {
      return { statusCode: 400, body: JSON.stringify({ message: 'Captcha verification failed' }) };
    }

    // Validate and parse
    const data = schema.parse(JSON.parse(event.body || '{}'));

    // Send email
    await resend.emails.send({
      from: 'noreply@commitcare.no',
      to: process.env.CONTACT_EMAIL!,
      subject: `Ny melding fra ${data.name}`,
      html: `
        <h2>Ny melding fra kontaktskjema</h2>
        <p><strong>Navn:</strong> ${data.name}</p>
        <p><strong>E-post:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ''}
        <p><strong>Melding:</strong></p>
        <p>${data.message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Melding sendt' }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Kunne ikke sende melding' }),
    };
  }
};
```

#### Vercel Functions

Opprett `/api/kontakt.ts`:

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Similar implementation as Netlify function above
  // ...
}
```

### 2. Express Backend

Opprett en separat Express-server:

```typescript
// server/index.ts
import express from 'express';
import { z } from 'zod';
import { Resend } from 'resend';

const app = express();
app.use(express.json());

app.post('/api/kontakt', async (req, res) => {
  // Similar implementation
  // ...
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

### 3. Tredjepartstjenester

#### Formspree

```typescript
// I contact.ts, endre API_ENDPOINT til:
const API_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

#### EmailJS

```typescript
import emailjs from '@emailjs/browser';

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    name: data.name,
    email: data.email,
    message: data.message,
  },
  'YOUR_PUBLIC_KEY'
);
```

## Environment Variables

Sett opp følgende miljøvariabler:

```env
RESEND_API_KEY=your_resend_api_key
HCAPTCHA_SECRET_KEY=your_hcaptcha_secret_key
CONTACT_EMAIL=kontakt@commitcare.no
VITE_CONTACT_API_URL=/api/kontakt  # For Vite proxy
```

## Rate Limiting

For produksjon, implementer rate limiting på server-side:

```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // 3 requests per hour
});
```

## hCaptcha Setup

1. Registrer deg på https://www.hcaptcha.com/
2. Legg til site key i frontend
3. Legg til secret key i backend
4. Installer `react-hcaptcha` i frontend:

```bash
npm install react-hcaptcha
```

## Testing

For lokal utvikling, kan du bruke Vite proxy:

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
```

