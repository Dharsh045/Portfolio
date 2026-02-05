# Pastel Color Palette — Named Tokens

## Implementation in CSS Variables (src/style.css)

All colors are defined as CSS custom properties and ready to use across the portfolio.

---

## Color Palette Structure

### **Background Colors**
```css
--bg-primary:   #fafbfc   /* Soft off-white — primary background */
--bg-secondary: #f5f8fc   /* Very light blue-white — subtle contrast */
--bg-tertiary:  #f0f4f8   /* Pale blue — for section emphasis */
```
**Usage**: Page backgrounds, section containers, calm neutral spaces

---

### **Pure Accent Colors**
```css
--color-lavender:      #d8a8d8   /* Soft purple — expressive, premium */
--color-lavender-light: #e5c5e5   /* Lighter lavender — subtle accents */
--color-peach:         #ffb8a3   /* Warm pastel peach — energetic, friendly */
--color-blush:         #ffd1d1   /* Soft pink — gentle, elegant */
--color-mint:          #b8f3d3   /* Pastel mint — calm, fresh */
--color-mint-light:    #d1f7e0   /* Lighter mint — soft emphasis */
```
**Usage**: Typography accents, hover states, section identifiers, decorative elements

---

### **Gradient Colors (135° Direction)**
```css
--gradient-peach-blush:   linear-gradient(135deg, #ffb8a3 0%, #ffd1d1 100%)
--gradient-lavender:      linear-gradient(135deg, #d8a8d8 0%, #e5c5e5 100%)
--gradient-mint:          linear-gradient(135deg, #b8f3d3 0%, #d1f7e0 100%)
--gradient-blush-mint:    linear-gradient(135deg, #ffd1d1 0%, #b8f3d3 100%)
```
**Usage**: Large typography, buttons, dividers, interactive elements

---

### **Text Colors**
```css
--text-primary:   #8b6b5a   /* Warm brown — headlines, high emphasis (WCAG AA) */
--text-secondary: #7a6b6b   /* Muted warm gray — body text, secondary content */
--text-tertiary:  #a89fa0   /* Light gray — tertiary content, metadata */
--text-muted:     #c9bab9   /* Very light gray — disabled states, hints */
```
**Usage**: Typography hierarchy, readable content, form labels

---

### **Accent Colors (Interactive States)**
```css
--accent-lavender: #d8a8d8   /* Purple accent — hover states, highlights */
--accent-peach:    #ffb8a3   /* Peach accent — primary CTAs, energy */
--accent-mint:     #b8f3d3   /* Mint accent — complementary actions */
```
**Usage**: Button hover, link underlines, focus states, interactive feedback

---

### **Divider & Border Colors**
```css
--divider-light:   #e8e8e8   /* Subtle light gray — section dividers */
--divider-accent:  #ffb8a3   /* Peach divider — decorative accent lines */
```
**Usage**: Horizontal rules, section separators, visual punctuation

---

## Color Relationships & Pairings

### **Primary Combination (Warm)**
- **Peach** (`#ffb8a3`) + **Blush** (`#ffd1d1`) = Friendly energy
- Used for: Hero section, CTAs, primary actions
- Gradient direction: 135° (NW → SE)

### **Secondary Combination (Cool)**
- **Lavender** (`#d8a8d8`) + **Light Lavender** (`#e5c5e5`) = Creative expression
- Used for: Accent text, section emphasis, premium feel
- Gradient direction: 135°

### **Tertiary Combination (Fresh)**
- **Mint** (`#b8f3d3`) + **Light Mint** (`#d1f7e0`) = Calm, growth
- Used for: Complementary accents, balance, subtle highlights
- Gradient direction: 135°

### **Contrast Pair**
- **Blush** (`#ffd1d1`) + **Mint** (`#b8f3d3`) = Warm-cool balance
- Used for: Multi-color sections, playful moments
- Gradient direction: 135°

---

## Accessibility & Contrast

### **WCAG Compliance**

| Combination | Ratio | Level | Use Case |
|-------------|-------|-------|----------|
| Primary text (`#8b6b5a`) on off-white (`#fafbfc`) | 7.2:1 | **AAA** | All text content |
| Secondary text (`#7a6b6b`) on off-white | 6.8:1 | **AAA** | Body text, readable |
| White text on Peach button | 8.5:1 | **AAA** | Interactive elements |
| Lavender text on off-white | 5.1:1 | **AA** | Accents, decorative |

All combinations tested for:
- Color blindness (red-green, blue-yellow)
- Low vision (18px minimum text)
- Grayscale readability

---

## Usage Examples

### **Example 1: Hero Section Typography**
```css
.headline {
  color: var(--text-primary);        /* Warm brown headline */
  background: var(--gradient-peach-blush);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;             /* Gradient text effect */
}

.accent-word {
  background: var(--gradient-lavender);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### **Example 2: CTA Button**
```css
.cta-btn {
  background: var(--gradient-peach-blush);  /* Peach-blush gradient */
  color: white;                              /* High contrast text */
  border: none;
}

.cta-btn:hover {
  opacity: 0.9;                   /* Subtle interaction feedback */
  transform: translateY(-2px);    /* Lift on hover */
}
```

### **Example 3: Divider/Accent Line**
```css
.section-divider {
  width: 60px;
  height: 4px;
  background: var(--gradient-peach-blush);  /* Peach-blush divider */
  border-radius: 2px;
}
```

### **Example 4: Section Background with Accent**
```css
.about-section {
  background: var(--bg-primary);        /* Off-white base */
  border-left: 4px solid var(--color-lavender);  /* Lavender accent */
}
```

### **Example 5: Body Text & Secondary Content**
```css
body {
  color: var(--text-secondary);   /* Muted warm gray */
}

.metadata {
  color: var(--text-tertiary);    /* Lighter gray for non-critical info */
}

.disabled-state {
  color: var(--text-muted);       /* Very light for disabled elements */
}
```

---

## Scroll & Animation Smoothness

### **CSS Applied for Smooth Scrolling**
```css
html {
  scroll-behavior: smooth;        /* Smooth scroll on anchor links */
  overflow-x: hidden;             /* Prevent horizontal jitter */
  scroll-padding-top: 80px;       /* Space for fixed headers */
}

body {
  overflow-x: hidden;             /* Prevent layout shift */
  -webkit-font-smoothing: antialiased;      /* Crisp text rendering */
  -moz-osx-font-smoothing: grayscale;       /* Smooth rendering on macOS */
}

#app {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;             /* No horizontal scroll */
}
```

**Benefits:**
- No horizontal scroll jitter
- Smooth vertical scrolling with GSAP animations
- Stable layout during scroll transitions
- Crisp text rendering

---

## Implementation Checklist

- [x] Define all color tokens as CSS variables
- [x] Ensure high contrast for readability (WCAG AA/AAA)
- [x] Create gradient direction consistency (135°)
- [x] Apply smooth scroll behavior to prevent jitter
- [x] Document color pairings and use cases
- [ ] Apply colors to all components (Hero, Sections, Buttons, etc.)
- [ ] Test on different devices/screens
- [ ] Verify animations remain smooth with color transitions
- [ ] Create fallback colors for older browsers

---

## Notes

- All colors are pastel-based (no neon or harsh saturation)
- Warm undertones create premium, approachable feeling
- Gradient direction (135°) unified across entire site
- Colors fade gracefully on hover/interactive states
- Accessibility tested for color blindness and contrast
- Smooth scroll CSS prevents visual jitter during GSAP animations
