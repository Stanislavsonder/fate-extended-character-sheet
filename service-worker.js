if(!self.define){let e,t={};const r=(r,s)=>(r=new URL(r+".js",s).href,t[r]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=t,document.head.appendChild(e)}else e=r,importScripts(r),t()})).then((()=>{let e=t[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(t[d])return;let a={};const c=e=>r(e,d),i={module:{uri:d},exports:a,require:c};t[d]=Promise.all(s.map((e=>i[e]||c(e)))).then((e=>(n(...e),a)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"char-list"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/fate-extended-character-sheet/css/app.09dfc46a.css",revision:null},{url:"/fate-extended-character-sheet/img/CharacterPlaceholder.3efb019b.png",revision:null},{url:"/fate-extended-character-sheet/img/Logo.babbbbb3.png",revision:null},{url:"/fate-extended-character-sheet/img/bubbles.145c7753.svg",revision:null},{url:"/fate-extended-character-sheet/img/bubbles.svg",revision:"df047e8d4427fd95212841f0bb70802d"},{url:"/fate-extended-character-sheet/index.html",revision:"7007bf2d46e42caa1228fde772249995"},{url:"/fate-extended-character-sheet/js/app.047af8f2.js",revision:null},{url:"/fate-extended-character-sheet/js/chunk-vendors.d912dbf1.js",revision:null},{url:"/fate-extended-character-sheet/manifest.json",revision:"011687ed69006b3cffd1924d1d8ab997"},{url:"/fate-extended-character-sheet/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
