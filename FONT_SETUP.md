# Font System Setup Guide

## How to Use Your New Font System

### Font Files Needed
Place these files in your `/public/fonts/` folder:

**For Font-Body (main text):**
- `body-font.woff2` (Regular 400)
- `body-font-medium.woff2` (Medium 500) 
- `body-font-bold.woff2` (Bold 700)

**For Font-Special (headings/titles):**
- `special-font.woff2` (Regular 400)
- `special-font-medium.woff2` (Medium 500)
- `special-font-bold.woff2` (Bold 700)

### How It Works
- **Font-Body** automatically applies to: paragraphs, body text, links, lists
- **Font-Special** automatically applies to: h1, h2, h3 headings
- **Typography scale** is automatically applied:
  - h1: 2.5rem (40px)
  - h2: 2rem (32px) 
  - h3: 1.5rem (24px)
  - body: 1rem (16px)
  - small: 0.875rem (14px)

### Easy Font Testing
To test different fonts, simply:
1. Replace the font files in `/public/fonts/` with new ones
2. Keep the same filenames (body-font.woff2, special-font.woff2, etc.)
3. Refresh your site - fonts will automatically update!

### Manual Font Application
Use these CSS classes to apply fonts manually:
- `.font-body` - Apply body font to any element
- `.font-special` - Apply special font to any element

### Example Usage
```html
<h1>This heading uses Font-Special automatically</h1>
<p>This paragraph uses Font-Body automatically</p>

<div class="font-special">This div uses Font-Special</div>
<div class="font-body">This div uses Font-Body</div>
```

### Current Font Assignment
- **Font-Body:** Inter (clean, modern sans-serif for main text, paragraphs, body content)
- **Font-Special:** Nippo (modern, distinctive font for headings, titles, special text elements)

### Current Font Files
Your `/public/fonts/` folder now contains:
- `body-font.woff2` (Inter Regular)
- `special-font.woff2` (Nippo Variable)

### Simplified System
- **Only 2 font files** - much cleaner!
- **Font-Body:** Inter for all body text
- **Font-Special:** Nippo for all headings

### Font Characteristics
- **Inter (Font-Body):** Clean, modern sans-serif perfect for body text and readability
- **Nippo (Font-Special):** Modern, distinctive variable font that adds character to headings
