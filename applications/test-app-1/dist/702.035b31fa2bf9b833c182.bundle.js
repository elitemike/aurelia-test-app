(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[702],{376:(t,e,n)=>{"use strict";n.d(e,{c:()=>o});var o=function(){function t(){}return t.add=function(t,e){return t+e},t.multiply=function(t,e){return t*e},t.divide=function(t,e){return t/e},t.subtract=function(t,e){return t-e},t}()},"aurelia-testing":(t,e,n)=>{"use strict";n.r(e),n.d(e,{CompileSpy:()=>u,ComponentTester:()=>h,StageComponent:()=>l,ViewSpy:()=>c,configure:()=>d,waitFor:()=>f,waitForDocumentElement:()=>a,waitForDocumentElements:()=>p});var o=n(191),r=n(66),i=n(845),u=function(){function t(t,e){(0,r.jl)("compile-spy").info(t.toString(),e)}return Object.defineProperty(t,"inject",{get:function(){return[i.SO.Element,o.C1]},enumerable:!1,configurable:!0}),t.$resource={type:"attribute",name:"compile-spy"},t}(),c=function(){function t(){this.logger=(0,r.jl)("view-spy")}return t.prototype._log=function(t,e){this.value||"created"!==t?this.value&&-1!==this.value.indexOf(t)&&this.logger.info(t,this.view,e):this.logger.info(t,this.view)},t.prototype.created=function(t){this.view=t,this._log("created")},t.prototype.bind=function(t){this._log("bind",t)},t.prototype.attached=function(){this._log("attached")},t.prototype.detached=function(){this._log("detached")},t.prototype.unbind=function(){this._log("unbind")},t.$resource={type:"attribute",name:"view-spy"},t}(),s=function(){return s=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},s.apply(this,arguments)};function f(t,e){void 0===e&&(e={present:!0,interval:50,timeout:5e3});var n=!1;return e=s({present:!0,interval:50,timeout:5e3},e),Promise.race([new Promise((function(t,o){return setTimeout((function(){n=!0,o(new Error(e.present?"Element not found":"Element not removed"))}),e.timeout)})),function o(){var r=t(),i=null!==r&&(!(r instanceof NodeList)&&!r.jquery||r.length>0);return!e.present==!i||n?Promise.resolve(r):new Promise((function(t){return setTimeout(t,e.interval)})).then(o)}()])}function a(t,e){return f((function(){return document.querySelector(t)}),e)}function p(t,e){return f((function(){return document.querySelectorAll(t)}),e)}var l=function(){function t(){}return t.withResources=function(t){return void 0===t&&(t=[]),(new h).withResources(t)},t}(),h=function(){function t(){this.resources=[]}return t.prototype.configure=function(t){return t.use.standardConfiguration()},t.prototype.bootstrap=function(t){this.configure=t},t.prototype.withResources=function(t){return this.resources=t,this},t.prototype.inView=function(t){return this.html=t,this},t.prototype.boundTo=function(t){return this.bindingContext=t,this},t.prototype.manuallyHandleLifecycle=function(){return this._prepareLifecycle(),this},t.prototype.create=function(t){var e=this;return t((function(t){return Promise.resolve(e.configure(t)).then((function(){return e.resources&&t.use.globalResources(e.resources),t.start().then((function(){return e.host=document.createElement("div"),e.host.innerHTML=e.html,document.body.appendChild(e.host),t.enhance(e.bindingContext,e.host).then((function(){return e.rootView=t.root,e.element=e.host.firstElementChild,t.root.controllers.length&&(e.viewModel=t.root.controllers[0].viewModel),new Promise((function(t){return setTimeout((function(){return t()}),0)}))}))}))}))}))},t.prototype.dispose=function(){if(void 0===this.host||void 0===this.rootView)throw new Error("Cannot call ComponentTester.dispose() before ComponentTester.create()");return this.rootView.detached(),this.rootView.unbind(),this.host.parentNode.removeChild(this.host)},t.prototype._prepareLifecycle=function(){var t=this,e=o.G7.prototype.bind;o.G7.prototype.bind=function(){},this.bind=function(n){return new Promise((function(r){o.G7.prototype.bind=e,void 0!==n&&(t.bindingContext=n),t.rootView.bind(t.bindingContext),setTimeout((function(){return r()}),0)}))};var n=o.G7.prototype.attached;o.G7.prototype.attached=function(){},this.attached=function(){return new Promise((function(e){o.G7.prototype.attached=n,t.rootView.attached(),setTimeout((function(){return e()}),0)}))},this.detached=function(){return new Promise((function(e){t.rootView.detached(),setTimeout((function(){return e()}),0)}))},this.unbind=function(){return new Promise((function(e){t.rootView.unbind(),setTimeout((function(){return e()}),0)}))}},t.prototype.waitForElement=function(t,e){var n=this;return f((function(){return n.element.querySelector(t)}),e)},t.prototype.waitForElements=function(t,e){var n=this;return f((function(){return n.element.querySelectorAll(t)}),e)},t}();function d(t){t.globalResources([u,c])}},475:()=>{},97:(t,e,n)=>{"use strict";var o,r=n(845);Object.defineProperty(r.iw,"Loader",{get:function(){return o||(o=n(196).HV)},set:function(t){o=t}})},163:(t,e,n)=>{"use strict";function o(t,e,n,o){var r,i=arguments.length,u=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(u=(i<3?r(u):i>3?r(e,n,u):r(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u}function r(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}n.d(e,{gn:()=>o,w6:()=>r}),Object.create,Object.create}}]);