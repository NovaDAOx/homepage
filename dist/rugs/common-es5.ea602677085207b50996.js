!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(L){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=f;var h={};function l(){}function p(){}function d(){}var y={};u(y,i,function(){return this});var v=Object.getPrototypeOf,w=v&&v(v(j([])));w&&w!==r&&n.call(w,i)&&(y=w);var g=d.prototype=l.prototype=Object.create(y);function m(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,h=f.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(h).then(function(t){f.value=t,a(f)},function(t){return r("throw",t,a,c)})}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e(function(e,o){r(t,n,e,o)})}return o=o?o.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,u(g,"constructor",d),u(d,"constructor",p),p.displayName=u(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},m(b.prototype),u(b.prototype,a,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},m(g),u(g,c,"Generator"),u(g,i,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(self.webpackChunkrugs=self.webpackChunkrugs||[]).push([[592],{80956:function(r,i,c){"use strict";c.d(i,{d:function(){return s}});var u=c(21611),f=c(981),s=function(r){o(c,r);var i=a(c);function c(){return e(this,c),i.apply(this,arguments)}return n(c,[{key:"authenticateUser",value:function(){var e=this;return(0,u.Z)(t().mark(function r(){var n,o,i,a,c,u,s,h,l,p;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.provider&&null!==(n=e.chainConfig)&&void 0!==n&&n.chainId){t.next=2;break}throw f.RM.notConnectedError();case 2:if(o=e.chainConfig,i=o.chainNamespace,a=o.chainId,e.status===f.MP.CONNECTED){t.next=5;break}throw f.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 5:return t.next=7,e.provider.request({method:"eth_accounts"});case 7:if(!((c=t.sent)&&c.length>0)){t.next=23;break}if(!(u=(0,f.Cb)(c[0],e.name))||(0,f.$E)(u)){t.next=12;break}return t.abrupt("return",{idToken:u});case 12:return s={domain:window.location.origin,uri:window.location.href,address:c[0],chainId:parseInt(a,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:(new Date).toISOString()},t.next=15,(0,f.tV)(s,i);case 15:return h=t.sent,t.next=18,e.provider.request({method:"personal_sign",params:[h,c[0]]});case 18:return l=t.sent,t.next=21,(0,f.rn)(i,l,h,e.name,e.sessionTime);case 21:return p=t.sent,t.abrupt("return",((0,f.Fr)(c[0],e.name,p),{idToken:p}));case 23:throw f.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 24:case"end":return t.stop()}},r)}))()}},{key:"disconnect",value:function(){var e=this;return(0,u.Z)(t().mark(function r(){var n;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.status===f.MP.CONNECTED){t.next=2;break}throw f.RM.disconnectionError("Not connected with wallet");case 2:return t.next=4,e.provider.request({method:"eth_accounts"});case 4:(n=t.sent)&&n.length>0&&(0,f.qz)(n[0],e.name);case 6:case"end":return t.stop()}},r)}))()}}]),c}(f.J5)},62693:function(r,i,c){"use strict";c.d(i,{v:function(){return l}});var u=c(21611),f=c(981),s=c(97641),h=c.n(s),l=function(r){o(c,r);var i=a(c);function c(){return e(this,c),i.apply(this,arguments)}return n(c,[{key:"authenticateUser",value:function(){var e=this;return(0,u.Z)(t().mark(function r(){var n,o,i,a,c,u,s,l,p,d,y;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.provider&&null!==(n=e.chainConfig)&&void 0!==n&&n.chainId){t.next=2;break}throw f.RM.notConnectedError();case 2:if(o=e.chainConfig,i=o.chainNamespace,a=o.chainId,e.status===f.MP.CONNECTED){t.next=5;break}throw f.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 5:return t.next=7,e.provider.request({method:"getAccounts"});case 7:if(!((c=t.sent)&&c.length>0)){t.next=24;break}if(!(u=(0,f.Cb)(c[0],e.name))||(0,f.$E)(u)){t.next=12;break}return t.abrupt("return",{idToken:u});case 12:return s={domain:window.location.origin,uri:window.location.href,address:c[0],chainId:parseInt(a,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:(new Date).toISOString()},t.next=15,(0,f.tV)(s,i);case 15:return l=t.sent,p=(new TextEncoder).encode(l),t.next=19,e.provider.request({method:"signMessage",params:{message:p,display:"utf8"}});case 19:return d=t.sent,t.next=22,(0,f.rn)(i,h().encode(d),l,e.name,e.sessionTime);case 22:return y=t.sent,t.abrupt("return",((0,f.Fr)(c[0],e.name,y),{idToken:y}));case 24:throw f.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 25:case"end":return t.stop()}},r)}))()}},{key:"disconnect",value:function(){var e=this;return(0,u.Z)(t().mark(function r(){var n;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.status===f.MP.CONNECTED){t.next=2;break}throw f.RM.disconnectionError("Not connected with wallet");case 2:return t.next=4,e.provider.request({method:"getAccounts"});case 4:(n=t.sent)&&n.length>0&&(0,f.qz)(n[0],e.name);case 6:case"end":return t.stop()}},r)}))()}}]),c}(f.J5)},72360:function(t){"use strict";t.exports=function(t){if(t.length>=255)throw new TypeError("Alphabet too long");for(var e=new Uint8Array(256),r=0;r<e.length;r++)e[r]=255;for(var n=0;n<t.length;n++){var o=t.charAt(n),i=o.charCodeAt(0);if(255!==e[i])throw new TypeError(o+" is ambiguous");e[i]=n}var a=t.length,c=t.charAt(0),u=Math.log(a)/Math.log(256),f=Math.log(256)/Math.log(a);function s(t){if("string"!=typeof t)throw new TypeError("Expected String");if(0===t.length)return new Uint8Array;for(var r=0,n=0,o=0;t[r]===c;)n++,r++;for(var i=(t.length-r)*u+1>>>0,f=new Uint8Array(i);t[r];){var s=e[t.charCodeAt(r)];if(255===s)return;for(var h=0,l=i-1;(0!==s||h<o)&&-1!==l;l--,h++)f[l]=(s+=a*f[l]>>>0)%256>>>0,s=s/256>>>0;if(0!==s)throw new Error("Non-zero carry");o=h,r++}for(var p=i-o;p!==i&&0===f[p];)p++;for(var d=new Uint8Array(n+(i-p)),y=n;p!==i;)d[y++]=f[p++];return d}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===e.length)return"";for(var r=0,n=0,o=0,i=e.length;o!==i&&0===e[o];)o++,r++;for(var u=(i-o)*f+1>>>0,s=new Uint8Array(u);o!==i;){for(var h=e[o],l=0,p=u-1;(0!==h||l<n)&&-1!==p;p--,l++)s[p]=(h+=256*s[p]>>>0)%a>>>0,h=h/a>>>0;if(0!==h)throw new Error("Non-zero carry");n=l,o++}for(var d=u-n;d!==u&&0===s[d];)d++;for(var y=c.repeat(r);d<u;++d)y+=t.charAt(s[d]);return y},decodeUnsafe:s,decode:function(t){var e=s(t);if(e)return e;throw new Error("Non-base"+a+" character")}}}},97641:function(t,e,r){var n=r(72360);t.exports=n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},95439:function(t){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,o,i;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(o=n;0!=o--;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(i=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;0!=o--;){var a=i[o];if(!t(e[a],r[a]))return!1}return!0}return e!=e&&r!=r}},78936:function(t){"use strict";var e=function(t){return null!==t&&"object"==typeof t&&"function"==typeof t.pipe};e.writable=function(t){return e(t)&&!1!==t.writable&&"function"==typeof t._write&&"object"==typeof t._writableState},e.readable=function(t){return e(t)&&!1!==t.readable&&"function"==typeof t._read&&"object"==typeof t._readableState},e.duplex=function(t){return e.writable(t)&&e.readable(t)},e.transform=function(t){return e.duplex(t)&&"function"==typeof t._transform},t.exports=e}}])}();