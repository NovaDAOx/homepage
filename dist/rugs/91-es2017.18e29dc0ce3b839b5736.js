(self.webpackChunkrugs=self.webpackChunkrugs||[]).push([[91],{52993:function(e,r,t){"use strict";t.d(r,{xG:function(){return p},vU:function(){return _},Nb:function(){return P},GA:function(){return S},zK:function(){return N},qY:function(){return y},v$:function(){return R},yh:function(){return U},Xj:function(){return b},l:function(){return C}});var n=t(21611),i=t(5587),o=t(94630),s=t(56396),c=t(57434),u=t.n(c),f=(t(13870),t(45274)),a=t(58330),l=t.n(a);function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach(function(r){(0,i.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}t(30672),t(23845),t(23815);class p extends o.Ue{constructor(e){let{config:r={},state:t={}}=e;super(),(0,i.Z)(this,"defaultConfig",{}),(0,i.Z)(this,"defaultState",{}),(0,i.Z)(this,"disabled",!1),(0,i.Z)(this,"name","BaseController"),(0,i.Z)(this,"initialConfig",void 0),(0,i.Z)(this,"initialState",void 0),(0,i.Z)(this,"internalConfig",this.defaultConfig),(0,i.Z)(this,"internalState",this.defaultState),this.initialState=t,this.initialConfig=r}get config(){return this.internalConfig}get state(){return this.internalState}configure(e){if(arguments.length>2&&void 0!==arguments[2]&&!arguments[2])for(const r in e)void 0!==this.internalConfig[r]&&(this.internalConfig[r]=e[r],this[r]=e[r]);else{this.internalConfig=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?e:Object.assign(this.internalConfig,e);for(const e in this.internalConfig)void 0!==this.internalConfig[e]&&(this[e]=this.internalConfig[e])}}update(e){this.internalState=g(arguments.length>1&&void 0!==arguments[1]&&arguments[1]?{}:g({},this.internalState),e),this.emit("store",this.internalState)}initialize(){return this.internalState=this.defaultState,this.internalConfig=this.defaultConfig,this.configure(this.initialConfig),this.update(this.initialState),this}}const d=()=>!0,w=["newListener","removeListener"],v=e=>!w.includes(e);function y(e,r){let t=(r||{}).eventFilter||d;if("string"==typeof t&&"skipInternal"===t&&(t=v),"function"!=typeof t)throw new Error("createEventEmitterProxy - Invalid eventFilter");let n=e,i=e=>{const r=n;n=e,r.eventNames().filter(t).forEach(t=>{(function(e,r){return e.rawListeners(r)})(r,t).forEach(r=>e.on(t,r))}),r.removeAllListeners()};return new Proxy({},{get:(e,r)=>"setTarget"===r?i:n[r],set:(e,r,t)=>"setTarget"===r?(i=t,!0):(n[r]=t,!0)})}function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach(function(r){(0,i.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}const E=u()();function b(e){const r=new o.Ue;return r.sendAsync=function(){var r=(0,n.Z)(function*(r){const t=yield e.handle(r);if(t.error){var n,i;const e=(0,s.serializeError)(t.error,{fallbackError:{message:(null===(n=t.error)||void 0===n?void 0:n.message)||t.error.toString(),code:(null===(i=t.error)||void 0===i?void 0:i.code)||-32603}});throw s.ethErrors.rpc.internal(e)}return t.result});return function(e){return r.apply(this,arguments)}}(),r.send=(r,t)=>{if("function"!=typeof t)throw new Error('Must provide callback to "send" method.');e.handle(r,t)},e.on&&e.on("notification",e=>{r.emit("data",null,e)}),r.request=function(){var e=(0,n.Z)(function*(e){const t=O(O({},e),{},{id:E(),jsonrpc:"2.0"});return yield r.sendAsync(t)});return function(r){return e.apply(this,arguments)}}(),r}const P={IFRAME_STATUS:"iframe_status",CREATE_WINDOW:"create_window",CLOSE_WINDOW:"close_window",USER_LOGGED_IN:"user_logged_in",USER_LOGGED_OUT:"user_logged_out"},_={LOGOUT:"logout",WALLET_INSTANCE_ID:"wallet_instance_id",USER_INFO:"user_info",SET_PROVIDER:"set_provider",TOPUP:"topup",IFRAME_STATUS:"iframe_status",OPENED_WINDOW:"opened_window",CLOSED_WINDOW:"closed_window",GET_PROVIDER_STATE:"get_provider_state",LOGIN_WITH_PRIVATE_KEY:"login_with_private_key"},S={GET_PROVIDER_STATE:"wallet_get_provider_state"},N={ACCOUNTS_CHANGED:"wallet_accounts_changed",CHAIN_CHANGED:"wallet_chain_changed",UNLOCK_STATE_CHANGED:"wallet_unlock_state_changed"};function x(e,r){if(""!==e&&!/^[a-f0-9]+$/iu.test(e))throw new Error("Expected an unprefixed hex string. Received: ".concat(e));if(r<0)throw new Error("Expected a non-negative integer target length. Received: ".concat(r));return String.prototype.padStart.call(e,r,"0")}const C=(e,r)=>{const t=Buffer.from(e,"hex"),n=(0,f.stripHexPrefix)(r),i=(0,f.ecsign)(Buffer.from(n,"hex"),t);return function(e,r,t){const n=(0,f.fromSigned)(r),i=(0,f.fromSigned)(t),o=(0,f.bufferToInt)(e),s=x((0,f.toUnsigned)(n).toString("hex"),64),c=x((0,f.toUnsigned)(i).toString("hex"),64),u=(0,f.stripHexPrefix)(function(e){const r=e.toString(16);return"0x".concat(r)}(o));return(0,f.addHexPrefix)(s.concat(c,u))}((0,f.intToBuffer)(i.v),i.r,i.s)};class A extends Error{}const T=["Gateway timeout","ETIMEDOUT","failed to parse response body","Failed to fetch"];function j(e){switch(e.status){case 405:throw s.ethErrors.rpc.methodNotFound();case 418:throw s.ethErrors.rpc.internal({message:"Request is being rate limited."});case 503:case 504:throw s.ethErrors.rpc.internal({message:"Gateway timeout. The request took too long to process.This can happen when querying over too wide a block range."})}}function D(e){return new Promise(r=>setTimeout(r,e))}function I(e,r){if(200!==e.status)throw s.ethErrors.rpc.internal({message:"Non-200 status code: '".concat(e.status,"'"),data:r});if(r.error)throw s.ethErrors.rpc.internal({data:r.error});return r.result}function R(e){let{rpcTarget:r,originHttpHeaderKey:t}=e;return(0,o.Pk)(function(){var e=(0,n.Z)(function*(e,n,i){const{fetchUrl:o,fetchParams:s}=function(e){let{req:r,rpcTarget:t,originHttpHeaderKey:n}=e;const i=new URL(t),o=r.origin,s={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:r.id,jsonrpc:r.jsonrpc,method:r.method,params:r.params})};return n&&o&&(s.headers[n]=o),{fetchUrl:i.href,fetchParams:s}}({req:e,rpcTarget:r,originHttpHeaderKey:t});for(let r=0;r<5;r++){try{const e=yield fetch(o,s);j(e);const r=yield e.json(),t=I(e,r);return void(n.result=t)}catch(c){const e=c.toString();if(!T.some(r=>e.includes(r)))throw c}yield D(1e3)}});return function(r,t,n){return e.apply(this,arguments)}}())}function U(e){return function(r,t,n){n(n=>{t.error&&l().warn("Error in RPC response:\n",t),r.isTorusInternal||(l().info("RPC (".concat(e.origin,"):"),r,"->",t),n())})}}},45274:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t);var i=Object.getOwnPropertyDescriptor(r,t);i&&!("get"in i?!r.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,n,i)}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),i=this&&this.__exportStar||function(e,r){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(r,t)||n(r,e,t)};Object.defineProperty(r,"__esModule",{value:!0}),r.isHexString=r.getKeys=r.fromAscii=r.fromUtf8=r.toAscii=r.arrayContainsArray=r.getBinarySize=r.padToEven=r.stripHexPrefix=r.isHexPrefixed=void 0,i(t(45579),r),i(t(29725),r),i(t(37141),r),i(t(23813),r),i(t(90769),r),i(t(96487),r),i(t(66406),r),i(t(75069),r),i(t(82099),r);var o=t(59966);Object.defineProperty(r,"isHexPrefixed",{enumerable:!0,get:function(){return o.isHexPrefixed}}),Object.defineProperty(r,"stripHexPrefix",{enumerable:!0,get:function(){return o.stripHexPrefix}}),Object.defineProperty(r,"padToEven",{enumerable:!0,get:function(){return o.padToEven}}),Object.defineProperty(r,"getBinarySize",{enumerable:!0,get:function(){return o.getBinarySize}}),Object.defineProperty(r,"arrayContainsArray",{enumerable:!0,get:function(){return o.arrayContainsArray}}),Object.defineProperty(r,"toAscii",{enumerable:!0,get:function(){return o.toAscii}}),Object.defineProperty(r,"fromUtf8",{enumerable:!0,get:function(){return o.fromUtf8}}),Object.defineProperty(r,"fromAscii",{enumerable:!0,get:function(){return o.fromAscii}}),Object.defineProperty(r,"getKeys",{enumerable:!0,get:function(){return o.getKeys}}),Object.defineProperty(r,"isHexString",{enumerable:!0,get:function(){return o.isHexString}})},91091:function(e,r,t){"use strict";t.d(r,{Zk:function(){return g},FL:function(){return p}});var n=t(21611),i=t(5587),o=t(52993),s=t(981),c=t(56396),u=t(94630),f=t(57434),a=t.n(f);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach(function(r){(0,i.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}class g extends o.xG{constructor(e){let{config:r,state:t}=e;if(super({config:r,state:t}),(0,i.Z)(this,"_providerEngineProxy",null),!r.chainConfig)throw s.Ty.invalidProviderConfigError("Please provide chainConfig");if(!r.chainConfig.chainId)throw s.Ty.invalidProviderConfigError("Please provide chainId inside chainConfig");if(!r.chainConfig.rpcTarget)throw s.Ty.invalidProviderConfigError("Please provide rpcTarget inside chainConfig");this.defaultState={chainId:"loading"},this.defaultConfig={chainConfig:r.chainConfig,networks:{[r.chainConfig.chainId]:r.chainConfig}},super.initialize()}get provider(){return this._providerEngineProxy}set provider(e){throw new Error("Method not implemented.")}addChain(e){if(!e.chainId)throw c.ethErrors.rpc.invalidParams("chainId is required");if(!e.rpcTarget)throw c.ethErrors.rpc.invalidParams("chainId is required");this.configure({networks:h(h({},this.config.networks),{},{[e.chainId]:e})})}getChainConfig(e){var r;const t=null===(r=this.config.networks)||void 0===r?void 0:r[e];if(!t)throw c.ethErrors.rpc.invalidRequest("Chain ".concat(e," is not supported, please add chainConfig for it"));return t}getProviderEngineProxy(){return this._providerEngineProxy}updateProviderEngineProxy(e){this._providerEngineProxy?this._providerEngineProxy.setTarget(e):this._providerEngineProxy=(0,o.qY)(e)}}class p{constructor(){(0,i.Z)(this,"_providerEngineProxy",null)}get provider(){return this._providerEngineProxy}set provider(e){throw new Error("Method not implemented.")}addChain(e){throw new Error("Method not implemented.")}setupProvider(e){var r=this;return(0,n.Z)(function*(){const t=r.getPrivKeyMiddleware(e),n=new u.eI;n.push(t);const i=(0,o.Xj)(n);r.updateProviderEngineProxy(i)})()}switchChain(e){return(0,n.Z)(function*(){return Promise.resolve()})()}getProviderEngineProxy(){return this._providerEngineProxy}updateProviderEngineProxy(e){this._providerEngineProxy?this._providerEngineProxy.setTarget(e):this._providerEngineProxy=(0,o.qY)(e)}getPrivKeyMiddleware(e){const r={getPrivatekey:(t=(0,n.Z)(function*(){return e}),function(){return t.apply(this,arguments)})};var t;return this.createPrivKeyMiddleware(r)}createPrivKeyMiddleware(e){let{getPrivatekey:r}=e;function t(){return(t=(0,n.Z)(function*(e,t){t.result=yield r()})).apply(this,arguments)}return(0,u.v0)({private_key:(0,u.Pk)(function(e,r){return t.apply(this,arguments)})})}}(0,i.Z)(p,"getProviderInstance",function(){var e=(0,n.Z)(function*(e){const r=new p;return yield r.setupProvider(e.privKey),r});return function(r){return e.apply(this,arguments)}}()),a()()},13870:function(e,r,t){"use strict";t.d(r,{O:function(){return y}});var n=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,i=Math.ceil,o=Math.floor,s="[BigNumber Error] ",c=s+"Number primitive has more than 15 significant digits: ",u=1e14,f=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],a=1e9;function l(e){var r=0|e;return e>0||e===r?r:r-1}function h(e){for(var r,t,n=1,i=e.length,o=e[0]+"";n<i;){for(t=14-(r=e[n++]+"").length;t--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function g(e,r){var t,n,i=e.c,o=r.c,s=e.s,c=r.s,u=e.e,f=r.e;if(!s||!c)return null;if(n=o&&!o[0],(t=i&&!i[0])||n)return t?n?0:-c:s;if(s!=c)return s;if(t=s<0,n=u==f,!i||!o)return n?0:!i^t?1:-1;if(!n)return u>f^t?1:-1;for(c=(u=i.length)<(f=o.length)?u:f,s=0;s<c;s++)if(i[s]!=o[s])return i[s]>o[s]^t?1:-1;return u==f?0:u>f^t?1:-1}function p(e,r,t,n){if(e<r||e>t||e!==o(e))throw Error(s+(n||"Argument")+("number"==typeof e?e<r||e>t?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function d(e){var r=e.c.length-1;return l(e.e/14)==r&&e.c[r]%2!=0}function w(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function v(e,r,t){var n,i;if(r<0){for(i=t+".";++r;i+=t);e=i+e}else if(++r>(n=e.length)){for(i=t,r-=n;--r;i+=t);e+=i}else r<n&&(e=e.slice(0,r)+"."+e.slice(r));return e}var y=function e(r){var t,y,m,O,E,b,P,_,S,N=G.prototype={constructor:G,toString:null,valueOf:null},x=new G(1),C=20,A=4,T=-7,j=21,D=-1e7,I=1e7,R=!1,U=1,L=0,k={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},B="0123456789abcdefghijklmnopqrstuvwxyz",M=!0;function G(e,r){var t,i,s,u,f,a,l,h,g=this;if(!(g instanceof G))return new G(e,r);if(null==r){if(e&&!0===e._isBigNumber)return g.s=e.s,void(!e.c||e.e>I?g.c=g.e=null:e.e<D?g.c=[g.e=0]:(g.e=e.e,g.c=e.c.slice()));if((a="number"==typeof e)&&0*e==0){if(g.s=1/e<0?(e=-e,-1):1,e===~~e){for(u=0,f=e;f>=10;f/=10,u++);return void(u>I?g.c=g.e=null:(g.e=u,g.c=[e]))}h=String(e)}else{if(!n.test(h=String(e)))return m(g,h,a);g.s=45==h.charCodeAt(0)?(h=h.slice(1),-1):1}(u=h.indexOf("."))>-1&&(h=h.replace(".","")),(f=h.search(/e/i))>0?(u<0&&(u=f),u+=+h.slice(f+1),h=h.substring(0,f)):u<0&&(u=h.length)}else{if(p(r,2,B.length,"Base"),10==r&&M)return F(g=new G(e),C+g.e+1,A);if(h=String(e),a="number"==typeof e){if(0*e!=0)return m(g,h,a,r);if(g.s=1/e<0?(h=h.slice(1),-1):1,G.DEBUG&&h.replace(/^0\.0*|\./,"").length>15)throw Error(c+e)}else g.s=45===h.charCodeAt(0)?(h=h.slice(1),-1):1;for(t=B.slice(0,r),u=f=0,l=h.length;f<l;f++)if(t.indexOf(i=h.charAt(f))<0){if("."==i){if(f>u){u=l;continue}}else if(!s&&(h==h.toUpperCase()&&(h=h.toLowerCase())||h==h.toLowerCase()&&(h=h.toUpperCase()))){s=!0,f=-1,u=0;continue}return m(g,String(e),a,r)}a=!1,(u=(h=y(h,r,10,g.s)).indexOf("."))>-1?h=h.replace(".",""):u=h.length}for(f=0;48===h.charCodeAt(f);f++);for(l=h.length;48===h.charCodeAt(--l););if(h=h.slice(f,++l)){if(l-=f,a&&G.DEBUG&&l>15&&(e>9007199254740991||e!==o(e)))throw Error(c+g.s*e);if((u=u-f-1)>I)g.c=g.e=null;else if(u<D)g.c=[g.e=0];else{if(g.e=u,g.c=[],f=(u+1)%14,u<0&&(f+=14),f<l){for(f&&g.c.push(+h.slice(0,f)),l-=14;f<l;)g.c.push(+h.slice(f,f+=14));f=14-(h=h.slice(f)).length}else f-=l;for(;f--;h+="0");g.c.push(+h)}}else g.c=[g.e=0]}function H(e,r,t,n){var i,o,s,c,u;if(null==t?t=A:p(t,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==r)u=h(e.c),u=1==n||2==n&&(s<=T||s>=j)?w(u,s):v(u,s,"0");else if(o=(e=F(new G(e),r,t)).e,c=(u=h(e.c)).length,1==n||2==n&&(r<=o||o<=T)){for(;c<r;u+="0",c++);u=w(u,o)}else if(r-=s,u=v(u,o,"0"),o+1>c){if(--r>0)for(u+=".";r--;u+="0");}else if((r+=o-c)>0)for(o+1==c&&(u+=".");r--;u+="0");return e.s<0&&i?"-"+u:u}function Z(e,r){for(var t,n=1,i=new G(e[0]);n<e.length;n++){if(!(t=new G(e[n])).s){i=t;break}r.call(i,t)&&(i=t)}return i}function q(e,r,t){for(var n=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,n++);return(t=n+14*t-1)>I?e.c=e.e=null:t<D?e.c=[e.e=0]:(e.e=t,e.c=r),e}function F(e,r,t,n){var s,c,a,l,h,g,p,d=e.c,w=f;if(d){e:{for(s=1,l=d[0];l>=10;l/=10,s++);if((c=r-s)<0)c+=14,p=(h=d[g=0])/w[s-(a=r)-1]%10|0;else if((g=i((c+1)/14))>=d.length){if(!n)break e;for(;d.length<=g;d.push(0));h=p=0,s=1,a=(c%=14)-14+1}else{for(h=l=d[g],s=1;l>=10;l/=10,s++);p=(a=(c%=14)-14+s)<0?0:h/w[s-a-1]%10|0}if(n=n||r<0||null!=d[g+1]||(a<0?h:h%w[s-a-1]),n=t<4?(p||n)&&(0==t||t==(e.s<0?3:2)):p>5||5==p&&(4==t||n||6==t&&(c>0?a>0?h/w[s-a]:0:d[g-1])%10&1||t==(e.s<0?8:7)),r<1||!d[0])return d.length=0,n?(d[0]=w[(14-(r-=e.e+1)%14)%14],e.e=-r||0):d[0]=e.e=0,e;if(0==c?(d.length=g,l=1,g--):(d.length=g+1,l=w[14-c],d[g]=a>0?o(h/w[s-a]%w[a])*l:0),n)for(;;){if(0==g){for(c=1,a=d[0];a>=10;a/=10,c++);for(a=d[0]+=l,l=1;a>=10;a/=10,l++);c!=l&&(e.e++,d[0]==u&&(d[0]=1));break}if(d[g]+=l,d[g]!=u)break;d[g--]=0,l=1}for(c=d.length;0===d[--c];d.pop());}e.e>I?e.c=e.e=null:e.e<D&&(e.c=[e.e=0])}return e}function z(e){var r,t=e.e;return null===t?e.toString():(r=h(e.c),r=t<=T||t>=j?w(r,t):v(r,t,"0"),e.s<0?"-"+r:r)}return G.clone=e,G.ROUND_UP=0,G.ROUND_DOWN=1,G.ROUND_CEIL=2,G.ROUND_FLOOR=3,G.ROUND_HALF_UP=4,G.ROUND_HALF_DOWN=5,G.ROUND_HALF_EVEN=6,G.ROUND_HALF_CEIL=7,G.ROUND_HALF_FLOOR=8,G.EUCLID=9,G.config=G.set=function(e){var r,t;if(null!=e){if("object"!=typeof e)throw Error(s+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(p(t=e[r],0,a,r),C=t),e.hasOwnProperty(r="ROUNDING_MODE")&&(p(t=e[r],0,8,r),A=t),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((t=e[r])&&t.pop?(p(t[0],-a,0,r),p(t[1],0,a,r),T=t[0],j=t[1]):(p(t,-a,a,r),T=-(j=t<0?-t:t))),e.hasOwnProperty(r="RANGE"))if((t=e[r])&&t.pop)p(t[0],-a,-1,r),p(t[1],1,a,r),D=t[0],I=t[1];else{if(p(t,-a,a,r),!t)throw Error(s+r+" cannot be zero: "+t);D=-(I=t<0?-t:t)}if(e.hasOwnProperty(r="CRYPTO")){if((t=e[r])!==!!t)throw Error(s+r+" not true or false: "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw R=!t,Error(s+"crypto unavailable");R=t}else R=t}if(e.hasOwnProperty(r="MODULO_MODE")&&(p(t=e[r],0,9,r),U=t),e.hasOwnProperty(r="POW_PRECISION")&&(p(t=e[r],0,a,r),L=t),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(t=e[r]))throw Error(s+r+" not an object: "+t);k=t}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(t=e[r])||/^.?$|[+\-.\s]|(.).*\1/.test(t))throw Error(s+r+" invalid: "+t);M="0123456789"==t.slice(0,10),B=t}}return{DECIMAL_PLACES:C,ROUNDING_MODE:A,EXPONENTIAL_AT:[T,j],RANGE:[D,I],CRYPTO:R,MODULO_MODE:U,POW_PRECISION:L,FORMAT:k,ALPHABET:B}},G.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!G.DEBUG)return!0;var r,t,n=e.c,i=e.e,c=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===c||-1===c)&&i>=-a&&i<=a&&i===o(i)){if(0===n[0]){if(0===i&&1===n.length)return!0;break e}if((r=(i+1)%14)<1&&(r+=14),String(n[0]).length==r){for(r=0;r<n.length;r++)if((t=n[r])<0||t>=u||t!==o(t))break e;if(0!==t)return!0}}}else if(null===n&&null===i&&(null===c||1===c||-1===c))return!0;throw Error(s+"Invalid BigNumber: "+e)},G.maximum=G.max=function(){return Z(arguments,N.lt)},G.minimum=G.min=function(){return Z(arguments,N.gt)},G.random=(O=9007199254740992*Math.random()&2097151?function(){return o(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var r,t,n,c,u,l=0,h=[],g=new G(x);if(null==e?e=C:p(e,0,a),c=i(e/14),R)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(c*=2));l<c;)(u=131072*r[l]+(r[l+1]>>>11))>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),r[l]=t[0],r[l+1]=t[1]):(h.push(u%1e14),l+=2);l=c/2}else{if(!crypto.randomBytes)throw R=!1,Error(s+"crypto unavailable");for(r=crypto.randomBytes(c*=7);l<c;)(u=281474976710656*(31&r[l])+1099511627776*r[l+1]+4294967296*r[l+2]+16777216*r[l+3]+(r[l+4]<<16)+(r[l+5]<<8)+r[l+6])>=9e15?crypto.randomBytes(7).copy(r,l):(h.push(u%1e14),l+=7);l=c/7}if(!R)for(;l<c;)(u=O())<9e15&&(h[l++]=u%1e14);for(e%=14,(c=h[--l])&&e&&(h[l]=o(c/(u=f[14-e]))*u);0===h[l];h.pop(),l--);if(l<0)h=[n=0];else{for(n=-1;0===h[0];h.splice(0,1),n-=14);for(l=1,u=h[0];u>=10;u/=10,l++);l<14&&(n-=14-l)}return g.e=n,g.c=h,g}),G.sum=function(){for(var e=1,r=arguments,t=new G(r[0]);e<r.length;)t=t.plus(r[e++]);return t},y=function(){function e(e,r,t,n){for(var i,o,s=[0],c=0,u=e.length;c<u;){for(o=s.length;o--;s[o]*=r);for(s[0]+=n.indexOf(e.charAt(c++)),i=0;i<s.length;i++)s[i]>t-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/t|0,s[i]%=t)}return s.reverse()}return function(r,n,i,o,s){var c,u,f,a,l,g,p,d,w=r.indexOf("."),y=C,m=A;for(w>=0&&(a=L,L=0,r=r.replace(".",""),g=(d=new G(n)).pow(r.length-w),L=a,d.c=e(v(h(g.c),g.e,"0"),10,i,"0123456789"),d.e=d.c.length),f=a=(p=e(r,n,i,s?(c=B,"0123456789"):(c="0123456789",B))).length;0==p[--a];p.pop());if(!p[0])return c.charAt(0);if(w<0?--f:(g.c=p,g.e=f,g.s=o,p=(g=t(g,d,y,m,i)).c,l=g.r,f=g.e),w=p[u=f+y+1],a=i/2,l=l||u<0||null!=p[u+1],l=m<4?(null!=w||l)&&(0==m||m==(g.s<0?3:2)):w>a||w==a&&(4==m||l||6==m&&1&p[u-1]||m==(g.s<0?8:7)),u<1||!p[0])r=l?v(c.charAt(1),-y,c.charAt(0)):c.charAt(0);else{if(p.length=u,l)for(--i;++p[--u]>i;)p[u]=0,u||(++f,p=[1].concat(p));for(a=p.length;!p[--a];);for(w=0,r="";w<=a;r+=c.charAt(p[w++]));r=v(r,f,c.charAt(0))}return r}}(),t=function(){function e(e,r,t){var n,i,o,s,c=0,u=e.length,f=r%1e7,a=r/1e7|0;for(e=e.slice();u--;)c=((i=f*(o=e[u]%1e7)+(n=a*o+(s=e[u]/1e7|0)*f)%1e7*1e7+c)/t|0)+(n/1e7|0)+a*s,e[u]=i%t;return c&&(e=[c].concat(e)),e}function r(e,r,t,n){var i,o;if(t!=n)o=t>n?1:-1;else for(i=o=0;i<t;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function t(e,r,t,n){for(var i=0;t--;)e[t]-=i,e[t]=(i=e[t]<r[t]?1:0)*n+e[t]-r[t];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,i,s,c,f){var a,h,g,p,d,w,v,y,m,O,E,b,P,_,S,N,x,C=n.s==i.s?1:-1,A=n.c,T=i.c;if(!(A&&A[0]&&T&&T[0]))return new G(n.s&&i.s&&(A?!T||A[0]!=T[0]:T)?A&&0==A[0]||!T?0*C:C/0:NaN);for(m=(y=new G(C)).c=[],C=s+(h=n.e-i.e)+1,f||(f=u,h=l(n.e/14)-l(i.e/14),C=C/14|0),g=0;T[g]==(A[g]||0);g++);if(T[g]>(A[g]||0)&&h--,C<0)m.push(1),p=!0;else{for(_=A.length,N=T.length,g=0,C+=2,(d=o(f/(T[0]+1)))>1&&(T=e(T,d,f),A=e(A,d,f),N=T.length,_=A.length),P=N,E=(O=A.slice(0,N)).length;E<N;O[E++]=0);x=T.slice(),x=[0].concat(x),S=T[0],T[1]>=f/2&&S++;do{if(d=0,(a=r(T,O,N,E))<0){if(b=O[0],N!=E&&(b=b*f+(O[1]||0)),(d=o(b/S))>1)for(d>=f&&(d=f-1),v=(w=e(T,d,f)).length,E=O.length;1==r(w,O,v,E);)d--,t(w,N<v?x:T,v,f),v=w.length,a=1;else 0==d&&(a=d=1),v=(w=T.slice()).length;if(v<E&&(w=[0].concat(w)),t(O,w,E,f),E=O.length,-1==a)for(;r(T,O,N,E)<1;)d++,t(O,N<E?x:T,E,f),E=O.length}else 0===a&&(d++,O=[0]);m[g++]=d,O[0]?O[E++]=A[P]||0:(O=[A[P]],E=1)}while((P++<_||null!=O[0])&&C--);p=null!=O[0],m[0]||m.splice(0,1)}if(f==u){for(g=1,C=m[0];C>=10;C/=10,g++);F(y,s+(y.e=g+14*h-1)+1,c,p)}else y.e=h,y.r=+p;return y}}(),E=/^(-?)0([xbo])(?=\w[\w.]*$)/i,b=/^([^.]+)\.$/,P=/^\.([^.]+)$/,_=/^-?(Infinity|NaN)$/,S=/^\s*\+(?=[\w.])|^\s+|\s+$/g,m=function(e,r,t,n){var i,o=t?r:r.replace(S,"");if(_.test(o))e.s=isNaN(o)?null:o<0?-1:1;else{if(!t&&(o=o.replace(E,function(e,r,t){return i="x"==(t=t.toLowerCase())?16:"b"==t?2:8,n&&n!=i?e:r}),n&&(i=n,o=o.replace(b,"$1").replace(P,"0.$1")),r!=o))return new G(o,i);if(G.DEBUG)throw Error(s+"Not a"+(n?" base "+n:"")+" number: "+r);e.s=null}e.c=e.e=null},N.absoluteValue=N.abs=function(){var e=new G(this);return e.s<0&&(e.s=1),e},N.comparedTo=function(e,r){return g(this,new G(e,r))},N.decimalPlaces=N.dp=function(e,r){var t,n,i,o=this;if(null!=e)return p(e,0,a),null==r?r=A:p(r,0,8),F(new G(o),e+o.e+1,r);if(!(t=o.c))return null;if(n=14*((i=t.length-1)-l(this.e/14)),i=t[i])for(;i%10==0;i/=10,n--);return n<0&&(n=0),n},N.dividedBy=N.div=function(e,r){return t(this,new G(e,r),C,A)},N.dividedToIntegerBy=N.idiv=function(e,r){return t(this,new G(e,r),0,1)},N.exponentiatedBy=N.pow=function(e,r){var t,n,c,u,f,a,l,h,g=this;if((e=new G(e)).c&&!e.isInteger())throw Error(s+"Exponent not an integer: "+z(e));if(null!=r&&(r=new G(r)),f=e.e>14,!g.c||!g.c[0]||1==g.c[0]&&!g.e&&1==g.c.length||!e.c||!e.c[0])return h=new G(Math.pow(+z(g),f?2-d(e):+z(e))),r?h.mod(r):h;if(a=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new G(NaN);(n=!a&&g.isInteger()&&r.isInteger())&&(g=g.mod(r))}else{if(e.e>9&&(g.e>0||g.e<-1||(0==g.e?g.c[0]>1||f&&g.c[1]>=24e7:g.c[0]<8e13||f&&g.c[0]<=9999975e7)))return u=g.s<0&&d(e)?-0:0,g.e>-1&&(u=1/u),new G(a?1/u:u);L&&(u=i(L/14+2))}for(f?(t=new G(.5),a&&(e.s=1),l=d(e)):l=(c=Math.abs(+z(e)))%2,h=new G(x);;){if(l){if(!(h=h.times(g)).c)break;u?h.c.length>u&&(h.c.length=u):n&&(h=h.mod(r))}if(c){if(0===(c=o(c/2)))break;l=c%2}else if(F(e=e.times(t),e.e+1,1),e.e>14)l=d(e);else{if(0==(c=+z(e)))break;l=c%2}g=g.times(g),u?g.c&&g.c.length>u&&(g.c.length=u):n&&(g=g.mod(r))}return n?h:(a&&(h=x.div(h)),r?h.mod(r):u?F(h,L,A,void 0):h)},N.integerValue=function(e){var r=new G(this);return null==e?e=A:p(e,0,8),F(r,r.e+1,e)},N.isEqualTo=N.eq=function(e,r){return 0===g(this,new G(e,r))},N.isFinite=function(){return!!this.c},N.isGreaterThan=N.gt=function(e,r){return g(this,new G(e,r))>0},N.isGreaterThanOrEqualTo=N.gte=function(e,r){return 1===(r=g(this,new G(e,r)))||0===r},N.isInteger=function(){return!!this.c&&l(this.e/14)>this.c.length-2},N.isLessThan=N.lt=function(e,r){return g(this,new G(e,r))<0},N.isLessThanOrEqualTo=N.lte=function(e,r){return-1===(r=g(this,new G(e,r)))||0===r},N.isNaN=function(){return!this.s},N.isNegative=function(){return this.s<0},N.isPositive=function(){return this.s>0},N.isZero=function(){return!!this.c&&0==this.c[0]},N.minus=function(e,r){var t,n,i,o,s=this,c=s.s;if(r=(e=new G(e,r)).s,!c||!r)return new G(NaN);if(c!=r)return e.s=-r,s.plus(e);var f=s.e/14,a=e.e/14,h=s.c,g=e.c;if(!f||!a){if(!h||!g)return h?(e.s=-r,e):new G(g?s:NaN);if(!h[0]||!g[0])return g[0]?(e.s=-r,e):new G(h[0]?s:3==A?-0:0)}if(f=l(f),a=l(a),h=h.slice(),c=f-a){for((o=c<0)?(c=-c,i=h):(a=f,i=g),i.reverse(),r=c;r--;i.push(0));i.reverse()}else for(n=(o=(c=h.length)<(r=g.length))?c:r,c=r=0;r<n;r++)if(h[r]!=g[r]){o=h[r]<g[r];break}if(o&&(i=h,h=g,g=i,e.s=-e.s),(r=(n=g.length)-(t=h.length))>0)for(;r--;h[t++]=0);for(r=u-1;n>c;){if(h[--n]<g[n]){for(t=n;t&&!h[--t];h[t]=r);--h[t],h[n]+=u}h[n]-=g[n]}for(;0==h[0];h.splice(0,1),--a);return h[0]?q(e,h,a):(e.s=3==A?-1:1,e.c=[e.e=0],e)},N.modulo=N.mod=function(e,r){var n,i,o=this;return e=new G(e,r),!o.c||!e.s||e.c&&!e.c[0]?new G(NaN):!e.c||o.c&&!o.c[0]?new G(o):(9==U?(i=e.s,e.s=1,n=t(o,e,0,3),e.s=i,n.s*=i):n=t(o,e,0,U),(e=o.minus(n.times(e))).c[0]||1!=U||(e.s=o.s),e)},N.multipliedBy=N.times=function(e,r){var t,n,i,o,s,c,f,a,h,g,p,d,w,v,y=this,m=y.c,O=(e=new G(e,r)).c;if(!(m&&O&&m[0]&&O[0]))return!y.s||!e.s||m&&!m[0]&&!O||O&&!O[0]&&!m?e.c=e.e=e.s=null:(e.s*=y.s,m&&O?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=l(y.e/14)+l(e.e/14),e.s*=y.s,(f=m.length)<(g=O.length)&&(w=m,m=O,O=w,i=f,f=g,g=i),i=f+g,w=[];i--;w.push(0));for(v=u,i=g;--i>=0;){for(t=0,p=O[i]%1e7,d=O[i]/1e7|0,o=i+(s=f);o>i;)t=((a=p*(a=m[--s]%1e7)+(c=d*a+(h=m[s]/1e7|0)*p)%1e7*1e7+w[o]+t)/v|0)+(c/1e7|0)+d*h,w[o--]=a%v;w[o]=t}return t?++n:w.splice(0,1),q(e,w,n)},N.negated=function(){var e=new G(this);return e.s=-e.s||null,e},N.plus=function(e,r){var t,n=this,i=n.s;if(r=(e=new G(e,r)).s,!i||!r)return new G(NaN);if(i!=r)return e.s=-r,n.minus(e);var o=n.e/14,s=e.e/14,c=n.c,f=e.c;if(!o||!s){if(!c||!f)return new G(i/0);if(!c[0]||!f[0])return f[0]?e:new G(c[0]?n:0*i)}if(o=l(o),s=l(s),c=c.slice(),i=o-s){for(i>0?(s=o,t=f):(i=-i,t=c),t.reverse();i--;t.push(0));t.reverse()}for((i=c.length)-(r=f.length)<0&&(t=f,f=c,c=t,r=i),i=0;r;)i=(c[--r]=c[r]+f[r]+i)/u|0,c[r]=u===c[r]?0:c[r]%u;return i&&(c=[i].concat(c),++s),q(e,c,s)},N.precision=N.sd=function(e,r){var t,n,i,o=this;if(null!=e&&e!==!!e)return p(e,1,a),null==r?r=A:p(r,0,8),F(new G(o),e,r);if(!(t=o.c))return null;if(n=14*(i=t.length-1)+1,i=t[i]){for(;i%10==0;i/=10,n--);for(i=t[0];i>=10;i/=10,n++);}return e&&o.e+1>n&&(n=o.e+1),n},N.shiftedBy=function(e){return p(e,-9007199254740991,9007199254740991),this.times("1e"+e)},N.squareRoot=N.sqrt=function(){var e,r,n,i,o,s=this,c=s.c,u=s.s,f=s.e,a=C+4,g=new G("0.5");if(1!==u||!c||!c[0])return new G(!u||u<0&&(!c||c[0])?NaN:c?s:1/0);if(0==(u=Math.sqrt(+z(s)))||u==1/0?(((r=h(c)).length+f)%2==0&&(r+="0"),u=Math.sqrt(+r),f=l((f+1)/2)-(f<0||f%2),n=new G(r=u==1/0?"5e"+f:(r=u.toExponential()).slice(0,r.indexOf("e")+1)+f)):n=new G(u+""),n.c[0])for((u=(f=n.e)+a)<3&&(u=0);;)if(n=g.times((o=n).plus(t(s,o,a,1))),h(o.c).slice(0,u)===(r=h(n.c)).slice(0,u)){if(n.e<f&&--u,"9999"!=(r=r.slice(u-3,u+1))&&(i||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(F(n,n.e+C+2,1),e=!n.times(n).eq(s));break}if(!i&&(F(o,o.e+C+2,0),o.times(o).eq(s))){n=o;break}a+=4,u+=4,i=1}return F(n,n.e+C+1,A,e)},N.toExponential=function(e,r){return null!=e&&(p(e,0,a),e++),H(this,e,r,1)},N.toFixed=function(e,r){return null!=e&&(p(e,0,a),e=e+this.e+1),H(this,e,r)},N.toFormat=function(e,r,t){var n,i=this;if(null==t)null!=e&&r&&"object"==typeof r?(t=r,r=null):e&&"object"==typeof e?(t=e,e=r=null):t=k;else if("object"!=typeof t)throw Error(s+"Argument not an object: "+t);if(n=i.toFixed(e,r),i.c){var o,c=n.split("."),u=+t.groupSize,f=+t.secondaryGroupSize,a=t.groupSeparator||"",l=c[0],h=c[1],g=i.s<0,p=g?l.slice(1):l,d=p.length;if(f&&(o=u,u=f,f=o,d-=o),u>0&&d>0){for(l=p.substr(0,o=d%u||u);o<d;o+=u)l+=a+p.substr(o,u);f>0&&(l+=a+p.slice(o)),g&&(l="-"+l)}n=h?l+(t.decimalSeparator||"")+((f=+t.fractionGroupSize)?h.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(t.fractionGroupSeparator||"")):h):l}return(t.prefix||"")+n+(t.suffix||"")},N.toFraction=function(e){var r,n,i,o,c,u,a,l,g,p,d,w,v=this,y=v.c;if(null!=e&&(!(a=new G(e)).isInteger()&&(a.c||1!==a.s)||a.lt(x)))throw Error(s+"Argument "+(a.isInteger()?"out of range: ":"not an integer: ")+z(a));if(!y)return new G(v);for(r=new G(x),g=n=new G(x),i=l=new G(x),w=h(y),c=r.e=w.length-v.e-1,r.c[0]=f[(u=c%14)<0?14+u:u],e=!e||a.comparedTo(r)>0?c>0?r:g:a,u=I,I=1/0,a=new G(w),l.c[0]=0;p=t(a,r,0,1),1!=(o=n.plus(p.times(i))).comparedTo(e);)n=i,i=o,g=l.plus(p.times(o=g)),l=o,r=a.minus(p.times(o=r)),a=o;return o=t(e.minus(n),i,0,1),l=l.plus(o.times(g)),n=n.plus(o.times(i)),l.s=g.s=v.s,d=t(g,i,c*=2,A).minus(v).abs().comparedTo(t(l,n,c,A).minus(v).abs())<1?[g,i]:[l,n],I=u,d},N.toNumber=function(){return+z(this)},N.toPrecision=function(e,r){return null!=e&&p(e,1,a),H(this,e,r,2)},N.toString=function(e){var r,t=this,n=t.s,i=t.e;return null===i?n?(r="Infinity",n<0&&(r="-"+r)):r="NaN":(null==e?r=i<=T||i>=j?w(h(t.c),i):v(h(t.c),i,"0"):10===e&&M?r=v(h((t=F(new G(t),C+i+1,A)).c),t.e,"0"):(p(e,2,B.length,"Base"),r=y(v(h(t.c),i,"0"),10,e,n,!0)),n<0&&t.c[0]&&(r="-"+r)),r},N.valueOf=N.toJSON=function(){return z(this)},N._isBigNumber=!0,N[Symbol.toStringTag]="BigNumber",N[Symbol.for("nodejs.util.inspect.custom")]=N.valueOf,null!=r&&G.set(r),G}();r.Z=y}}]);