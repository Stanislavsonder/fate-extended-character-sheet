if(!self.define){let e,t={};const r=(r,s)=>(r=new URL(r+".js",s).href,t[r]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=t,document.head.appendChild(e)}else e=r,importScripts(r),t()})).then((()=>{let e=t[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(t[c])return;let a={};const i=e=>r(e,c),d={module:{uri:c},exports:a,require:i};t[c]=Promise.all(s.map((e=>d[e]||i(e)))).then((e=>(n(...e),a)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"char-list"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/fate-extended-character-sheet/css/app.f03c6250.css",revision:null},{url:"/fate-extended-character-sheet/img/CharacterPlaceholder.3efb019b.png",revision:null},{url:"/fate-extended-character-sheet/img/Logo.babbbbb3.png",revision:null},{url:"/fate-extended-character-sheet/img/bubbles.145c7753.svg",revision:null},{url:"/fate-extended-character-sheet/img/bubbles.svg",revision:"df047e8d4427fd95212841f0bb70802d"},{url:"/fate-extended-character-sheet/index.html",revision:"0f691cdadba358e2761efa0660e89e6e"},{url:"/fate-extended-character-sheet/js/app.cd1c7b42.js",revision:null},{url:"/fate-extended-character-sheet/js/chunk-vendors.2a39f095.js",revision:null},{url:"/fate-extended-character-sheet/manifest.json",revision:"011687ed69006b3cffd1924d1d8ab997"},{url:"/fate-extended-character-sheet/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
