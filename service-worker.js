/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c0bd95cbe9f7803ca8b86b50f8d69773"
  },
  {
    "url": "about.html",
    "revision": "0f6fb6ad7f72d344ee5642dc0a777eb8"
  },
  {
    "url": "assets/css/0.styles.3e1d0bd1.css",
    "revision": "9a07c34b7a8e3651488db6f42a90ea23"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9809e03a.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.94f0e6df.js",
    "revision": "ad07cffe71950f62e9c95bf8d55f9703"
  },
  {
    "url": "assets/js/4.7c93cbe1.js",
    "revision": "c8ce8da3c63206228289a95a81157960"
  },
  {
    "url": "assets/js/5.2ac6f6d0.js",
    "revision": "7373376a056d8b62e86df8eeaaa37982"
  },
  {
    "url": "assets/js/app.b161cf7d.js",
    "revision": "1aa0d64a85c7e736a3e11ad92a1780e4"
  },
  {
    "url": "icon.png",
    "revision": "ade9c3fe66fcfb2289be8eddf67094c3"
  },
  {
    "url": "index.html",
    "revision": "34cc6d674855dde759d8bff862d082d6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
