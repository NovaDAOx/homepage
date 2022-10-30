(self.webpackChunkrugs=self.webpackChunkrugs||[]).push([[580],{34580:function(t,n,e){"use strict";e.r(n),e.d(n,{PhantomAdapter:function(){return d}});var i=e(21611),r=e(5587),o=e(981),l=e(62693),a=e(10968);function s(t,n,e){return new Promise((r,o)=>{e>0?setTimeout((0,i.Z)(function*(){const i=yield t();i&&r(i),i||s(t,n,e-1).then(t=>(r(t),t)).catch(t=>o(t))}),n):r(!1)})}const c=function(){var t=(0,i.Z)(function*(){var t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{interval:1e3,count:3};const e="undefined"!=typeof window&&!(null===(t=window.solana)||void 0===t||!t.isPhantom);if(e)return window.solana;const i=yield s(()=>{var t;return null===(t=window.solana)||void 0===t?void 0:t.isPhantom},n.interval,n.count);return i?window.solana:null});return function(){return t.apply(this,arguments)}}();class d extends l.v{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),(0,r.Z)(this,"name",o.rW.PHANTOM),(0,r.Z)(this,"adapterNamespace",o.yk.SOLANA),(0,r.Z)(this,"currentChainNamespace",o.EN.SOLANA),(0,r.Z)(this,"type",o.hN.EXTERNAL),(0,r.Z)(this,"status",o.MP.NOT_READY),(0,r.Z)(this,"_wallet",null),(0,r.Z)(this,"phantomProvider",null),(0,r.Z)(this,"rehydrated",!1),(0,r.Z)(this,"_onDisconnect",()=>{this._wallet&&(this._wallet.off("disconnect",this._onDisconnect),this.rehydrated=!1,this.status=this.status===o.MP.CONNECTED?o.MP.READY:o.MP.NOT_READY,this.emit(o.n2.DISCONNECTED))}),this.chainConfig=t.chainConfig||null,this.sessionTime=t.sessionTime||86400}get isWalletConnected(){var t;return!(null===(t=this._wallet)||void 0===t||!t.isConnected||this.status!==o.MP.CONNECTED)}get provider(){var t;return(null===(t=this.phantomProvider)||void 0===t?void 0:t.provider)||null}set provider(t){throw new Error("Not implemented")}setAdapterSettings(t){this.status!==o.MP.READY&&null!=t&&t.sessionTime&&(this.sessionTime=t.sessionTime)}init(t){var n=()=>super.checkInitializationRequirements,e=this;return(0,i.Z)(function*(){if(n().call(e),e.chainConfig||(e.chainConfig=(0,o.h2)(o.EN.SOLANA,"0x1")),e._wallet=yield c({interval:500,count:3}),!e._wallet)throw o.Ty.notInstalled();e.phantomProvider=new a.PhantomInjectedProvider({config:{chainConfig:e.chainConfig}}),e.status=o.MP.READY,e.emit(o.n2.READY,o.rW.PHANTOM);try{o.cM.debug("initializing phantom adapter"),t.autoConnect&&(e.rehydrated=!0,yield e.connect())}catch(i){o.cM.error("Failed to connect with cached phantom provider",i),e.emit("ERRORED",i)}})()}connect(){var t=()=>super.checkConnectionRequirements,n=this;return(0,i.Z)(function*(){var e=n;try{if(t().call(n),n.status=o.MP.CONNECTING,n.emit(o.n2.CONNECTING,{adapter:o.rW.PHANTOM}),!n._wallet)throw o.Ty.notInstalled();if(n._wallet.isConnected)yield n.connectWithProvider(n._wallet);else{const t=n._wallet._handleDisconnect;try{yield new Promise((r,l)=>{const a=function(){var t=(0,i.Z)(function*(){yield n.connectWithProvider(n._wallet),r(n.provider)});return function(){return t.apply(this,arguments)}}();if(!n._wallet)return l(o.Ty.notInstalled());n._wallet.once("connect",a),n._wallet._handleDisconnect=function(){l(o.Ty.windowClosed());for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t.apply(e._wallet,i)},n._wallet.connect().catch(t=>{l(t)})})}catch(r){if(r instanceof o.up)throw r;throw o.RM.connectionError(null==r?void 0:r.message)}finally{n._wallet._handleDisconnect=t}}if(!n._wallet.publicKey)throw o.RM.connectionError();return n._wallet.on("disconnect",n._onDisconnect),n.provider}catch(r){throw n.status=o.MP.READY,n.rehydrated=!1,n.emit(o.n2.ERRORED,r),r}})()}disconnect(){var t=arguments,n=()=>super.disconnect,e=this;return(0,i.Z)(function*(){let i=t.length>0&&void 0!==t[0]?t[0]:{cleanup:!1};yield n().call(e);try{var r;yield null===(r=e._wallet)||void 0===r?void 0:r.disconnect(),i.cleanup&&(e.status=o.MP.NOT_READY,e.phantomProvider=null,e._wallet=null),e.emit(o.n2.DISCONNECTED)}catch(l){e.emit(o.n2.ERRORED,o.RM.disconnectionError(null==l?void 0:l.message))}})()}getUserInfo(){var t=this;return(0,i.Z)(function*(){if(!t.isWalletConnected)throw o.RM.notConnectedError("Not connected with wallet, Please login/connect first");return{}})()}connectWithProvider(t){var n=this;return(0,i.Z)(function*(){if(!n.phantomProvider)throw o.RM.connectionError("No phantom provider");return yield n.phantomProvider.setupProvider(t),n.status=o.MP.CONNECTED,n.emit(o.n2.CONNECTED,{adapter:o.rW.PHANTOM,reconnected:n.rehydrated}),n.provider})()}}}}]);