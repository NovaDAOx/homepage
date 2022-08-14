!function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(){return(n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,r){var i=t(e,n);if(i){var o=Object.getOwnPropertyDescriptor(i,n);return o.get?o.get.call(arguments.length<3?e:r):o.value}}).apply(this,arguments)}function t(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=c(e)););return e}function r(e,n){return(r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function i(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,r=c(e);if(n){var i=c(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return o(this,t)}}function o(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(self.webpackChunkrugs=self.webpackChunkrugs||[]).push([[905],{20905:function(t,o,s){"use strict";s.r(o),s.d(o,{OpenloginAdapter:function(){return b},getOpenloginDefaultOptions:function(){return v}});var u=s(16304),l=s(36819),p=s(77702),f=s(5587),g=s(91091),h=s(41413),d=s.n(h),v=function(e,n){return{adapterSettings:{network:l.dr.MAINNET,clientId:"",uxMode:l.$e.POPUP},chainConfig:e?(0,p.h2)(e,n):null,loginSettings:{}}};function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach(function(n){(0,f.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var b=function(t){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}(C,t);var o,h,y,b=i(C);function C(e){var n,t,r,i;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,C),n=b.call(this),(0,f.Z)(a(n),"name",p.rW.OPENLOGIN),(0,f.Z)(a(n),"adapterNamespace",p.yk.MULTICHAIN),(0,f.Z)(a(n),"type",p.hN.IN_APP),(0,f.Z)(a(n),"openloginInstance",null),(0,f.Z)(a(n),"status",p.MP.NOT_READY),(0,f.Z)(a(n),"currentChainNamespace",p.EN.EIP155),(0,f.Z)(a(n),"openloginOptions",void 0),(0,f.Z)(a(n),"loginSettings",{}),(0,f.Z)(a(n),"privKeyProvider",null),p.cM.debug("const openlogin adapter",e);var o,c=v(null===(t=e.chainConfig)||void 0===t?void 0:t.chainNamespace,null===(r=e.chainConfig)||void 0===r?void 0:r.chainId);if(n.openloginOptions=O(O({clientId:"",network:l.dr.MAINNET},c.adapterSettings),e.adapterSettings||{}),n.loginSettings=O(O({},c.loginSettings),e.loginSettings),null!==(i=e.chainConfig)&&void 0!==i&&i.chainNamespace&&e.chainConfig.chainNamespace!==p.EN.OTHER&&(n.currentChainNamespace=null===(o=e.chainConfig)||void 0===o?void 0:o.chainNamespace,n.chainConfig=O(O({},c.chainConfig?c.chainConfig:{}),null==e?void 0:e.chainConfig),p.cM.debug("const openlogin chainConfig",n.chainConfig),!n.chainConfig.rpcTarget))throw p.Ty.invalidParams("rpcTarget is required in chainConfig");return n}return o=C,(h=[{key:"chainConfigProxy",get:function(){return this.chainConfig?O({},this.chainConfig):null}},{key:"provider",get:function(){var e;return(null===(e=this.privKeyProvider)||void 0===e?void 0:e.provider)||null},set:function(e){throw new Error("Not implemented")}},{key:"init",value:function(e){var t=this,r=this;return(0,u.Z)(regeneratorRuntime.mark(function i(){var o,a,s;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n(c(C.prototype),"checkInitializationRequirements",t).call(r),null!==(o=r.openloginOptions)&&void 0!==o&&o.clientId){i.next=2;break}throw p.Ty.invalidParams("clientId is required before openlogin's initialization");case 2:if(r.chainConfig||r.currentChainNamespace===p.EN.OTHER){i.next=4;break}throw p.Ty.invalidParams("chainConfig is required before initialization");case 4:return a=!1,r.openloginOptions.uxMode===l.$e.REDIRECT&&(s=(0,l.Gv)(),Object.keys(s).length>0&&s._pid&&(a=!0)),r.openloginOptions=O(O({},r.openloginOptions),{},{replaceUrlOnRedirect:a}),r.openloginInstance=new l.ZP(r.openloginOptions),p.cM.debug("initializing openlogin adapter init"),i.next=11,r.openloginInstance.init();case 11:if(r.status=p.MP.READY,r.emit(p.n2.READY,p.rW.OPENLOGIN),i.prev=13,p.cM.debug("initializing openlogin adapter"),i.t0=r.openloginInstance.privKey&&(e.autoConnect||a),!i.t0){i.next=19;break}return i.next=19,r.connect();case 19:i.next=24;break;case 21:i.prev=21,i.t1=i.catch(13),p.cM.error("Failed to connect with cached openlogin provider",i.t1),r.emit("ERRORED",i.t1);case 24:case"end":return i.stop()}},i,null,[[13,21]])}))()}},{key:"connect",value:function(e){var t=this,r=this;return(0,u.Z)(regeneratorRuntime.mark(function i(){return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n(c(C.prototype),"checkConnectionRequirements",t).call(r),r.status=p.MP.CONNECTING,r.emit(p.n2.CONNECTING,O(O({},e),{},{adapter:p.rW.OPENLOGIN})),i.prev=1,i.next=4,r.connectWithProvider(e);case 4:return i.abrupt("return",r.provider);case 7:if(i.prev=7,i.t0=i.catch(1),p.cM.error("Failed to connect with openlogin provider",i.t0),r.status=p.MP.READY,r.emit(p.n2.ERRORED,i.t0),null==i.t0||!i.t0.message.includes("user closed popup")){i.next=11;break}throw p.RM.popupClosed();case 11:throw p.RM.connectionError("Failed to login with openlogin");case 12:case"end":return i.stop()}},i,null,[[1,7]])}))()}},{key:"disconnect",value:function(){var e=arguments,n=this;return(0,u.Z)(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.length>0&&void 0!==e[0]?e[0]:{cleanup:!1},n.status===p.MP.CONNECTED){t.next=3;break}throw p.RM.notConnectedError("Not connected with wallet");case 3:if(n.openloginInstance){t.next=5;break}throw p.Ty.notReady("openloginInstance is not ready");case 5:return t.next=7,n.openloginInstance.logout();case 7:r.cleanup?(n.status=p.MP.NOT_READY,n.openloginInstance=null,n.privKeyProvider=null):n.status=p.MP.READY,n.emit(p.n2.DISCONNECTED);case 9:case"end":return t.stop()}},t)}))()}},{key:"getUserInfo",value:function(){var e=this;return(0,u.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.status===p.MP.CONNECTED){n.next=2;break}throw p.RM.notConnectedError("Not connected with wallet");case 2:if(e.openloginInstance){n.next=4;break}throw p.Ty.notReady("openloginInstance is not ready");case 4:return n.next=6,e.openloginInstance.getUserInfo();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}},n)}))()}},{key:"setAdapterSettings",value:function(e){if(this.status!==p.MP.READY){var n=v();this.openloginOptions=O(O(O({},n.adapterSettings),this.openloginOptions||{}),e)}}},{key:"setChainConfig",value:function(e){n(c(C.prototype),"setChainConfig",this).call(this,e),this.currentChainNamespace=e.chainNamespace}},{key:"connectWithProvider",value:function(e){var n=this;return(0,u.Z)(regeneratorRuntime.mark(function t(){var r,i,o,a,c,u,f,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.chainConfig){t.next=2;break}throw p.Ty.invalidParams("chainConfig is required before initialization");case 2:if(n.openloginInstance){t.next=4;break}throw p.Ty.notReady("openloginInstance is not ready");case 4:if(n.currentChainNamespace!==p.EN.SOLANA){t.next=12;break}return t.next=7,Promise.all([s.e(142),s.e(968)]).then(s.bind(s,10968));case 7:r=t.sent,i=r.SolanaPrivateKeyProvider,n.privKeyProvider=new i({config:{chainConfig:n.chainConfig}}),t.next=23;break;case 12:if(n.currentChainNamespace!==p.EN.EIP155){t.next=20;break}return t.next=15,Promise.all([s.e(470),s.e(520)]).then(s.bind(s,50520));case 15:o=t.sent,a=o.EthereumPrivateKeyProvider,n.privKeyProvider=new a({config:{chainConfig:n.chainConfig}}),t.next=23;break;case 20:if(n.currentChainNamespace===p.EN.OTHER){t.next=22;break}throw new Error("Invalid chainNamespace: ".concat(n.currentChainNamespace," found while connecting to wallet"));case 22:n.privKeyProvider=new g.FL;case 23:if(t.t0=!n.openloginInstance.privKey&&e,!t.t0){t.next=28;break}return n.loginSettings.curve||(n.loginSettings.curve=n.currentChainNamespace===p.EN.SOLANA?l.x7.ED25519:l.x7.SECP256K1),t.next=28,n.openloginInstance.login(d()(n.loginSettings,{loginProvider:e.loginProvider},{extraLoginOptions:O(O({},e.extraLoginOptions||{}),{},{login_hint:e.login_hint||(null===(c=e.extraLoginOptions)||void 0===c?void 0:c.login_hint)})}));case 28:if(!(u=n.openloginInstance.privKey)){t.next=40;break}if(n.currentChainNamespace!==p.EN.SOLANA){t.next=36;break}return t.next=33,Promise.all([s.e(142),s.e(882)]).then(s.bind(s,74882));case 33:f=t.sent,h=f.getED25519Key,u=h(u).sk.toString("hex");case 36:return t.next=38,n.privKeyProvider.setupProvider(u);case 38:n.status=p.MP.CONNECTED,n.emit(p.n2.CONNECTED,{adapter:p.rW.OPENLOGIN,reconnected:!e});case 40:case"end":return t.stop()}},t)}))()}}])&&e(o.prototype,h),y&&e(o,y),C}(p.J5)}}])}();