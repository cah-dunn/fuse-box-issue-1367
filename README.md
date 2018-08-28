### Reproducing fuse-box issue 1367
1. `npm i`
2. `npm run build`
3. Open `dist/app.js` and see that `cross-fetch/dist/node-polyfill.js` is bundled rather than the expected `cross-fetch/dist/browser-polyfill.js`.