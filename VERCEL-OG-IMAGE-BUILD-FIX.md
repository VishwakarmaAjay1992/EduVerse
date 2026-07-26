# Vercel Open Graph Image Build Fix

## Error

The production build failed while prerendering `/opengraph-image` and `/twitter-image` with:

```text
Invalid background image: "#09090b"
```

## Cause

`src/app/opengraph-image.tsx` used the CSS `background` shorthand with two gradients and a trailing solid colour. The Open Graph image renderer parsed the final colour as another background image layer.

## Fix

The style now uses separate properties:

```tsx
backgroundColor: "#09090b",
backgroundImage:
  "radial-gradient(...), radial-gradient(...)",
```

Because `src/app/twitter-image.tsx` re-exports the same image generator, this one change fixes both metadata image routes.
