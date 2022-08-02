(self.webpackChunkrugs=self.webpackChunkrugs||[]).push([[91],{52993:function(e,r,t){"use strict";t.d(r,{xG:function(){return p},vU:function(){return _},Nb:function(){return b},GA:function(){return S},zK:function(){return N},qY:function(){return y},v$:function(){return D},yh:function(){return R},Xj:function(){return P},l:function(){return T}});var n=t(16304),i=t(5587),o=t(94630),s=t(59392),c=t(57434),u=t.n(c),f=(t(15788),t(13635)),a=t(58330),l=t.n(a);function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach(function(r){(0,i.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}t(30672),t(23845),t(23815);class p extends o.Ue{constructor(e){let{config:r={},state:t={}}=e;super(),(0,i.Z)(this,"defaultConfig",{}),(0,i.Z)(this,"defaultState",{}),(0,i.Z)(this,"disabled",!1),(0,i.Z)(this,"name","BaseController"),(0,i.Z)(this,"initialConfig",void 0),(0,i.Z)(this,"initialState",void 0),(0,i.Z)(this,"internalConfig",this.defaultConfig),(0,i.Z)(this,"internalState",this.defaultState),this.initialState=t,this.initialConfig=r}get config(){return this.internalConfig}get state(){return this.internalState}configure(e){if(arguments.length>2&&void 0!==arguments[2]&&!arguments[2])for(const r in e)void 0!==this.internalConfig[r]&&(this.internalConfig[r]=e[r],this[r]=e[r]);else{this.internalConfig=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?e:Object.assign(this.internalConfig,e);for(const e in this.internalConfig)void 0!==this.internalConfig[e]&&(this[e]=this.internalConfig[e])}}update(e){this.internalState=g(arguments.length>1&&void 0!==arguments[1]&&arguments[1]?{}:g({},this.internalState),e),this.emit("store",this.internalState)}initialize(){return this.internalState=this.defaultState,this.internalConfig=this.defaultConfig,this.configure(this.initialConfig),this.update(this.initialState),this}}const d=()=>!0,w=["newListener","removeListener"],v=e=>!w.includes(e);function y(e,r){let t=(r||{}).eventFilter||d;if("string"==typeof t&&"skipInternal"===t&&(t=v),"function"!=typeof t)throw new Error("createEventEmitterProxy - Invalid eventFilter");let n=e,i=e=>{const r=n;n=e,r.eventNames().filter(t).forEach(t=>{(function(e,r){return e.rawListeners(r)})(r,t).forEach(r=>e.on(t,r))}),r.removeAllListeners()};return new Proxy({},{get:(e,r)=>"setTarget"===r?i:n[r],set:(e,r,t)=>"setTarget"===r?(i=t,!0):(n[r]=t,!0)})}function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach(function(r){(0,i.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}const E=u()();function P(e){const r=new o.Ue;return r.sendAsync=function(){var r=(0,n.Z)(function*(r){const t=yield e.handle(r);if(t.error){var n,i;const e=(0,s.Xy)(t.error,{fallbackError:{message:(null===(n=t.error)||void 0===n?void 0:n.message)||t.error.toString(),code:(null===(i=t.error)||void 0===i?void 0:i.code)||-32603}});throw s.Sy.rpc.internal(e)}return t.result});return function(e){return r.apply(this,arguments)}}(),r.send=(r,t)=>{if("function"!=typeof t)throw new Error('Must provide callback to "send" method.');e.handle(r,t)},e.on&&e.on("notification",e=>{r.emit("data",null,e)}),r.request=function(){var e=(0,n.Z)(function*(e){const t=O(O({},e),{},{id:E(),jsonrpc:"2.0"});return yield r.sendAsync(t)});return function(r){return e.apply(this,arguments)}}(),r}const b={IFRAME_STATUS:"iframe_status",CREATE_WINDOW:"create_window",CLOSE_WINDOW:"close_window",USER_LOGGED_IN:"user_logged_in",USER_LOGGED_OUT:"user_logged_out"},_={LOGOUT:"logout",WALLET_INSTANCE_ID:"wallet_instance_id",USER_INFO:"user_info",SET_PROVIDER:"set_provider",TOPUP:"topup",IFRAME_STATUS:"iframe_status",OPENED_WINDOW:"opened_window",CLOSED_WINDOW:"closed_window",GET_PROVIDER_STATE:"get_provider_state",LOGIN_WITH_PRIVATE_KEY:"login_with_private_key"},S={GET_PROVIDER_STATE:"wallet_get_provider_state"},N={ACCOUNTS_CHANGED:"wallet_accounts_changed",CHAIN_CHANGED:"wallet_chain_changed",UNLOCK_STATE_CHANGED:"wallet_unlock_state_changed"};function C(e,r){if(""!==e&&!/^[a-f0-9]+$/iu.test(e))throw new Error("Expected an unprefixed hex string. Received: ".concat(e));if(r<0)throw new Error("Expected a non-negative integer target length. Received: ".concat(r));return String.prototype.padStart.call(e,r,"0")}const T=(e,r)=>{const t=Buffer.from(e,"hex"),n=(0,f.stripHexPrefix)(r),i=(0,f.ecsign)(Buffer.from(n,"hex"),t);return function(e,r,t){const n=(0,f.fromSigned)(r),i=(0,f.fromSigned)(t),o=(0,f.bufferToInt)(e),s=C((0,f.toUnsigned)(n).toString("hex"),64),c=C((0,f.toUnsigned)(i).toString("hex"),64),u=(0,f.stripHexPrefix)(function(e){const r=e.toString(16);return"0x".concat(r)}(o));return(0,f.addHexPrefix)(s.concat(c,u))}((0,f.intToBuffer)(i.v),i.r,i.s)};Error;const A=["Gateway timeout","ETIMEDOUT","failed to parse response body","Failed to fetch"];function x(e){switch(e.status){case 405:throw s.Sy.rpc.methodNotFound();case 418:throw s.Sy.rpc.internal({message:"Request is being rate limited."});case 503:case 504:throw s.Sy.rpc.internal({message:"Gateway timeout. The request took too long to process.This can happen when querying over too wide a block range."})}}function j(e){return new Promise(r=>setTimeout(r,e))}function I(e,r){if(200!==e.status)throw s.Sy.rpc.internal({message:"Non-200 status code: '".concat(e.status,"'"),data:r});if(r.error)throw s.Sy.rpc.internal({data:r.error});return r.result}function D(e){let{rpcTarget:r,originHttpHeaderKey:t}=e;return(0,o.Pk)(function(){var e=(0,n.Z)(function*(e,n,i){const{fetchUrl:o,fetchParams:s}=function(e){let{req:r,rpcTarget:t,originHttpHeaderKey:n}=e;const i=new URL(t),o=r.origin,s={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({id:r.id,jsonrpc:r.jsonrpc,method:r.method,params:r.params})};return n&&o&&(s.headers[n]=o),{fetchUrl:i.href,fetchParams:s}}({req:e,rpcTarget:r,originHttpHeaderKey:t});for(let r=0;r<5;r++){try{const e=yield fetch(o,s);x(e);const r=yield e.json(),t=I(e,r);return void(n.result=t)}catch(c){const e=c.toString();if(!A.some(r=>e.includes(r)))throw c}yield j(1e3)}});return function(r,t,n){return e.apply(this,arguments)}}())}function R(e){return function(r,t,n){n(n=>{t.error&&l().warn("Error in RPC response:\n",t),r.isTorusInternal||(l().info("RPC (".concat(e.origin,"):"),r,"->",t),n())})}}},59392:function(e,r,t){"use strict";r.Xy=r.Sy=void 0,t(62929);const n=t(8729);Object.defineProperty(r,"Xy",{enumerable:!0,get:function(){return n.serializeError}});const i=t(71029);Object.defineProperty(r,"Sy",{enumerable:!0,get:function(){return i.ethErrors}}),t(53362)},91091:function(e,r,t){"use strict";t.d(r,{Zk:function(){return g},FL:function(){return p}});var n=t(16304),i=t(5587),o=t(52993),s=t(77702),c=t(39278),u=t(94630),f=t(57434),a=t.n(f);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach(function(r){(0,i.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}class g extends o.xG{constructor(e){let{config:r,state:t}=e;if(super({config:r,state:t}),(0,i.Z)(this,"_providerEngineProxy",null),!r.chainConfig)throw s.Ty.invalidProviderConfigError("Please provide chainConfig");if(!r.chainConfig.chainId)throw s.Ty.invalidProviderConfigError("Please provide chainId inside chainConfig");if(!r.chainConfig.rpcTarget)throw s.Ty.invalidProviderConfigError("Please provide rpcTarget inside chainConfig");this.defaultState={chainId:"loading"},this.defaultConfig={chainConfig:r.chainConfig,networks:{[r.chainConfig.chainId]:r.chainConfig}},super.initialize()}get provider(){return this._providerEngineProxy}set provider(e){throw new Error("Method not implemented.")}addChain(e){if(!e.chainId)throw c.Sy.rpc.invalidParams("chainId is required");if(!e.rpcTarget)throw c.Sy.rpc.invalidParams("chainId is required");this.configure({networks:h(h({},this.config.networks),{},{[e.chainId]:e})})}getChainConfig(e){var r;const t=null===(r=this.config.networks)||void 0===r?void 0:r[e];if(!t)throw c.Sy.rpc.invalidRequest("Chain ".concat(e," is not supported, please add chainConfig for it"));return t}getProviderEngineProxy(){return this._providerEngineProxy}updateProviderEngineProxy(e){this._providerEngineProxy?this._providerEngineProxy.setTarget(e):this._providerEngineProxy=(0,o.qY)(e)}}class p{constructor(){(0,i.Z)(this,"_providerEngineProxy",null)}get provider(){return this._providerEngineProxy}set provider(e){throw new Error("Method not implemented.")}addChain(e){throw new Error("Method not implemented.")}setupProvider(e){var r=this;return(0,n.Z)(function*(){const t=r.getPrivKeyMiddleware(e),n=new u.eI;n.push(t);const i=(0,o.Xj)(n);r.updateProviderEngineProxy(i)})()}switchChain(e){return(0,n.Z)(function*(){return Promise.resolve()})()}getProviderEngineProxy(){return this._providerEngineProxy}updateProviderEngineProxy(e){this._providerEngineProxy?this._providerEngineProxy.setTarget(e):this._providerEngineProxy=(0,o.qY)(e)}getPrivKeyMiddleware(e){const r={getPrivatekey:(t=(0,n.Z)(function*(){return e}),function(){return t.apply(this,arguments)})};var t;return this.createPrivKeyMiddleware(r)}createPrivKeyMiddleware(e){let{getPrivatekey:r}=e;function t(){return(t=(0,n.Z)(function*(e,t){t.result=yield r()})).apply(this,arguments)}return(0,u.v0)({private_key:(0,u.Pk)(function(e,r){return t.apply(this,arguments)})})}}(0,i.Z)(p,"getProviderInstance",function(){var e=(0,n.Z)(function*(e){const r=new p;return yield r.setupProvider(e.privKey),r});return function(r){return e.apply(this,arguments)}}()),a()()},39278:function(e,r,t){"use strict";r.Sy=void 0,t(62929),t(8729);const n=t(71029);Object.defineProperty(r,"Sy",{enumerable:!0,get:function(){return n.ethErrors}}),t(53362)},15788:function(e,r,t){var n;!function(i){"use strict";var o,s=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,c=Math.ceil,u=Math.floor,f="[BigNumber Error] ",a=f+"Number primitive has more than 15 significant digits: ",l=1e14,h=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],g=1e9;function p(e){var r=0|e;return e>0||e===r?r:r-1}function d(e){for(var r,t,n=1,i=e.length,o=e[0]+"";n<i;){for(t=14-(r=e[n++]+"").length;t--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function w(e,r){var t,n,i=e.c,o=r.c,s=e.s,c=r.s,u=e.e,f=r.e;if(!s||!c)return null;if(n=o&&!o[0],(t=i&&!i[0])||n)return t?n?0:-c:s;if(s!=c)return s;if(t=s<0,n=u==f,!i||!o)return n?0:!i^t?1:-1;if(!n)return u>f^t?1:-1;for(c=(u=i.length)<(f=o.length)?u:f,s=0;s<c;s++)if(i[s]!=o[s])return i[s]>o[s]^t?1:-1;return u==f?0:u>f^t?1:-1}function v(e,r,t,n){if(e<r||e>t||e!==u(e))throw Error(f+(n||"Argument")+("number"==typeof e?e<r||e>t?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function y(e){var r=e.c.length-1;return p(e.e/14)==r&&e.c[r]%2!=0}function m(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function O(e,r,t){var n,i;if(r<0){for(i=t+".";++r;i+=t);e=i+e}else if(++r>(n=e.length)){for(i=t,r-=n;--r;i+=t);e+=i}else r<n&&(e=e.slice(0,r)+"."+e.slice(r));return e}(o=function e(r){var t,n,i,o,E,P,b,_,S,N=B.prototype={constructor:B,toString:null,valueOf:null},C=new B(1),T=20,A=4,x=-7,j=21,I=-1e7,D=1e7,R=!1,U=1,L=0,k={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},G="0123456789abcdefghijklmnopqrstuvwxyz",M=!0;function B(e,r){var t,o,c,f,l,h,g,p,d=this;if(!(d instanceof B))return new B(e,r);if(null==r){if(e&&!0===e._isBigNumber)return d.s=e.s,void(!e.c||e.e>D?d.c=d.e=null:e.e<I?d.c=[d.e=0]:(d.e=e.e,d.c=e.c.slice()));if((h="number"==typeof e)&&0*e==0){if(d.s=1/e<0?(e=-e,-1):1,e===~~e){for(f=0,l=e;l>=10;l/=10,f++);return void(f>D?d.c=d.e=null:(d.e=f,d.c=[e]))}p=String(e)}else{if(!s.test(p=String(e)))return i(d,p,h);d.s=45==p.charCodeAt(0)?(p=p.slice(1),-1):1}(f=p.indexOf("."))>-1&&(p=p.replace(".","")),(l=p.search(/e/i))>0?(f<0&&(f=l),f+=+p.slice(l+1),p=p.substring(0,l)):f<0&&(f=p.length)}else{if(v(r,2,G.length,"Base"),10==r&&M)return H(d=new B(e),T+d.e+1,A);if(p=String(e),h="number"==typeof e){if(0*e!=0)return i(d,p,h,r);if(d.s=1/e<0?(p=p.slice(1),-1):1,B.DEBUG&&p.replace(/^0\.0*|\./,"").length>15)throw Error(a+e)}else d.s=45===p.charCodeAt(0)?(p=p.slice(1),-1):1;for(t=G.slice(0,r),f=l=0,g=p.length;l<g;l++)if(t.indexOf(o=p.charAt(l))<0){if("."==o){if(l>f){f=g;continue}}else if(!c&&(p==p.toUpperCase()&&(p=p.toLowerCase())||p==p.toLowerCase()&&(p=p.toUpperCase()))){c=!0,l=-1,f=0;continue}return i(d,String(e),h,r)}h=!1,(f=(p=n(p,r,10,d.s)).indexOf("."))>-1?p=p.replace(".",""):f=p.length}for(l=0;48===p.charCodeAt(l);l++);for(g=p.length;48===p.charCodeAt(--g););if(p=p.slice(l,++g)){if(g-=l,h&&B.DEBUG&&g>15&&(e>9007199254740991||e!==u(e)))throw Error(a+d.s*e);if((f=f-l-1)>D)d.c=d.e=null;else if(f<I)d.c=[d.e=0];else{if(d.e=f,d.c=[],l=(f+1)%14,f<0&&(l+=14),l<g){for(l&&d.c.push(+p.slice(0,l)),g-=14;l<g;)d.c.push(+p.slice(l,l+=14));l=14-(p=p.slice(l)).length}else l-=g;for(;l--;p+="0");d.c.push(+p)}}else d.c=[d.e=0]}function Z(e,r,t,n){var i,o,s,c,u;if(null==t?t=A:v(t,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==r)u=d(e.c),u=1==n||2==n&&(s<=x||s>=j)?m(u,s):O(u,s,"0");else if(o=(e=H(new B(e),r,t)).e,c=(u=d(e.c)).length,1==n||2==n&&(r<=o||o<=x)){for(;c<r;u+="0",c++);u=m(u,o)}else if(r-=s,u=O(u,o,"0"),o+1>c){if(--r>0)for(u+=".";r--;u+="0");}else if((r+=o-c)>0)for(o+1==c&&(u+=".");r--;u+="0");return e.s<0&&i?"-"+u:u}function q(e,r){for(var t,n=1,i=new B(e[0]);n<e.length;n++){if(!(t=new B(e[n])).s){i=t;break}r.call(i,t)&&(i=t)}return i}function F(e,r,t){for(var n=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,n++);return(t=n+14*t-1)>D?e.c=e.e=null:t<I?e.c=[e.e=0]:(e.e=t,e.c=r),e}function H(e,r,t,n){var i,o,s,f,a,g,p,d=e.c,w=h;if(d){e:{for(i=1,f=d[0];f>=10;f/=10,i++);if((o=r-i)<0)o+=14,p=(a=d[g=0])/w[i-(s=r)-1]%10|0;else if((g=c((o+1)/14))>=d.length){if(!n)break e;for(;d.length<=g;d.push(0));a=p=0,i=1,s=(o%=14)-14+1}else{for(a=f=d[g],i=1;f>=10;f/=10,i++);p=(s=(o%=14)-14+i)<0?0:a/w[i-s-1]%10|0}if(n=n||r<0||null!=d[g+1]||(s<0?a:a%w[i-s-1]),n=t<4?(p||n)&&(0==t||t==(e.s<0?3:2)):p>5||5==p&&(4==t||n||6==t&&(o>0?s>0?a/w[i-s]:0:d[g-1])%10&1||t==(e.s<0?8:7)),r<1||!d[0])return d.length=0,n?(d[0]=w[(14-(r-=e.e+1)%14)%14],e.e=-r||0):d[0]=e.e=0,e;if(0==o?(d.length=g,f=1,g--):(d.length=g+1,f=w[14-o],d[g]=s>0?u(a/w[i-s]%w[s])*f:0),n)for(;;){if(0==g){for(o=1,s=d[0];s>=10;s/=10,o++);for(s=d[0]+=f,f=1;s>=10;s/=10,f++);o!=f&&(e.e++,d[0]==l&&(d[0]=1));break}if(d[g]+=f,d[g]!=l)break;d[g--]=0,f=1}for(o=d.length;0===d[--o];d.pop());}e.e>D?e.c=e.e=null:e.e<I&&(e.c=[e.e=0])}return e}function W(e){var r,t=e.e;return null===t?e.toString():(r=d(e.c),r=t<=x||t>=j?m(r,t):O(r,t,"0"),e.s<0?"-"+r:r)}return B.clone=e,B.ROUND_UP=0,B.ROUND_DOWN=1,B.ROUND_CEIL=2,B.ROUND_FLOOR=3,B.ROUND_HALF_UP=4,B.ROUND_HALF_DOWN=5,B.ROUND_HALF_EVEN=6,B.ROUND_HALF_CEIL=7,B.ROUND_HALF_FLOOR=8,B.EUCLID=9,B.config=B.set=function(e){var r,t;if(null!=e){if("object"!=typeof e)throw Error(f+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(v(t=e[r],0,g,r),T=t),e.hasOwnProperty(r="ROUNDING_MODE")&&(v(t=e[r],0,8,r),A=t),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((t=e[r])&&t.pop?(v(t[0],-g,0,r),v(t[1],0,g,r),x=t[0],j=t[1]):(v(t,-g,g,r),x=-(j=t<0?-t:t))),e.hasOwnProperty(r="RANGE"))if((t=e[r])&&t.pop)v(t[0],-g,-1,r),v(t[1],1,g,r),I=t[0],D=t[1];else{if(v(t,-g,g,r),!t)throw Error(f+r+" cannot be zero: "+t);I=-(D=t<0?-t:t)}if(e.hasOwnProperty(r="CRYPTO")){if((t=e[r])!==!!t)throw Error(f+r+" not true or false: "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw R=!t,Error(f+"crypto unavailable");R=t}else R=t}if(e.hasOwnProperty(r="MODULO_MODE")&&(v(t=e[r],0,9,r),U=t),e.hasOwnProperty(r="POW_PRECISION")&&(v(t=e[r],0,g,r),L=t),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(t=e[r]))throw Error(f+r+" not an object: "+t);k=t}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(t=e[r])||/^.?$|[+\-.\s]|(.).*\1/.test(t))throw Error(f+r+" invalid: "+t);M="0123456789"==t.slice(0,10),G=t}}return{DECIMAL_PLACES:T,ROUNDING_MODE:A,EXPONENTIAL_AT:[x,j],RANGE:[I,D],CRYPTO:R,MODULO_MODE:U,POW_PRECISION:L,FORMAT:k,ALPHABET:G}},B.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!B.DEBUG)return!0;var r,t,n=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===o||-1===o)&&i>=-g&&i<=g&&i===u(i)){if(0===n[0]){if(0===i&&1===n.length)return!0;break e}if((r=(i+1)%14)<1&&(r+=14),String(n[0]).length==r){for(r=0;r<n.length;r++)if((t=n[r])<0||t>=l||t!==u(t))break e;if(0!==t)return!0}}}else if(null===n&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(f+"Invalid BigNumber: "+e)},B.maximum=B.max=function(){return q(arguments,N.lt)},B.minimum=B.min=function(){return q(arguments,N.gt)},B.random=(o=9007199254740992*Math.random()&2097151?function(){return u(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var r,t,n,i,s,a=0,l=[],p=new B(C);if(null==e?e=T:v(e,0,g),i=c(e/14),R)if(crypto.getRandomValues){for(r=crypto.getRandomValues(new Uint32Array(i*=2));a<i;)(s=131072*r[a]+(r[a+1]>>>11))>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),r[a]=t[0],r[a+1]=t[1]):(l.push(s%1e14),a+=2);a=i/2}else{if(!crypto.randomBytes)throw R=!1,Error(f+"crypto unavailable");for(r=crypto.randomBytes(i*=7);a<i;)(s=281474976710656*(31&r[a])+1099511627776*r[a+1]+4294967296*r[a+2]+16777216*r[a+3]+(r[a+4]<<16)+(r[a+5]<<8)+r[a+6])>=9e15?crypto.randomBytes(7).copy(r,a):(l.push(s%1e14),a+=7);a=i/7}if(!R)for(;a<i;)(s=o())<9e15&&(l[a++]=s%1e14);for(e%=14,(i=l[--a])&&e&&(l[a]=u(i/(s=h[14-e]))*s);0===l[a];l.pop(),a--);if(a<0)l=[n=0];else{for(n=-1;0===l[0];l.splice(0,1),n-=14);for(a=1,s=l[0];s>=10;s/=10,a++);a<14&&(n-=14-a)}return p.e=n,p.c=l,p}),B.sum=function(){for(var e=1,r=arguments,t=new B(r[0]);e<r.length;)t=t.plus(r[e++]);return t},n=function(){function e(e,r,t,n){for(var i,o,s=[0],c=0,u=e.length;c<u;){for(o=s.length;o--;s[o]*=r);for(s[0]+=n.indexOf(e.charAt(c++)),i=0;i<s.length;i++)s[i]>t-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/t|0,s[i]%=t)}return s.reverse()}return function(r,n,i,o,s){var c,u,f,a,l,h,g,p,w=r.indexOf("."),v=T,y=A;for(w>=0&&(a=L,L=0,r=r.replace(".",""),h=(p=new B(n)).pow(r.length-w),L=a,p.c=e(O(d(h.c),h.e,"0"),10,i,"0123456789"),p.e=p.c.length),f=a=(g=e(r,n,i,s?(c=G,"0123456789"):(c="0123456789",G))).length;0==g[--a];g.pop());if(!g[0])return c.charAt(0);if(w<0?--f:(h.c=g,h.e=f,h.s=o,g=(h=t(h,p,v,y,i)).c,l=h.r,f=h.e),w=g[u=f+v+1],a=i/2,l=l||u<0||null!=g[u+1],l=y<4?(null!=w||l)&&(0==y||y==(h.s<0?3:2)):w>a||w==a&&(4==y||l||6==y&&1&g[u-1]||y==(h.s<0?8:7)),u<1||!g[0])r=l?O(c.charAt(1),-v,c.charAt(0)):c.charAt(0);else{if(g.length=u,l)for(--i;++g[--u]>i;)g[u]=0,u||(++f,g=[1].concat(g));for(a=g.length;!g[--a];);for(w=0,r="";w<=a;r+=c.charAt(g[w++]));r=O(r,f,c.charAt(0))}return r}}(),t=function(){function e(e,r,t){var n,i,o,s,c=0,u=e.length,f=r%1e7,a=r/1e7|0;for(e=e.slice();u--;)c=((i=f*(o=e[u]%1e7)+(n=a*o+(s=e[u]/1e7|0)*f)%1e7*1e7+c)/t|0)+(n/1e7|0)+a*s,e[u]=i%t;return c&&(e=[c].concat(e)),e}function r(e,r,t,n){var i,o;if(t!=n)o=t>n?1:-1;else for(i=o=0;i<t;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function t(e,r,t,n){for(var i=0;t--;)e[t]-=i,e[t]=(i=e[t]<r[t]?1:0)*n+e[t]-r[t];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,i,o,s,c){var f,a,h,g,d,w,v,y,m,O,E,P,b,_,S,N,C,T=n.s==i.s?1:-1,A=n.c,x=i.c;if(!(A&&A[0]&&x&&x[0]))return new B(n.s&&i.s&&(A?!x||A[0]!=x[0]:x)?A&&0==A[0]||!x?0*T:T/0:NaN);for(m=(y=new B(T)).c=[],T=o+(a=n.e-i.e)+1,c||(c=l,a=p(n.e/14)-p(i.e/14),T=T/14|0),h=0;x[h]==(A[h]||0);h++);if(x[h]>(A[h]||0)&&a--,T<0)m.push(1),g=!0;else{for(_=A.length,N=x.length,h=0,T+=2,(d=u(c/(x[0]+1)))>1&&(x=e(x,d,c),A=e(A,d,c),N=x.length,_=A.length),b=N,E=(O=A.slice(0,N)).length;E<N;O[E++]=0);C=x.slice(),C=[0].concat(C),S=x[0],x[1]>=c/2&&S++;do{if(d=0,(f=r(x,O,N,E))<0){if(P=O[0],N!=E&&(P=P*c+(O[1]||0)),(d=u(P/S))>1)for(d>=c&&(d=c-1),v=(w=e(x,d,c)).length,E=O.length;1==r(w,O,v,E);)d--,t(w,N<v?C:x,v,c),v=w.length,f=1;else 0==d&&(f=d=1),v=(w=x.slice()).length;if(v<E&&(w=[0].concat(w)),t(O,w,E,c),E=O.length,-1==f)for(;r(x,O,N,E)<1;)d++,t(O,N<E?C:x,E,c),E=O.length}else 0===f&&(d++,O=[0]);m[h++]=d,O[0]?O[E++]=A[b]||0:(O=[A[b]],E=1)}while((b++<_||null!=O[0])&&T--);g=null!=O[0],m[0]||m.splice(0,1)}if(c==l){for(h=1,T=m[0];T>=10;T/=10,h++);H(y,o+(y.e=h+14*a-1)+1,s,g)}else y.e=a,y.r=+g;return y}}(),E=/^(-?)0([xbo])(?=\w[\w.]*$)/i,P=/^([^.]+)\.$/,b=/^\.([^.]+)$/,_=/^-?(Infinity|NaN)$/,S=/^\s*\+(?=[\w.])|^\s+|\s+$/g,i=function(e,r,t,n){var i,o=t?r:r.replace(S,"");if(_.test(o))e.s=isNaN(o)?null:o<0?-1:1;else{if(!t&&(o=o.replace(E,function(e,r,t){return i="x"==(t=t.toLowerCase())?16:"b"==t?2:8,n&&n!=i?e:r}),n&&(i=n,o=o.replace(P,"$1").replace(b,"0.$1")),r!=o))return new B(o,i);if(B.DEBUG)throw Error(f+"Not a"+(n?" base "+n:"")+" number: "+r);e.s=null}e.c=e.e=null},N.absoluteValue=N.abs=function(){var e=new B(this);return e.s<0&&(e.s=1),e},N.comparedTo=function(e,r){return w(this,new B(e,r))},N.decimalPlaces=N.dp=function(e,r){var t,n,i,o=this;if(null!=e)return v(e,0,g),null==r?r=A:v(r,0,8),H(new B(o),e+o.e+1,r);if(!(t=o.c))return null;if(n=14*((i=t.length-1)-p(this.e/14)),i=t[i])for(;i%10==0;i/=10,n--);return n<0&&(n=0),n},N.dividedBy=N.div=function(e,r){return t(this,new B(e,r),T,A)},N.dividedToIntegerBy=N.idiv=function(e,r){return t(this,new B(e,r),0,1)},N.exponentiatedBy=N.pow=function(e,r){var t,n,i,o,s,a,l,h,g=this;if((e=new B(e)).c&&!e.isInteger())throw Error(f+"Exponent not an integer: "+W(e));if(null!=r&&(r=new B(r)),s=e.e>14,!g.c||!g.c[0]||1==g.c[0]&&!g.e&&1==g.c.length||!e.c||!e.c[0])return h=new B(Math.pow(+W(g),s?2-y(e):+W(e))),r?h.mod(r):h;if(a=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new B(NaN);(n=!a&&g.isInteger()&&r.isInteger())&&(g=g.mod(r))}else{if(e.e>9&&(g.e>0||g.e<-1||(0==g.e?g.c[0]>1||s&&g.c[1]>=24e7:g.c[0]<8e13||s&&g.c[0]<=9999975e7)))return o=g.s<0&&y(e)?-0:0,g.e>-1&&(o=1/o),new B(a?1/o:o);L&&(o=c(L/14+2))}for(s?(t=new B(.5),a&&(e.s=1),l=y(e)):l=(i=Math.abs(+W(e)))%2,h=new B(C);;){if(l){if(!(h=h.times(g)).c)break;o?h.c.length>o&&(h.c.length=o):n&&(h=h.mod(r))}if(i){if(0===(i=u(i/2)))break;l=i%2}else if(H(e=e.times(t),e.e+1,1),e.e>14)l=y(e);else{if(0==(i=+W(e)))break;l=i%2}g=g.times(g),o?g.c&&g.c.length>o&&(g.c.length=o):n&&(g=g.mod(r))}return n?h:(a&&(h=C.div(h)),r?h.mod(r):o?H(h,L,A,void 0):h)},N.integerValue=function(e){var r=new B(this);return null==e?e=A:v(e,0,8),H(r,r.e+1,e)},N.isEqualTo=N.eq=function(e,r){return 0===w(this,new B(e,r))},N.isFinite=function(){return!!this.c},N.isGreaterThan=N.gt=function(e,r){return w(this,new B(e,r))>0},N.isGreaterThanOrEqualTo=N.gte=function(e,r){return 1===(r=w(this,new B(e,r)))||0===r},N.isInteger=function(){return!!this.c&&p(this.e/14)>this.c.length-2},N.isLessThan=N.lt=function(e,r){return w(this,new B(e,r))<0},N.isLessThanOrEqualTo=N.lte=function(e,r){return-1===(r=w(this,new B(e,r)))||0===r},N.isNaN=function(){return!this.s},N.isNegative=function(){return this.s<0},N.isPositive=function(){return this.s>0},N.isZero=function(){return!!this.c&&0==this.c[0]},N.minus=function(e,r){var t,n,i,o,s=this,c=s.s;if(r=(e=new B(e,r)).s,!c||!r)return new B(NaN);if(c!=r)return e.s=-r,s.plus(e);var u=s.e/14,f=e.e/14,a=s.c,h=e.c;if(!u||!f){if(!a||!h)return a?(e.s=-r,e):new B(h?s:NaN);if(!a[0]||!h[0])return h[0]?(e.s=-r,e):new B(a[0]?s:3==A?-0:0)}if(u=p(u),f=p(f),a=a.slice(),c=u-f){for((o=c<0)?(c=-c,i=a):(f=u,i=h),i.reverse(),r=c;r--;i.push(0));i.reverse()}else for(n=(o=(c=a.length)<(r=h.length))?c:r,c=r=0;r<n;r++)if(a[r]!=h[r]){o=a[r]<h[r];break}if(o&&(i=a,a=h,h=i,e.s=-e.s),(r=(n=h.length)-(t=a.length))>0)for(;r--;a[t++]=0);for(r=l-1;n>c;){if(a[--n]<h[n]){for(t=n;t&&!a[--t];a[t]=r);--a[t],a[n]+=l}a[n]-=h[n]}for(;0==a[0];a.splice(0,1),--f);return a[0]?F(e,a,f):(e.s=3==A?-1:1,e.c=[e.e=0],e)},N.modulo=N.mod=function(e,r){var n,i,o=this;return e=new B(e,r),!o.c||!e.s||e.c&&!e.c[0]?new B(NaN):!e.c||o.c&&!o.c[0]?new B(o):(9==U?(i=e.s,e.s=1,n=t(o,e,0,3),e.s=i,n.s*=i):n=t(o,e,0,U),(e=o.minus(n.times(e))).c[0]||1!=U||(e.s=o.s),e)},N.multipliedBy=N.times=function(e,r){var t,n,i,o,s,c,u,f,a,h,g,d,w,v,y=this,m=y.c,O=(e=new B(e,r)).c;if(!(m&&O&&m[0]&&O[0]))return!y.s||!e.s||m&&!m[0]&&!O||O&&!O[0]&&!m?e.c=e.e=e.s=null:(e.s*=y.s,m&&O?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=p(y.e/14)+p(e.e/14),e.s*=y.s,(u=m.length)<(h=O.length)&&(w=m,m=O,O=w,i=u,u=h,h=i),i=u+h,w=[];i--;w.push(0));for(v=l,i=h;--i>=0;){for(t=0,g=O[i]%1e7,d=O[i]/1e7|0,o=i+(s=u);o>i;)t=((f=g*(f=m[--s]%1e7)+(c=d*f+(a=m[s]/1e7|0)*g)%1e7*1e7+w[o]+t)/v|0)+(c/1e7|0)+d*a,w[o--]=f%v;w[o]=t}return t?++n:w.splice(0,1),F(e,w,n)},N.negated=function(){var e=new B(this);return e.s=-e.s||null,e},N.plus=function(e,r){var t,n=this,i=n.s;if(r=(e=new B(e,r)).s,!i||!r)return new B(NaN);if(i!=r)return e.s=-r,n.minus(e);var o=n.e/14,s=e.e/14,c=n.c,u=e.c;if(!o||!s){if(!c||!u)return new B(i/0);if(!c[0]||!u[0])return u[0]?e:new B(c[0]?n:0*i)}if(o=p(o),s=p(s),c=c.slice(),i=o-s){for(i>0?(s=o,t=u):(i=-i,t=c),t.reverse();i--;t.push(0));t.reverse()}for((i=c.length)-(r=u.length)<0&&(t=u,u=c,c=t,r=i),i=0;r;)i=(c[--r]=c[r]+u[r]+i)/l|0,c[r]=l===c[r]?0:c[r]%l;return i&&(c=[i].concat(c),++s),F(e,c,s)},N.precision=N.sd=function(e,r){var t,n,i,o=this;if(null!=e&&e!==!!e)return v(e,1,g),null==r?r=A:v(r,0,8),H(new B(o),e,r);if(!(t=o.c))return null;if(n=14*(i=t.length-1)+1,i=t[i]){for(;i%10==0;i/=10,n--);for(i=t[0];i>=10;i/=10,n++);}return e&&o.e+1>n&&(n=o.e+1),n},N.shiftedBy=function(e){return v(e,-9007199254740991,9007199254740991),this.times("1e"+e)},N.squareRoot=N.sqrt=function(){var e,r,n,i,o,s=this,c=s.c,u=s.s,f=s.e,a=T+4,l=new B("0.5");if(1!==u||!c||!c[0])return new B(!u||u<0&&(!c||c[0])?NaN:c?s:1/0);if(0==(u=Math.sqrt(+W(s)))||u==1/0?(((r=d(c)).length+f)%2==0&&(r+="0"),u=Math.sqrt(+r),f=p((f+1)/2)-(f<0||f%2),n=new B(r=u==1/0?"5e"+f:(r=u.toExponential()).slice(0,r.indexOf("e")+1)+f)):n=new B(u+""),n.c[0])for((u=(f=n.e)+a)<3&&(u=0);;)if(n=l.times((o=n).plus(t(s,o,a,1))),d(o.c).slice(0,u)===(r=d(n.c)).slice(0,u)){if(n.e<f&&--u,"9999"!=(r=r.slice(u-3,u+1))&&(i||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(H(n,n.e+T+2,1),e=!n.times(n).eq(s));break}if(!i&&(H(o,o.e+T+2,0),o.times(o).eq(s))){n=o;break}a+=4,u+=4,i=1}return H(n,n.e+T+1,A,e)},N.toExponential=function(e,r){return null!=e&&(v(e,0,g),e++),Z(this,e,r,1)},N.toFixed=function(e,r){return null!=e&&(v(e,0,g),e=e+this.e+1),Z(this,e,r)},N.toFormat=function(e,r,t){var n,i=this;if(null==t)null!=e&&r&&"object"==typeof r?(t=r,r=null):e&&"object"==typeof e?(t=e,e=r=null):t=k;else if("object"!=typeof t)throw Error(f+"Argument not an object: "+t);if(n=i.toFixed(e,r),i.c){var o,s=n.split("."),c=+t.groupSize,u=+t.secondaryGroupSize,a=t.groupSeparator||"",l=s[0],h=s[1],g=i.s<0,p=g?l.slice(1):l,d=p.length;if(u&&(o=c,c=u,u=o,d-=o),c>0&&d>0){for(l=p.substr(0,o=d%c||c);o<d;o+=c)l+=a+p.substr(o,c);u>0&&(l+=a+p.slice(o)),g&&(l="-"+l)}n=h?l+(t.decimalSeparator||"")+((u=+t.fractionGroupSize)?h.replace(new RegExp("\\d{"+u+"}\\B","g"),"$&"+(t.fractionGroupSeparator||"")):h):l}return(t.prefix||"")+n+(t.suffix||"")},N.toFraction=function(e){var r,n,i,o,s,c,u,a,l,g,p,w,v=this,y=v.c;if(null!=e&&(!(u=new B(e)).isInteger()&&(u.c||1!==u.s)||u.lt(C)))throw Error(f+"Argument "+(u.isInteger()?"out of range: ":"not an integer: ")+W(u));if(!y)return new B(v);for(r=new B(C),l=n=new B(C),i=a=new B(C),w=d(y),s=r.e=w.length-v.e-1,r.c[0]=h[(c=s%14)<0?14+c:c],e=!e||u.comparedTo(r)>0?s>0?r:l:u,c=D,D=1/0,u=new B(w),a.c[0]=0;g=t(u,r,0,1),1!=(o=n.plus(g.times(i))).comparedTo(e);)n=i,i=o,l=a.plus(g.times(o=l)),a=o,r=u.minus(g.times(o=r)),u=o;return o=t(e.minus(n),i,0,1),a=a.plus(o.times(l)),n=n.plus(o.times(i)),a.s=l.s=v.s,p=t(l,i,s*=2,A).minus(v).abs().comparedTo(t(a,n,s,A).minus(v).abs())<1?[l,i]:[a,n],D=c,p},N.toNumber=function(){return+W(this)},N.toPrecision=function(e,r){return null!=e&&v(e,1,g),Z(this,e,r,2)},N.toString=function(e){var r,t=this,i=t.s,o=t.e;return null===o?i?(r="Infinity",i<0&&(r="-"+r)):r="NaN":(null==e?r=o<=x||o>=j?m(d(t.c),o):O(d(t.c),o,"0"):10===e&&M?r=O(d((t=H(new B(t),T+o+1,A)).c),t.e,"0"):(v(e,2,G.length,"Base"),r=n(O(d(t.c),o,"0"),10,e,i,!0)),i<0&&t.c[0]&&(r="-"+r)),r},N.valueOf=N.toJSON=function(){return W(this)},N._isBigNumber=!0,null!=r&&B.set(r),B}()).default=o.BigNumber=o,void 0===(n=(function(){return o}).call(r,t,r,e))||(e.exports=n)}()}}]);