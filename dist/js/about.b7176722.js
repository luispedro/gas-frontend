(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),i=n("2d00"),l=a("species");e.exports=function(e){return i>=51||!r((function(){var t=[],n=t.constructor={};return n[l]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").filter,i=n("1dde"),l=n("ae40"),c=i("filter"),o=l("filter");r({target:"Array",proto:!0,forced:!c||!o},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(e,t,n){var r=n("861d"),a=n("e8b5"),i=n("b622"),l=i("species");e.exports=function(e,t){var n;return a(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[l],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"841c":function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),i=n("1d80"),l=n("129f"),c=n("14c3");r("search",1,(function(e,t,n){return[function(t){var n=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=a(e),o=String(this),s=i.lastIndex;l(s,0)||(i.lastIndex=0);var u=c(i,o);return l(i.lastIndex,s)||(i.lastIndex=s),null===u?-1:u.index}]}))},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,l=String.prototype.replace,c=i,o=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=o||u||s;d&&(c=function(e){var t,n,a,c,d=this,f=s&&d.sticky,p=r.call(d),h=d.source,g=0,v=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,g++),n=new RegExp("^(?:"+h+")",p)),u&&(n=new RegExp("^"+h+"$(?!\\s)",p)),o&&(t=d.lastIndex),a=i.call(f?n:d,v),f?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:o&&a&&(d.lastIndex=d.global?a.index+a[0].length:t),u&&a&&a.length>1&&l.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),e.exports=c},"9f7f":function(e,t,n){"use strict";var r=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae40:function(e,t,n){var r=n("83ab"),a=n("d039"),i=n("5135"),l=Object.defineProperty,c={},o=function(e){throw e};e.exports=function(e,t){if(i(c,e))return c[e];t||(t={});var n=[][e],s=!!i(t,"ACCESSORS")&&t.ACCESSORS,u=i(t,0)?t[0]:o,d=i(t,1)?t[1]:void 0;return c[e]=!!n&&!a((function(){if(s&&!r)return!0;var e={length:-1};s?l(e,1,{enumerable:!0,get:o}):e[1]=1,n.call(e,u,d)}))}},b727:function(e,t,n){var r=n("0366"),a=n("44ad"),i=n("7b0b"),l=n("50c4"),c=n("65f0"),o=[].push,s=function(e){var t=1==e,n=2==e,s=3==e,u=4==e,d=6==e,f=5==e||d;return function(p,h,g,v){for(var x,m,b=i(p),y=a(b),I=r(h,g,3),_=l(y.length),S=0,E=v||c,w=t?E(p,_):n?E(p,0):void 0;_>S;S++)if((f||S in y)&&(x=y[S],m=I(x,S,b),e))if(t)w[S]=m;else if(m)switch(e){case 3:return!0;case 5:return x;case 6:return S;case 2:o.call(w,x)}else if(u)return!1;return d?-1:s||u?u:w}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},b8fa:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"contact"}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("h1",[e._v("This is an contact page")])])],1)},a=[],i=n("2877"),l={},c=Object(i["a"])(l,r,a,!1,null,null,null);t["default"]=c.exports},baba:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Blastp"}})},a=[],i={name:"Blastp",data:function(){return{}},methods:{}},l=i,c=n("2877"),o=Object(c["a"])(l,r,a,!1,null,null,null);t["default"]=o.exports},bb51:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Home"}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-image",{staticStyle:{width:"25%"},attrs:{src:e.url,lazy:""}})],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("h1",[e._v("Welecome to Global AMP Survey database (GAS).")])]),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{type:"flex",justify:"middle"}},[n("el-card",{attrs:{shadow:"hover"}},[n("div",{attrs:{slot:"header"},slot:"header"},[e._v(" About GAS ")]),n("div",[n("p",[e._v("Blah, blah, blah...")])])])],1)],1)],1)},a=[],i={name:"Home",data:function(){return{url:n("cf05")}}},l=i,c=n("2877"),o=Object(c["a"])(l,r,a,!1,null,null,null);t["default"]=o.exports},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),l=n("9263"),c=n("9112"),o=i("species"),s=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var h=i(e),g=!a((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),v=g&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!g||!v||"replace"===e&&(!s||!u||f)||"split"===e&&!p){var x=/./[h],m=n(h,""[e],(function(e,t,n,r,a){return t.exec===l?g&&!a?{done:!0,value:x.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=m[0],y=m[1];r(String.prototype,e,b),r(RegExp.prototype,h,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}d&&c(RegExp.prototype[h],"sham",!0)}},de12:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"AMP"}},[n("el-row",{attrs:{gutter:24,type:"flex",justify:"center"}},[n("el-col",{attrs:{span:4}},[n("h3",[e._v("Search Filter")]),n("el-button",{attrs:{size:"mini",type:e.type,loading:e.searchLoading,icon:"el-icon-search"},on:{click:e.filter}},[e._v(" Do Search ")]),n("el-button",{attrs:{size:"mini",circle:"",loading:e.searchLoading,icon:"el-icon-refresh"},on:{click:e.reset}}),n("el-divider"),n("h4",[e._v("AMP ID")]),n("el-input",{attrs:{maxlength:16,"show-word-limit":""},model:{value:e.ampId,callback:function(t){e.ampId=t},expression:"ampId"}}),n("el-divider"),n("h4",[e._v("Family ID")]),n("el-input",{attrs:{maxlength:16,"show-word-limit":""},model:{value:e.familyId,callback:function(t){e.familyId=t},expression:"familyId"}}),n("el-divider"),n("h4",[e._v("Sequence")]),n("el-input",{attrs:{type:"textarea",maxlength:255,"show-word-limit":"",rows:3,resize:"none"},model:{value:e.sequence,callback:function(t){e.sequence=t},expression:"sequence"}}),n("el-divider"),n("h4",[e._v("Sequence Length")]),e._v(" "+e._s(e.length[0])+"-"+e._s(e.length[1])+" "),n("el-slider",{attrs:{min:1,max:100,step:1,range:""},model:{value:e.length,callback:function(t){e.length=t},expression:"length"}}),n("el-divider"),n("h4",[e._v("pI Range")]),e._v(" "+e._s(e.pI[0])+"-"+e._s(e.pI[1])+" "),n("el-slider",{attrs:{min:0,max:15,step:.1,range:""},model:{value:e.pI,callback:function(t){e.pI=t},expression:"pI"}}),n("el-divider"),n("h4",[e._v("Charge Range")]),e._v(" "+e._s(e.charge[0])+"-"+e._s(e.charge[1])+" "),n("el-slider",{attrs:{min:-50,max:50,step:1,range:""},model:{value:e.charge,callback:function(t){e.charge=t},expression:"charge"}}),n("el-divider"),n("el-button",{attrs:{size:"mini",type:e.type,loading:e.searchLoading,icon:"el-icon-search"},on:{click:e.filter}},[e._v(" Do Search ")]),n("el-button",{attrs:{size:"mini",circle:"",loading:e.searchLoading,icon:"el-icon-refresh"},on:{click:e.reset}})],1),n("el-col",{attrs:{span:18}},[n("el-pagination",{staticStyle:{"margin-bottom":"18px"},attrs:{background:"","page-size":e.pageSize,total:e.count,"current-page":e.currentPage,layout:"total, sizes, prev, next","page-sizes":[10,20,30]},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{"element-loading-spinner":"el-icon-loading",data:e.tableData,stripe:"",border:"","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"AMP_ID",label:"AMP ID"}}),n("el-table-column",{attrs:{prop:"Sequence",label:"Sequence"}}),n("el-table-column",{attrs:{prop:"pI",label:"pI"}}),n("el-table-column",{attrs:{prop:"charge",label:"charge"}}),n("el-table-column",{attrs:{prop:"Family_ID",label:"Family ID"}})],1)],1)],1)],1)},a=[],i=(n("4de4"),n("ac1f"),n("841c"),{name:"AMP",data:function(){return{count:0,pageSize:10,currentPage:1,tableData:[],tableLoading:!1,type:"primary",searchLoading:!1,ampId:"",familyId:"",sequence:"",length:[1,255],pI:[0,15],charge:[-50,50]}},created:function(){this.tableLoading=!0,this.search()},methods:{handleSizeChange:function(){this.tableLoading=!0,this.search()},handleCurrentChange:function(){this.tableLoading=!0,this.search()},filter:function(){this.type="danger",this.searchLoading=!0,this.tableLoading=!0,this.search()},reset:function(){this.ampId="",this.sequence="",this.length=[1,255],this.pI=[0,15],this.charge=[-50,50],this.filter()},search:function(){var e=this;this.axios.get("/amp/index",{params:{pageSize:this.pageSize,currentPage:this.currentPage,ampId:this.ampId,familyId:this.familyId,sequence:this.sequence,minLength:this.length[0],maxLength:this.length[1],minpI:this.pI[0],maxpI:this.pI[1],minCharge:this.charge[0],maxCharge:this.charge[1]}}).then((function(t){e.count=t.data["count"],e.tableData=t.data["AMP"],e.type="primary",e.searchLoading=!1,e.tableLoading=!1})).catch((function(e){console.log(e)}))}}}),l=i,c=n("2877"),o=Object(c["a"])(l,r,a,!1,null,null,null);t["default"]=o.exports},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=about.b7176722.js.map