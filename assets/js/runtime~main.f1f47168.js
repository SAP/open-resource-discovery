(()=>{"use strict";var e,a,d,r,c,t={},f={};function b(e){var a=f[e];if(void 0!==a)return a.exports;var d=f[e]={id:e,loaded:!1,exports:{}};return t[e].call(d.exports,d,d.exports,b),d.loaded=!0,d.exports}b.m=t,b.c=f,e=[],b.O=(a,d,r,c)=>{if(!d){var t=1/0;for(i=0;i<e.length;i++){for(var[d,r,c]=e[i],f=!0,o=0;o<d.length;o++)(!1&c||t>=c)&&Object.keys(b.O).every((e=>b.O[e](d[o])))?d.splice(o--,1):(f=!1,c<t&&(t=c));if(f){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[d,r,c]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var c=Object.create(null);b.r(c);var t={};a=a||[null,d({}),d([]),d(d)];for(var f=2&r&&e;"object"==typeof f&&!~a.indexOf(f);f=d(f))Object.getOwnPropertyNames(f).forEach((a=>t[a]=()=>e[a]));return t.default=()=>e,b.d(c,t),c},b.d=(e,a)=>{for(var d in a)b.o(a,d)&&!b.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,d)=>(b.f[d](e,a),a)),[])),b.u=e=>"assets/js/"+({66:"972d9d57",272:"49739adf",657:"df60d5ad",1039:"b9324a1b",1144:"8a0a4a95",1569:"7d62b6ad",1719:"571b7163",2138:"1a4e3797",2344:"5de725a4",2543:"3d7d78e6",2977:"59752f04",3361:"c377a04b",3488:"56b1f36f",3919:"0ca0789f",4256:"a9a33a67",4357:"9329c2f4",4671:"6b96b968",4764:"3941bebc",4921:"138e0e15",5397:"651bc23f",5403:"19dee439",5515:"4d94f526",5549:"b46dbca8",5742:"aba21aa0",5878:"c7f444ab",6072:"58ca6d1a",6390:"3ee22aad",6454:"9c56a465",6907:"cbd32073",6928:"87f5c190",7026:"53c8afc8",7098:"a7bd4aaa",7237:"78f7cf16",7342:"48dec6f1",7448:"91aed54b",7510:"4df77889",7739:"794998a9",8137:"bba3f0ec",8401:"17896441",8417:"e333832a",8631:"fe0242b1",8632:"0bd79b54",9048:"a94703ab",9647:"5e95c892",9851:"838e818c"}[e]||e)+"."+{66:"4d32b753",272:"9ebdbf9d",489:"d5e7b2ef",657:"ba9bfed3",1039:"8bbef6f7",1144:"ae221861",1169:"7cc69185",1176:"2307edb8",1245:"8ac9e910",1303:"22c7503a",1331:"36344ec6",1398:"00a8e7fa",1569:"cef2a988",1719:"279a08ed",1946:"adb5464b",2130:"4605f150",2138:"d888d147",2344:"b83a7b07",2376:"aecf4cd0",2453:"36b8755e",2543:"bfbc4555",2548:"e717acc6",2843:"79fbc6c8",2925:"a7c213c3",2977:"c3428cfd",2983:"b1151731",3042:"6723e96c",3068:"15b3e91f",3361:"675ad91f",3488:"837b1584",3626:"c018b406",3706:"32d65b8c",3919:"4d64d2a2",4162:"4b45cf35",4256:"e2a9bd91",4357:"c08ba023",4671:"069e490c",4741:"9383fb6c",4764:"a9f3cd97",4921:"f80a2565",4943:"92df1b83",5397:"a169fffc",5403:"9870c907",5515:"a355a516",5549:"16f4340e",5741:"fcac4706",5742:"c84419df",5878:"282e5268",6072:"059e2938",6390:"20c91695",6420:"1490c5cb",6454:"1faf95b5",6788:"7c830724",6803:"e254f440",6907:"4db224ac",6928:"7abaae7f",7026:"f124f050",7098:"df80b422",7237:"8f3f0743",7342:"8ba2d061",7426:"1c81aebc",7448:"5565ff31",7510:"55b1c68d",7542:"fd038dfd",7739:"71dc1a6b",8055:"ed2953e1",8137:"8a50102e",8337:"7af27dc7",8401:"5852062e",8417:"83a7937a",8478:"a5617451",8631:"3792b35b",8632:"5f5ce77b",8635:"6c5bde8a",8810:"78c5c787",8869:"0af193a1",9048:"f96d3aa4",9647:"61287c7b",9689:"e022b078",9851:"6bc8716f"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},c="@sap/open-resource-discovery:",b.l=(e,a,d,t)=>{if(r[e])r[e].push(a);else{var f,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+d){f=u;break}}f||(o=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,b.nc&&f.setAttribute("nonce",b.nc),f.setAttribute("data-webpack",c+d),f.src=e),r[e]=[a];var s=(a,d)=>{f.onerror=f.onload=null,clearTimeout(l);var c=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),c&&c.forEach((e=>e(d))),a)return a(d)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=s.bind(null,f.onerror),f.onload=s.bind(null,f.onload),o&&document.head.appendChild(f)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/open-resource-discovery/",b.gca=function(e){return e={17896441:"8401","972d9d57":"66","49739adf":"272",df60d5ad:"657",b9324a1b:"1039","8a0a4a95":"1144","7d62b6ad":"1569","571b7163":"1719","1a4e3797":"2138","5de725a4":"2344","3d7d78e6":"2543","59752f04":"2977",c377a04b:"3361","56b1f36f":"3488","0ca0789f":"3919",a9a33a67:"4256","9329c2f4":"4357","6b96b968":"4671","3941bebc":"4764","138e0e15":"4921","651bc23f":"5397","19dee439":"5403","4d94f526":"5515",b46dbca8:"5549",aba21aa0:"5742",c7f444ab:"5878","58ca6d1a":"6072","3ee22aad":"6390","9c56a465":"6454",cbd32073:"6907","87f5c190":"6928","53c8afc8":"7026",a7bd4aaa:"7098","78f7cf16":"7237","48dec6f1":"7342","91aed54b":"7448","4df77889":"7510","794998a9":"7739",bba3f0ec:"8137",e333832a:"8417",fe0242b1:"8631","0bd79b54":"8632",a94703ab:"9048","5e95c892":"9647","838e818c":"9851"}[e]||e,b.p+b.u(e)},(()=>{b.b=document.baseURI||self.location.href;var e={5354:0,1869:0};b.f.j=(a,d)=>{var r=b.o(e,a)?e[a]:void 0;if(0!==r)if(r)d.push(r[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var c=new Promise(((d,c)=>r=e[a]=[d,c]));d.push(r[2]=c);var t=b.p+b.u(a),f=new Error;b.l(t,(d=>{if(b.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var c=d&&("load"===d.type?"missing":d.type),t=d&&d.target&&d.target.src;f.message="Loading chunk "+a+" failed.\n("+c+": "+t+")",f.name="ChunkLoadError",f.type=c,f.request=t,r[1](f)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,d)=>{var r,c,[t,f,o]=d,n=0;if(t.some((a=>0!==e[a]))){for(r in f)b.o(f,r)&&(b.m[r]=f[r]);if(o)var i=o(b)}for(a&&a(d);n<t.length;n++)c=t[n],b.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return b.O(i)},d=self.webpackChunk_sap_open_resource_discovery=self.webpackChunk_sap_open_resource_discovery||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();