(function(e){function t(t){for(var r,i,l=t[0],u=t[1],s=t[2],c=0,p=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f9effba7"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var s=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5c96"),o=n.n(a),i=(n("f689"),n("b2d6")),l=n.n(i),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("el-container",[n("el-header",{attrs:{height:"120px"}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:22,type:"flex",justify:"middle"}},[n("el-menu",{attrs:{mode:"horizontal","default-active":e.activeIndex,router:!0}},[n("el-menu-item",[n("el-image",{staticStyle:{height:"54px",width:"54px"},attrs:{src:e.url,lazy:""}})],1),n("el-menu-item",{attrs:{index:"/"}},[e._v(" Global AMP Survey database (GAS) ")]),n("el-menu-item",{attrs:{index:"home"}},[e._v("HOME")]),n("el-submenu",{attrs:{index:"browse"}},[n("template",{slot:"title"},[e._v("Browse")]),n("el-menu-item",{attrs:{index:"amps"}},[e._v("AMPs")]),n("el-menu-item",{attrs:{index:"families"}},[e._v("Families")]),n("el-menu-item",{attrs:{index:"environment"}},[e._v("Environment")])],2),n("el-submenu",{attrs:{index:"tools"}},[n("template",{slot:"title"},[e._v("Tools")]),n("el-menu-item",{attrs:{index:"blastp"}},[e._v("Blastp")]),n("el-menu-item",{attrs:{index:"hmm"}},[e._v("HMM")]),n("el-menu-item",{attrs:{index:"macrel"}},[e._v("Macrel")])],2),n("el-menu-item",{attrs:{index:"downloads"}},[e._v("Downloads")]),n("el-menu-item",{attrs:{index:"contact"}},[e._v("Contact")])],1)],1)],1)],1),n("el-main",[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:20,type:"flex",justify:"middle"}},[n("router-view")],1)],1)],1),n("el-footer",{attrs:{height:"120px"}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:22,type:"flex",justify:"top"}},[n("el-divider"),e._v(" Powered by "),n("el-link",{attrs:{href:"https://vuejs.org/index.html",type:"success"}},[e._v("Vue.js")]),n("el-divider",{attrs:{direction:"vertical"}}),n("el-link",{attrs:{href:"https://element.eleme.cn/#/en-US",type:"primary"}},[e._v("Element")]),n("el-divider",{attrs:{direction:"vertical"}}),n("el-link",{attrs:{href:"https://www.codeigniter.com/",type:"danger"}},[e._v("Codeigniter")]),e._v(" . ")],1)],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:22,type:"flex",justify:"bottom"}},[e._v(" ©2020-"+e._s(e.year)+" "),n("el-link",{attrs:{href:"https://www.fudan.edu.cn/",type:"warning"}},[e._v("Fudan University")]),e._v(" All Rights Reserved. ")],1)],1)],1)],1)],1)},s=[],c={name:"app",data:function(){return{activeIndex:"home",url:n("cf05"),year:0}},created:function(){this.getYear()},methods:{getYear:function(){this.year=(new Date).getFullYear()}}},f=c,p=n("2877"),d=Object(p["a"])(f,u,s,!1,null,null,null),m=d.exports,v=(n("d3b7"),n("8c4f"));r["default"].use(v["a"]);var h=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/home",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}},{path:"/blastp",name:"Blastp",component:function(){return n.e("about").then(n.bind(null,"baba"))}},{path:"/contact",name:"Contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}}],b=new v["a"]({routes:h}),y=b,x=n("2f62");r["default"].use(x["a"]);var g=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),w=n("bc3a"),_=n.n(w),j=n("a7fe"),O=n.n(j);r["default"].config.productionTip=!1,r["default"].use(o.a,{locale:l.a}),r["default"].use(O.a,_.a),_.a.defaults.baseURL="http://106.12.47.33/gas/index.php",new r["default"]({router:y,store:g,render:function(e){return e(m)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.6885347c.png"},f689:function(e,t,n){}});
//# sourceMappingURL=app.f4c724a7.js.map