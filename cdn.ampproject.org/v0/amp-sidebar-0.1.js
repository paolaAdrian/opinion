;
(self.AMP=self.AMP||[]).push({m:0,v:"2403072016000",n:"amp-sidebar",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t,i){return(n=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function r(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return i(t)}function a(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(i){var e=s(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return o(this,n)}}function h(t){return t?Array.prototype.slice.call(t):[]}var u=Array.isArray;function f(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=t[n];return r}function c(t,i){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,i){if(t){if("string"==typeof t)return f(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,v,d=Object.prototype;function m(t){return 1==(null==t?void 0:t.nodeType)}function p(t,i,n,r,s,e,o,a,h,u,f){return t}function b(t){return(t.ownerDocument||t).defaultView}function y(t,i){return t.replace(/^|,/g,"$&".concat(i," "))}function w(t,i){return t.closest?t.closest(i):function(t,i,n){var r;for(r=t;r&&void 0!==r;r=r.parentElement)if(i(r))return r;return null}(t,(function(t){return function(t,i){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,i)}(t,i)}))}function g(t){return function(t,i){for(var n=[],r=t.firstElementChild;r;r=r.nextElementSibling)void 0,o=void 0,"string"==typeof(e=s=r)?o=e:m(e)&&(o=e.tagName),!(o&&o.toLowerCase().startsWith("i-")||s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("placeholder")||s.hasAttribute("fallback")||s.hasAttribute("overflow")))&&n.push(r);var s,e,o;return n}(t)}function k(t){var i=t.isConnected;if(void 0!==i)return i;for(var n=t;(n=x(n)).host;)n=n.host;return n.nodeType===Node.DOCUMENT_NODE}function x(t){if(Node.prototype.getRootNode)return t.getRootNode();var i,n;for(i=t;i.parentNode&&(!(n=i)||"I-AMPHTML-SHADOW-ROOT"!=n.tagName&&(11!=n.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(n)));i=i.parentNode);return i}function M(t){try{t.focus()}catch(t){}}function A(t){var i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;var n=t.message,r=t.stack,s=new Error(n);for(var e in t)s[e]=t[e];return s.stack=r,s}function O(t){for(var i,n=null,r="",s=c(arguments,!0);!(i=s()).done;){var e=i.value;e instanceof Error&&!n?n=A(e):(r&&(r+=" "),r+=e)}return n?r&&(n.message=r+": "+n.message):n=new Error(r),n}function E(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function S(t){var i=O.apply(null,arguments);setTimeout((function(){throw E(i),i}))}function j(t){try{for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return t.apply(null,n)}catch(t){S(t)}}d.hasOwnProperty,d.toString;var D=["Webkit","webkit","Moz","moz","ms","O","o"],X={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function z(t,i,n,r,s){var e=function(t,i,n){if(i.startsWith("--"))return i;v||(v=Object.create(null));var r=v[i];if(!r||n){if(r=i,void 0===t[i]){var s=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),e=function(t,i){for(var n=0;n<D.length;n++){var r=D[n]+i;if(void 0!==t[r])return r}return""}(t,s);void 0!==t[e]&&(r=e)}n||(v[i]=r)}return r}(t.style,i,s);if(e){var o,a=r?n+r:n;t.style.setProperty((o=e.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),D.some((function(t){return o.startsWith(t+"-")}))?"-".concat(o):o),a)}}function R(t,i){for(var n in i)z(t,n,i[n])}function P(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}function _(t,i){return t.getComputedStyle(i)||X}var I=/vertical/,T=new WeakMap,C=new WeakMap,W=new WeakMap;function B(t){var i=T.get(t);return i||(i=new t.ResizeObserver(L),T.set(t,i)),i}function L(t){for(var i=new Set,n=t.length-1;n>=0;n--){var r=t[n],s=r.target;if(!i.has(s)){i.add(s);var e=C.get(s);if(e){W.set(s,r);for(var o=0;o<e.length;o++){var a=e[o],h=a.callback;N(a.type,h,r)}}}}}function N(t,i,n){if(0==t){var r=n.contentRect,s=r.height;j(i,{width:r.width,height:s})}else if(1==t){var e,o=n.borderBoxSize;if(o)e=o.length>0?o[0]:{inlineSize:0,blockSize:0};else{var a,h,u=n.target,f=b(u),c=I.test(_(f,u).writingMode),l=u,v=l.offsetHeight,d=l.offsetWidth;c?(h=d,a=v):(a=d,h=v),e={inlineSize:a,blockSize:h}}j(i,e)}}var Y=[],V="__AMP_MODAL_SAVED_TAB_INDEX";function q(t){for(var i=[],n=t;n;n=n.parentNode||n.host)i.push(n);return i}function F(t,i,n){null===n||null==n?t.removeAttribute(i):t.setAttribute(i,n)}var H="i-amphtml-element",U=function(t){return t.unmount()};function $(t,i,n,r){for(var s,e=u(s=t)?s:[s],o=0;o<e.length;o++)G(e[o],i,n,r)}function G(t,i,n,r){if(i&&t.classList.contains(H)){var s=t;if(j(r,s),!n){var e=s.getPlaceholder();return void(e&&G(e,!0,!1,r))}}for(var o=t.getElementsByClassName(H),a=null,h=0;h<o.length;h++){var u=o[h];if(n)j(r,u);else{a=a||[];for(var f=!1,c=0;c<a.length;c++)if(a[c].contains(u)){f=!0;break}f||(a.push(u),j(r,u))}}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var Z,J=self.__AMP_LOG;function K(t){return J.user||(J.user=Q()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(J.user.win,t)?J.userForEmbed||(J.userForEmbed=Q()):J.user}function Q(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function tt(t,i,n,r,s,e,o,a,h,u,f){return t}function it(t,i){return ot(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function nt(t,i){return ot(et(st(t)),i)}function rt(t,i){var n=et(st(t));return at(n,i)?ot(n,i):null}function st(t){return t.nodeType?(i=b(t),it(i,"ampdoc")).getAmpDoc(t):t;var i}function et(t){var i=st(t);return i.isSingleDoc()?i.win:i}function ot(t,i){tt(at(t,i));var n=function(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return n.obj||(tt(n.ctor),tt(n.context),n.obj=new n.ctor(n.context),tt(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function at(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var ht,ut=function(t){return nt(t,"owners")},ft=function(t){return ot(t,"timer")};function ct(t){if(void 0!==ht)return ht;ht=!1;try{var i={get passive(){return ht=!0,!1}};t.addEventListener("test-options",null,i),t.removeEventListener("test-options",null,i)}catch(t){}return ht}function lt(t,i){var n,r=function(t,i){if(void 0!==l?l:l=function(t){try{var i=t.ownerDocument,n=i.createElement("div"),r=i.createElement("div");return n.appendChild(r),n.querySelector(":scope div")===r}catch(t){return!1}}(t))return t.querySelector(y(i,":scope"));var n=function(t,i){var n=t.classList,r="i-amphtml-scoped";n.add(r);var s=y(":not([toolbar]) [autoscroll]",".".concat(r)),e=t.querySelectorAll(s);return n.remove(r),e}(t)[0];return void 0===n?null:n}(i,":not([toolbar]) [autoscroll]");if(r){var s=_(t.win,i)["overflow-y"];"scroll"==s||"auto"==s?(n=t,nt(n,"viewport")).animateScrollWithinParent(r,i,"center",0):K().error("AMP-SIDEBAR","for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work.")}}function vt(t,i){var n=ft(t);return n.promise(1).then((function(){return n.promise(i)}))}var dt=function(){function t(){this.tt=null}var i=t.prototype;return i.add=function(t){var i=this;return this.tt||(this.tt=[]),this.tt.push(t),function(){i.remove(t)}},i.remove=function(t){var i,n,r;this.tt&&(n=t,-1!=(r=(i=this.tt).indexOf(n))&&i.splice(r,1))},i.removeAll=function(){this.tt&&(this.tt.length=0)},i.fire=function(t){if(this.tt)for(var i,n=c(this.tt.slice(),!0);!(i=n()).done;)(0,i.value)(t)},i.getHandlerCount=function(){var t,i;return null!==(t=null===(i=this.tt)||void 0===i?void 0:i.length)&&void 0!==t?t:0},t}(),mt=function(){function t(t,i,n){var r=this;this._u=ft(t),this.ku=i,this.Nu=n||0,this.Cu=-1,this.ju=0,this.Du=!1,this.Uu=function(){r.zu()}}var i=t.prototype;return i.isPending=function(){return-1!=this.Cu},i.schedule=function(t){var i=t||this.Nu;this.Du&&i<10&&(i=10);var n=Date.now()+i;return(!this.isPending()||n-this.ju<-10)&&(this.cancel(),this.ju=n,this.Cu=this._u.delay(this.Uu,i),!0)},i.zu=function(){this.Cu=-1,this.ju=0,this.Du=!0,this.ku(),this.Du=!1},i.cancel=function(){this.isPending()&&(this._u.cancel(this.Cu),this.Cu=-1)},t}(),pt="__AMP_Gestures",bt=function(t,i,n,r){this.type=t,this.data=i,this.time=n,this.event=r},yt=function(){function t(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.ti=t,this.XM=[],this.Hp=[],this.ws=[],this.qM=[],this.$M=null;var r=t.ownerDocument.defaultView,s=ct(r);this.KM=i||s,this.JM=n,this.QM=!1,this.zu=new mt(b(t),this.el.bind(this)),this.tI=new dt,this.iI=Object.create(null),this.nI=this.tr.bind(this),this.rI=this.nr.bind(this),this.oI=this.ir.bind(this),this.aI=this.$p.bind(this),this.ti.addEventListener("touchstart",this.nI,!!s&&{passive:!0}),this.ti.addEventListener("touchend",this.rI),this.ti.addEventListener("touchmove",this.oI,!!s&&{passive:!0}),this.ti.addEventListener("touchcancel",this.aI),this.sI=!1}t.get=function(i){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=i[pt];return s||(s=new t(i,n,r),i[pt]=s),s};var i=t.prototype;return i.cleanup=function(){this.ti.removeEventListener("touchstart",this.nI),this.ti.removeEventListener("touchend",this.rI),this.ti.removeEventListener("touchmove",this.oI),this.ti.removeEventListener("touchcancel",this.aI),delete this.ti[pt],this.zu.cancel()},i.onGesture=function(t,i){var n=new t(this),r=n.getType(),s=this.iI[r];return s||(this.XM.push(n),s=new dt,this.iI[r]=s),s.add(i)},i.removeGesture=function(t){var i=new t(this).getType(),n=this.iI[i];if(n){n.removeAll();var r=function(t,n){for(var r=0;r<t.length;r++)if(t[r].getType()==i)return r;return-1}(this.XM);return!(r<0||(this.XM.splice(r,1),this.ws.splice(r,1),this.qM.splice(r,1),this.Hp.splice(r,1),delete this.iI[i],0))}return!1},i.onPointerDown=function(t){return this.tI.add(t)},i.tr=function(t){var i=Date.now();this.QM=!1,this.tI.fire(t);for(var n=0;n<this.XM.length;n++)this.ws[n]||(this.qM[n]&&this.qM[n]<i&&this.Wp(n),this.XM[n].onTouchStart(t)&&this.Yp(n));this.eI(t)},i.ir=function(t){for(var i=Date.now(),n=0;n<this.XM.length;n++)this.Hp[n]&&(this.qM[n]&&this.qM[n]<i?this.Wp(n):this.XM[n].onTouchMove(t)||this.Wp(n));this.eI(t)},i.nr=function(t){for(var i=Date.now(),n=0;n<this.XM.length;n++)if(this.Hp[n])if(this.qM[n]&&this.qM[n]<i)this.Wp(n);else{this.XM[n].onTouchEnd(t);var r=!this.qM[n],s=this.qM[n]<i;this.$M==this.XM[n]||!r&&!s||this.Wp(n)}this.eI(t)},i.$p=function(t){for(var i=0;i<this.XM.length;i++)this.uI(i);this.eI(t)},i.Vi=function(t,i){if(this.$M)t.acceptCancel();else{for(var n=Date.now(),r=0;r<this.XM.length;r++)this.XM[r]==t&&(this.ws[r]=n+i,this.qM[r]=0);this.sI=!0}},i.hI=function(t,i){if(this.$M)t.acceptCancel();else for(var n=Date.now(),r=0;r<this.XM.length;r++)this.XM[r]==t&&(this.qM[r]=n+i)},i.cI=function(t){this.$M==t&&(this.$M=null,this.QM=!0)},i.lI=function(t,i,n){p(this.$M==t);var r=this.iI[t.getType()];r&&r.fire(new bt(t.getType(),i,Date.now(),n))},i.eI=function(t){var i=!!this.$M||this.QM;if(this.QM=!1,!i)for(var n=Date.now(),r=0;r<this.XM.length;r++)if(this.ws[r]||this.qM[r]&&this.qM[r]>=n){i=!0;break}i?(t.stopPropagation(),this.KM||t.preventDefault()):this.JM&&t.stopPropagation(),this.sI&&(this.sI=!1,this.el())},i.el=function(){for(var t=Date.now(),i=-1,n=0;n<this.XM.length;n++)this.ws[n]?(-1==i||this.ws[n]>this.ws[i])&&(i=n):this.qM[n]&&this.qM[n]<t&&this.Wp(n);if(-1!=i){for(var r=0,s=0;s<this.XM.length;s++)!this.ws[s]&&this.Hp[s]&&(r=Math.max(r,this.qM[s]-t));r<2?this.mI(i):this.zu.schedule(r)}},i.mI=function(t){for(var i=this.XM[t],n=0;n<this.XM.length;n++)n!=t&&this.uI(n);this.ws[t]=0,this.qM[t]=0,this.$M=i,i.acceptStart()},i.Yp=function(t){this.Hp[t]=!0,this.qM[t]=0},i.Wp=function(t){this.Hp[t]=!1,this.qM[t]=0,this.ws[t]||this.XM[t].acceptCancel()},i.uI=function(t){this.ws[t]=0,this.Wp(t)},t}(),wt=function(){function t(t,i){this.pI=t,this._y=i}var i=t.prototype;return i.getType=function(){return this.pI},i.signalReady=function(t){this._y.Vi(this,t)},i.signalPending=function(t){this._y.hI(this,t)},i.signalEnd=function(){this._y.cI(this)},i.signalEmit=function(t,i){this._y.lI(this,t,i)},i.acceptStart=function(){},i.acceptCancel=function(){},i.onTouchStart=function(t){return!1},i.onTouchMove=function(t){return!1},i.onTouchEnd=function(t){},t}();function gt(t,i,n){i<1&&(i=1);var r=t/i,s=.5+Math.min(i/33.34,.5);return r*s+n*(1-s)}Math.round(-16.67/Math.log(.95));var kt=function(t){r(n,t);var i=a(n);function n(t){return i.call(this,"swipe-x",t,!0,!1)}return n}(function(t){r(n,t);var i=a(n);function n(t,n,r,s){var e;return(e=i.call(this,t,n)).fI=r,e.dI=s,e.$M=!1,e.vI=0,e.yI=0,e.gI=0,e.bI=0,e.xI=0,e.wI=0,e.nl=0,e.kI=0,e.AI=0,e.TI=0,e.SI=0,e}var s=n.prototype;return s.onTouchStart=function(t){var i=t.touches;return!!(this.$M&&i&&i.length>1)||!(!i||1!=i.length)&&(this.nl=Date.now(),this.vI=i[0].clientX,this.yI=i[0].clientY,!0)},s.onTouchMove=function(t){var i=t.touches;if(i&&i.length>=1){var n=i[0],r=n.clientX,s=n.clientY;if(this.gI=r,this.bI=s,this.$M)this.EI(!1,!1,t);else{var e=Math.abs(r-this.vI),o=Math.abs(s-this.yI);if(this.fI&&this.dI)(e>=8||o>=8)&&this.signalReady(-10);else if(this.fI){if(e>=8&&e>o)this.signalReady(-10);else if(o>=8)return!1}else{if(!this.dI)return!1;if(o>=8&&o>e)this.signalReady(-10);else if(e>=8)return!1}}return!0}return!1},s.onTouchEnd=function(t){var i=t.touches;i&&0==i.length&&this.OI(t)},s.acceptStart=function(){this.$M=!0,this.xI=this.vI,this.wI=this.yI,this.AI=this.nl,this.vI=this.gI,this.yI=this.bI,this.EI(!0,!1,null)},s.acceptCancel=function(){this.$M=!1},s.EI=function(t,i,n){this.kI=Date.now();var r=this.kI-this.AI;if(!i&&r>4||i&&r>16){var s=gt(this.gI-this.xI,r,this.TI),e=gt(this.bI-this.wI,r,this.SI);(!i||r>32||0!=s||0!=e)&&(this.TI=Math.abs(s)>1e-4?s:0,this.SI=Math.abs(e)>1e-4?e:0),this.xI=this.gI,this.wI=this.bI,this.AI=this.kI}this.signalEmit({first:t,last:i,time:this.kI,deltaX:this.gI-this.vI,deltaY:this.bI-this.yI,startX:this.vI,startY:this.yI,lastX:this.gI,lastY:this.bI,velocityX:this.TI,velocityY:this.SI},n)},s.OI=function(t){this.$M&&(this.$M=!1,this.EI(!1,!0,t),this.signalEnd())},n}(wt)),xt="backward",Mt="horizontal",At=function(){function t(t,i,n){this.t=t,this.wx=i,this.tW=n,this.iW=xt,this.nW=Mt,this.rW=null,this.eW=null}var i=t.prototype;return i.sW=function(){return this.nW==Mt?this.rW.offsetWidth:this.rW.offsetHeight},i.oW=function(t,i){var n=this.nW==Mt?t:i;return this.iW==xt?-Math.min(n,0):Math.max(n,0)},i.aW=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this.iW==xt?-t:t,r=this.nW==Mt?"".concat(n).concat(i):0,s=this.nW==Mt?0:"".concat(n).concat(i);return"translate(".concat(r,", ").concat(s,")")},i.startSwipe=function(t){var i=t.direction,n=t.mask,r=t.orientation,s=t.swipeElement;this.rW=s,this.eW=n,this.iW=i,this.nW=r},i.swipeMove=function(t){this.hW(t,!1)},i.endSwipe=function(t){this.hW(t,!0)},i.uW=function(t,i){var n=.75*i;return R(this.rW,{transform:this.aW(t,"px"),transition:"".concat(n,"ms transform ").concat("cubic-bezier(0.15, .55, .3, 0.95)")}),vt(this.t,n)},i.fW=function(t){var i=this,n=.8*t;return this.wx((function(){R(i.rW,{transform:i.aW(0),transition:"".concat(n,"ms transform ease-in")}),R(i.eW,{opacity:"",transition:"".concat(n,"ms opacity ease-in")})})).then((function(){return vt(i.t,n)}))},i.cW=function(t){var i=this,n=.75*(this.sW()-t);return this.wx((function(){R(i.rW,{transform:i.aW(100,"%"),transition:"".concat(n,"ms transform ease-out")}),R(i.eW,{opacity:0,transition:"".concat(n,"ms opacity ease-out")})})).then((function(){return vt(i.t,n)})).then((function(){return i.tW()}))},i.lW=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";R(this.rW,{transform:t,transition:""}),R(this.eW,{opacity:i,transition:""})},i.vW=function(t,i,n,r){var s=this,e=22.5*t+n,o=22.5*i+r,a=this.oW(e,o),h=this.oW(t,i),u=.5*this.sW();return a<u&&h<.65?this.uW(a,h).then((function(){return s.fW(a)})):this.cW(a)},i.hW=function(t,i){var n=this,r=t.deltaX,s=t.deltaY,e=t.velocityX,o=t.velocityY;this.wx((function(){if(i)n.vW(e,o,r,s).then((function(){n.lW()}));else{var t=n.oW(r,s),a=t/n.sW(),h=Math.max(0,1-a);n.lW(n.aW(t,"px"),h)}}))},t}(),Ot=function(){function t(t,i){this.bb=i,this.dW=t,this.Ks=i.getAmpDoc(),this.mW=this.dW.getAttribute("toolbar"),this.pW=null,this.bW=void 0,this.yW=!1,this.dW.classList.add("amp-sidebar-toolbar-target-hidden"),this.wW()}var i=t.prototype;return i.onLayoutChange=function(){this.Ks.win.matchMedia(this.mW).matches?this.gW():this.kW()},i.wW=function(){this.pW=this.dW.cloneNode(!0);var t,i,n=(t=this.dW.getAttribute("toolbar-target"),'"toolbar-target" is required',i=this.dW,K().assert(t,'"toolbar-target" is required',i,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),r=this.Ks.getElementById(n);if(!r)throw K().createError("Could not find the toolbar-target element with an id: ".concat(n));this.bW=r,this.pW.classList.add("i-amphtml-toolbar"),P(this.bW,!1)},i.OW=function(){return this.yW},i.gW=function(){var t=this;return this.OW()?Z||(Z=Promise.resolve(void 0)):this.bb.mutateElement((function(){t.bW&&(P(t.bW,!0),t.bW.contains(t.pW)||t.bW.appendChild(t.pW),t.dW.classList.add("amp-sidebar-toolbar-target-shown"),t.dW.classList.remove("amp-sidebar-toolbar-target-hidden"),t.yW=!0,lt(t.Ks,t.pW))}))},i.kW=function(){var t=this;this.OW()&&this.bb.mutateElement((function(){t.bW&&(P(t.bW,!1),t.dW.classList.add("amp-sidebar-toolbar-target-hidden"),t.dW.classList.remove("amp-sidebar-toolbar-target-shown"),t.yW=!1)}))},t}();function Et(t){var i=t.indexOf("#");return-1==i?t:t.substring(0,i)}var St="amp-sidebar toolbar",jt="left",Dt="right",Xt=function(t){r(s,t);var n=a(s);function s(t){var r;(r=n.call(this,t)).xa=null,r.qu=null,r.xW=null,r.jW=null,r.Bd=r.win.document,r.MW=r.Bd.documentElement,r.EW=null,r.SW=[];var s=it(r.win,"platform");return r.yY=s.isIos(),r.Ak=s.isSafari(),r.iY=-1,r.AW=!1,r.pY=null,r.aY=null,r.DW=0,r.XW=!1,r._W=null,r.RW=new At(r.win,(function(t){return r.mutateElement(t)}),(function(){return r.PW(!0,3)})),r.Mrt=!1,r.Drt=!1,r.gb=r.gb.bind(i(r)),r.TW=null,r}var e=s.prototype;return e.buildCallback=function(){var t,i=this,n=this.element;n.classList.add("i-amphtml-overlay"),n.classList.add("i-amphtml-scrollable"),this.EW=n.getAttribute("side"),this.Drt=n.hasAttribute("data-disable-swipe-close"),this.xa=this.getViewport(),this.qu=function(t){return rt(t,"action")}(n),this.element.parentNode!=this.element.ownerDocument.body&&this.element.parentNode!=this.getAmpDoc().getBody()&&this.user().warn(St,"".concat(St," is recommended to be a direct child of the <body> element to preserve a logical DOM order.")),this.EW!=jt&&this.EW!=Dt&&(this.EW=this.zW("rtl"==((t=this.Bd).body.getAttribute("dir")||t.documentElement.getAttribute("dir")||"ltr")?Dt:jt),n.setAttribute("side",this.EW)),this.IW(),n.addEventListener("amp:dom-update",(function(){i.IW()})),this.getAmpDoc().whenReady().then((function(){h(n.querySelectorAll("nav[toolbar]")).forEach((function(t){try{i.SW.push(new Ot(t,i))}catch(t){i.user().error(St,"Failed to instantiate toolbar",t)}})),i.gb()})),this.yY&&this.NW(),n.hasAttribute("role")||n.setAttribute("role","menu"),n.tabIndex=-1,this.MW.addEventListener("keydown",(function(t){"Escape"==t.key&&i.OA(3)&&t.preventDefault()})),this.pY=this.HY(),this.pY||(this.pY=this.createScreenReaderCloseButton(),n.insertBefore(this.pY,this.element.firstChild)),n.appendChild(this.createScreenReaderCloseButton()),this.registerDefaultAction((function(t){var n=t.caller,r=t.trust;i.xY(r,n)}),"open"),this.registerAction("close",(function(t){i.OA(t.trust)})),this.registerAction("toggle",(function(t){var n=t.caller,r=t.trust;i.XW?i.OA(r):i.xY(r,n)})),this.qu.addToAllowlist("amp-sidebar",["open","close","toggle"],["email"]),n.addEventListener("click",(function(t){var r=w(t.target,"A");if(r&&r.href){var s=function(t){return rt(t,"url")}(n).parse(r.href),e=i.getAmpDoc().getUrl();if(Et(r.href)!=Et(e))return;s.hash&&i.OA(3)}}),!0),this.XX(this.element)},e.attachedCallback=function(){this.TW=this.xa.onResize(function(t,i,n){var r=0,s=0,e=null;function o(){r=0;var n,a=100-(t.Date.now()-s);a>0?r=t.setTimeout(o,a):(n=e,e=null,i.apply(null,n))}return function(){s=t.Date.now();for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];e=n,r||(r=t.setTimeout(o,100))}}(this.win,this.gb)),this.gb()},e.detachedCallback=function(){this.TW&&(this.TW(),this.TW=null)},e.IW=function(){if(!this._W){var t=this.element.querySelector("amp-nested-menu");t&&((i=this.win,it(i,"extensions")).installExtensionForDoc(this.getAmpDoc(),"amp-nested-menu"),this._W=t)}var i},e.HY=function(){for(var t=this.element.querySelectorAll("[on]"),i=0;i<t.length;i++){var n=t[i],r=this.qu.hasResolvableActionForTarget(n,"tap",this.element,tt(n.parentElement)),s=w(n,"[toolbar]");if(r&&!s)return n}return null},e.createScreenReaderCloseButton=function(){var t=this,i=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",n=this.Bd.createElement("button");return n.textContent=i,n.classList.add("i-amphtml-screen-reader"),n.tabIndex=-1,n.addEventListener("click",(function(){t.OA(3)})),n},e.gb=function(){var t=this;this.getAmpDoc().whenReady().then((function(){t.SW.forEach((function(t){t.onLayoutChange()}))}))},e.LW=function(t,i){var n=this;this.xW=t;var r=function(){n.xW===t&&n.mutateElement(t)};i?ft(this.win).delay(r,i):r()},e.WW=function(t){var i=this;P(this.element,!0),P(this.BW(),!0),this.xa.addToFixedLayer(this.element,!0),this.mutateElement((function(){!function(t){p(Y.every((function(i){return i.element!==t}))),p(k(t));var i=function(t){for(var i=[],n=q(t),r=function(t){var r=n[t];if(!r.parentNode)return"continue";h(r.parentNode.children).filter((function(t){return t!=r})).forEach((function(t){return i.push(t)}))},s=0;s<n.length;s++)r(s);return i}(t),n=q(t).filter(m),r=function(t){for(var i=[],n=t;n;){var r=x(n),s=r.querySelectorAll(["a[href]","area[href]","button","details summary","iframe","input","select","textarea","[contenteditable]","[draggable]","[tabindex]"].join(","));Array.prototype.push.apply(i,s),n=r.host}return i}(t),s=r.filter((function(i){return t.contains(i)&&void 0!==i[V]})),e=r.filter((function(i){return!t.contains(i)&&void 0===i[V]})),o=i.concat(n).map((function(t){return{element:t,prevValue:t.getAttribute("aria-hidden")}}));n.forEach((function(t){return t.removeAttribute("aria-hidden")})),i.forEach((function(t){return t.setAttribute("aria-hidden","true")})),e.forEach((function(t){t[V]=t.getAttribute("tabindex"),t.setAttribute("tabindex","-1")})),s.forEach((function(t){p(void 0!==t[V]),F(t,"tabindex",t[V])})),Y.push({element:t,hiddenElementInfos:o,focusableExternalElements:e,focusableInternalElements:s})}(i.element)})),this.yY&&this.Ak&&this.YW(),this.element.scrollTop=1,this.element.setAttribute("open",""),this.BW().setAttribute("open",""),this.LW((function(){return i.FW(t)}),350),lt(this.getAmpDoc(),this.element)},e.FW=function(t){var i=g(this.element),n=ut(this.element);n.scheduleLayout(this.element,i),n.scheduleResume(this.element,i),this.GW()||M(tt(this.pY)),this.rD("sidebarOpen",t),this.element.setAttribute("i-amphtml-sidebar-opened",""),this.BW().setAttribute("i-amphtml-sidebar-opened",""),this.setAsContainer()},e.UW=function(t,i){var n=this;this.BW().removeAttribute("open"),this.BW().removeAttribute("i-amphtml-sidebar-opened"),this.mutateElement((function(){!function(t){var i=Y.pop();p(i);var n=i.element,r=i.focusableExternalElements,s=i.focusableInternalElements,e=i.hiddenElementInfos;p(k(t)),p(n===t),e.forEach((function(t){return F(t.element,"aria-hidden",t.prevValue)})),s.forEach((function(t){return t.setAttribute("tabindex","-1")})),r.forEach((function(t){p(void 0!==t[V]),F(t,"tabindex",t[V]),t[V]=void 0}))}(n.element)})),this.element.removeAttribute("open"),this.element.removeAttribute("i-amphtml-sidebar-opened"),this.LW((function(){return n.VW(i)}),t?0:350)},e.VW=function(t){P(this.element,!1),P(this.BW(),!1),ut(this.element).schedulePause(this.element,g(this.element)),this.rD("sidebarClose",t),this.removeAsContainer(),function(t){$(t,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],!0,U)}(this.element,!1)},e.xY=function(t,i){var n=this;this.XW||(this.XW=!0,this.xa.enterOverlayMode(),this.LW((function(){return n.WW(t)})),this.tZ().push((function(){n.yY?n.PW(!0,t):n.OA(t)})).then((function(t){n.iY=t})),i&&(this.aY=i,this.DW=this.xa.getScrollTop()),function(t,i,n){var r=t.ownerDocument.defaultView;if(r){var s=C.get(t);if(s||(s=[],C.set(t,s),B(r).observe(t)),!s.some((function(t){return t.callback===n&&0===t.type}))){s.push({type:0,callback:n});var e=W.get(t);e&&setTimeout((function(){return N(0,n,e)}))}}}(this.element,0,this.gb))},e.OA=function(t){return this.PW(!1,t)},e.PW=function(t,i){var n=this;if(!this.XW)return!1;this.XW=!1,this.xa.leaveOverlayMode();var r=this.DW==this.xa.getScrollTop(),s=this.element.contains(this.Bd.activeElement);return this.LW((function(){return n.UW(t,i)})),t&&(P(this.element,!1),P(this.BW(),!1)),-1!=this.iY&&(this.tZ().pop(this.iY),this.iY=-1),this.aY&&s&&r&&(this.GW()||M(this.aY)),function(t,i,n){var r=C.get(t);if(r&&(function(t,i){for(var r=[],s=0,e=0;e<t.length;e++){var o=t[e];(a=o).callback===n&&0===a.type?r.push(o):(s<e&&(t[s]=o),s++)}var a;s<t.length&&(t.length=s)}(r),0==r.length)){C.delete(t),W.delete(t);var s=t.ownerDocument.defaultView;s&&B(s).unobserve(t)}}(this.element,0,this.gb),!0},e.XX=function(t){var i=this;this.Drt||yt.get(t,!0,!0).onGesture(kt,(function(t){var n=t.data,r=t.event;i.HW(n,r)}))},e.HW=function(t,i){var n;if(!t.first)return t.last?(this.Mrt&&this.RW.endSwipe(t),void(this.Mrt=!1)):void(i&&i.target&&(n=i.target,"input"!==n.nodeName.toLowerCase()||"range"!==n.getAttribute("type"))&&(this.Mrt=!0,this.RW.swipeMove(t)));this.RW.startSwipe({swipeElement:this.element,mask:this.jW,direction:this.EW==jt?xt:"forward",orientation:Mt})},e.zW=function(t){return w(this.element,"amp-story")?t==jt?Dt:jt:t},e.BW=function(){var t=this;if(!this.jW){var i=this.Bd.createElement("div");i.classList.add("amp-sidebar-mask","i-amphtml-sidebar-mask"),i.addEventListener("click",(function(){t.OA(3)})),this.getAmpDoc().getBody().appendChild(i),i.addEventListener("touchmove",(function(t){t.preventDefault()})),this.XX(i),this.jW=i}return this.jW},e.NW=function(){var t=this;this.element.addEventListener("scroll",(function(i){t.XW&&(t.element.scrollTop<1?(t.element.scrollTop=1,i.preventDefault()):t.element.scrollHeight==t.element.scrollTop+t.element.offsetHeight&&(t.element.scrollTop=t.element.scrollTop-1,i.preventDefault()))}))},e.YW=function(){if(!this.AW){var t=this.Bd.createElement("div");R(t,{"height":"54px","width":"100%","background-color":"transparent"}),this.element.appendChild(t),this.AW=!0}},e.tZ=function(){return nt(this.getAmpDoc(),"history")},e.rD=function(t,i){var n=function(t,i,n,r){var s={detail:n};if(Object.assign(s,void 0),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,s);var e=t.document.createEvent("CustomEvent");return e.initCustomEvent(i,!!s.bubbles,!!s.cancelable,n),e}(this.win,"".concat(St,".").concat(t),{});this.qu.trigger(this.element,t,n,i)},e.GW=function(){return this.yY&&(t=this.element,nt(t,"viewer")).isEmbedded();var t},s}(t.BaseElement);t.registerElement("amp-sidebar",Xt,"amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.amp-sidebar-mask{background-color:rgba(0,0,0,.5)}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-sidebar-0.1.js.map