(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f91e540"],{"25f0":function(t,n,e){"use strict";var r=e("6eeb"),i=e("825a"),a=e("d039"),c=e("ad6d"),o="toString",u=RegExp.prototype,f=u[o],s=a((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),d=f.name!=o;(s||d)&&r(RegExp.prototype,o,(function(){var t=i(this),n=String(t.source),e=t.flags,r=String(void 0===e&&t instanceof RegExp&&!("flags"in u)?c.call(t):e);return"/"+n+"/"+r}),{unsafe:!0})},"26ae":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e("99af");var r=e("2b9b"),i=function(){return{getGameIconUrl:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return"".concat(r["b"],"/assets/icons/games/").concat(t,"/").concat(n,".ico")}}}},"3ca3":function(t,n,e){"use strict";var r=e("6547").charAt,i=e("69f3"),a=e("7dd0"),c="String Iterator",o=i.set,u=i.getterFor(c);a(String,"String",(function(t){o(this,{type:c,string:String(t),index:0})}),(function(){var t,n=u(this),e=n.string,i=n.index;return i>=e.length?{value:void 0,done:!0}:(t=r(e,i),n.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,n,e){"use strict";var r=e("0366"),i=e("7b0b"),a=e("9bdd"),c=e("e95a"),o=e("50c4"),u=e("8418"),f=e("35a1");t.exports=function(t){var n,e,s,d,l,b,v=i(t),g="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,y=void 0!==h,m=f(v),j=0;if(y&&(h=r(h,p>2?arguments[2]:void 0,2)),void 0==m||g==Array&&c(m))for(n=o(v.length),e=new g(n);n>j;j++)b=y?h(v[j],j):v[j],u(e,j,b);else for(d=m.call(v),l=d.next,e=new g;!(s=l.call(d)).done;j++)b=y?a(d,h,[s.value,j],!0):s.value,u(e,j,b);return e.length=j,e}},6547:function(t,n,e){var r=e("a691"),i=e("1d80"),a=function(t){return function(n,e){var a,c,o=String(i(n)),u=r(e),f=o.length;return u<0||u>=f?t?"":void 0:(a=o.charCodeAt(u),a<55296||a>56319||u+1===f||(c=o.charCodeAt(u+1))<56320||c>57343?t?o.charAt(u):a:t?o.slice(u,u+2):c-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"7db0":function(t,n,e){"use strict";var r=e("23e7"),i=e("b727").find,a=e("44d2"),c=e("ae40"),o="find",u=!0,f=c(o);o in[]&&Array(1)[o]((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!f},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(o)},"8e27":function(t,n,e){"use strict";e("951d")},"951d":function(t,n,e){},"9f06":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e("d3b7");var r="http://localhost:5000",i=function(t,n){return fetch("".concat(r,"/api/").concat(t),n)}},a630:function(t,n,e){var r=e("23e7"),i=e("4df4"),a=e("1c7e"),c=!a((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:c},{from:i})},ad6d:function(t,n,e){"use strict";var r=e("825a");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},b0c0:function(t,n,e){var r=e("83ab"),i=e("9bf2").f,a=Function.prototype,c=a.toString,o=/^\s*function ([^ (]*)/,u="name";r&&!(u in a)&&i(a,u,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(t){return""}}})},b85c:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));e("a4d3"),e("e01a"),e("d28b"),e("d3b7"),e("3ca3"),e("ddb0"),e("a630"),e("fb6a"),e("b0c0"),e("25f0");function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}function a(t,n){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=i(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return o=t.done,t},e:function(t){u=!0,c=t},f:function(){try{o||null==e["return"]||e["return"]()}finally{if(u)throw c}}}}},d28b:function(t,n,e){var r=e("746f");r("iterator")},d41a:function(t,n,e){"use strict";e.r(n);var r=e("7a23"),i=Object(r["L"])("data-v-76a7dff6");Object(r["y"])("data-v-76a7dff6");var a={class:"plugins"},c={class:"plugin-description"},o={class:"plugin-header"},u={class:"name"};Object(r["w"])();var f=i((function(t,n,e,i,f,s){return Object(r["v"])(),Object(r["f"])("section",a,[(Object(r["v"])(!0),Object(r["f"])(r["a"],null,Object(r["B"])(t.plugins,(function(n){return Object(r["v"])(),Object(r["f"])("div",{class:"plugin",key:n.guid},[Object(r["i"])("div",c,Object(r["F"])(t.t("plugins.".concat(n.guid,".description"))),1),Object(r["i"])("header",o,[n.installed?Object(r["g"])("",!0):(Object(r["v"])(),Object(r["f"])("div",{key:0,class:"install",onClick:function(e){return t.install(n)}},"install",8,["onClick"])),Object(r["i"])("div",u,Object(r["F"])(t.t("plugins.".concat(n.guid,".name"))),1)])])})),128))])})),s=(e("7db0"),e("d81d"),e("5530")),d=e("b85c"),l=(e("96cf"),e("1da1")),b=e("ab42"),v=e("9f06"),g=function(t){return Object(v["a"])("plugins/".concat(t)).then((function(t){return t.json()}))},p=function(t,n){return Object(v["a"])("plugins/".concat(t),{headers:{"Content-Type":"application/json"},body:JSON.stringify({game:n}),method:"POST"})},h=e("26ae"),y=e("2b9b"),m=function(t){return Object(y["a"])("plugins/games/".concat(t,".json")).then((function(t){return t.json()}))},j=Object(r["k"])({props:{guid:{required:!0,type:String}},methods:{install:function(t){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p(t.guid,n.guid);case 2:n.mark(t.guid,!0);case 3:case"end":return e.stop()}}),e)})))()},mark:function(t,n){var e=this.plugins.find((function(n){return n.guid==t}));e.installed=n;var r,i=Object(d["a"])(e.dependencies);try{for(i.s();!(r=i.n()).done;){var a=r.value;this.mark(a,n)}}catch(c){i.e(c)}finally{i.f()}}},setup:function(t){var n=Object(r["A"])([]);return Object(r["t"])(Object(l["a"])(regeneratorRuntime.mark((function e(){var r,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m(t.guid);case 2:return n.value=e.sent.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{installed:!1,version:"0"})})),e.t0=d["a"],e.next=6,g(t.guid);case 6:e.t1=e.sent,r=(0,e.t0)(e.t1);try{for(a=function(){var t=i.value,e=n.value.find((function(n){return n.guid==t.guid}));e.installed=!0,e.version=t.version},r.s();!(i=r.n()).done;)a()}catch(c){r.e(c)}finally{r.f()}case 9:case"end":return e.stop()}}),e)})))),Object(s["a"])(Object(s["a"])({plugins:n},Object(h["a"])()),Object(b["b"])())}});e("8e27");j.render=f,j.__scopeId="data-v-76a7dff6";n["default"]=j},d81d:function(t,n,e){"use strict";var r=e("23e7"),i=e("b727").map,a=e("1dde"),c=e("ae40"),o=a("map"),u=c("map");r({target:"Array",proto:!0,forced:!o||!u},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,n,e){var r=e("da84"),i=e("fdbc"),a=e("e260"),c=e("9112"),o=e("b622"),u=o("iterator"),f=o("toStringTag"),s=a.values;for(var d in i){var l=r[d],b=l&&l.prototype;if(b){if(b[u]!==s)try{c(b,u,s)}catch(g){b[u]=s}if(b[f]||c(b,f,d),i[d])for(var v in a)if(b[v]!==a[v])try{c(b,v,a[v])}catch(g){b[v]=a[v]}}}},fb6a:function(t,n,e){"use strict";var r=e("23e7"),i=e("861d"),a=e("e8b5"),c=e("23cb"),o=e("50c4"),u=e("fc6a"),f=e("8418"),s=e("b622"),d=e("1dde"),l=e("ae40"),b=d("slice"),v=l("slice",{ACCESSORS:!0,0:0,1:2}),g=s("species"),p=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!b||!v},{slice:function(t,n){var e,r,s,d=u(this),l=o(d.length),b=c(t,l),v=c(void 0===n?l:n,l);if(a(d)&&(e=d.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?i(e)&&(e=e[g],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return p.call(d,b,v);for(r=new(void 0===e?Array:e)(h(v-b,0)),s=0;b<v;b++,s++)b in d&&f(r,s,d[b]);return r.length=s,r}})}}]);
//# sourceMappingURL=chunk-3f91e540.07636b94.js.map