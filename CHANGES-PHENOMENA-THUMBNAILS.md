# Phenomena Thumbnail Upgrade

## Added

- 25 custom landscape thumbnails, one for every phenomenon.
- Optimized WebP files at 1200 × 720 pixels.
- Predictable image paths under `public/images/phenomena/<slug>.webp`.
- New image-based `PhenomenonArt` component using `next/image`.
- Responsive image sizing and subtle hover treatment on directory cards.
- Each phenomenon detail page now uses its thumbnail as the hero image.
- Open Graph and Twitter metadata now use each phenomenon's matching thumbnail.
- The phenomena landing hero uses the aurora artwork.

## Files changed

- `src/components/phenomena/phenomenon-art.tsx`
- `src/components/phenomena/phenomena-directory.tsx`
- `src/app/phenomena/page.tsx`
- `src/app/phenomena/[slug]/page.tsx`
- `public/images/phenomena/*.webp`
