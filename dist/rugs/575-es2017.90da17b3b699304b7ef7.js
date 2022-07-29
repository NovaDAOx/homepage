(self.webpackChunkrugs=self.webpackChunkrugs||[]).push([[575],{89575:function(n,e,t){"use strict";t.r(e),t.d(e,{WalletConnectV1Adapter:function(){return l}});var o=t(16304),r=t(5587),i=t(49418),a=t(77702),c=t(50520);const s=[{name:"Rainbow",chains:[a.EN.EIP155],logo:"https://images.web3auth.io/login-rainbow.svg",mobile:{native:"rainbow:",universal:"https://rnbwapp.com"},desktop:{native:"",universal:""}},{name:"MetaMask",chains:[a.EN.EIP155],logo:"https://images.web3auth.io/login-metamask.svg",mobile:{native:"metamask:",universal:"https://metamask.app.link"},desktop:{native:"",universal:""}}];function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,o)}return t}class l extends a.J5{constructor(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),(0,r.Z)(this,"name",a.rW.WALLET_CONNECT_V1),(0,r.Z)(this,"adapterNamespace",a.yk.EIP155),(0,r.Z)(this,"currentChainNamespace",a.EN.EIP155),(0,r.Z)(this,"type",a.hN.EXTERNAL),(0,r.Z)(this,"adapterOptions",void 0),(0,r.Z)(this,"status",a.MP.NOT_READY),(0,r.Z)(this,"adapterData",{uri:"",extensionAdapters:s}),(0,r.Z)(this,"connector",null),(0,r.Z)(this,"wcProvider",null),(0,r.Z)(this,"rehydrated",!1),this.adapterOptions=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach(function(e){(0,r.Z)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({},n),this.chainConfig=n.chainConfig||null}get connected(){var n;return!(null===(n=this.connector)||void 0===n||!n.connected)}get provider(){var n;return(null===(n=this.wcProvider)||void 0===n?void 0:n.provider)||null}set provider(n){throw new Error("Not implemented")}init(){var n=()=>super.checkInitializationRequirements,e=this;return(0,o.Z)(function*(){n().call(e),e.chainConfig||(e.chainConfig=(0,a.h2)(a.EN.EIP155,1)),e.connector=e.getWalletConnectInstance(),e.wcProvider=new c.WalletConnectProvider({config:{chainConfig:e.chainConfig},connector:e.connector}),e.emit(a.n2.READY,a.rW.WALLET_CONNECT_V1),e.status=a.MP.READY,a.cM.debug("initializing wallet connect v1 adapter"),e.connector.connected&&(e.rehydrated=!0,yield e.onConnectHandler({accounts:e.connector.accounts,chainId:e.connector.chainId}))})()}connect(){var n=()=>super.checkConnectionRequirements,e=this;return(0,o.Z)(function*(){if(n().call(e),!e.connector)throw a.Ty.notReady("Wallet adapter is not ready yet");return e.connected?(yield e.onConnectHandler({accounts:e.connector.accounts,chainId:e.connector.chainId}),e.provider):(e.status!==a.MP.CONNECTING&&(null!==(t=e.adapterOptions.adapterSettings)&&void 0!==t&&t.qrcodeModal&&(e.connector=e.getWalletConnectInstance(),e.wcProvider=new c.WalletConnectProvider({config:{chainConfig:e.chainConfig,skipLookupNetwork:null===(r=e.adapterOptions.adapterSettings)||void 0===r?void 0:r.skipNetworkSwitching},connector:e.connector})),yield e.createNewSession(),e.status=a.MP.CONNECTING,e.emit(a.n2.CONNECTING,{adapter:a.rW.WALLET_CONNECT_V1})),new Promise((n,t)=>{if(!e.connector)return t(a.Ty.notReady("Wallet adapter is not ready yet"));e.connector.on("modal_closed",(0,o.Z)(function*(){return e.status=a.MP.READY,e.emit(a.n2.READY,a.rW.WALLET_CONNECT_V1),t(new Error("User closed modal"))}));try{e.connector.on("connect",function(){var t=(0,o.Z)(function*(t,o){return t&&e.emit(a.n2.ERRORED,t),a.cM.debug("connected event emitted by web3auth"),yield e.onConnectHandler(o.params[0]),n(e.provider)});return function(n,e){return t.apply(this,arguments)}}())}catch(r){a.cM.error("Wallet connect v1 adapter error while connecting",r),e.status=a.MP.READY,e.rehydrated=!0,e.emit(a.n2.ERRORED,r),t(r instanceof a.up?r:a.RM.connectionError("Failed to login with wallet connect: ".concat((null==r?void 0:r.message)||"")))}}));var t,r})()}getUserInfo(){var n=this;return(0,o.Z)(function*(){if(!n.connected)throw a.RM.notConnectedError("Not connected with wallet, Please login/connect first");return{}})()}disconnect(){var n=arguments,e=this;return(0,o.Z)(function*(){let t=n.length>0&&void 0!==n[0]?n[0]:{cleanup:!1};const{cleanup:o}=t;if(!e.connector||!e.connected)throw a.RM.notConnectedError("Not connected with wallet");yield e.connector.killSession(),e.rehydrated=!1,o?(e.connector=null,e.status=a.MP.NOT_READY,e.wcProvider=null):e.status=a.MP.READY,e.emit(a.n2.DISCONNECTED)})()}addChain(n){var e=this;return(0,o.Z)(function*(){try{var t;if(!e.wcProvider)throw a.Ty.notReady("Wallet adapter is not ready yet");const o=null===(t=e.adapterOptions.adapterSettings)||void 0===t?void 0:t.networkSwitchModal;o&&(yield o.addNetwork({chainConfig:n,appOrigin:window.location.hostname})),yield e.wcProvider.addChain(n)}catch(o){a.cM.error(o)}})()}switchChain(n,e){var t=this;return(0,o.Z)(function*(){var o;if(!t.wcProvider)throw a.Ty.notReady("Wallet adapter is not ready yet");const r=null===(o=t.adapterOptions.adapterSettings)||void 0===o?void 0:o.networkSwitchModal;r&&(yield r.switchNetwork({currentChainConfig:e,newChainConfig:n,appOrigin:window.location.hostname})),yield t.wcProvider.switchChain({chainId:e.chainId,lookup:!1,addChain:!1})})()}createNewSession(){var n=arguments,e=this;return(0,o.Z)(function*(){var t,r;let i=n.length>0&&void 0!==n[0]?n[0]:{forceNewSession:!1};if(!e.connector)throw a.Ty.notReady("Wallet adapter is not ready yet");if(i.forceNewSession&&e.connector.pending&&(yield e.connector.killSession()),null===(t=e.adapterOptions)||void 0===t||null===(r=t.adapterSettings)||void 0===r||!r.qrcodeModal)return new Promise((n,t)=>{var r;if(!e.connector)return t(a.Ty.notReady("Wallet adapter is not ready yet"));a.cM.debug("creating new session for web3auth wallet connect"),e.connector.on("display_uri",function(){var r=(0,o.Z)(function*(o,r){var i;return o?(e.emit(a.n2.ERRORED,a.RM.connectionError("Failed to display wallet connect qr code")),t(o)):(e.updateAdapterData({uri:r.params[0],extensionAdapters:s}),null===(i=e.connector)||void 0===i||i.off("display_uri"),n())});return function(n,e){return r.apply(this,arguments)}}()),e.connector.createSession({chainId:parseInt((null===(r=e.chainConfig)||void 0===r?void 0:r.chainId)||"0x1",16)}).catch(n=>(a.cM.error("error while creating new wallet connect session",n),e.emit(a.n2.ERRORED,n),t(n)))});var c;yield e.connector.createSession({chainId:parseInt((null===(c=e.chainConfig)||void 0===c?void 0:c.chainId)||"0x1",16)})})()}onConnectHandler(n){var e=this;return(0,o.Z)(function*(){if(!e.connector||!e.wcProvider)throw a.Ty.notReady("Wallet adapter is not ready yet");if(!e.chainConfig)throw a.Ty.invalidParams("Chain config is not set");const{chainId:t}=n;if(a.cM.debug("connected chainId in hex"),t!==parseInt(e.chainConfig.chainId,16)){var o,r,i;const n=(0,a.h2)(a.EN.EIP155,t)||{chainId:"0x".concat(t.toString(16)),displayName:"Unknown Network"},s=null===(o=e.adapterOptions.adapterSettings)||void 0===o?void 0:o.qrcodeModal;if(!s||s&&(null===(r=e.adapterOptions)||void 0===r||null===(i=r.adapterSettings)||void 0===i||!i.skipNetworkSwitching))try{yield e.addChain(e.chainConfig),yield e.switchChain(n,e.chainConfig),e.connector=e.getWalletConnectInstance()}catch(c){return a.cM.error("error while chain switching",c),yield e.createNewSession({forceNewSession:!0}),e.emit(a.n2.ERRORED,a.Ty.fromCode(5e3,"Not connected to correct network. Expected: ".concat(e.chainConfig.displayName,", Current: ").concat((null==n?void 0:n.displayName)||t,", Please switch to correct network from wallet"))),e.status=a.MP.READY,void(e.rehydrated=!0)}}yield e.wcProvider.setupProvider(e.connector),e.subscribeEvents(e.connector),e.status=a.MP.CONNECTED,e.emit(a.n2.CONNECTED,{adapter:a.rW.WALLET_CONNECT_V1,reconnected:e.rehydrated})})()}subscribeEvents(n){var e=this;n.on("session_update",function(){var n=(0,o.Z)(function*(n){n&&e.emit(a.n2.ERRORED,n)});return function(e){return n.apply(this,arguments)}}())}getWalletConnectInstance(){const n=this.adapterOptions.adapterSettings||{};return n.bridge=n.bridge||"https://bridge.walletconnect.org",new i.Z(n)}}}}]);