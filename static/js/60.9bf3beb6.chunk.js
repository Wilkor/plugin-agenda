(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[60],{126:function(t,o,i){"use strict";i.r(o),i.d(o,"bds_toast",(function(){return s}));var e=i(12),n=function(t,o,i,e){function n(t){return t instanceof i?t:new i((function(o){o(t)}))}return new(i||(i=Promise))((function(i,a){function s(t){try{c(e.next(t))}catch(o){a(o)}}function r(t){try{c(e.throw(t))}catch(o){a(o)}}function c(t){t.done?i(t.value):n(t.value).then(s,r)}c((e=e.apply(t,o||[])).next())}))},a=function(t,o){var i,e,n,a,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(t){return function(o){return c([t,o])}}function c(a){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,e&&(n=2&a[0]?e.return:a[0]?e.throw||((n=e.return)&&n.call(e),0):e.next)&&!(n=n.call(e,a[1])).done)return n;switch(e=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,e=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){s.label=a[1];break}if(6===a[0]&&s.label<n[1]){s.label=n[1],n=a;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(a);break}n[2]&&s.ops.pop(),s.trys.pop();continue}a=o.call(t,s)}catch(r){a=[6,r],e=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},s=function(){function t(t){var o=this;Object(e.r)(this,t),this.toastButtonClick=Object(e.c)(this,"toastButtonClick",7),this.icon=null,this.actionType="button",this.variant="system",this.duration=0,this.buttonAction="close",this.show=!1,this.hide=!1,this.position="bottom-left",this._buttonClickHandler=function(){"close"===o.buttonAction||o.toastButtonClick.emit(o.el),o.close()},this.mapIconName={system:"bell",error:"error",success:"like",warning:"attention",undo:"undo",redo:"redo"}}return t.prototype.create=function(t){var o=t.actionType,i=t.buttonAction,e=t.buttonText,s=t.icon,r=t.toastText,c=t.toastTitle,l=t.variant,h=t.duration,p=t.position;return n(this,void 0,void 0,(function(){var t,n=this;return a(this,(function(a){return(t=document.querySelector("bds-toast-container.".concat(p)))?(t.appendChild(this.el),t.classList.add(p)):((t=document.createElement("bds-toast-container")).classList.add(p),document.body.appendChild(t),t.appendChild(this.el)),this.el.actionType=o||"button",this.el.buttonAction=i||"close",this.el.buttonText=e,this.el.toastText=r,this.el.toastTitle=c,this.el.variant=l||"system",this.el.duration=1e3*h||0,this.el.position=p||"bottom-left",this.el.icon=null!==s&&void 0!==s?s:this.mapIconName[this.variant],this.el.show=!0,this.el.duration>0&&setTimeout((function(){n.el.hide=!0,setTimeout((function(){n.el.remove()}),400)}),this.el.duration),[2]}))}))},t.prototype.close=function(){return n(this,void 0,void 0,(function(){var t=this;return a(this,(function(o){return this.el.shadowRoot?(this.el.shadowRoot.querySelector("div").classList.remove("show"),this.el.shadowRoot.querySelector("div").classList.add("hide")):(this.el.querySelector("div").classList.remove("show"),this.el.querySelector("div").classList.add("hide")),setTimeout((function(){t.el.remove()}),400),[2]}))}))},t.prototype.render=function(){var t,o,i=this;return Object(e.h)("div",{class:(t={toast:!0},t["toast--".concat(this.variant)]=!0,t["toast--action--".concat(this.actionType)]=!0,t["show show--".concat(this.position)]=this.show,t.hide=this.hide,t)},this.icon&&Object(e.h)("bds-icon",{theme:"outline",size:"x-large",color:"#fff",name:this.icon}),Object(e.h)("div",{class:"toast__content"},this.toastTitle&&Object(e.h)("bds-typo",{variant:"fs-14",bold:"bold"},this.toastTitle),this.toastText&&Object(e.h)("bds-typo",{variant:"fs-14",innerHTML:this.toastText})),Object(e.h)("div",{class:(o={toast__action:!0},o["toast__action__".concat(this.actionType)]=!0,o)},"button"===this.actionType?Object(e.h)("button",{onClick:function(){return i._buttonClickHandler()}},Object(e.h)("bds-button",{variant:"secondary--white",size:"short"},this.buttonText)):Object(e.h)("button",{onClick:function(){return i._buttonClickHandler()}},Object(e.h)("bds-button-icon",{size:"short",variant:"secondary--white",icon:"close"}))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(e.g)(this)},enumerable:!1,configurable:!0}),t}();s.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); :host .show,:host .hide{display:-ms-flexbox;display:flex}:host .show{opacity:1}:host .show--top-right,:host .show--bottom-right{-webkit-animation:toastAnimationFadeInFromRight 1s;animation:toastAnimationFadeInFromRight 1s}:host .show--top-left,:host .show--bottom-left{-webkit-animation:toastAnimationFadeInFromLeft 1s;animation:toastAnimationFadeInFromLeft 1s}:host .hide{-webkit-transition:all 1s;transition:all 1s;-webkit-animation:toastAnimationFadeOut 0.5s;animation:toastAnimationFadeOut 0.5s}.toast{display:none;position:relative;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0px 8px 12px rgba(96, 123, 153, 0.4), 0px 0px 4px rgba(96, 123, 153, 0.3);box-shadow:0px 8px 12px rgba(96, 123, 153, 0.4), 0px 0px 4px rgba(96, 123, 153, 0.3);color:#ffffff;opacity:0;margin-top:16px}.toast--action--icon{min-width:440px;max-width:440px;padding:8px 20px}.toast--action--icon bds-icon-button{height:32px}@media (max-width: 780px){.toast--action--icon{min-width:220px;width:95%;margin:16px auto 0px auto}}.toast--action--button{min-width:440px;max-width:456px;padding:10px 20px}@media (max-width: 780px){.toast--action--button{min-width:220px;width:95%;margin:16px auto 0px auto}}.toast--system{background:#00c6d7}.toast--error{background:#ff4c4c}.toast--success{background:#21cc79}.toast--warning{background:#f6a721}.toast--undo{background-color:#00c6d7}.toast--redo{background-color:#485c73}.toast bds-icon{margin-right:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.toast__content{height:100%;width:100%;-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;margin-right:8px}.toast__action{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.toast__action button{background:transparent;border:none;outline:none;padding:0}.toast__action__button{white-space:nowrap}.toast__action__icon{display:-ms-flexbox !important;display:flex !important;-ms-flex-align:center;align-items:center}.toast__action__icon bds-icon{color:#ffffff;border-radius:4px;cursor:pointer}@-webkit-keyframes toastAnimationFadeInFromRight{0%{opacity:0;right:-200px}50%{opacity:0.9;right:1px}100%{opacity:1}}@keyframes toastAnimationFadeInFromRight{0%{opacity:0;right:-200px}50%{opacity:0.9;right:1px}100%{opacity:1}}@-webkit-keyframes toastAnimationFadeInFromLeft{0%{opacity:0;left:-200px}50%{opacity:0.9;left:1px}100%{opacity:1}}@keyframes toastAnimationFadeInFromLeft{0%{opacity:0;left:-200px}50%{opacity:0.9;left:1px}100%{opacity:1}}@-webkit-keyframes toastAnimationFadeOut{0%{opacity:1}30%{max-height:60px}80%{opacity:0;max-height:30px}100%{max-height:0px}}@keyframes toastAnimationFadeOut{0%{opacity:1}30%{max-height:60px}80%{opacity:0;max-height:30px}100%{max-height:0px}}'}}]);