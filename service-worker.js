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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "f517137ccdc1f9cfa3b1b4d1ba12518c"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.cd65641d.css",
    "revision": "591482a3f1701ec351bbc48cd5f9c7d7"
  },
  {
    "url": "assets/img/anno_model.16452301.png",
    "revision": "16452301f77b0bed3281a1d5598f4e0f"
  },
  {
    "url": "assets/img/pic1.8141d68a.png",
    "revision": "8141d68ae225c445332fb6ee8dc6e621"
  },
  {
    "url": "assets/img/pic2.f2f5c710.png",
    "revision": "f2f5c710c52392ad4fb37b7f4a7c91b2"
  },
  {
    "url": "assets/img/pic3.cd46c0e0.png",
    "revision": "cd46c0e0860ab569a314d6853a141a8b"
  },
  {
    "url": "assets/img/pic4.8cb7a0a0.png",
    "revision": "8cb7a0a03936f6562c8a6f93d43e9d0d"
  },
  {
    "url": "assets/img/pic5.e3e67322.png",
    "revision": "e3e6732292f98d243d2d6f85447e0d10"
  },
  {
    "url": "assets/img/pic6.5846886a.png",
    "revision": "5846886a1ad3f64b8b5b0da41d0e4600"
  },
  {
    "url": "assets/img/pic7.203d3f30.png",
    "revision": "203d3f30d330958bda27d39fbebe8d75"
  },
  {
    "url": "assets/img/pic8.13f9c5b4.png",
    "revision": "13f9c5b49456ac7b5427e2ed158097b8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.43ba3855.js",
    "revision": "2a661ff18e7e4c6ec6e7a049738c618a"
  },
  {
    "url": "assets/js/11.a0617aa2.js",
    "revision": "18b2203edb8479fbc568a48642274f19"
  },
  {
    "url": "assets/js/12.00eab8cf.js",
    "revision": "7b455cd90a109cdab342841d3f4c412d"
  },
  {
    "url": "assets/js/13.128af3c3.js",
    "revision": "2bcda0eed04b237576b58126c870a5ca"
  },
  {
    "url": "assets/js/14.8011a016.js",
    "revision": "b12cd5952cd9bb0dd556c441131ed524"
  },
  {
    "url": "assets/js/15.da767f70.js",
    "revision": "76967d1804630746db20807ae134542e"
  },
  {
    "url": "assets/js/16.f7431d99.js",
    "revision": "212d9b4bc797a5cd8b18d0d27266f4b9"
  },
  {
    "url": "assets/js/17.b4f56235.js",
    "revision": "90023e0d332b48850ab9c0334edbd498"
  },
  {
    "url": "assets/js/18.8672c05e.js",
    "revision": "9acd35d5499532c218165c137e9baf22"
  },
  {
    "url": "assets/js/19.deaccae6.js",
    "revision": "a0fdc7ae09a378aff5a032106010b809"
  },
  {
    "url": "assets/js/2.c4597ded.js",
    "revision": "1003456c07c40be6bc77337976162cde"
  },
  {
    "url": "assets/js/20.acdd00f5.js",
    "revision": "26545f419ae70720f451f11528f6638b"
  },
  {
    "url": "assets/js/21.8a533c1a.js",
    "revision": "9649a406097b9d8cd4abb5abe0e54a7a"
  },
  {
    "url": "assets/js/22.80f803bd.js",
    "revision": "b4507e1fad99e42b7757dd9ef94932a3"
  },
  {
    "url": "assets/js/23.f2dee969.js",
    "revision": "883f5a0ec37d34db1ab3b4fa63be20d4"
  },
  {
    "url": "assets/js/24.06bc1d70.js",
    "revision": "9a996a4b1e9d6e5c05cd8edbdcf30937"
  },
  {
    "url": "assets/js/26.f8ca1b3b.js",
    "revision": "01a2e3734cc0988ca4494406b0a6a14d"
  },
  {
    "url": "assets/js/3.2d98650d.js",
    "revision": "c90daecd37f8c885ab8af96efe63cad1"
  },
  {
    "url": "assets/js/4.5ec120db.js",
    "revision": "6511172cd139c40713bd9c3a5581e1a6"
  },
  {
    "url": "assets/js/5.e8944629.js",
    "revision": "c921535b04ad3d7b639b58aae809056f"
  },
  {
    "url": "assets/js/6.a00b5742.js",
    "revision": "25c021a33e15026575a4992f466203b1"
  },
  {
    "url": "assets/js/7.26aae69e.js",
    "revision": "ef55f87b587e31ff09677acf4018e8bb"
  },
  {
    "url": "assets/js/8.c914c83d.js",
    "revision": "4d9c60f1951c1fe4d6adc0e06796c5d8"
  },
  {
    "url": "assets/js/9.0fed8d72.js",
    "revision": "3e59d9e9befc0ff67a64266d29fe1a41"
  },
  {
    "url": "assets/js/app.692b94b7.js",
    "revision": "ab4c8773db7f98ff9cd08f8f4284732f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ae394bc2b533bf8bd726c0586e1d8f17"
  },
  {
    "url": "design/index.html",
    "revision": "47cef7b64a986258eb5351ca5ee7aec6"
  },
  {
    "url": "index.html",
    "revision": "5fb7d98026a97fcc9c816fc088142e79"
  },
  {
    "url": "intro/index.html",
    "revision": "3b9b434171364d702b5bedeba7f995bb"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "0543bfe61aa4c6a403741a070ff4853e"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f27fce1949d6a60946f0de72351ca87d"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "1d1c24816edf088fbb271f8b2d64416a"
  },
  {
    "url": "software/index.html",
    "revision": "b1e5f4bd56e83f5b380b8c862d14d57b"
  },
  {
    "url": "test/index.html",
    "revision": "d12a28036d7f3c58ecc1d9d8c6f18416"
  },
  {
    "url": "use cases/index.html",
    "revision": "25e39bf9b3784e15fb34073b769ca8f4"
  }
].concat(self.__precacheManifest || []);
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
