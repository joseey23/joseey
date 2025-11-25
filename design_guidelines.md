# Personal Portfolio Design Guidelines - Joseph Maruria

## Design Approach
**System**: Material Design principles with modern web aesthetics, prioritizing clarity and professionalism for a software developer portfolio.

## Typography System
- **Primary Font**: Inter (Google Fonts)
- **Headings**: 
  - H1 (Name): 4xl (2.25rem), font-weight: 700
  - H2 (Section titles): 3xl (1.875rem), font-weight: 600
  - H3 (Project/Card titles): xl (1.25rem), font-weight: 600
- **Body**: Base (1rem), font-weight: 400, line-height: 1.6
- **Tagline**: lg (1.125rem), font-weight: 300

## Layout & Spacing System
- **Container**: max-width: 1200px, centered with px-6 (mobile), px-8 (desktop)
- **Section Padding**: py-16 (mobile), py-24 (desktop)
- **Spacing Units**: Tailwind scale of 4, 6, 8, 12, 16 for consistent rhythm
- **Grid Gaps**: gap-6 (mobile), gap-8 (desktop)

## Color Palette
- **Primary Accent**: #00A3FF
- **Text Primary**: #1a1a1a
- **Text Secondary**: #6b7280
- **Background**: #ffffff
- **Card Background**: #f9fafb
- **Borders**: #e5e7eb

## Component Library

### Navigation
- Fixed transparent header becoming solid white on scroll
- Logo/name on left, navigation links on right
- Smooth scroll to sections on click
- Mobile: Hamburger menu transforming to close icon

### Hero Section
- Full viewport height (min-h-screen)
- Large hero image: Professional workspace or coding environment with gradient overlay (linear-gradient from transparent to rgba(0,0,0,0.3))
- Center-aligned content with name, tagline, and CTA
- CTA button with blurred background (backdrop-filter: blur(12px), background: rgba(255,255,255,0.2), border: 1px solid rgba(255,255,255,0.3))
- Floating scroll indicator at bottom

### About Me Section
- Two-column layout (desktop): Profile image left (40%), content right (60%)
- Single column (mobile): Image top, stacked content
- Profile image: Circular, 300x300px with subtle border
- Skills as pill-shaped badges with light background and accent border
- Personal introduction in 2-3 paragraphs with comfortable line-height

### Projects Section
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Project cards with:
  - Thumbnail placeholder (16:9 ratio, 400x225px)
  - White background with shadow on hover
  - Title, 2-line description
  - Button group: "Live Demo" (primary filled) + "GitHub" (outline)
  - Rounded corners (border-radius: 12px)

### Skills Section
- Three category columns: Frontend, Backend, Tools
- Each skill with icon + label in vertical card layout
- Icons: 48x48px from Heroicons or Font Awesome
- Grid: 4-5 items per column
- Subtle hover lift effect on cards

### Contact Section
- Two-column layout (desktop): Form (60%), social links sidebar (40%)
- Form styling:
  - Input fields with border, padding: 12px 16px
  - Focus state: border color changes to accent
  - Large textarea (min-height: 150px)
  - Submit button: full accent color, white text
- Social icons: 40x40px, circular backgrounds with accent color on hover

## Animations
- **Scroll Animations**: Fade-up on section entry (50px translate, 0.6s ease-out)
- **Hover States**: 
  - Cards: translateY(-4px) + shadow increase
  - Buttons: 0.2s color transition
  - Social icons: scale(1.1)
- **Page Load**: Hero content fade-in with 0.8s delay

## Images

### Hero Section
- **Large Hero Image**: Professional workspace showing a developer's desk with dual monitors, clean setup, natural lighting. Alternative: Abstract technology pattern with code snippets or geometric shapes. Size: 1920x1080px minimum, positioned as background-size: cover
- Apply gradient overlay for text readability

### About Me Section
- **Profile Photo**: Professional headshot, circular crop, 600x600px minimum for retina displays

### Projects Section
- **Project Thumbnails**: 6 placeholder images representing different project types (dashboard, e-commerce, mobile app, etc.). Size: 800x450px each, maintaining 16:9 aspect ratio

## Responsive Breakpoints
- Mobile: < 768px (single column layouts)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full layouts)

## Accessibility
- All interactive elements have focus states with 2px accent outline
- Form labels properly associated with inputs
- Sufficient color contrast (4.5:1 minimum)
- Alt text for all images
- Semantic HTML structure (nav, main, section, footer)