/**
 * One-off script to add a domain in Resend (so you can verify it via DNS).
 * Run: npx tsx scripts/verify-domain-resend.ts
 * Requires RESEND_API_KEY in env. After running, add the DNS records Resend shows to your DNS provider (e.g. one.com).
 */

import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error('Set RESEND_API_KEY in the environment');
  process.exit(1);
}

const resend = new Resend(apiKey);
const domainName = process.env.DOMAIN || 'commitcare.no';

async function main() {
  const { data, error } = await resend.domains.create({ name: domainName });
  if (error) {
    console.error('Resend error:', error);
    process.exit(1);
  }
  console.log('Domain created. Add these DNS records at your DNS provider (e.g. one.com):');
  console.log(JSON.stringify(data, null, 2));
}

main();
