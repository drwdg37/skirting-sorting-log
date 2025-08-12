Skirting Sorting Log — PWA v8

This build uses the confirmed-working inline-button HTML and includes:
- Expanded alphabetized Reasons (Abraded Grain, Fat Wrinkle, Manure/Urine, Scuff, etc.)
- Responsive layout (Packer / Sorted By / Lot don't collide)
- iPad-friendly Lot input (numeric-favored keyboard, letters allowed)
- Offline caching via service worker (v8)

Deploy (GitHub Pages):
1) Upload the folder contents to your repo root.
2) Settings → Pages → Deploy from branch (main / root).
3) Open: https://<your-user>.github.io/<repo>/?v=8
4) On iPad Safari: Share → Add to Home Screen.

If you update later, bump the query string to ?v=9 to refresh the cache.
