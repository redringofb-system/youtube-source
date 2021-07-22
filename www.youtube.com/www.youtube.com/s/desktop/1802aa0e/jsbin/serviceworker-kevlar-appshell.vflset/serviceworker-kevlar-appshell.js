/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function ea(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
ea("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
ea("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
ea("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var g=c.exec(d);if(!g)return e=!0,{value:void 0,done:!0};""===g[0]&&(c.lastIndex+=1);return{value:g,done:!1}}};
f[Symbol.iterator]=function(){return f};
return f}});
ea("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
var p=this||self;function q(a,b){a=a.split(".");b=b||p;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function fa(){}
function u(a,b){a=a.split(".");var c=p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ha(a,b){function c(){}
c.prototype=b.prototype;a.xa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ea=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function ia(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ia);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.ka=b)}
ha(ia,Error);ia.prototype.name="CustomError";function ja(a,b){Array.prototype.forEach.call(a,b,void 0)}
function ka(a,b){for(let d=1;d<arguments.length;d++){const e=arguments[d];var c=typeof e;c="object"!=c?c:e?Array.isArray(e)?"array":c:"null";if("array"==c||"object"==c&&"number"==typeof e.length){c=a.length||0;const f=e.length||0;a.length=c+f;for(let g=0;g<f;g++)a[c+g]=e[g]}else a.push(e)}}
;function la(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);const b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=la(a[c]);return b}
const ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function na(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<ma.length;f++)c=ma[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function oa(){}
function x(a){return new oa(pa,a)}
var pa={};x("");var qa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var ra;a:{var sa=p.navigator;if(sa){var ta=sa.userAgent;if(ta){ra=ta;break a}}ra=""}function y(a){return-1!=ra.indexOf(a)}
;var A=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ua(a){return a?decodeURI(a):a}
function va(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)va(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function wa(a){var b=[],c;for(c in a)va(c,a[c],b);return b.join("&")}
;function xa(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}
let ya;const za="undefined"!==typeof TextDecoder;function Aa(a,b,c){if(Ba.length){const d=Ba.pop();a&&Ca(d,a,b,c);return d}return new Da(a,b,c)}
function Ca(a,b,c,d){b=b.constructor===Uint8Array?b:b.constructor===ArrayBuffer?new Uint8Array(b):b.constructor===Array?new Uint8Array(b):b.constructor===String?Ea(b):b instanceof Uint8Array?new Uint8Array(b.buffer,b.byteOffset,b.byteLength):new Uint8Array(0);a.j=b;a.l=void 0!==c?c:0;a.i=void 0!==d?a.l+d:a.j.length;a.h=a.l}
function Fa(a){const b=a.j;let c=b[a.h+0],d=c&127;if(128>c)return a.h+=1,d;c=b[a.h+1];d|=(c&127)<<7;if(128>c)return a.h+=2,d;c=b[a.h+2];d|=(c&127)<<14;if(128>c)return a.h+=3,d;c=b[a.h+3];d|=(c&127)<<21;if(128>c)return a.h+=4,d;c=b[a.h+4];d|=(c&15)<<28;if(128>c)return a.h+=5,d>>>0;a.h+=5;128<=b[a.h++]&&128<=b[a.h++]&&128<=b[a.h++]&&128<=b[a.h++]&&a.h++;return d}
class Da{constructor(a,b,c){this.j=null;this.h=this.i=this.l=0;this.m=!1;a&&Ca(this,a,b,c)}clone(){return Aa(this.j,this.l,this.i-this.l)}clear(){this.j=null;this.h=this.i=this.l=0;this.m=!1}reset(){this.h=this.l}advance(a){this.h+=a}}var Ba=[];function Ga(a){var b=a.h;(b=b.h==b.i)||(b=a.j)||(b=a.h,b=b.m||0>b.h||b.h>b.i);if(b)return!1;b=Fa(a.h);const c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.j=!0,!1;a.m=b;a.l=b>>>3;a.i=c;return!0}
function Ha(a){switch(a.i){case 0:if(0!=a.i)Ha(a);else{for(a=a.h;a.j[a.h]&128;)a.h++;a.h++}break;case 1:1!=a.i?Ha(a):a.h.advance(8);break;case 2:if(2!=a.i)Ha(a);else{var b=Fa(a.h);a.h.advance(b)}break;case 5:5!=a.i?Ha(a):a.h.advance(4);break;case 3:b=a.l;do{if(!Ga(a)){a.j=!0;break}if(4==a.i){a.l!=b&&(a.j=!0);break}Ha(a)}while(1);break;default:a.j=!0}}
class Ja{constructor(a){this.h=Aa(a,void 0,void 0);this.i=this.m=this.l=-1;this.j=!1}reset(){this.h.reset();this.i=this.l=-1}advance(a){this.h.advance(a)}};var Ka=y("Safari")&&!((y("Chrome")||y("CriOS"))&&!y("Edge")||y("Coast")||y("Opera")||y("Edge")||y("Edg/")||y("OPR")||y("Firefox")||y("FxiOS")||y("Silk")||y("Android"))&&!(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"));var La={},Ma=null;function Na(a,b){void 0===b&&(b=0);Oa();b=La[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ea(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Pa(a,function(f){d[e++]=f});
return d.subarray(0,e)}
function Pa(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Ma[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Oa();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function Oa(){if(!Ma){Ma={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));La[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Ma[f]&&(Ma[f]=e)}}}}
;var Qa="function"===typeof Uint8Array;function Ra(a){return null!==a&&"object"==typeof a&&!Array.isArray(a)&&!(Qa&&a instanceof Uint8Array)}
function Sa(a){return Ta(a,b=>b,b=>new Uint8Array(b))}
function Ua(a,b,c){return"object"===typeof a?Qa&&!Array.isArray(a)&&a instanceof Uint8Array?c(a):Ta(a,b,c):b(a)}
function Ta(a,b,c){if(Array.isArray(a)){var d=Array(a.length);for(var e=0;e<a.length;e++){var f=a[e];null!=f&&(d[e]=Ua(f,b,c))}Array.isArray(a)&&a.W&&Va(d);return d}d={};for(e in a)f=a[e],null!=f&&(d[e]=Ua(f,b,c));return d}
function Wa(a){return Ta(a,b=>"number"===typeof b?isFinite(b)?b:String(b):b,b=>Na(b))}
const Xa={W:{value:!0,configurable:!0}};function Va(a){Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,Xa);return a}
;function Ya(a){if(4==a.i)return!1;Ha(a);return!0}
;function Za(a,b,c){this.h=null;$a&&(a||(a=$a),$a=null);var d=this.constructor.ea;a||(a=d?[d]:[]);this.l=d?0:-1;this.i=a;a:{d=this.i.length;a=-1;if(d&&(a=d-1,d=this.i[a],Ra(d))){this.m=a-this.l;this.j=d;break a}void 0!==b&&-1<b?(this.m=Math.max(b,a+1-this.l),this.j=null):this.m=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.m?(a+=this.l,(d=this.i[a])?Va(d):this.i[a]=ab):(bb(this),(d=this.j[a])?Va(d):this.j[a]=ab)}
let $a;const ab=Object.freeze(Va([]));function bb(a){let b=a.m+a.l;a.i[b]||(a.j=a.i[b]={})}
function B(a,b){if(b<a.m){b+=a.l;var c=a.i[b];return c!==ab?c:a.i[b]=Va([])}if(a.j)return c=a.j[b],c!==ab?c:a.j[b]=Va([])}
function cb(a){var b=db;a.h||(a.h={});if(!a.h[1]){let c=B(a,1),d=[];for(let e=0;e<c.length;e++)d[e]=new b(c[e]);a.h[1]=d}return a.h[1]}
function eb(a){if(a.h)for(var b in a.h){var c=a.h[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&eb(c[d]);else c&&eb(c)}return a.i}
Za.prototype.toJSON=function(){const a=this.i&&fb(eb(this));return Wa(a)};
function fb(a){let b,c=a.length,d=!1;for(let g=a.length;g--;){let h=a[g];if(Array.isArray(h)){var e=h;Array.isArray(h)&&h.W&&!h.length?h=null:h=fb(h);h!=e&&(d=!0)}else if(Ra(h)){a:{var f=h;e={};let k=!1;for(let l in f){let n=f[l];if(Array.isArray(n)){let r=n;Array.isArray(n)&&n.W&&!n.length?n=null:n=fb(n);n!=r&&(k=!0)}null!=n?e[l]=n:k=!0}if(k){for(let l in e){f=e;break a}f=null}}f!=h&&(d=!0);c--;continue}null==h&&c==g+1?(d=!0,c--):d&&(b||(b=a.slice(0,c)),b[g]=h)}if(!d)return a;b||(b=a.slice(0,c));
f&&b.push(f);return b}
Za.prototype.clone=function(){var a=this.constructor,b=Sa(eb(this));$a=b;a=new a(b);$a=null;return a};function C(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;x("csi.gstatic.com");x("googleads.g.doubleclick.net");x("pagead2.googlesyndication.com");x("partner.googleadservices.com");x("pubads.g.doubleclick.net");x("securepubads.g.doubleclick.net");x("tpc.googlesyndication.com");function gb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var hb=["client_dev_root_url","client_dev_regex_map","expflag"];function ib(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(r){for(var t=g,m=0;64>m;m+=4)t[m/4]=r[m]<<24|r[m+1]<<16|r[m+2]<<8|r[m+3];for(m=16;80>m;m++)r=t[m-3]^t[m-8]^t[m-14]^t[m-16],t[m]=(r<<1|r>>>31)&4294967295;r=e[0];var v=e[1],w=e[2],z=e[3],da=e[4];for(m=0;80>m;m++){if(40>m)if(20>m){var O=z^v&(w^z);var Ia=1518500249}else O=v^w^z,Ia=1859775393;else 60>m?(O=v&w|z&(v|w),Ia=2400959708):(O=v^w^z,Ia=3395469782);O=((r<<5|r>>>27)&4294967295)+O+da+Ia+t[m]&4294967295;da=z;z=w;w=(v<<30|v>>>2)&4294967295;v=r;r=O}e[0]=e[0]+r&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+w&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+da&4294967295}
function c(r,t){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var m=[],v=0,w=r.length;v<w;++v)m.push(r.charCodeAt(v));r=m}t||(t=r.length);m=0;if(0==l)for(;m+64<t;)b(r.slice(m,m+64)),m+=64,n+=64;for(;m<t;)if(f[l++]=r[m++],n++,64==l)for(l=0,b(f);m+64<t;)b(r.slice(m,m+64)),m+=64,n+=64}
function d(){var r=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var m=63;56<=m;m--)f[m]=t&255,t>>>=8;b(f);for(m=t=0;5>m;m++)for(var v=24;0<=v;v-=8)r[t++]=e[m]>>v&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,la:function(){for(var r=d(),t="",m=0;m<r.length;m++)t+="0123456789ABCDEF".charAt(Math.floor(r[m]/16))+"0123456789ABCDEF".charAt(r[m]%16);return t}}}
;function jb(a,b,c){var d=String(p.location.href);return d&&a&&b?[b,kb(gb(d),a,c||null)].join(" "):null}
function kb(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],ja(d,function(h){e.push(h)}),lb(e.join(" "));
var f=[],g=[];ja(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];ja(d,function(h){e.push(h)});
a=lb(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function lb(a){var b=ib();b.update(a);return b.la().toLowerCase()}
;const mb={};function D(){this.h=document||{cookie:""}}
D.prototype.isEnabled=function(){if(!p.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{da:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
D.prototype.set=function(a,b,c){let d,e,f,g=!1,h;"object"===typeof c&&(h=c.Ma,g=c.Na||!1,f=c.domain||void 0,e=c.path||void 0,d=c.da);if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===d&&(d=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(e?";path="+e:"")+(0>d?"":0==d?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*d)).toUTCString())+(g?";secure":"")+(null!=h?";samesite="+h:"")};
D.prototype.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=qa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
D.prototype.remove=function(a,b,c){const d=void 0!==this.get(a);this.set(a,"",{da:0,path:b,domain:c});return d};
D.prototype.isEmpty=function(){return!this.h.cookie};
D.prototype.clear=function(){var a=(this.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=qa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};function nb(){return!!mb.FPA_SAMESITE_PHASE2_MOD||!1}
function ob(a,b,c,d){(a=p[a])||(a=(new D).get(b));return a?jb(a,c,d):null}
function pb(){var a=[],b=gb(String(p.location.href));const c=[];var d=p.__SAPISID||p.__APISID||p.__3PSAPISID||p.__OVERRIDE_SID;nb()&&(d=d||p.__1PSAPISID);if(d)var e=!0;else e=new D,d=e.get("SAPISID")||e.get("APISID")||e.get("__Secure-3PAPISID")||e.get("SID"),nb()&&(d=d||e.get("__Secure-1PAPISID")),e=!!d;e&&(d=(e=b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?p.__SAPISID:p.__APISID,d||(d=new D,d=d.get(e?"SAPISID":"APISID")||d.get("__Secure-3PAPISID")),
(e=d?jb(d,e?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(e),b&&nb()&&((b=ob("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=ob("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a)));return 0==c.length?null:c.join(" ")}
;var qb=class{constructor(a,b){this.j=a;this.l=b;this.i=0;this.h=null}get(){let a;0<this.i?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}put(a){this.l(a);100>this.i&&(this.i++,a.next=this.h,this.h=a)}};function rb(a){p.setTimeout(()=>{throw a;},0)}
;class sb{constructor(){this.i=this.h=null}add(a,b){const c=tb.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var tb=new qb(()=>new ub,a=>a.reset());
class ub{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};function vb(a,b){wb||xb();yb||(wb(),yb=!0);zb.add(a,b)}
var wb;function xb(){var a=p.Promise.resolve(void 0);wb=function(){a.then(Ab)}}
var yb=!1,zb=new sb;function Ab(){for(var a;a=zb.remove();){try{a.h.call(a.scope)}catch(b){rb(b)}tb.put(a)}yb=!1}
;function Bb(a){var b=q("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Cb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Db[c])c=Db[c];else{c=String(c);if(!Db[c]){var f=/function\s+([^\(]+)/m.exec(c);Db[c]=f?f[1]:"[Anonymous]"}c=Db[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Cb(a,b){b||(b={});b[Eb(a)]=!0;var c=a.stack||"";(a=a.ka)&&!b[Eb(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Cb(a,b));return c}
function Eb(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Db={};function Fb(){this.j=this.j;this.l=this.l}
Fb.prototype.j=!1;Fb.prototype.dispose=function(){this.j||(this.j=!0,this.J())};
Fb.prototype.J=function(){if(this.l)for(;this.l.length;)this.l.shift()()};class Gb{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a;this.reject=b})}}
;function E(a){this.s=0;this.ga=void 0;this.I=this.B=this.H=null;this.N=this.V=!1;if(a!=fa)try{var b=this;a.call(void 0,function(c){F(b,2,c)},function(c){F(b,3,c)})}catch(c){F(this,3,c)}}
function Hb(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Hb.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Ib=new qb(function(){return new Hb},function(a){a.reset()});
function Jb(a,b,c){var d=Ib.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Kb(a){if(a instanceof E)return a;var b=new E(fa);F(b,2,a);return b}
E.prototype.then=function(a,b,c){return Lb(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
E.prototype.$goog_Thenable=!0;E.prototype.cancel=function(a){if(0==this.s){var b=new Mb(a);vb(function(){Nb(this,b)},this)}};
function Nb(a,b){if(0==a.s)if(a.H){var c=a.H;if(c.B){for(var d=0,e=null,f=null,g=c.B;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.s&&1==d?Nb(c,b):(f?(d=f,d.next==c.I&&(c.I=d),d.next=d.next.next):Ob(c),Pb(c,e,3,b)))}a.H=null}else F(a,3,b)}
function Qb(a,b){a.B||2!=a.s&&3!=a.s||Rb(a);a.I?a.I.next=b:a.B=b;a.I=b}
function Lb(a,b,c,d){var e=Jb(null,null,null);e.h=new E(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Mb?g(h):f(k)}catch(l){g(l)}}:g});
e.h.H=a;Qb(a,e);return e.h}
E.prototype.Aa=function(a){this.s=0;F(this,2,a)};
E.prototype.Ba=function(a){this.s=0;F(this,3,a)};
function F(a,b,c){if(0==a.s){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.s=1;a:{var d=c,e=a.Aa,f=a.Ba;if(d instanceof E){Qb(d,Jb(e||fa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{h=typeof d;if("object"==h&&null!=d||"function"==h)try{var k=d.then;if("function"===typeof k){Sb(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ga=c,a.s=b,a.H=null,Rb(a),3!=b||c instanceof Mb||Tb(a,c))}}
function Sb(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Rb(a){a.V||(a.V=!0,vb(a.ma,a))}
function Ob(a){var b=null;a.B&&(b=a.B,a.B=b.next,b.next=null);a.B||(a.I=null);return b}
E.prototype.ma=function(){for(var a;a=Ob(this);)Pb(this,a,this.s,this.ga);this.V=!1};
function Pb(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.N;a=a.H)a.N=!1;if(b.h)b.h.H=null,Ub(b,c,d);else try{b.j?b.i.call(b.context):Ub(b,c,d)}catch(e){Vb.call(null,e)}Ib.put(b)}
function Ub(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Tb(a,b){a.N=!0;vb(function(){a.N&&Vb.call(null,b)})}
var Vb=rb;function Mb(a){ia.call(this,a)}
ha(Mb,ia);Mb.prototype.name="cancel";function G(a){Fb.call(this);this.ba=1;this.m=[];this.D=0;this.h=[];this.i={};this.ia=!!a}
ha(G,Fb);G.prototype.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.ba;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.ba=e+3;d.push(e);return e};
G.prototype.aa=function(a){var b=this.h[a];if(b){var c=this.i[b];if(0!=this.D)this.m.push(a),this.h[a+1]=fa;else{if(c){const d=Array.prototype.indexOf.call(c,a,void 0);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.h[a];delete this.h[a+1];delete this.h[a+2]}}return!!b};
G.prototype.K=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.ia)for(e=0;e<c.length;e++){var g=c[e];Wb(this.h[g+1],this.h[g+2],d)}else{this.D++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.D--,0<this.m.length&&0==this.D)for(;c=this.m.pop();)this.aa(c)}}return 0!=e}return!1};
function Wb(a,b,c){vb(function(){a.apply(b,c)})}
G.prototype.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.aa,this),delete this.i[a])}else this.h.length=0,this.i={}};
G.prototype.J=function(){G.xa.J.call(this);this.clear();this.m.length=0};/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Xb="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var Yb=["notification/convert_endpoint_to_url"],Zb=["notification/record_interactions"],$b=["notification_registration/set_registration"];var ac=a=>self.btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(a)))).replace(/\+/g,"-").replace(/\//g,"_");var bc=["notifications_register","notifications_check_registration"];var cc=class extends Error{constructor(a,...b){super(a);this.args=[...b]}};let dc=null;function H(a,b){const c={};c.key=a;c.value=b;return ec().then(d=>new Promise((e,f)=>{try{const g=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);g.onsuccess=()=>{e()};
g.onerror=()=>{f()}}catch(g){f(g)}}))}
function fc(){return H("IndexedDBCheck","testing IndexedDB").then(()=>I("IndexedDBCheck")).then(a=>"testing IndexedDB"===a?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function I(a){const b=new cc("Error accessing DB");return ec().then(c=>new Promise((d,e)=>{try{const f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=()=>{const g=f.result;d(g?g.value:null)};
f.onerror=()=>{b.params={key:a,source:"onerror"};e(b)}}catch(f){b.params={key:a,
thrownError:String(f)},e(b)}}),()=>null)}
function ec(){return dc?Promise.resolve(dc):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))dc=d,a(dc);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),ec()};
c.onupgradeneeded=gc})}
function gc(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;const hc={["WEB_UNPLUGGED"]:"^unplugged/",["WEB_UNPLUGGED_ONBOARDING"]:"^unplugged/",["WEB_UNPLUGGED_OPS"]:"^unplugged/",["WEB_UNPLUGGED_PUBLIC"]:"^unplugged/",["WEB_CREATOR"]:"^creator/",["WEB_KIDS"]:"^kids/",["WEB_EXPERIMENTS"]:"^experiments/",["WEB_MUSIC"]:"^music/",["WEB_REMIX"]:"^music/",["WEB_MUSIC_EMBEDDED_PLAYER"]:"^music/",["WEB_MUSIC_EMBEDDED_PLAYER"]:"^main_app/|^sfv/"};
function ic(a){if(1===a.length)return a[0];var b=hc.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(hc).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
function jc(a){return`/youtubei/v1/${ic(a)}`}
;var kc=class extends Za{constructor(a){super(a)}};var lc=class extends Za{constructor(a){super(a)}};lc.ea="yt.sw.adr";var mc,nc;const oc=p.window,J=(null===(mc=null===oc||void 0===oc?void 0:oc.yt)||void 0===mc?void 0:mc.config_)||(null===(nc=null===oc||void 0===oc?void 0:oc.ytcfg)||void 0===nc?void 0:nc.data_)||{};u("yt.config_",J);function K(...a){a=arguments;1<a.length?J[a[0]]=a[1]:1===a.length&&Object.assign(J,a[0])}
function L(a,b){return a in J?J[a]:b}
;function M(a){a=pc(a);return"string"===typeof a&&"false"===a?!1:!!a}
function qc(a,b){a=pc(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function pc(a){const b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
;let rc=0;u("ytDomDomGetNextId",q("ytDomDomGetNextId")||(()=>++rc));const sc=[];function tc(a){sc.forEach(b=>b(a))}
function uc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){vc(b)}}:a}
function vc(a){var b=q("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=L("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),K("ERRORS",b));tc(a)}
function wc(a){var b=q("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=L("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),K("ERRORS",b))}
;u("ytEventsEventsListeners",p.ytEventsEventsListeners||{});u("ytEventsEventsCounter",p.ytEventsEventsCounter||{count:0});function xc(a,b){"function"===typeof a&&(a=uc(a));return window.setTimeout(a,b)}
;var yc=class{};var zc=class extends yc{start(){const a=q("yt.scheduler.instance.start");a&&a()}};zc.h||(zc.h=new zc);const Ac=/^[\w.]*$/,Bc={q:!0,search_query:!0};function Cc(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(1==h.length&&h[0]||2==h.length)try{const k=Dc(h[0]||""),l=Dc(h[1]||"");k in c?Array.isArray(c[k])?ka(c[k],l):c[k]=[c[k],l]:c[k]=l}catch(k){var d=k,e=h[0];const l=String(Cc);d.args=[{key:e,value:h[1],query:a,method:Ec==l?"unchanged":l}];Bc.hasOwnProperty(e)||wc(d)}}return c}
const Ec=String(Cc);function Fc(a){"?"==a.charAt(0)&&(a=a.substr(1));return Cc(a,"&")}
function Gc(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Fc(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=wa(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Hc(a){if(!b)var b=window.location.href;const c=a.match(A)[1]||null,d=ua(a.match(A)[3]||null);c&&d?(a=a.match(A),b=b.match(A),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ua(b.match(A)[3]||null)==d&&(Number(b.match(A)[4]||null)||null)==(Number(a.match(A)[4]||null)||null):!0;return a}
function Dc(a){return a&&a.match(Ac)?a:decodeURIComponent(a.replace(/\+/g," "))}
;[...hb];let Ic=!1;function Jc(a,b){const c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Kc(a,b);const d=Lc(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");const e=b.context||p;let f=!1,g;fetch(a,c).then(h=>{if(!f){f=!0;g&&window.clearTimeout(g);var k=h.ok,l=n=>{n=n||{};k?b.onSuccess&&b.onSuccess.call(e,n,h):b.onError&&b.onError.call(e,n,h);b.onFinish&&b.onFinish.call(e,n,h)};
"JSON"==(b.format||"JSON")&&(k||400<=h.status&&500>h.status)?h.json().then(l,function(){l(null)}):l(null)}}).catch(()=>{b.onError&&b.onError.call(e,{},{})});
b.onFetchTimeout&&0<b.timeout&&(g=xc(()=>{f||(f=!0,window.clearTimeout(g),b.onFetchTimeout.call(b.context||p))},b.timeout))}
function Kc(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=L("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=Gc(a,b||{},!0);return a}
function Lc(a,b){const c=L("XSRF_FIELD_NAME",void 0),d=L("XSRF_TOKEN",void 0);var e=b.postBody||"",f=b.postParams;const g=L("XSRF_FIELD_NAME",void 0);let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ua(a.match(A)[3]||null)&&!b.withCredentials&&ua(a.match(A)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Fc(e),na(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):wa(e));if(!(a=e)&&(a=f)){a:{for(const k in f){f=!1;break a}f=!0}a=!f}!Ic&&a&&"POST"!=b.method&&(Ic=!0,vc(Error("AJAX request with postData should use POST")));return e}
;p.ytPubsubPubsubInstance||new G;const N=window;var P=N.ytcsi&&N.ytcsi.now?N.ytcsi.now:N.performance&&N.performance.timing&&N.performance.now&&N.performance.timing.navigationStart?()=>N.performance.timing.navigationStart+N.performance.now():()=>(new Date).getTime();const Mc=qc("initial_gel_batch_timeout",2E3),Nc=Math.pow(2,16)-1;let Oc=null,Pc=0,Q=void 0,Qc=0,Rc=0,Sc=0,Tc=!0;const Uc=p.ytLoggingTransportGELQueue_||new Map,Vc=p.ytLoggingTransportTokensToCttTargetIds_||{};
function Wc(a,b){if("log_event"===a.endpoint){var c="";a.M?c="visitorOnlyApprovedKey":a.v&&(Vc[a.v.token]=Xc(a.v),c=a.v.token);var d=Uc.get(c)||[];Uc.set(c,d);d.push(a.payload);b&&(Q=new b);a=qc("tvhtml5_logging_max_batch")||qc("web_logging_max_batch")||100;b=P();d.length>=a?Yc({writeThenSend:!0}):10<=b-Sc&&(Zc(),Sc=b)}}
function $c(a,b){if("log_event"===a.endpoint){var c="";a.M?c="visitorOnlyApprovedKey":a.v&&(Vc[a.v.token]=Xc(a.v),c=a.v.token);var d=new Map;d.set(c,[a.payload]);b&&(Q=new b);return new E(e=>{Q&&Q.isReady()?ad(d,e,{bypassNetworkless:!0}):e()})}}
function Yc(a={}){new E(b=>{window.clearTimeout(Qc);window.clearTimeout(Rc);Rc=0;Q&&Q.isReady()?(ad(Uc,b,a),Uc.clear()):(Zc(),b())})}
function Zc(){M("web_gel_timeout_cap")&&!Rc&&(Rc=xc(()=>{Yc({writeThenSend:!0})},6E4));
window.clearTimeout(Qc);let a=L("LOGGING_BATCH_TIMEOUT",qc("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Tc&&(a=Mc);Qc=xc(()=>{Yc({writeThenSend:!0})},a)}
function ad(a,b,c={}){var d=Q;const e=Math.round(P());let f=a.size;for(const [k,l]of a){var g=k,h=l;a=la({context:bd(d.config_||cd())});a.events=h;(h=Vc[g])&&dd(a,g,h);delete Vc[g];g="visitorOnlyApprovedKey"===g;ed(a,e,g);fd(d,a,{retry:!0,onSuccess:()=>{f--;f||b();Pc=Math.round(P()-e)},
onError:()=>{f--;f||b()},
Ia:c,M:g});Tc=!1}}
function ed(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID",void 0))&&((c=L("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*Nc/2)),c++,c>Nc&&(c=1),K("BATCH_CLIENT_COUNTER",c),b={serializedEventId:b,clientCounter:String(c)},a.serializedClientEventId=b,Oc&&Pc&&M("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Oc,roundtripMs:String(Pc)}),Oc=b,Pc=0)}
function dd(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Xc(a){const b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;const gd=p.ytLoggingGelSequenceIdObj_||{};function hd(a,b,c,d={}){const e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=q("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.ha&&(a=e.context,b=d.ha,gd[b]=b in gd?gd[b]+1:0,a.sequence={index:gd[b],groupKey:b},d.Ha&&delete gd[d.ha]);(d.Oa?$c:Wc)({endpoint:"log_event",payload:e,v:d.v,M:d.M},c)}
;function id(){if(!p.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return p.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":p.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":p.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":p.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;u("ytglobal.prefsUserPrefsPrefs_",q("ytglobal.prefsUserPrefsPrefs_")||{});const jd={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},kd={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function ld(){const a=p.navigator;return a?a.connection:void 0}
;function md(){return"INNERTUBE_API_KEY"in J&&"INNERTUBE_API_VERSION"in J}
function cd(){return{innertubeApiKey:L("INNERTUBE_API_KEY",void 0),innertubeApiVersion:L("INNERTUBE_API_VERSION",void 0),na:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),oa:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),qa:L("INNERTUBE_CONTEXT_HL",void 0),pa:L("INNERTUBE_CONTEXT_GL",void 0),ra:L("INNERTUBE_HOST_OVERRIDE",void 0)||"",ta:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),sa:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function bd(a){const b={client:{hl:a.qa,gl:a.pa,clientName:a.oa,clientVersion:a.innertubeContextClientVersion,configInfo:a.na}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=p.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=L("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];const d=L("EXPERIMENTS_FORCED_FLAGS",{});for(var e in d)c.push({key:e,value:String(d[e])});e=L("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){if(!M("web_include_display_mode_killswitch")){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=id()}}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!M("music_web_display_mode_killswitch")){var h;b.client.fa=null!=(h=b.client.fa)?h:{};b.client.fa.webDisplayMode=id()}a.appInstallData&&
(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});a:{if(h=ld()){a=jd[h.type||"unknown"]||"CONN_UNKNOWN";h=jd[h.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==h&&(a=h);if("CONN_UNKNOWN"!==a)break a;if("CONN_UNKNOWN"!==h){a=h;break a}}a=void 0}a&&(b.client.connectionType=a);M("web_log_effective_connection_type")&&
(a=ld(),a=null!==a&&void 0!==a&&a.effectiveType?kd.hasOwnProperty(a.effectiveType)?kd[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;h=a.assign;g=b.client;e=L("DEVICE","");f={};for(const [k,l]of Object.entries(Fc(e)))e=k,c=l,"cbrand"===e?f.deviceMake=c:"cmodel"===e?f.deviceModel=c:"cbr"===e?f.browserName=c:"cbrver"===e?f.browserVersion=c:"cos"===e?f.osName=c:"cosver"===e?f.osVersion=c:"cplatform"===e&&(f.platform=c);b.client=h.call(a,
g,f);return b}
function nd(a,b,c){c=void 0===c?{}:c;const d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Da||L("AUTHORIZATION"))||(a?b=`Bearer ${q("gapi.auth.getToken")().Ca}`:b=pb());b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;const od=q("ytPubsub2Pubsub2Instance")||new G;G.prototype.subscribe=G.prototype.subscribe;G.prototype.unsubscribeByKey=G.prototype.aa;G.prototype.publish=G.prototype.K;G.prototype.clear=G.prototype.clear;u("ytPubsub2Pubsub2Instance",od);u("ytPubsub2Pubsub2SubscribedKeys",q("ytPubsub2Pubsub2SubscribedKeys")||{});u("ytPubsub2Pubsub2TopicToKeys",q("ytPubsub2Pubsub2TopicToKeys")||{});u("ytPubsub2Pubsub2IsAsync",q("ytPubsub2Pubsub2IsAsync")||{});u("ytPubsub2Pubsub2SkipSubKey",null);var pd=class{isSupported(){return!0}};const R=[];let S,qd=!1;function rd(a){qd||(S?S.handleError(a):(R.push({type:"ERROR",payload:a}),10<R.length&&R.shift()))}
function sd(a,b){qd||(S?S.O(a,b):(R.push({type:"EVENT",eventType:a,payload:b}),10<R.length&&R.shift()))}
;function td(){if(void 0!==L("DATASYNC_ID",void 0))return L("DATASYNC_ID",void 0);throw new cc("Datasync ID not set","unknown");}
;function ud(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function vd(a){return a.substr(0,a.indexOf(":"))||a}
;const wd={["AUTH_INVALID"]:"No user identifier specified.",["EXPLICIT_ABORT"]:"Transaction was explicitly aborted.",["IDB_NOT_SUPPORTED"]:"IndexedDB is not supported.",["MISSING_OBJECT_STORE"]:"Object store not created.",["DB_DELETED_BY_MISSING_OBJECT_STORE"]:"Database is deleted because an expected object store was not created.",["UNKNOWN_ABORT"]:"Transaction was aborted for unknown reasons.",["QUOTA_EXCEEDED"]:"The current transaction exceeded its quota limitations.",["QUOTA_MAYBE_EXCEEDED"]:"The current transaction may have failed because of exceeding quota limitations.",
["EXECUTE_TRANSACTION_ON_CLOSED_DB"]:"Can't start a transaction on a closed database",["INCOMPATIBLE_DB_VERSION"]:"The binary is incompatible with the database version"},xd={["AUTH_INVALID"]:"ERROR",["EXECUTE_TRANSACTION_ON_CLOSED_DB"]:"WARNING",["EXPLICIT_ABORT"]:"IGNORED",["IDB_NOT_SUPPORTED"]:"ERROR",["MISSING_OBJECT_STORE"]:"ERROR",["DB_DELETED_BY_MISSING_OBJECT_STORE"]:"WARNING",["QUOTA_EXCEEDED"]:"WARNING",["QUOTA_MAYBE_EXCEEDED"]:"WARNING",["UNKNOWN_ABORT"]:"WARNING",["INCOMPATIBLE_DB_VERSION"]:"WARNING"},
yd={["AUTH_INVALID"]:!1,["EXECUTE_TRANSACTION_ON_CLOSED_DB"]:!1,["EXPLICIT_ABORT"]:!1,["IDB_NOT_SUPPORTED"]:!1,["MISSING_OBJECT_STORE"]:!1,["DB_DELETED_BY_MISSING_OBJECT_STORE"]:!1,["QUOTA_EXCEEDED"]:!1,["QUOTA_MAYBE_EXCEEDED"]:!0,["UNKNOWN_ABORT"]:!0,["INCOMPATIBLE_DB_VERSION"]:!1};
var T=class extends cc{constructor(a,b={},c=wd[a],d=xd[a],e=yd[a]){super(c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,T.prototype)}},zd=class extends T{constructor(a){super("MISSING_OBJECT_STORE",{wa:a},wd.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,zd.prototype)}};
const Ad=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Bd(a,b,c){b=vd(b);let d;d=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(d instanceof T)return d;if("QuotaExceededError"===d.name)return new T("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(Ka&&"UnknownError"===d.name)return new T("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===d.name&&Ad.some(e=>d.message.includes(e)))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});if("AbortError"===d.name)return new T("UNKNOWN_ABORT",{objectStoreNames:c,dbName:b},d.message);d.args=[{name:"IdbError",Ja:d.name,dbName:b,objectStoreNames:c}];d.level="WARNING";return d}
;function Cd(a){if(!a)throw Error();throw a;}
function Dd(a){return a}
var Ed=class{constructor(a){this.h=a}};function Fd(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof U?Gd(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Hd(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof U?Gd(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Gd(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof U?Gd(a,b,f,d,e):d(f)},f=>{e(f)})}
var U=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;const b=d=>{if("PENDING"===this.state.status){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if("PENDING"===this.state.status){this.state={status:"REJECTED",
reason:d};for(const e of this.onRejected)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new U(new Ed((b,c)=>{const d=[];let e=a.length;0===e&&b(d);for(let f=0;f<a.length;++f)U.resolve(a[f]).then(g=>{d[f]=g;e--;0===e&&b(d)}).catch(g=>{c(g)})}))}static resolve(a){return new U(new Ed((b,c)=>{a instanceof U?a.then(b,c):b(a)}))}static reject(a){return new U(new Ed((b,c)=>{c(a)}))}then(a,b){const c=null!==a&&void 0!==a?a:Dd,d=null!==b&&void 0!==b?b:Cd;
return new U(new Ed((e,f)=>{"PENDING"===this.state.status?(this.h.push(()=>{Fd(this,this,c,e,f)}),this.onRejected.push(()=>{Hd(this,this,d,e,f)})):"FULFILLED"===this.state.status?Fd(this,this,c,e,f):"REJECTED"===this.state.status&&Hd(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function Id(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch(g){}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function Jd(a){return new Promise((b,c)=>{Id(a,b,c)})}
function V(a){return new U(new Ed((b,c)=>{Id(a,b,c)}))}
;function Kd(a,b){return new U(new Ed((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;function W(a,b,c,d){return C(a,function*(){const e={mode:"readonly",C:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?e.mode=c:Object.assign(e,c);this.transactionCount++;const f=e.C?3:1;let g=0,h;for(;!h;){g++;const l=Math.round(P());try{const n=this.h.transaction(b,e.mode);var k=d;const r=new Ld(n),t=yield Md(r,k),m=Math.round(P());Nd(this,l,m,g,void 0,b.join(),e);return t}catch(n){k=Math.round(P());const r=Bd(n,this.h.name,b.join());if(r instanceof T&&!r.h||g>=f)Nd(this,l,k,g,r,b.join(),
e),h=r}}return Promise.reject(h)})}
function Od(a,b,c){a=a.h.createObjectStore(b,c);return new Pd(a)}
function Nd(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&sd("QUOTA_EXCEEDED",{dbName:vd(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),sd("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Qd(a,!1,d,f,b,g.tag),rd(e)):Qd(a,!0,d,f,b,g.tag)}
function Qd(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){sd("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var Rd=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}add(a,b,c){return W(this,[a],{mode:"readwrite",C:!0},d=>X(d,a).add(b,c))}clear(a){return W(this,[a],{mode:"readwrite",
C:!0},b=>X(b,a).clear())}close(){var a;
this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()}count(a,b){return W(this,[a],{mode:"readonly",C:!0},c=>X(c,a).count(b))}delete(a,b){return W(this,[a],{mode:"readwrite",
C:!0},c=>X(c,a).delete(b))}get(a,b){return W(this,[a],{mode:"readonly",
C:!0},c=>X(c,a).get(b))}put(a,b,c){return W(this,[a],{mode:"readwrite",
C:!0},d=>X(d,a).put(b,c))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}getName(){return this.h.name}};
function Sd(a,b,c){a=a.h.openCursor(b.query,b.direction);return Td(a).then(d=>Kd(d,c))}
function Ud(a,b){return Sd(a,{query:b},c=>c.delete().then(()=>c.continue())).then(()=>{})}
var Pd=class{constructor(a){this.h=a}add(a,b){return V(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return V(this.h.clear()).then(()=>{})}count(a){return V(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?Ud(this,a):V(this.h.delete(a))}get(a){return V(this.h.get(a))}index(a){return new Vd(this.h.index(a))}getName(){return this.h.name}keyPath(){return this.h.keyPath}put(a,b){return V(this.h.put(a,b))}};
function Md(a,b){const c=new Promise((d,e)=>{try{b(a).then(f=>{d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(([d])=>d)}
function X(a,b){b=a.h.objectStore(b);let c=a.j.get(b);c||(c=new Pd(b),a.j.set(b,c));return c}
var Ld=class{constructor(a){this.h=a;this.j=new Map;this.i=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.i){d=T;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(null===h)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.i=!0;throw new T("EXPLICIT_ABORT");}};function Wd(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return Td(a).then(f=>Kd(f,c))}
var Vd=class{constructor(a){this.h=a}count(a){return V(this.h.count(a))}delete(a){return Wd(this,{query:a},b=>b.delete().then(()=>b.continue()))}get(a){return V(this.h.get(a))}getKey(a){return V(this.h.getKey(a))}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function Td(a){return V(a).then(b=>null===b?null:new Xd(a,b))}
var Xd=class{constructor(a,b){this.request=a;this.cursor=b}advance(a){this.cursor.advance(a);return Td(this.request)}continue(a){this.cursor.continue(a);return Td(this.request)}delete(){return V(this.cursor.delete()).then(()=>{})}getKey(){return this.cursor.key}update(a){return V(this.cursor.update(a))}};function Yd(a,b,c){return new Promise((d,e)=>{let f;f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.blocked,h=c.blocking,k=c.za,l=c.upgrade,n=c.closed;let r;const t=()=>{r||(r=new Rd(f.result,{closed:n}));return r};
f.addEventListener("upgradeneeded",m=>{try{if(null===m.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");m.dataLoss&&"none"!==m.dataLoss&&sd("IDB_DATA_CORRUPTED",{reason:m.dataLossMessage||"unknown reason",dbName:vd(a)});const v=t(),w=new Ld(f.transaction);l&&l(v,z=>m.oldVersion<z&&m.newVersion>=z,w);
w.done.catch(z=>{e(z)})}catch(v){e(v)}});
f.addEventListener("success",()=>{const m=f.result;h&&m.addEventListener("versionchange",()=>{h(t())});
m.addEventListener("close",()=>{sd("IDB_UNEXPECTEDLY_CLOSED",{dbName:vd(a),dbVersion:m.version});k&&k()});
d(t())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function Zd(a,b,c={}){return Yd(a,b,c)}
function $d(a,b={}){return C(this,function*(){const c=self.indexedDB.deleteDatabase(a),d=b.blocked;d&&c.addEventListener("blocked",()=>{d()});
yield Jd(c)})}
;function ae(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
var be=class{constructor(a,b){this.name=a;this.options=b;this.l=!0;this.j=!1}i(a,b,c={}){return Zd(a,b,c)}delete(a={}){return $d(this.name,a)}open(){if(!this.l)throw ae(this);if(this.h)return this.h;let a;const b=()=>{this.h===a&&(this.h=void 0)},c={blocking:e=>{e.close()},
closed:b,za:b,upgrade:this.options.upgrade},d=()=>C(this,function*(){try{var e=yield this.i(this.name,this.options.version,c);a:{var f=e,g=this.options;for(const k of Object.keys(g.S)){const {L:l,La:n=Number.MAX_VALUE}=g.S[k];if(f.h.version>=l&&!(f.h.version>=n)&&!f.h.objectStoreNames.contains(k)){var h=k;break a}}h=void 0}if(void 0!==h){if(!this.j)return this.j=!0,yield this.delete(),rd(new T("DB_DELETED_BY_MISSING_OBJECT_STORE",{dbName:this.name,wa:h})),d();throw new zd(h);}return e}catch(k){if(k instanceof
DOMException?"VersionError"===k.name:"DOMError"in self&&k instanceof DOMError?"VersionError"===k.name:k instanceof Object&&"message"in k&&"An attempt was made to open a database using a lower version than the existing version."===k.message){e=yield this.i(this.name,void 0,Object.assign(Object.assign({},c),{upgrade:void 0}));h=e.h.version;if(void 0!==this.options.version&&h>this.options.version+1)throw e.close(),this.l=!1,ae(this,h);return e}b();throw k;}});
return this.h=a=d()}};const ce=new be("YtIdbMeta",{S:{databases:{L:1}},upgrade(a,b){b(1)&&Od(a,"databases",{keyPath:"actualName"})}});function de(a){return C(this,function*(){return W(yield ce.open(),["databases"],{C:!0,mode:"readwrite"},b=>{const c=X(b,"databases");return c.get(a.actualName).then(d=>{if(d?a.actualName!==d.actualName||a.publicName!==d.publicName||a.userIdentifier!==d.userIdentifier:1)return c.put(a).then(()=>{})})})})}
function ee(a){return C(this,function*(){return(yield ce.open()).delete("databases",a)})}
;let fe;const ge=new class{constructor(){}}(new class{constructor(){}});function he(){return C(this,function*(){return new pd})}
function ie(){if(void 0!==fe)return fe;qd=!0;return fe=he().then(a=>{qd=!1;return a.isSupported()})}
function je(){return ie().then(a=>a?ge:void 0)}
;new Gb;function ke(a){try{td();var b=!0}catch(c){b=!1}if(!b)throw a=new T("AUTH_INVALID"),rd(a),a;b=td();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
function le(a,b,c,d){return C(this,function*(){if(!(yield je())){var e=new T("IDB_NOT_SUPPORTED",{context:{caller:"openDbImpl",publicName:a,version:b}});rd(e);throw e;}ud(a);e=c?{actualName:a,publicName:a,userIdentifier:void 0}:ke(a);try{return yield de(e),yield Zd(e.actualName,b,d)}catch(f){try{yield ee(e.actualName)}catch(g){}throw f;}})}
function me(a,b,c={}){return le(a,b,!1,c)}
function ne(a,b,c={}){return le(a,b,!0,c)}
function oe(a,b={}){return C(this,function*(){if(yield je()){ud(a);var c=ke(a);yield $d(c.actualName,b);yield ee(c.actualName)}})}
function pe(a,b={}){return C(this,function*(){if(yield je())ud(a),yield $d(a,b),yield ee(a)})}
;function qe(a,b){let c;return()=>{c||(c=new re(a,b));return c}}
var re=class extends be{constructor(a,b){super(a,b);this.options=b;ud(a)}i(a,b,c={}){return(this.options.Y?ne:me)(a,b,Object.assign({},c))}delete(a={}){return(this.options.Y?pe:oe)(this.name,a)}};const se=["client.name","client.version"];function te(a){if(!a.errorMetadata||!a.errorMetadata.kvPairs)return a;a.errorMetadata.kvPairs=a.errorMetadata.kvPairs.filter(b=>b.key?se.includes(b.key):!1);
return a}
;var ue;ue=qe("ServiceWorkerLogsDatabase",{S:{["SWHealthLog"]:{L:1}},Y:!0,upgrade:(a,b)=>{b(1)&&Od(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function ve(a){return C(this,function*(){var b=yield ue().open(),c=b.put,d=L("INNERTUBE_CONTEXT_CLIENT_NAME",0);const e=Object.assign({},a);e.clientError&&(e.clientError=te(e.clientError));e.interface=d;return c.call(b,"SWHealthLog",e)})}
;const we=p.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,Ga:void 0,potentialEsfErrorCounter:0,isIdbSupported:!1};M("export_networkless_options")&&u("ytNetworklessLoggingInitializationOptions",we);function fd(a,b,c){!L("VISITOR_DATA")&&.01>Math.random()&&wc(new cc("Missing VISITOR_DATA when sending innertube request.","log_event",b,c));if(!a.isReady())throw a=new cc("innertube xhrclient not ready","log_event",b,c),vc(a),a;const d={headers:{"Content-Type":"application/json"},method:"POST",postParams:b,postBodyFormat:"JSON",onTimeout:()=>{c.onTimeout()},
onFetchTimeout:c.onTimeout,onSuccess:(k,l)=>{if(c.onSuccess)c.onSuccess(l)},
onFetchSuccess:k=>{if(c.onSuccess)c.onSuccess(k)},
onError:(k,l)=>{if(c.onError)c.onError(l)},
onFetchError:k=>{if(c.onError)c.onError(k)},
timeout:c.timeout,withCredentials:!0};b="";var e=a.config_.ra;e&&(b=e);e=nd(a.config_.ta||!1,b,c);Object.assign(d.headers,e);d.headers.Authorization&&!b&&(d.headers["x-origin"]=window.location.origin);e=`/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;let f={alt:"json"};a.config_.sa&&d.headers.Authorization||(f.key=a.config_.innertubeApiKey);const g=Gc(`${b}${e}`,f||{},!0),h=()=>{try{Jc(g,d)}catch(k){if("InvalidAccessError"==k.name)wc(Error("An extension is blocking network request."));
else throw k;}};
q("ytNetworklessLoggingInitializationOptions")&&we.isNwlInitialized?ie().then(k=>{h(k)}):h(!1)}
class xe{constructor(a){this.config_=null;a?this.config_=a:md()&&(this.config_=cd())}isReady(){!this.config_&&md()&&(this.config_=cd());return!!this.config_}};let ye=xe;function ze(a,b,c={}){let d=ye;L("ytLoggingEventsDefaultDisabled",!1)&&ye==xe&&(d=null);hd(a,b,d,c)}
;const Ae=[{X:a=>`Cannot read property '${a.key}'`,
T:{Error:[{o:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{o:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{o:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{o:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{o:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{o:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{o:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{X:a=>`Cannot call '${a.key}'`,
T:{TypeError:[{o:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{o:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{o:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{o:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{o:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{o:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}},{X:a=>`${a.key} is not defined`,
T:{ReferenceError:[{o:/(.*) is not defined/,groups:["key"]},{o:/Can't find variable: (.*)/,groups:["key"]}]}}];var Ce={A:[],u:[{ja:Be,weight:500}]};function Be(a){a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function De(){if(!Ee){var a=Ee=new Fe;a.A.length=0;a.u.length=0;Ge(a,Ce)}return Ee}
function Ge(a,b){b.A&&a.A.push.apply(a.A,b.A);b.u&&a.u.push.apply(a.u,b.u)}
var Fe=class{constructor(){this.u=[];this.A=[]}},Ee;const He=new G;function Ie(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=Je(d);if(Infinity===e)break;const f=e>>3;switch(e&7){case 0:e=Je(d);if(2===f)return e;break;case 1:if(2===f)return;c+=8;break;case 2:e=Je(d);if(2===f)return a.substr(c,e);c+=e;break;case 5:if(2===f)return;c+=4;break;default:return}}while(c<b)}
function Je(a){let b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Ke(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Le(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Ie(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Le(`${f}.ve`,g,h,k):0;d+=f;d+=Le(e,a[e],b,c);if(500<d)break}}else c[b]=Me(a),d+=c[b].length;else c[b]=Me(a),d+=c[b].length;return d}
function Le(a,b,c,d){c+=`.${a}`;a=Me(b);d[c]=a;return c.length+a.length}
function Me(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Ne=new Set,Oe=0,Pe=0,Qe=0,Re=[];const Se=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Te(a){Ue(a)}
function Ue(a,b="ERROR"){var c={};c.name=L("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=L("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);Ve(a,c||{},b)}
function Ve(a,b,c="ERROR"){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(M("console_log_js_exceptions")){var d=[];d.push(`Name: ${a.name}`);d.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&d.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&d.push(`Error args: ${JSON.stringify(a.args)}`);d.push(`File name: ${a.fileName}`);d.push(`Stacktrace: ${a.stack}`);window.console.log(d.join("\n"),a)}if(!(5<=Oe)){var e=Bb(a);d=e.message||"Unknown Error";const v=
e.name||"UnknownError";var f=e.stack||a.i||"Not available";if(f.startsWith(`${v}: ${d}`)){var g=f.split("\n");g.shift();f=g.join("\n")}g=e.lineNumber||"Not available";e=e.fileName||"Not available";let w=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0;h<a.args.length&&!(w=Ke(a.args[h],`params.${h}`,b,w),500<=w);h++);else if(a.hasOwnProperty("params")&&a.params){const z=a.params;if("object"===typeof a.params)for(h in z){if(!z[h])continue;const da=`params.${h}`,O=Me(z[h]);b[da]=O;w+=
da.length+O.length;if(500<w)break}else b.params=Me(z)}if(Re.length)for(h=0;h<Re.length&&!(w=Ke(Re[h],`params.context.${h}`,b,w),500<=w);h++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:d,name:v,lineNumber:g,fileName:e,stack:f,params:b,sampleWeight:1};d=Number(a.columnNumber);isNaN(d)||(b.lineNumber=`${b.lineNumber}:${d}`);if("IGNORED"===a.level)var k=0;else a:{a=De();d=b;for(k of a.A)if(d.message&&d.message.match(k.va)){k=k.weight;break a}for(var l of a.u)if(l.ja(d)){k=
l.weight;break a}k=1}b.sampleWeight=k;k=b;for(var n of Ae)if(n.T[k.name]){l=n.T[k.name];for(var r of l)if(l=k.message.match(r.o)){k.params["params.error.original"]=l[0];a=r.groups;b={};for(d=0;d<a.length;d++)b[a[d]]=l[d+1],k.params[`params.error.${a[d]}`]=l[d+1];k.message=n.X(b);break}}k.params||(k.params={});n=De();k.params["params.errorServiceSignature"]=`msg=${n.A.length}&cb=${n.u.length}`;k.params["params.serviceWorker"]="true";p.document&&p.document.querySelectorAll&&(k.params["params.fscripts"]=
String(document.querySelectorAll("script:not([nonce])").length));x("sample").constructor!==oa&&(k.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(k);if(0!==k.sampleWeight&&!Ne.has(k.message)){"ERROR"===c?(He.K("handleError",k),M("record_app_crashed_web")&&0===Qe&&1===k.sampleWeight&&(Qe++,ze("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Pe++):"WARNING"===c&&He.K("handleWarning",k);b:{for(t of Se)if((n=ra)&&0<=n.toLowerCase().indexOf(t.toLowerCase())){var t=
!0;break b}t=!1}if(t)var m=void 0;else{n={stackTrace:k.stack};k.fileName&&(n.filename=k.fileName);t=k.lineNumber&&k.lineNumber.split?k.lineNumber.split(":"):[];0!==t.length&&(1!==t.length||isNaN(Number(t[0]))?2!==t.length||isNaN(Number(t[0]))||isNaN(Number(t[1]))||(n.lineNumber=Number(t[0]),n.columnNumber=Number(t[1])):n.lineNumber=Number(t[0]));t={level:"ERROR_LEVEL_UNKNOWN",message:k.message,errorClassName:k.name,sampleWeight:k.sampleWeight};"ERROR"===c?t.level="ERROR_LEVEL_ERROR":"WARNING"===c&&
(t.level="ERROR_LEVEL_WARNNING");n={isObfuscated:!0,browserStackInfo:n};r={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(r.experimentIds=L("FEXP_EXPERIMENTS"));if(l=k.params)for(m of Object.keys(l))r.kvPairs.push({key:`client.${m}`,value:String(l[m])});m=L("SERVER_NAME",void 0);l=L("SERVER_VERSION",void 0);m&&l&&(r.kvPairs.push({key:"server.name",value:m}),r.kvPairs.push({key:"server.version",value:l}));m={errorMetadata:r,stackTrace:n,logMessage:t}}m&&(ze("clientError",m),("ERROR"===
c||M("errors_flush_gel_always_killswitch"))&&Yc());Ne.add(k.message);Oe++}}}}
;function We(a){return C(a,function*(){var b=yield p.fetch(this.i);if(200!==b.status)return Promise.reject("Server error when retrieving AmbientData");b=yield b.text();if(!b.startsWith(")]}'\n"))return Promise.reject("Incorrect JSPB formatting");a:{b=JSON.parse(b.substring(5));for(let c=0;c<b.length;c++)if(b[c][0]===(new lc).constructor.ea){b=new lc(b[c]);break a}b=null}return b?b:Promise.reject("AmbientData missing from response")})}
function Xe(a=!1){return C(Ye.h,function*(){if(a||!this.h)this.h=We(this).then(this.j).catch(b=>{delete this.h;Ue(b)});
return this.h})}
var Ye=class{constructor(){this.i=`${self.location.origin}/sw.js_data`}j(a){var b;a.h||(a.h={});a.h[2]||(b=B(a,2))&&(a.h[2]=new kc(b));if(b=a.h[2]){const c=B(b,5);c&&(p.__SAPISID=c);null!=B(b,7)&&K("VISITOR_DATA",B(b,7));null!=B(b,4)&&K("SESSION_INDEX",String(B(b,4)));null!=B(b,8)&&K("DELEGATED_SESSION_ID",B(b,8))}return a}};function Ze(a){const b={};var c=pb();c&&(b.Authorization=c,c=a=null===a||void 0===a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),b["X-Goog-AuthUser"]=c,"INNERTUBE_HOST_OVERRIDE"in J||(b["X-Origin"]=window.location.origin),M("pageid_as_header_web")&&void 0===a&&"DELEGATED_SESSION_ID"in J&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
var $e=class{constructor(){this.ya=!0}};var af={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};let bf=Date.now().toString();let cf=p.ytLoggingDocDocumentNonce_;
if(!cf){var df;a:{if(window.crypto&&window.crypto.getRandomValues)try{const d=Array(16),e=new Uint8Array(16);window.crypto.getRandomValues(e);for(let f=0;f<d.length;f++)d[f]=e[f];df=d;break a}catch(d){}const c=Array(16);for(let d=0;16>d;d++){const e=Date.now();for(let f=0;f<e%23;f++)c[d]=Math.random();c[d]=Math.floor(256*Math.random())}if(bf){let d=1;for(let e=0;e<bf.length;e++)c[d%16]=c[d%16]^c[(d-1)%16]/4^bf.charCodeAt(e),d++}df=c}const a=df,b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&
63));cf=b.join("")};function ef(a,b){b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds&&setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},1E3*Number(b.expirationSeconds)))}
var ff=class{constructor(){this.h={}}handleResponse(a,b){var c,d,e;b=(null===(d=null===(c=b.G.context)||void 0===c?void 0:c.request)||void 0===d?void 0:d.consistencyTokenJars)||[];if(a=null===(e=a.responseContext)||void 0===e?void 0:e.consistencyTokenJar){for(const f of b)delete this.h[f.encryptedTokenJarContents];ef(this,a)}}};function gf(){var a=L("INNERTUBE_CONTEXT");if(!a)return Ue(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};a=la(a);M("web_no_tracking_params_in_shell_killswitch")||delete a.clickTracking;a.client||(a.client={});var b=a.client;b.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var c=L("EXPERIMENTS_TOKEN","");c?b.experimentsToken=c:delete b.experimentsToken;ff.h||(ff.h=new ff);b=ff.h.h;c=[];let d=0;for(const e in b)c[d++]=b[e];a.request=Object.assign(Object.assign({},
a.request),{consistencyTokenJars:c});a.user=Object.assign({},a.user);return a}
;function hf(a){var b=a;if(a=L("INNERTUBE_HOST_OVERRIDE")){a=String(a);var c=String,d=b.match(A);b=d[5];var e=d[6];d=d[7];var f="";b&&(f+=b);e&&(f+="?"+e);d&&(f+="#"+d);b=a+c(f)}return b}
;var jf=class{};const kf={["GET_DATASYNC_IDS"]:class extends jf{}};function lf(a){$e.h||($e.h=new $e);mf.h=new mf(a)}
function nf(a,b,c){return C(a,function*(){var d;if(this.i.ya){const e=null===(d=null===b||void 0===b?void 0:b.ca)||void 0===d?void 0:d.sessionIndex;d=Ze({sessionIndex:e});d=Object.assign(Object.assign({},of(c)),d)}else d=pf(b,c);return d})}
function qf(a,b,c){var d,e;return C(a,function*(){for(var f of[])f.Ka(b.G.context);if(null===(d=this.h)||void 0===d?0:d.l(b.input,b.G))return this.h.j(b.input,b.G);f=JSON.stringify(b.G);b.U=Object.assign(Object.assign({},b.U),{headers:c});let g=Object.assign({},b.U);"POST"===b.U.method&&(g=Object.assign(Object.assign({},g),{body:f}));f=yield this.j.fetch(b.input,g);!f&&(null===(e=this.h)||void 0===e?0:e.h(b.input,b.G))&&(f=yield this.h.i(b.input,b.G));return f})}
function rf(a,b,c){var d={ca:{identity:af}};b.context||(b.context=gf());return new E(e=>C(a,function*(){var f=hf(c);f=Hc(f)?"same-origin":"cors";f=yield nf(this,d,f);var g=hf(c);L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")&&(null===f||void 0===f?0:f.Authorization)||(g=Gc(g,{key:L("INNERTUBE_API_KEY")},!1));var h={method:"POST",mode:Hc(g)?"same-origin":"cors",credentials:Hc(g)?"same-origin":"include"};e(qf(this,{input:g,U:h,G:b,config:d},f))}))}
function pf(a,b){var c;a=null===(c=null===a||void 0===a?void 0:a.ca)||void 0===c?void 0:c.sessionIndex;return Kb(Ze({sessionIndex:a})).then(d=>Promise.resolve(Object.assign(Object.assign({},of(b)),d)))}
function of(a){const b={"Content-Type":"application/json"},c=L("VISITOR_DATA");c&&(b["X-Goog-Visitor-Id"]=c);"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),M("forward_domain_admin_state_on_embeds")&&(a=L("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
var mf=class{constructor(a){var b=$e.h,c={Fa:{}};this.j=a;this.i=b;this.h=void 0;c.Z||(c.Z={});c.Z=Object.assign(Object.assign({},kf),c.Z)}};let sf;function tf(){sf||(lf({fetch:(a,b)=>Kb(fetch(new Request(a,b)))}),sf=mf.h);
return sf}
;function Y(a){return C(this,function*(){yield uf();Ue(a,"WARNING")})}
function vf(a){C(this,function*(){var b=yield je();M("nwl_sw_health_payloads")&&b?yield ve(a):(yield Xe(),b={timestamp:a.timestamp},b=a.appShellAssetLoadReport?{payloadName:"appShellAssetLoadReport",payload:a.appShellAssetLoadReport,options:b}:a.clientError?{payloadName:"clientError",payload:a.clientError,options:b}:void 0,b&&ze(b.payloadName,b.payload))})}
function uf(){return C(this,function*(){try{yield Xe()}catch(a){}})}
;const wf={granted:"GRANTED",denied:"DENIED",unknown:"UNKNOWN"};function xf(a){var b=a.data;a=b.type;b=b.data;"notifications_register"===a?(H("IDToken",b),yf()):"notifications_check_registration"===a&&zf(b)}
function Af(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function Bf(a){const b=[];a.forEach(c=>{b.push({key:c.key,value:c.value})});
return b}
function Cf(a){return C(this,function*(){const b=Bf(a.payload.chrome.extraUrlParams),c={recipientId:a.recipientId,endpoint:a.payload.chrome.endpoint,extraUrlParams:b},d=jc(Yb);return Df().then(e=>rf(e,c,d).then(f=>{f.json().then(g=>{if(!g||!g.endpointUrl)return Promise.resolve();a.payload.chrome.postedEndpoint&&Ef(a.payload.chrome.postedEndpoint);return Ff(a,g.endpointUrl)})}))})}
function Ff(a,b){a.deviceId&&H("DeviceId",a.deviceId);a.timestampSec&&H("TimestampLowerBound",a.timestampSec);const c=a.payload.chrome;return self.registration.showNotification(c.title,{body:c.body,icon:c.iconUrl,data:{nav:b,id:c.notificationId,attributionTag:c.attributionTag,clickEndpoint:c.clickEndpoint},tag:c.title+c.body+c.iconUrl,requireInteraction:!0}).then(()=>{Gf(a.displayCap)}).catch(()=>{})}
function Ef(a){if(!a.recordNotificationInteractionsEndpoint)return Promise.reject();const b={serializedRecordNotificationInteractionsRequest:a.recordNotificationInteractionsEndpoint.serializedInteractionsRequest},c=jc(Zb);return Df().then(d=>rf(d,b,c))}
function Gf(a){-1!==a&&self.registration.getNotifications().then(b=>{for(let c=0;c<b.length-a;c++)b[c].close()})}
function zf(a){const b=[Hf(a),I("RegistrationTimestamp").then(If),Jf(),Kf(),Lf()];Promise.all(b).catch(()=>{H("IDToken",a);yf();return Promise.resolve()})}
function If(a){return 9E7>=Date.now()-(a||0)?Promise.resolve():Promise.reject()}
function Hf(a){return I("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function Jf(){return I("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function Kf(){return I("Endpoint").then(a=>Mf().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Lf(){return I("application_server_key").then(a=>Nf().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Of(){var a=Notification.permission;if(wf[a])return wf[a]}
function yf(){H("RegistrationTimestamp",0);Promise.all([Mf(),Pf(),Qf(),Nf()]).then(([a,b,c,d])=>{b=b?ac(b):null;c=c?ac(c):null;d=d?Na(new Uint8Array(d),4):null;Rf(a,b,c,d)}).catch(()=>{Rf()})}
function Rf(a=null,b=null,c=null,d=null){fc().then(e=>{e&&(H("Endpoint",a),H("P256dhKey",b),H("AuthKey",c),H("application_server_key",d),H("Permission",Notification.permission),Promise.all([I("DeviceId"),I("NotificationsDisabled")]).then(([f,g])=>{if(null!==f&&void 0!==f)var h=f;else{f=[];var k;h=h||Xb.length;for(k=0;256>k;k++)f[k]=Xb[0|Math.random()*h];h=f.join("")}Sf(h,null!==a&&void 0!==a?a:void 0,null!==b&&void 0!==b?b:void 0,null!==c&&void 0!==c?c:void 0,null!==d&&void 0!==d?d:void 0,null!==
g&&void 0!==g?g:void 0)}))})}
function Sf(a,b,c,d,e,f){C(this,function*(){const g={notificationRegistration:{chromeRegistration:{deviceId:a,pushParams:{applicationServerKey:e,authKey:d,p256dhKey:c,browserEndpoint:b},notificationsDisabledInApp:f,permission:Of()}}},h=jc($b);return Df().then(k=>rf(k,g,h).then(()=>{H("DeviceId",a);H("RegistrationTimestamp",Date.now());H("TimestampLowerBound",Date.now())},l=>{Y(l)}))})}
function Mf(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function Pf(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function Qf(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function Nf(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.options.applicationServerKey):Promise.resolve(null))}
function Df(){return C(this,function*(){try{return yield Xe(!0),tf()}catch(a){return yield Y(a),Promise.reject(a)}})}
;let Tf=void 0;function Uf(a){return C(this,function*(){Tf||(Tf=yield a.open("yt-appshell-assets"));return Tf})}
function Vf(a,b){return C(this,function*(){const c=yield Uf(a),d=b.map(e=>Wf(c,e));
return Promise.all(d)})}
function Xf(a,b){return C(this,function*(){let c;try{c=yield a.match(b,{cacheName:"yt-appshell-assets"})}catch(d){}return c})}
function Yf(a,b){return C(this,function*(){const c=yield Uf(a),d=(yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
return Promise.all(d)})}
function Zf(a,b,c){return C(this,function*(){yield(yield Uf(a)).put(b,c)})}
function $f(a,b){C(this,function*(){yield(yield Uf(a)).delete(b)})}
function Wf(a,b){return C(this,function*(){return(yield a.match(b))?Promise.resolve():a.add(b)})}
;var Z;Z=qe("yt-serviceworker-metadata",{S:{["auth"]:{L:1},["resource-manifest-assets"]:{L:2}},Y:!0,upgrade(a,b){b(1)&&Od(a,"resource-manifest-assets");b(2)&&Od(a,"auth")},version:2});let ag=null;function bg(){return C(cg,function*(){const a=yield je();if(a)return cg.h||(cg.h=new cg(a)),cg.h})}
function dg(a,b){return C(a,function*(){yield W(yield Z().open(),["resource-manifest-assets"],"readwrite",c=>{const d=X(c,"resource-manifest-assets"),e=Date.now();return d.put(b,e).then(()=>{ag=e;let f=!0;return Sd(d,{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},g=>f?(f=!1,g.advance(5)):d.delete(g.getKey()).then(()=>g.continue()))})})})}
function eg(a,b){return C(a,function*(){let c=!1,d=0;yield W(yield Z().open(),["resource-manifest-assets"],"readonly",e=>Sd(X(e,"resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},f=>{if(f.cursor.value.includes(b))c=!0;else return d+=1,f.continue()}));
return c?d:-1})}
function fg(a){return C(a,function*(){ag||(yield W(yield Z().open(),["resource-manifest-assets"],"readonly",b=>Sd(X(b,"resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},c=>{ag=c.getKey()})));
return ag})}
var cg=class{constructor(a){this.token=a}};function gg(){return C(hg,function*(){const a=yield je();if(a)return hg.h||(hg.h=new hg(a)),hg.h})}
function ig(a,b){return C(a,function*(){yield(yield Z().open()).put("auth",b,"shell_identifier_key")})}
function jg(a){return C(a,function*(){return(yield(yield Z().open()).get("auth","shell_identifier_key"))||""})}
function kg(a){return C(a,function*(){yield(yield Z().open()).clear("auth")})}
var hg=class{constructor(a){this.token=a}};function lg(){C(this,function*(){const a=yield gg();a&&(yield kg(a))})}
;function mg(a,b){for(;Ga(b);){var c=void 0;switch(b.m){case 10:c=b;var d=Fa(c.h);c=c.h;var e=c.h;c.h+=d;var f=c.j,g=d;if(za)d=f,c=e,f=g,(e=ya)||(e=ya=new TextDecoder("utf-8",{fatal:!1})),d=e.decode(d.subarray(c,c+f));else{var h=c=d=void 0;let k;g=e+g;const l=[];let n=null;for(;e<g;)k=f[e++],128>k?l.push(k):224>k?e>=g?l.push(65533):(h=f[e++],194>k||128!==(h&192)?(e--,l.push(65533)):l.push((k&31)<<6|h&63)):240>k?e>=g-1?l.push(65533):(h=f[e++],128!==(h&192)||224===k&&160>h||237===k&&160<=h||128!==((c=
f[e++])&192)?(e--,l.push(65533)):l.push((k&15)<<12|(h&63)<<6|c&63)):244>=k?e>=g-2?l.push(65533):(h=f[e++],128!==(h&192)||0!==(k<<28)+(h-144)>>30||128!==((c=f[e++])&192)||128!==((d=f[e++])&192)?(e--,l.push(65533)):(h=(k&7)<<18|(h&63)<<12|(c&63)<<6|d&63,h-=65536,l.push((h>>10&1023)+55296,(h&1023)+56320))):l.push(65533),8192<=l.length&&(n=xa(n,l),l.length=0);d=xa(n,l)}c=d;d=a;1<d.m?d.i[1+d.l]=c:(bb(d),d.j[1]=c);break;default:if(!Ya(b))return a}}return a}
var db=class extends Za{constructor(a){super(a)}};function ng(a){a:{var b=new og;for(a=new Ja(a);Ga(a);){var c=void 0;switch(a.m){case 10:c=new db;var d=a,e=c,f=mg;const h=d.h.i;var g=Fa(d.h);g=d.h.h+g;d.h.i=g;f(e,d);d.h.h=g;d.h.i=h;d=b;e=c;c=cb(d);e=e?e:new db;d=B(d,1);c.push(e);d.push(eb(e));break;default:if(!Ya(a))break a}}}return b}
var og=class extends Za{constructor(){super(void 0,-1,pg)}},pg=[1];function qg(a){return C(this,function*(){const b=a.headers.get("X-Resource-Manifest");return b?Promise.resolve(rg(b)):Promise.reject(Error("No resource manifest header"))})}
function rg(a){return cb(ng(decodeURIComponent(a))).reduce((b,c)=>{(c=B(c,1))&&b.push(c);return b},[])}
;function sg(a){return C(a,function*(){const b=yield Xe();if(b&&null!=B(b,3)){var c=yield gg();c&&(c=yield jg(c),B(b,3)!==c&&($f(this.h,this.i),lg()))}})}
function tg(a){return C(a,function*(){let b,c;try{c=yield ug(this,this.j),b=yield qg(c),yield Vf(this.h,b)}catch(d){return Promise.reject(d)}try{yield vg(this),yield Zf(this.h,this.i,c)}catch(d){return Promise.reject(d)}if(b)try{yield wg(this,b,this.i)}catch(d){}return Promise.resolve()})}
function xg(a){return C(a,function*(){yield sg(this);return tg(this)})}
function ug(a,b){return C(a,function*(){try{return yield p.fetch(new Request(b))}catch(c){return Promise.reject(c)}})}
function vg(a){return C(a,function*(){var b=yield Xe();let c;b&&null!=B(b,3)&&(c=B(b,3));return c?(b=yield gg())?Promise.resolve(ig(b,c)):Promise.reject(Error("Could not get AuthMonitor instance")):Promise.reject(Error("Could not get datasync ID"))})}
function wg(a,b,c){return C(a,function*(){const d=yield bg();if(d)try{yield dg(d,b)}catch(e){yield Y(e)}b.push(c);try{yield Yf(this.h,b)}catch(e){yield Y(e)}return Promise.resolve()})}
function yg(a,b){return C(a,function*(){return Xf(this.h,b)})}
function zg(a){return C(a,function*(){return Xf(this.h,this.i)})}
var Ag=class{constructor(){var a=self.location.origin+"/app_shell",b=self.location.origin+"/app_shell_home";this.h=self.caches;this.j=a;this.i=b}};function Bg(a,b){return C(a,function*(){const c=b.request,d=yield yg(this.h,c.url);if(d)return vf({appShellAssetLoadReport:{assetPath:c.url,cacheHit:!0},timestamp:P()}),d;Cg(c);return Dg(b)})}
function Eg(a,b){return C(a,function*(){const c=yield Fg(this,b);if(c.response&&(c.response.ok||"opaqueredirect"===c.response.type||429===c.response.status||303===c.response.status||300<=c.response.status&&400>c.response.status))return c.response;const d=yield zg(this.h);if(d)return Gg(this),d;Hg(this);return c.response?c.response:Promise.reject(c.error)})}
function Ig(a,b){b=new URL(b);if(!a.i.includes(b.pathname))return!1;if(!b.search)return!0;for(const c of a.l)if(a=b.searchParams.get(c.key),void 0===c.value||a===c.value)if(b.searchParams.delete(c.key),!b.search)return!0;return!1}
function Jg(a,b){return C(a,function*(){const c=yield zg(this.h);if(!c)return Hg(this),Dg(b);Gg(this);var d;a:{if(c.headers&&(d=c.headers.get("date"))&&(d=Date.parse(d),!isNaN(d))){d=Math.round(P()-d);break a}d=-1}if(!(-1<d&&7<=d/864E5))return c;d=yield Fg(this,b);return d.response&&d.response.ok?d.response:c})}
function Dg(a){return Promise.resolve(a.preloadResponse).then(b=>b||p.fetch(a.request))}
function Cg(a){const b={assetPath:a.url,cacheHit:!1};bg().then(c=>{if(c){var d=fg(c).then(e=>{e&&(b.currentAppBundleTimestampSec=String(Math.floor(e/1E3)))});
c=eg(c,a.url).then(e=>{b.appBundleVersionDiffCount=e});
Promise.all([d,c]).catch(e=>{Y(e)}).finally(()=>{vf({appShellAssetLoadReport:b,
timestamp:P()})})}else vf({appShellAssetLoadReport:b,
timestamp:P()})})}
function Gg(a){vf({appShellAssetLoadReport:{assetPath:a.h.i,cacheHit:!0},timestamp:P()})}
function Hg(a){vf({appShellAssetLoadReport:{assetPath:a.h.i,cacheHit:!1},timestamp:P()})}
function Fg(a,b){return C(a,function*(){try{return{response:yield Dg(b)}}catch(c){return{error:c}}})}
var Pg=class{constructor(){var a=Kg,b=Lg,c=Mg,d=Ng;const e=[];e.push({key:"feature",value:"ytca"});for(var f of hb)e.push({key:f});f=Og();this.h=a;this.m=b;this.D=c;this.i=d;this.l=e;this.j=f}};var Ng=["/","/feed/downloads"];const Qg=[/^\/$/,/^\/feed\/downloads$/],Rg=[/^\/$/,/^\/feed\/\w*/,/^\/results$/,/^\/playlist$/,/^\/watch$/,/^\/channel\/\w*/];function Og(){return new RegExp((M("kevlar_sw_app_wide_fallback")?Rg:Qg).map(a=>a.source).join("|"))}
var Lg=/^https:\/\/[\w-]*\.?youtube\.com.*(\.css$|\.js$|\.ico$|\/ytmweb\/_\/js\/|\/ytmweb\/_\/ss\/)/,Mg=/^https:\/\/[\w-]*\.?youtube\.com.*(purge_shell=1|\/signin|\/logout)/;var Sg=class{constructor(){var a=Kg,b=new Pg;this.h=self;this.i=a;this.m=b;this.K=bc}init(){this.h.oninstall=this.D.bind(this);this.h.onactivate=this.j.bind(this);this.h.onfetch=this.l.bind(this);this.h.onmessage=this.J.bind(this)}D(a){a.waitUntil(this.h.skipWaiting());const b=xg(this.i).catch(c=>{Y(c);return Promise.resolve()});
a.waitUntil(b)}j(a){const b=[this.h.clients.claim()];this.h.registration.navigationPreload&&b.push(this.h.registration.navigationPreload.enable());a.waitUntil(Promise.all(b))}l(a){return C(this,function*(){var b=this.m,c=!!this.h.registration.navigationPreload;const d=a.request;if(b.D.test(d.url))Ye.h&&(delete Ye.h.h,p.__SAPISID=void 0,K("VISITOR_DATA",void 0),K("SESSION_INDEX",void 0),K("DELEGATED_SESSION_ID",void 0)),c=a.respondWith,b=b.h,$f(b.h,b.i),lg(),b=Dg(a),c.call(a,b);else if(b.m.test(d.url))a.respondWith(Bg(b,
a));else if("navigate"===d.mode){const e=new URL(d.url);b.j.test(e.pathname)?a.respondWith(Eg(b,a)):Ig(b,d.url)?a.respondWith(Jg(b,a)):c&&a.respondWith(Dg(a))}})}J(a){const b=a.data;
this.K.includes(b.type)?xf(a):"refresh_shell"===b.type&&tg(this.i).catch(c=>{Y(c)})}};function Tg(){var a,b;return C(this,function*(){const c=navigator;if(null===(a=c.storage)||void 0===a?0:a.estimate)return c.storage.estimate();if(null===(b=c.webkitTemporaryStorage)||void 0===b?0:b.queryUsageAndQuota)return Ug()})}
function Ug(){const a=navigator;return new Promise((b,c)=>{var d;null!==(d=a.webkitTemporaryStorage)&&void 0!==d&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{b({usage:e,quota:f})},e=>{c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
;function Vg(a,b){Tg().then(c=>{c=Object.assign(Object.assign({},b),{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Wg(null===c||void 0===c?void 0:c.usage),deviceStorageQuotaMbytes:Wg(null===c||void 0===c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
class Xg{constructor(){var a=Yg;this.handleError=Zg;this.h=a;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=qc("ytidb_transaction_ended_event_rate_limit",.02)}O(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Vg(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign(Object.assign({},b),{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}}}function Wg(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;Ge(De(),{A:[{va:/Failed to fetch/,weight:500}],u:[]});var {handleError:Zg=Te,O:Yg=ze}={handleError:function(a){return C(this,function*(){yield uf();Ue(a)})},
O:function(a,b){return C(this,function*(){yield uf();ze(a,b)})}};
for(S=new Xg;0<R.length;){const a=R.shift();switch(a.type){case "ERROR":S.handleError(a.payload);break;case "EVENT":S.O(a.eventType,a.payload)}}Ye.h=new Ye;self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data,c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(d=>{a:{var e=b.nav;for(const f of d)if(f.url===e){f.focus();break a}self.clients.openWindow(e)}});
a.waitUntil(c);a.waitUntil(Ef(b.clickEndpoint))};
self.onpush=function(a){a.waitUntil(I("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return Cf(a.data.json())}catch(c){return Promise.resolve(c.message)}return Promise.resolve()}));
a.waitUntil(Af())};
self.onpushsubscriptionchange=function(){yf()};
const Kg=new Ag;(new Sg).init();
