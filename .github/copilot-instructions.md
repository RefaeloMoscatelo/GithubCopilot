
# Copilot Instructions for AI Agents

## Project Overview
This codebase is a **static HTML/CSS site** for documenting GitHub Copilot training workflows. There is no build process, backend, or JavaScript—only semantic HTML and presentational CSS.

## Architecture & Key Patterns

- **HTML Structure** ([index.html](index.html))
  - Hebrew language, RTL layout (`lang="he" dir="rtl"`)
  - Content organized by training routines (daily, weekly, monthly)
  - Semantic markup: use `<section>`, `<ol>`, `<ul>`, `<table>` for structure
  - Example: Each training topic is wrapped in a `<section>` with `<h3>` and lists

- **CSS Styling** ([styles.css](styles.css), [components.css](components.css))
  - Modern gradients, blue accents (#0066ff, #0055cc)
  - Typography: Poppins for headings, Inter for body
    - `h1`: 56px, gradient text
    - `h2`: 38px
    - `h3`: 26px
    - Body: 16px, 1.7 line-height
  - Box shadows: `0 4px 20px rgba(0, 51, 102, 0.08)`
  - Hover: Enhanced shadow on `section:hover`
  - RTL-aware spacing: Use `margin-left` for RTL context

## Developer Practices

- **Content Edits**
  - Always preserve RTL (`dir="rtl"`, `lang="he"`)
  - Use semantic HTML elements, avoid generic `<div>`
  - Ensure Hebrew text renders correctly

- **Style Edits**
  - Use only palette colors: #0066ff, #0055cc, #475569, #334155, #1a202c
  - Spacing: 16px units, 8px increments
  - Border radius: 16px for cards/sections
  - Fonts: Load Inter and Poppins via Google Fonts in `<head>`

- **External Dependencies**
  - No JavaScript—site is fully static
  - Images: Only JPEGs in [Pics/](Pics/) (filename includes date metadata)

## Common Tasks & Patterns

- **Add Training Content**: Wrap in `<section>`, use `<h3>`, `<ol>`, `<li>`
- **Adjust Colors**: Gradients use 135deg; update both stops for consistency
- **Typography**: Never mix fonts; Inter for body, Poppins for headings
- **Responsive**: No explicit breakpoints; all units absolute

## Key Files & Directories

- [index.html](index.html): Main content, semantic structure
- [styles.css](styles.css): Global styles, gradients, typography
- [components.css](components.css): Additional style overrides/components
- [Pics/](Pics/): Image assets (JPEG only)

---
**Last Updated**: February 2026 | **Scope**: Static Copilot training documentation site
