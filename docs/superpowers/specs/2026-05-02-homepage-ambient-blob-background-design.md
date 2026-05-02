# Homepage Ambient Blob Background Design

Date: 2026-05-02

## Goal

Add a dynamic background to the homepage hero that makes the first screen feel warmer and more alive without reducing readability or making the site feel like an effects demo.

## Chosen Direction

Use flowing gradient blobs behind the hero content. The blobs should match the existing warm palette: orange, cream yellow, soft pink, and muted green.

## User Experience

- The hero keeps its current layout, typography, floating icons, and particle canvas.
- Four large translucent blobs sit behind the hero text and slowly drift, scale, and overlap.
- The motion should be subtle and slow so the headline remains the visual priority.
- On mobile, blobs become smaller and slightly less prominent.
- If the visitor has reduced motion enabled, blob animation stops.

## Implementation Scope

### HTML

Add one decorative background container inside `#hero`, before the existing floating icon layer.

Expected structure:

```html
<div class="ambient-bg" aria-hidden="true">
  <span class="ambient-blob blob-one"></span>
  <span class="ambient-blob blob-two"></span>
  <span class="ambient-blob blob-three"></span>
  <span class="ambient-blob blob-four"></span>
</div>
```

### CSS

Add styles for:

- `.ambient-bg` as an absolute full-hero layer behind hero content.
- `.ambient-blob` shared visual treatment: position, border radius, blur, opacity, gradient, and animation.
- Individual blob placement, size, colors, delay, and duration.
- `@keyframes blobFloat` for slow translate and scale changes.
- Mobile adjustments under the existing responsive breakpoint style.
- `prefers-reduced-motion: reduce` to disable blob animation.

### JavaScript

No new JavaScript is required. Existing particle and floating icon behavior stays unchanged.

## Constraints

- Do not remove or rewrite the current particle canvas.
- Keep the feature decorative and non-interactive for now.
- Do not introduce new dependencies.
- Keep implementation contained to `index.html` and `style.css`.

## Acceptance Criteria

- Homepage hero shows visible but subtle moving gradient blobs.
- Hero text remains easy to read on desktop and mobile.
- No horizontal overflow is introduced.
- Reduced-motion users see a static background.
- Existing project cards, particles, and scrolling behavior continue to work.
