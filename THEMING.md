# Theming & Color Tokens Guide

## Overview

Website LEI menggunakan semantic color tokens dari design system yang memungkinkan theming yang konsisten dan mendukung dark mode di masa depan.

## Installed Theme

Theme dari **tweakcn**: https://tweakcn.com/r/themes/cmgel0dch000b04l43pw905xf

Karakteristik:
- Primary color: Purple-blue (professional & trustworthy)
- Radius: 1.3rem (rounded corners)
- Font: Open Sans (clean & readable)
- Shadow system dengan subtle effects

## Available Semantic Tokens

### Color Tokens

| Token | Usage | Light Mode | Dark Mode |
|-------|-------|-----------|-----------|
| `background` | Main background | White | Black |
| `foreground` | Main text | Dark gray | Light gray |
| `card` | Card backgrounds | Light gray | Dark gray |
| `card-foreground` | Card text | Dark | Light |
| `primary` | Primary actions, brand | Purple-blue | Lighter purple |
| `primary-foreground` | Text on primary | White | White |
| `secondary` | Secondary elements | Dark gray | Light gray |
| `secondary-foreground` | Text on secondary | White | Dark |
| `muted` | Subtle backgrounds | Light gray | Dark gray |
| `muted-foreground` | Subtle text | Medium gray | Medium gray |
| `accent` | Accent highlights | Light purple | Dark purple |
| `accent-foreground` | Text on accent | Purple | Purple |
| `destructive` | Error/danger | Red | Red |
| `border` | Borders | Light gray | Dark gray |
| `input` | Input backgrounds | Light | Dark |
| `ring` | Focus rings | Primary color | Primary color |

### Usage Examples

```tsx
// ✅ Good - Using semantic tokens
<div className="bg-primary text-primary-foreground">
  <Button className="bg-secondary text-secondary-foreground">Click</Button>
</div>

// ❌ Bad - Using hardcoded colors
<div className="bg-blue-500 text-white">
  <Button className="bg-gray-900 text-white">Click</Button>
</div>
```

## Components Updated

All components now use semantic tokens:

### 1. Hero Section
- ✅ `text-primary` for checkmarks (was `text-green-600`)
- ✅ `border-border` for dividers
- ✅ `bg-muted` for placeholder circles
- ✅ `bg-primary/10` and `bg-accent/10` for gradients

### 2. Services Section
- ✅ `bg-card border-border` for cards
- ✅ `bg-primary/10` for icon backgrounds
- ✅ `hover:text-primary/80` for interactive states

### 3. Why LEI Section
- ✅ `bg-primary/10` for benefit icons (was `bg-accent/10`)
- ✅ `text-primary` for icons (was `text-accent`)
- ✅ `text-foreground` for headings

### 4. Credibility Section
- ✅ `bg-card border-border` for logo placeholders and testimonial cards
- ✅ `text-primary` for quote icons (was `text-accent`)
- ✅ `text-card-foreground` for testimonial names

### 5. CTA Section
- ✅ `bg-primary` instead of gradient
- ✅ `text-primary-foreground` for text
- ✅ `hover:text-primary-foreground` for button states

### 6. Contact Form Section
- ✅ `bg-primary/10 border-primary/20` for WhatsApp card (was `bg-accent`)
- ✅ `text-primary` for card title
- ✅ `bg-card border-border` for form card
- ✅ `text-card-foreground` for emphasized text

### 7. Header
- ✅ `border-border` for mobile menu and scroll state
- ✅ `text-card-foreground hover:text-primary` for menu button
- ✅ `bg-background` for mobile menu

### 8. Footer
- ✅ `bg-secondary text-secondary-foreground` (was `bg-primary`)
- ✅ `border-secondary-foreground/10` for divider
- ✅ All text uses `secondary-foreground` tokens

## Benefits

### 1. Consistency
All colors come from the same design system, ensuring visual consistency across the site.

### 2. Maintainability
Change theme colors in one place (`globals.css`) and it updates everywhere.

### 3. Accessibility
Semantic tokens ensure proper contrast ratios for WCAG compliance.

### 4. Dark Mode Ready
Easy to implement dark mode - just toggle the `.dark` class on `<html>`.

### 5. Scalability
Adding new components? Use the same semantic tokens for instant consistency.

## Dark Mode Implementation (Future)

To enable dark mode in the future:

```tsx
// 1. Add theme provider (already configured in globals.css)
// 2. Add toggle button
import { useTheme } from "next-themes"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
  )
}

// 3. Wrap app in ThemeProvider (app/layout.tsx)
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

## Testing Tokens

To test your color tokens:

1. **Check contrast**: Use browser DevTools to verify AA compliance
2. **Preview dark mode**: Add `.dark` class to `<html>` in browser DevTools
3. **Test hover states**: Ensure interactive elements have clear feedback
4. **Validate borders**: Make sure borders are visible but not too heavy

## Customizing Theme

To customize the theme, edit `app/globals.css`:

```css
:root {
  /* Change primary color */
  --primary: oklch(0.3148 0.1207 258.7745); /* Purple-blue */
  
  /* Change accent color */
  --accent: oklch(0.9392 0.0166 250.8453);
  
  /* Change radius */
  --radius: 1.3rem; /* More or less rounded */
}
```

### Color Picker Tool

Use https://oklch.com/ to pick colors in OKLCH format (better perceptual uniformity than HSL).

## Common Patterns

### Background Layers
```tsx
bg-background → bg-card → bg-muted
```

### Text Hierarchy
```tsx
text-foreground (headings)
text-muted-foreground (body)
text-muted-foreground/60 (captions)
```

### Interactive States
```tsx
// Button
bg-primary hover:bg-primary/90 active:bg-primary/80

// Link
text-primary hover:text-primary/80

// Card
border-border hover:border-primary/50
```

### Opacity Variants
Use Tailwind's opacity modifiers:
- `/10` - Very subtle (backgrounds)
- `/20` - Subtle (borders, shadows)
- `/50` - Medium (hover states)
- `/80` - Strong (active states)
- `/90` - Very strong

## Migration Checklist

When adding new components:

- [ ] Use `bg-background` instead of `bg-white`
- [ ] Use `text-foreground` instead of `text-black`
- [ ] Use `bg-primary` instead of `bg-blue-500`
- [ ] Use `border-border` instead of `border-gray-200`
- [ ] Use `text-muted-foreground` for secondary text
- [ ] Use semantic tokens for all hover/active states
- [ ] Test with dark mode class (`.dark`)

## Resources

- [Tailwind CSS Color Docs](https://tailwindcss.com/docs/customizing-colors)
- [shadcn/ui Theming](https://ui.shadcn.com/docs/theming)
- [OKLCH Color Picker](https://oklch.com/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
