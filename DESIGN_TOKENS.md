# Design Tokens System

This application uses a comprehensive design tokens system that makes it easy to change the entire design by updating values in a single file.

## Location

All design tokens are defined in: `src/styles/tokens.css`

## How to Change the Design

To change the design, simply edit the values in `src/styles/tokens.css`. All components reference these tokens, so changes will automatically propagate throughout the entire application.

### Example: Changing the Primary Color

To change the primary teal color, update this line in `tokens.css`:

```css
--token-primary: 181 75% 24%; /* Change this value */
```

### Example: Changing Card Background Color

To change the card background color, update:

```css
--token-background-card: 40 20% 89%; /* Change this value */
```

## Available Token Categories

### Colors
- `--token-background` - Main background color
- `--token-background-section` - Section background color
- `--token-background-card` - Card background color
- `--token-primary` - Primary brand color
- `--token-primary-light` - Light primary (for icons)
- `--token-primary-hero-button` - Hero button color
- `--token-foreground` - Main text color
- And more...

### Typography
- `--token-font-serif` - Serif font family
- `--token-font-sans` - Sans-serif font family
- `--token-font-size-*` - Font sizes (xs, sm, base, lg, xl, 2xl, etc.)
- `--token-font-weight-*` - Font weights (light, normal, medium, semibold, bold, extrabold)
- `--token-line-height-*` - Line heights (tight, normal, relaxed)
- `--token-letter-spacing-*` - Letter spacing values

### Spacing
- `--token-spacing-*` - Spacing values (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)

### Border Radius
- `--token-radius-*` - Border radius values (sm, md, lg, xl, 2xl, full)

### Shadows
- `--token-shadow-*` - Shadow values (sm, md, lg, xl)

### Transitions
- `--token-transition-*` - Transition durations (fast, base, slow, slower)

## Using Tokens in Components

### CSS Classes

Use these utility classes in your components:

- `bg-card-token` - Card background color
- `bg-section-light` - Section background color
- `text-primary-icon` - Primary icon color
- `bg-primary-icon` - Primary icon background
- `bg-hero-button` - Hero button background

### Direct CSS Variable Usage

You can also use tokens directly in your CSS:

```css
.my-component {
  background-color: hsl(var(--token-background-card));
  color: hsl(var(--token-foreground));
  font-size: var(--token-font-size-lg);
}
```

## Color Format

Colors are stored in HSL format (without the `hsl()` wrapper) for easy manipulation:

```css
--token-primary: 181 75% 24%; /* Hue Saturation Lightness */
```

To use in CSS:
```css
color: hsl(var(--token-primary));
```

## Benefits

1. **Single Source of Truth** - All design values in one place
2. **Easy Theming** - Change entire design by updating tokens
3. **Consistency** - Ensures consistent design across the app
4. **Maintainability** - Easy to update and maintain
5. **Scalability** - Easy to add new themes or variants

## Creating a New Theme

To create a new theme, you can:

1. Duplicate the `:root` block in `tokens.css`
2. Add a class selector (e.g., `.theme-dark`)
3. Override the token values
4. Apply the class to your root element

Example:
```css
.theme-dark {
  --token-background: 210 18% 6%;
  --token-foreground: 40 33% 94%;
  /* ... other overrides */
}
```

