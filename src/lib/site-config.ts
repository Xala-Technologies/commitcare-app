// Site configuration for footer and contact information

export const siteConfig = {
  companyName: "Commit Care AS",
  orgNumber: "933440869",
  phone: "+47 96 66 50 01",
  email: "info@commitcare.no",
  address: {
    street: "Myraveien 26 A",
    postalCode: "3425",
    city: "Reistad",
  },
  openingHours: {
    // Optional
    weekdays: "08:00 - 16:00",
    saturday: "Lukket",
    sunday: "Lukket",
  },
} as const;

/** Formats a 9-digit Norwegian org number as "XXX XXX XXX". */
export function formatOrgNumber(orgNumber: string): string {
  return orgNumber.replace(/^(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3");
}

export const formattedOrgNumber = formatOrgNumber(siteConfig.orgNumber);

