# Responsive Design Guidelines

This document outlines the responsive design system and best practices for the CommitCare application.

## Breakpoints

The application uses Tailwind CSS default breakpoints:

- **xs**: 0-479px (Mobile small)
- **sm**: 480-639px (Mobile large)
- **md**: 640-767px (Tablet portrait)
- **lg**: 768-1023px (Tablet landscape)
- **xl**: 1024-1279px (Desktop)
- **2xl**: 1280px+ (Large desktop)

## Layout Rules

### Container Width
- Maximum content width: **1200px** (centered)
- Side padding:
  - Mobile: `px-5` (20px)
  - Tablet: `px-8` (32px)
  - Desktop: `px-12` (48px)

### Section Padding
- Vertical padding:
  - Mobile: `py-10` (40px)
  - Tablet: `py-14` (56px)
  - Desktop: `py-20` (80px)

### Grid Layouts
- **0-767px**: Single column by default
- **768-1023px**: 2 columns where meaningful
- **1024px+**: 3 columns only for card grids and content listings

**Never use 3+ columns for:**
- Dense forms
- Navigation menus
- Text-heavy content

## Typography Scale

### Responsive Headings
- **H1**: `clamp(2rem, 4vw, 4rem)` - 32px to 64px
- **H2**: `clamp(1.5rem, 3vw, 2.5rem)` - 24px to 40px
- **H3**: `clamp(1.25rem, 2.2vw, 1.75rem)` - 20px to 28px
- **H4**: `clamp(1.125rem, 1.8vw, 1.5rem)` - 18px to 24px
- **H5**: `clamp(1rem, 1.5vw, 1.25rem)` - 16px to 20px
- **H6**: `1rem` (16px)

### Body Text
- Base: `clamp(1rem, 1.125vw, 1.125rem)` - 16px to 18px
- Line height: `1.7` (minimum)
- Max line length: `75ch` for readability

## Component Patterns

### Shared Primitives

#### Container
```tsx
import { Container } from "@/components/ui/container";

<Container>
  {/* Content */}
</Container>
```

#### Section
```tsx
import { Section } from "@/components/ui/section";

<Section variant="default"> {/* or "light" or "dark" */}
  <Container>
    {/* Content */}
  </Container>
</Section>
```

### Card Grids
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {/* Cards */}
</div>
```

### Buttons
- Minimum touch target: **44px height** (`min-h-[44px]`)
- Full-width on mobile where appropriate: `w-full sm:w-auto`
- Always include focus states: `focus:outline-none focus:ring-2 focus:ring-primary/20`

### Forms
- Single column on mobile
- Two columns on tablet+ for name fields (first/last)
- All inputs: `min-h-[44px]` for touch targets
- Labels: `text-sm font-medium`

### Images
- Always use `aspect-ratio` or fixed dimensions
- Use `object-cover` for consistent layouts
- Responsive heights: `h-[250px] sm:h-[300px] md:h-[400px]`

## Accessibility

### Touch Targets
- Minimum size: **44x44px** for all interactive elements
- Spacing between targets: **8px minimum**

### Focus States
- Always visible: `focus:outline-none focus:ring-2 focus:ring-primary/20`
- Never remove focus indicators

### Keyboard Navigation
- All interactive components must be keyboard accessible
- Tab order should be logical and intuitive

### Color Contrast
- Text meets WCAG AA standards
- Interactive elements have sufficient contrast

## Mobile-First Approach

### Principles
1. **Start with mobile** (320px width)
2. **Progressive enhancement** - add features for larger screens
3. **No desktop-first cramming** - avoid overflow hacks
4. **Test at all breakpoints** before considering complete

### Common Patterns

#### Responsive Text Alignment
```tsx
<div className="text-center lg:text-left">
  {/* Content */}
</div>
```

#### Responsive Spacing
```tsx
<div className="mb-4 md:mb-6 lg:mb-8">
  {/* Content */}
</div>
```

#### Responsive Visibility
```tsx
{/* Hidden on mobile, visible on tablet+ */}
<div className="hidden md:block">
  {/* Content */}
</div>

{/* Visible on mobile, hidden on tablet+ */}
<div className="md:hidden">
  {/* Content */}
</div>
```

## Testing Checklist

Test at minimum these viewport sizes:
- ✅ 320x568 (iPhone SE)
- ✅ 375x812 (iPhone 12/13)
- ✅ 390x844 (iPhone 14 Pro)
- ✅ 768x1024 (iPad Portrait)
- ✅ 1024x768 (iPad Landscape)
- ✅ 1366x768 (Laptop)
- ✅ 1440x900 (Desktop)
- ✅ 1920x1080 (Large Desktop)

### Test Scenarios
- [ ] No horizontal scrolling at any width
- [ ] All CTAs visible and usable on mobile
- [ ] Forms usable without pinching/zooming
- [ ] Modals/menus usable on touch devices
- [ ] Typography readable at all sizes
- [ ] Images maintain aspect ratios
- [ ] Navigation works on mobile (drawer)
- [ ] Focus states visible
- [ ] Touch targets meet 44px minimum

## Performance

### Images
- Use responsive images with proper `srcset` where applicable
- Define aspect ratios to prevent layout shift
- Optimize images for web (WebP format recommended)

### Fonts
- Preload critical fonts
- Use `font-display: swap` for better perceived performance
- Limit font weights to what's actually used

### Animations
- Respect `prefers-reduced-motion`
- Keep animations subtle and purposeful
- Avoid heavy shadows/filters on mobile

## Common Issues & Solutions

### Horizontal Overflow
**Problem**: Content extends beyond viewport width
**Solution**: 
- Use `Container` component for all content
- Avoid fixed widths (use `max-w-*` instead)
- Check for negative margins or absolute positioning

### Text Too Small
**Problem**: Text unreadable on mobile
**Solution**: Use responsive typography with `clamp()` or responsive classes

### Touch Targets Too Small
**Problem**: Buttons/links hard to tap
**Solution**: Ensure `min-h-[44px]` on all interactive elements

### Layout Shift
**Problem**: Content jumps when images load
**Solution**: Define aspect ratios or dimensions for all images

## Resources

- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Touch Target Size Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)


