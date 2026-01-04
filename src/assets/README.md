# Assets Folder Structure

This folder contains all images and assets used throughout the application, organized by category for easy management.

## Folder Structure

```
assets/
├── hero/              # Hero section background images
│   └── hero-bg.jpg    # Main homepage hero background
│
├── sections/          # Section background images
│   ├── purpose-section.jpg
│   └── services-bg.jpg
│
├── pages/             # Page-specific images
│   ├── about/         # About page images
│   ├── om-oss/        # Om oss page images
│   ├── tjenester/     # Tjenester page images
│   ├── kontakt/       # Kontakt page images
│   ├── jobb/          # Jobb page images
│   ├── caregiver-1.jpg
│   ├── caregiver-2.jpg
│   └── family-care.jpg
│
└── reference/         # Reference documents/images
    ├── page_1.jpg
    ├── page_2.jpg
    ├── page_3.jpg
    └── page_4.jpg
```

## How to Add Your Own Images

1. **Hero Section Images**: Place hero background images in `hero/` folder
   - Recommended size: 1920x1080px or larger
   - Format: JPG, PNG, or WebP

2. **Section Images**: Place section background images in `sections/` folder
   - Used for various content sections throughout the site

3. **Page Images**: Place page-specific images in `pages/` folder
   - Used for individual page hero sections and content
   - Each page should have its own subfolder (e.g., `pages/om-oss/`, `pages/tjenester/`)

4. **Reference Documents**: Place reference documents in `reference/` folder
   - Used for documents, certificates, or reference materials

## Image Naming Convention

- Use lowercase letters
- Separate words with hyphens (e.g., `hero-bg.jpg`)
- Be descriptive and consistent
- Keep file extensions consistent (.jpg, .png, .webp)

## Updating Images in Code

After adding new images, update the import statements in the relevant component files:

```typescript
// Example: Hero section
import heroBg from "@/assets/hero/hero-bg.jpg";

// Example: Page image
import pageImage from "@/assets/pages/your-image.jpg";
```

