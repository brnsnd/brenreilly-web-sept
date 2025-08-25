# Brennan Reilly — Professional Website

A clean, accessible website for Brennan Reilly, live sound engineer & designer.

## 🚀 Quick Start

All commands are run from the root of the project, from a terminal:

| Command             | Action                                    |
| :------------------ | :---------------------------------------- |
| `npm install`       | Installs dependencies                     |
| `npm run dev`       | Starts local dev server at `localhost:4321` |
| `npm run build`     | Build your production site to `./dist/`   |
| `npm run preview`   | Preview your build locally                |

## 🏗️ Project Structure

```
src/
├── content/          # Markdown content (resume)
├── layouts/          # Page layouts
├── pages/            # Route pages
└── styles/           # Global CSS
public/
├── fonts/            # Custom fonts
├── resume/           # Resume assets
└── favicon.svg       # Site icon
```

## 🎨 Design System

- **Typography**: Custom fonts with fallbacks
- **Layout**: Brutalist design with clean blocks
- **Colors**: High contrast black/white theme
- **Accessibility**: WCAG compliant with focus management

## 📱 Features

- Responsive design
- Accessible navigation
- SEO optimized
- Social media meta tags
- Interactive resume sections
- Portfolio placeholders

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built site will be in the `./dist/` directory, ready for deployment.

### Deploy to Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to Vercel
1. Connect your repository
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`

## 🔧 Customization

### Fonts
- Place custom font files in `public/fonts/`
- Update `@font-face` declarations in `src/styles/global.css`

### Resume
- Put your PDF at `public/resume/Brennan-Reilly-Resume.pdf`
- Update the image at `public/resume/Reilly-Brennan-Resume.png`

### Content
- Edit page content in `src/pages/`
- Update resume data in `src/content/resume.md`

## 📊 Performance

- Font preloading for faster rendering
- Optimized images and assets
- Minimal JavaScript
- Efficient CSS with CSS custom properties

## ♿ Accessibility

- Skip navigation links
- Proper ARIA labels
- Keyboard navigation support
- High contrast design
- Screen reader friendly

## 📄 License

MIT License - see LICENSE file for details.
