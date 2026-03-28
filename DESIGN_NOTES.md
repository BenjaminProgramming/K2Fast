# K2 Fastigheter — Industrial Real Estate UI Redesign

## Design System Implementation

### Color Palette
- **Primary Dark**: `--thunder` (#231f20) — Dark chrome base
- **Secondary Dark**: `--cloud-burst` (#203649) — Deep blue-gray accent
- **Primary CTA**: `--science-blue` (#046bb6) — Electric blue for actions
- **Secondary CTA**: `--lochmara` (#0173c8) — Lighter blue highlight
- **Accent**: `--venice-blue` (#09609f) & `--chathams-blue` (#114a75) — Technical details
- **Text**: `--alto` (#d8d7d7) — Desaturated light gray

### Key Features Implemented

#### 1. **Hero Section**
- Full-bleed, full-viewport hero with desaturated machinery imagery
- Grayscale + contrast enhancement filters (grayscale 100%, contrast 1.1)
- Dark chrome gradient overlay (thunder → cloud-burst)
- Concrete texture pattern overlay (subtle, engineering-style)
- Slow parallax effect (translateY: 50% of scroll speed)
- Bold, uppercase condensed typography
- Two-button CTA layout (primary science-blue, secondary outlined)

#### 2. **Typography & Headlines**
- Robust, heavy-weight fonts (font-weight: 900)
- Uppercase with negative letter-spacing (-0.02em) for condensed appearance
- Line-height: 1.1 for tight, engineered look
- Technical data uses uppercase labels with 0.15em letter-spacing

#### 3. **Scroll Reveal Animations**
- "Weighty" scroll reveals using `revealUp` keyframes (100px translate)
- Cubic-bezier timing (0.4, 0, 0.2, 1) for smooth industrial feel
- Opacity fade-in triggered at viewport thresholds
- Staggered reveal as user scrolls down

#### 4. **Property Card Grid**
- Clean, engineer-focused layout with technical specs
- Grayscale imagery with hover desaturation reduction
- Tech specs in 2-column grid showing:
  - **AREA** (primary)
  - **HYRA** (rental terms)
  - **TRAVERSER** (lift capacity)
  - **SPECIAL FEATURES** (equipment)
- Accent underlines on titles
- Hover effect: card lifts with shadow expansion, image brightens
- Clear "SE DETALJER →" CTA styling

#### 5. **Material & Texture**
- Dark backgrounds (linear gradients #1a1a1a → #0f1419)
- Subtle repeating line pattern (background-image with rgba stripes)
- Desaturated imagery (grayscale filter on all property photos)
- Concrete/industrial aesthetic through color and typography

#### 6. **CTA Buttons**
- **Primary**: Solid science-blue with lochmara hover state
- **Secondary**: Outlined chathams-blue with fill on hover
- Both feature smooth transitions and lift effect on hover
- Uppercase, tight letter-spacing, heavy font-weight

#### 7. **Parallax & Motion**
- Hero background parallax: `transform: translateY(scrollY * 0.5)`
- Smooth easing functions throughout
- Card hover transforms (translateY -20px)
- Button hover transforms (translateY -3px)

#### 8. **Responsive Design**
- Mobile-first approach
- Hero adjusts from 100vh to 80vh on tablets
- Card grid: 4 columns → 2 columns → 1 column
- Tech specs stack single-column on mobile
- Navbar collapses with custom science-blue toggle icon

#### 9. **Details & Polish**
- Navbar transforms on scroll (blurred, darker shadow)
- Gallery modal with blue-tinted controls
- Photo counter in science-blue badge
- Navigation links highlight in science-blue when active
- Form controls with blue focus states
- All interactive elements have smooth transitions

### Files Modified
- `Index.html` — Complete redesign of HTML structure and CSS styling
- Palette.txt — Color definitions (reference only)

### Browser Compatibility
- Uses CSS Grid, Flexbox, CSS Variables
- Backdrop-filter (modern browsers)
- Linear gradients and transforms (universal)
- CSS custom properties for theming

---

**Design Philosophy**: Rugged, engineered, authoritative. Heavy industrial machinery aesthetics meet clean, technical property listings. Every detail reinforces the industrial-real-estate positioning.
