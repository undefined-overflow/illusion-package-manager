(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20001e16"],{"0366d":function(t,e,n){},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),c=n("17c2"),o=n("9112");for(var a in i){var u=r[a],f=u&&u.prototype;if(f&&f.forEach!==c)try{o(f,"forEach",c)}catch(s){f.forEach=c}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),c=n("ae40"),o=i("forEach"),a=c("forEach");t.exports=o&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),c=n("2d00"),o=i("species");t.exports=function(t){return c>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),c=n("d039"),o=n("ad6d"),a="toString",u=RegExp.prototype,f=u[a],s=c((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),d=f.name!=a;(s||d)&&r(RegExp.prototype,a,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in u)?o.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"26ae":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("99af");var r=n("2b9b"),i=function(){return{getGameIconUrl:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"".concat(r["b"],"/assets/icons/games/").concat(t,"/").concat(e,".ico")}}}},"2b9b":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return c}));n("99af"),n("d3b7");var r=!1,i=r?"http://localhost:3001":"https://undefined-overflow.github.io/IllusionFakeApi",c=function(t,e){return fetch("".concat(i,"/api/").concat(t),e)}},"2c29":function(t,e,n){"use strict";n("0366d")},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),c=n("7dd0"),o="String Iterator",a=i.set,u=i.getterFor(o);c(String,"String",(function(t){a(this,{type:o,string:String(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,c=n("1dde"),o=n("ae40"),a=c("filter"),u=o("filter");r({target:"Array",proto:!0,forced:!a||!u},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),c=n("9bdd"),o=n("e95a"),a=n("50c4"),u=n("8418"),f=n("35a1");t.exports=function(t){var e,n,s,d,l,b,v=i(t),g="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,y=void 0!==h,O=f(v),j=0;if(y&&(h=r(h,p>2?arguments[2]:void 0,2)),void 0==O||g==Array&&o(O))for(e=a(v.length),n=new g(e);e>j;j++)b=y?h(v[j],j):v[j],u(n,j,b);else for(d=O.call(v),l=d.next,n=new g;!(s=l.call(d)).done;j++)b=y?c(d,h,[s.value,j],!0):s.value,u(n,j,b);return n.length=j,n}},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),c=function(t){return function(e,n){var c,o,a=String(i(e)),u=r(n),f=a.length;return u<0||u>=f?t?"":void 0:(c=a.charCodeAt(u),c<55296||c>56319||u+1===f||(o=a.charCodeAt(u+1))<56320||o>57343?t?a.charAt(u):c:t?a.slice(u,u+2):o-56320+(c-55296<<10)+65536)}};t.exports={codeAt:c(!1),charAt:c(!0)}},"7db0":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").find,c=n("44d2"),o=n("ae40"),a="find",u=!0,f=o(a);a in[]&&Array(1)[a]((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!f},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),c(a)},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),c=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,c(0,n)):t[o]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),c=n("e8b5"),o=n("861d"),a=n("7b0b"),u=n("50c4"),f=n("8418"),s=n("65f0"),d=n("1dde"),l=n("b622"),b=n("2d00"),v=l("isConcatSpreadable"),g=9007199254740991,p="Maximum allowed index exceeded",h=b>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=d("concat"),O=function(t){if(!o(t))return!1;var e=t[v];return void 0!==e?!!e:c(t)},j=!h||!y;r({target:"Array",proto:!0,forced:j},{concat:function(t){var e,n,r,i,c,o=a(this),d=s(o,0),l=0;for(e=-1,r=arguments.length;e<r;e++)if(c=-1===e?o:arguments[e],O(c)){if(i=u(c.length),l+i>g)throw TypeError(p);for(n=0;n<i;n++,l++)n in c&&f(d,l,c[n])}else{if(l>=g)throw TypeError(p);f(d,l++,c)}return d.length=l,d}})},"9b4b":function(t,e,n){},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),c=n("1c7e"),o=!c((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:i})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),c=n("5135"),o=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,e){if(c(a,t))return a[t];e||(e={});var n=[][t],f=!!c(e,"ACCESSORS")&&e.ACCESSORS,s=c(e,0)?e[0]:u,d=c(e,1)?e[1]:void 0;return a[t]=!!n&&!i((function(){if(f&&!r)return!0;var t={length:-1};f?o(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,s,d)}))}},aec1:function(t,e,n){"use strict";n("9b4b")},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,c=Function.prototype,o=c.toString,a=/^\s*function ([^ (]*)/,u="name";r&&!(u in c)&&i(c,u,{configurable:!0,get:function(){try{return o.call(this).match(a)[1]}catch(t){return""}}})},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),c=n("df75"),o=n("d039"),a=o((function(){c(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return c(i(t))}})},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),n("a630"),n("fb6a"),n("b0c0"),n("25f0");function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function c(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,c=function(){};return{s:c,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,o=t},f:function(){try{a||null==n["return"]||n["return"]()}finally{if(u)throw o}}}}},d28b:function(t,e,n){var r=n("746f");r("iterator")},d41a:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),i=Object(r["L"])("data-v-200b6a4a");Object(r["y"])("data-v-200b6a4a");var c={class:"plugins"},o={class:"plugin-description"},a={class:"plugin-header"},u={class:"name"},f={key:0,class:"version"};Object(r["w"])();var s=i((function(t,e,n,i,s,d){return Object(r["v"])(),Object(r["f"])("section",c,[(Object(r["v"])(!0),Object(r["f"])(r["a"],null,Object(r["B"])(t.plugins,(function(e){return Object(r["v"])(),Object(r["f"])("div",{class:"plugin",key:e.guid},[Object(r["i"])("div",o,Object(r["F"])(t.t("plugins.".concat(e.guid,".description"))),1),Object(r["i"])("header",a,[Object(r["i"])("div",u,Object(r["F"])(t.t("plugins.".concat(e.guid,".name"))),1),e.installed?(Object(r["v"])(),Object(r["f"])("div",f,Object(r["F"])(e.version),1)):(Object(r["v"])(),Object(r["f"])("div",{key:1,class:"install",onClick:function(n){return t.install(e)}},"install",8,["onClick"]))])])})),128))])})),d=(n("7db0"),n("d81d"),n("5530")),l=n("b85c"),b=(n("96cf"),n("1da1")),v=n("ab42"),g=n("5fa9"),p=n("26ae"),h=n("2b9b"),y=function(t){return Object(h["a"])("plugins/games/".concat(t,".json")).then((function(t){return t.json()}))},O=Object(r["k"])({props:{guid:{required:!0,type:String}},methods:{install:function(t){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(g["a"])(t.guid,e.guid);case 2:e.mark(t.guid,!0);case 3:case"end":return n.stop()}}),n)})))()},mark:function(t,e){var n=this.plugins.find((function(e){return e.guid==t}));n.installed=e;var r,i=Object(l["a"])(n.dependencies);try{for(i.s();!(r=i.n()).done;){var c=r.value;this.mark(c,e)}}catch(o){i.e(o)}finally{i.f()}}},setup:function(t){var e=Object(r["A"])([]);return Object(r["t"])(Object(b["a"])(regeneratorRuntime.mark((function n(){var r,i,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,y(t.guid);case 2:return e.value=n.sent.map((function(t){return Object(d["a"])(Object(d["a"])({},t),{},{installed:!1,version:"0"})})),n.t0=l["a"],n.next=6,Object(g["b"])(t.guid);case 6:n.t1=n.sent,r=(0,n.t0)(n.t1);try{for(c=function(){var t=i.value,n=e.value.find((function(e){return e.guid==t.guid}));n.installed=!0,n.version=t.version},r.s();!(i=r.n()).done;)c()}catch(o){r.e(o)}finally{r.f()}case 9:case"end":return n.stop()}}),n)})))),Object(d["a"])(Object(d["a"])({plugins:e},Object(p["a"])()),Object(v["b"])())}});n("2c29"),n("aec1");O.render=s,O.__scopeId="data-v-200b6a4a";e["default"]=O},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,c=n("1dde"),o=n("ae40"),a=c("map"),u=o("map");r({target:"Array",proto:!0,forced:!a||!u},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),c=n("56ef"),o=n("fc6a"),a=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),i=a.f,f=c(r),s={},d=0;while(f.length>d)n=i(r,e=f[d++]),void 0!==n&&u(s,e,n);return s}})},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),c=n("e260"),o=n("9112"),a=n("b622"),u=a("iterator"),f=a("toStringTag"),s=c.values;for(var d in i){var l=r[d],b=l&&l.prototype;if(b){if(b[u]!==s)try{o(b,u,s)}catch(g){b[u]=s}if(b[f]||o(b,f,d),i[d])for(var v in c)if(b[v]!==c[v])try{o(b,v,c[v])}catch(g){b[v]=c[v]}}}},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),c=n("fc6a"),o=n("06cf").f,a=n("83ab"),u=i((function(){o(1)})),f=!a||u;r({target:"Object",stat:!0,forced:f,sham:!a},{getOwnPropertyDescriptor:function(t,e){return o(c(t),e)}})},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),c=n("e8b5"),o=n("23cb"),a=n("50c4"),u=n("fc6a"),f=n("8418"),s=n("b622"),d=n("1dde"),l=n("ae40"),b=d("slice"),v=l("slice",{ACCESSORS:!0,0:0,1:2}),g=s("species"),p=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!b||!v},{slice:function(t,e){var n,r,s,d=u(this),l=a(d.length),b=o(t,l),v=o(void 0===e?l:e,l);if(c(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?i(n)&&(n=n[g],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(d,b,v);for(r=new(void 0===n?Array:n)(h(v-b,0)),s=0;b<v;b++,s++)b in d&&f(r,s,d[b]);return r.length=s,r}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-20001e16.41911b7a.js.map