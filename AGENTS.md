# ShadCN MCP Usage Rule:
When asked to use shadcn components, use the MCP server.

Planning Rule:
-When asked to plan using anything related to shadcn:

-Use the MCP server during planning

-Apply components wherever components are applicable

-Use whole blocks where possible (e.g., login page, calendar)

Implementation Rule
When implementing:

-First call the demo tool to see how it is used

-Then implement it so that it is implemented correctly

---

# Design System & Consistency Rules

## 1. Semantic Color Tokens (MANDATORY)
**ALWAYS use semantic color tokens from the design system. NEVER use hardcoded colors.**

### ❌ FORBIDDEN (Hardcoded Colors):
```tsx
// DON'T use specific color values
bg-blue-500, text-red-600, bg-gray-100
#ffffff, #000000, rgb(255, 255, 255)
text-white, bg-black, border-gray-200
```

### ✅ REQUIRED (Semantic Tokens):
```tsx
// Background & Foreground
bg-background       // Main background color
text-foreground     // Main text color
bg-card            // Card background
text-card-foreground // Card text

// Primary Colors
bg-primary         // Primary brand color
text-primary       // Primary text
bg-primary-foreground // Text on primary bg
hover:bg-primary/90 // Hover states with opacity

// Secondary Colors
bg-secondary       // Secondary brand color
text-secondary     // Secondary text
bg-secondary-foreground

// Muted (Subtle backgrounds & text)
bg-muted          // Subtle background
text-muted-foreground // Subtle text (descriptions, labels)

// Accent (Highlights)
bg-accent         // Accent background
text-accent-foreground // Accent text

// Destructive (Errors, Warnings)
bg-destructive    // Error/warning background
text-destructive  // Error text
bg-destructive-foreground

// UI Elements
border-border     // All borders
bg-input          // Input backgrounds
ring-ring         // Focus rings
```

### Color Usage Guidelines:
1. **Backgrounds**: Use `bg-background`, `bg-card`, `bg-muted`, `bg-primary`
2. **Text**: Use `text-foreground`, `text-muted-foreground`, `text-primary`
3. **Borders**: Use `border-border` (NEVER `border-gray-300`)
4. **Hover States**: Use opacity modifiers like `hover:bg-primary/90`
5. **Gradients**: Use semantic tokens: `from-primary to-primary/60`

---

## 2. Typography Standards (MANDATORY)
**ALWAYS use semantic HTML tags for typography. Let globals.css handle the styling.**

### ✅ CORRECT Way:
```tsx
// Use semantic HTML tags without custom classes
<h1>Main Page Title</h1>           // Auto: text-4xl lg:text-5xl xl:text-6xl font-semibold
<h2>Section Title</h2>              // Auto: text-3xl lg:text-4xl xl:text-5xl font-semibold
<h3>Subsection Title</h3>           // Auto: text-2xl lg:text-3xl font-semibold
<h4>Card Title</h4>                 // Auto: text-xl lg:text-2xl font-semibold
<p>Body text automatically styled</p> // Auto: text-base lg:text-lg text-muted-foreground
```

### ❌ WRONG Way (Don't Override):
```tsx
// DON'T manually specify text sizes and weights
<h1 className="text-6xl font-bold">        // ❌ Wrong
<h2 className="text-4xl font-semibold">    // ❌ Wrong
<h3 className="text-2xl font-bold">        // ❌ Wrong
<p className="text-lg text-gray-600">      // ❌ Wrong
```

### Typography Hierarchy:
- `<h1>`: Hero/Page title (only ONE per page)
- `<h2>`: Section titles
- `<h3>`: Subsection titles  
- `<h4>`: Card/Component titles
- `<p>`: Body text (paragraphs, descriptions)

### When to Override:
Only override when you need:
- Different text size: `<p className="text-sm">` or `<p className="text-base">`
- Specific spacing: `<h2 className="mb-6">`
- Different color context: Keep semantic tokens

---

## 3. Button Styling (MANDATORY)
**ALWAYS use the Button component from shadcn/ui with variants.**

### ✅ CORRECT:
```tsx
import { Button } from "@/components/ui/button"

// Primary button
<Button>Click Me</Button>
<Button variant="default">Default</Button>

// Secondary button
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>

// Destructive button
<Button variant="destructive">Delete</Button>

// Ghost/Link buttons
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>
```

### ❌ WRONG:
```tsx
// DON'T create custom button styles
<button className="bg-blue-500 text-white px-4 py-2 rounded">  // ❌
<div className="bg-primary text-white cursor-pointer">        // ❌
```

---

## 4. Component Styling Rules

### Cards:
```tsx
// ✅ CORRECT
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Colors automatically from design system:
// bg-card, text-card-foreground, border-border
```

### Inputs:
```tsx
// ✅ CORRECT
<Input placeholder="Enter text" />
<Textarea placeholder="Enter message" />

// Automatically uses:
// bg-input, text-foreground, border-border, ring-ring
```

### Badges:
```tsx
// ✅ CORRECT
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

---

## 5. Spacing & Layout

### Container & Padding:
```tsx
// Use consistent spacing
py-16 lg:py-24    // Section padding
px-4 lg:px-8      // Container padding
gap-6 lg:gap-8    // Grid/flex gaps
space-y-4         // Vertical spacing
```

### Border Radius:
```tsx
// Use design system radius tokens
rounded-sm    // Small radius
rounded-md    // Medium radius  
rounded-lg    // Large radius (default)
rounded-xl    // Extra large
rounded-2xl   // 2x large
```

---

## 6. Shadow Usage
```tsx
// Use semantic shadow tokens
shadow-sm     // Small shadow
shadow        // Default shadow
shadow-md     // Medium shadow
shadow-lg     // Large shadow
shadow-xl     // Extra large shadow
```

---

## 7. Quick Reference: Common Patterns

### Section Header:
```tsx
<div className="text-center mb-12">
  <Badge variant="outline" className="mb-4">
    Section Label
  </Badge>
  <h2>Section Title</h2>
  <p className="max-w-3xl mx-auto">
    Section description text
  </p>
</div>
```

### Card with Hover:
```tsx
<Card className="hover:shadow-lg transition-all hover:-translate-y-1">
  <CardHeader>
    <h4>Card Title</h4>
    <p className="text-base">Description</p>
  </CardHeader>
</Card>
```

### Icon Container:
```tsx
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
  <Icon className="h-6 w-6 text-primary" />
</div>
```

---

## 8. Validation Checklist

Before submitting code, verify:
- [ ] No hardcoded colors (bg-blue-500, #ffffff, etc.)
- [ ] All colors use semantic tokens (bg-primary, text-foreground, etc.)
- [ ] Typography uses semantic HTML (h1, h2, h3, h4, p)
- [ ] No manual text size classes on headings
- [ ] Buttons use Button component with variants
- [ ] Consistent spacing (py-16 lg:py-24 for sections)
- [ ] Border radius uses design tokens (rounded-lg, etc.)
- [ ] Shadows use design tokens (shadow-lg, etc.)

---

## 9. Theme Support

All semantic tokens automatically support dark mode:
```tsx
// This works in both light and dark mode
<div className="bg-background text-foreground">
  <h2>Title</h2>
  <p>Automatically adjusts to theme</p>
  <Button variant="primary">Themed Button</Button>
</div>
```

**NEVER use:**
- `dark:` prefix for colors (semantic tokens handle this)
- Manual color switching logic
- Hardcoded color values

---

## Summary
✅ **DO**: Use semantic tokens, semantic HTML, shadcn components  
❌ **DON'T**: Use hardcoded colors, custom button styles, manual typography classes