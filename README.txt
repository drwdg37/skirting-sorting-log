Skirting Sorting Log — PWA v6

- Uses inline onclick handlers for reliable taps/clicks on iPad
- Responsive filter layout + number-favoring keyboard for Lot Number
- Offline-ready via service worker cache
- index.html is the main entry

Deploy (GitHub Pages):
1) Create a repo and upload these files at the root.
2) In Settings → Pages: Deploy from branch (main / root). Save.
3) Visit https://<your-user>.github.io/<repo>/?v=6
4) In Safari: Share → Add to Home Screen.

Updating:
- When you push changes, bump the query string (?v=7) once to refresh the cache.
