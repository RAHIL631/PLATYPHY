# Specification

## Summary
**Goal:** Add a realistic futuristic dark hero background image to the landing page while preserving the glassmorphism hero panel and ensuring hero text remains clearly readable.

**Planned changes:**
- Generate and add a new static full-screen hero background image asset at `frontend/public/assets/generated/hero-futuristic-dark-bg.dim_1920x1080.png`.
- Update the hero section to render the new image as the primary full-screen background (cover/no-tiling), keeping the existing glassmorphism panel above it and maintaining headline/subtext legibility across viewport sizes.
- Tone/blend existing subtle animated background/parallax overlays so they don’t overpower the new image.
- Centralize the new hero background asset path in `frontend/src/config/assets.ts` and reference it from the hero section.

**User-visible outcome:** The hero section displays a realistic, dark, futuristic background image behind the glassy hero panel, with clear readable text on both desktop and mobile.
