// Site configuration for footer and contact information

export const siteConfig = {
  companyName: "Commit Care",
  orgNumber: "123 456 789", // Optional
  phone: "+47 12 34 56 78",
  email: "kontakt@commitcare.no",
  address: {
    street: "Omsorgsveien 123",
    postalCode: "0123",
    city: "Oslo",
  },
  openingHours: {
    // Optional
    weekdays: "08:00 - 16:00",
    saturday: "Lukket",
    sunday: "Lukket",
  },
} as const;

