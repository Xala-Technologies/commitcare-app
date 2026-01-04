// Site configuration for footer and contact information

export const siteConfig = {
  companyName: "Commit Care AS",
  orgNumber: "933440869", // Optional
  phone: "+47 96 66 50 01",
  email: "info@commitcare.no",
  address: {
    street: "Nesbruveien 75",
    postalCode: "1394",
    city: "Nesbru",
  },
  openingHours: {
    // Optional
    weekdays: "08:00 - 16:00",
    saturday: "Lukket",
    sunday: "Lukket",
  },
} as const;

