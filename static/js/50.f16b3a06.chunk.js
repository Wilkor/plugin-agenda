(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[50],{116:function(t,e,i){"use strict";i.r(e),i.d(e,"bds_select_chips",(function(){return r}));var s=i(11),n=function(t,e,i,s){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function r(t){try{l(s.next(t))}catch(e){o(e)}}function c(t){try{l(s.throw(t))}catch(e){o(e)}}function l(t){t.done?i(t.value):n(t.value).then(r,c)}l((s=s.apply(t,e||[])).next())}))},o=function(t,e){var i,s,n,o,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(e){return l([t,e])}}function l(o){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,s&&(n=2&o[0]?s.return:o[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,o[1])).done)return n;switch(s=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,s=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(n=(n=r.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){r.label=o[1];break}if(6===o[0]&&r.label<n[1]){r.label=n[1],n=o;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(o);break}n[2]&&r.ops.pop(),r.trys.pop();continue}o=e.call(t,r)}catch(c){o=[6,c],s=0}finally{i=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},r=function(){function t(t){var e=this;Object(s.r)(this,t),this.bdsChange=Object(s.c)(this,"bdsChange",7),this.bdsCancel=Object(s.c)(this,"bdsCancel",7),this.bdsFocus=Object(s.c)(this,"bdsFocus",7),this.bdsBlur=Object(s.c)(this,"bdsBlur",7),this.isOpen=!1,this.options=[],this.chips=[],this.newPrefix="",this.value="",this.danger=!1,this.errorMessage="",this.disabled=!1,this.dataTest=null,this.label="",this.icon="",this.duplicated=!1,this.canAddNew=!0,this.notFoundMessage="No results found",this.onFocus=function(){e.bdsFocus.emit()},this.onBlur=function(){e.bdsBlur.emit()},this.toggle=function(){e.disabled||(e.isOpen=!e.isOpen)},this.handler=function(t){return n(e,void 0,void 0,(function(){var e,i;return o(this,(function(s){switch(s.label){case 0:return e=t.detail.value,i=this.getText(e),[4,this.addChip(i)];case 1:return s.sent(),[2]}}))}))},this.getTextFromOption=function(t){var i,s;if((null===t||void 0===t?void 0:t.status)||(null===t||void 0===t?void 0:t.bulkOption)){if(e.internalOptions){var n=e.internalOptions.find((function(e){return e.value==t.value}));if(n)return n.label}return t.querySelector("#bds-typo-label-".concat(t.value)).textContent}return(null===t||void 0===t?void 0:t.titleText)?t.titleText:null!==(s=null===(i=null===t||void 0===t?void 0:t.textContent)||void 0===i?void 0:i.trim())&&void 0!==s?s:""},this.getText=function(t){var i=e.childOptions.find((function(e){return e.value===t}));return e.getTextFromOption(i)},this.handlerNewOption=function(t){return n(e,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.addChip(t)];case 1:return e.sent(),[2]}}))}))},this.setFocusWrapper=function(){e.nativeInput&&e.nativeInput.setFocus()},this.removeFocusWrapper=function(t){var i="bds-input-chips"===t.relatedTarget.localName;e.nativeInput&&!i&&e.nativeInput.removeFocus()},this.keyPressWrapper=function(t){var i="bds-select"===t.target.localName,s="bds-input-chips"===t.target.localName;switch(t.key){case"Enter":if(1===e.childOptionsEnabled.length)e.nativeInput.add(e.childOptionsEnabled[0].textContent);else{if(!e.canAddNew)return;e.nativeInput.add(e.nativeInput.value)}e.nativeInput.value="",e.isOpen||!i&&!s||e.toggle()}},this.changedInputValue=function(){return n(e,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return this.value=this.nativeInput.value,this.nativeInput.value?[4,this.filterOptions(this.nativeInput.value)]:[3,2];case 1:return t.sent(),[3,4];case 2:return[4,this.resetFilterOptions()];case 3:t.sent(),t.label=4;case 4:return this.value&&!1===this.isOpen&&(this.isOpen=!0),[2]}}))}))},this.handleChangeChipsValue=function(){return n(e,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return this.nativeInput.value="",[4,this.resetFilterOptions()];case 1:return t.sent(),[2]}}))}))}}return t.prototype.handleWindow=function(t){this.el.contains(t.target)||(this.isOpen=!1)},t.prototype.isValid=function(){return n(this,void 0,void 0,(function(){return o(this,(function(t){return[2,this.nativeInput.isValid()]}))}))},t.prototype.getChips=function(){return n(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,this.nativeInput.get()];case 1:return[2,t.sent()]}}))}))},t.prototype.componentWillRender=function(){if(this.options.length){this.resetFilterOptions();try{this.internalOptions="string"===typeof this.options?JSON.parse(this.options):this.options}catch(t){this.internalOptions=[]}}},t.prototype.connectedCallback=function(){return n(this,void 0,void 0,(function(){var t,e;return o(this,(function(i){for(t=0,e=this.childOptions;t<e.length;t++)e[t].addEventListener("optionSelected",this.handler);return[2]}))}))},t.prototype.componentDidLoad=function(){return n(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,this.resetFilterOptions()];case 1:return t.sent(),[2]}}))}))},Object.defineProperty(t.prototype,"childOptions",{get:function(){return Array.from(this.el.querySelectorAll("bds-select-option:not(#option-add):not(#no-option)"))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childOptionsEnabled",{get:function(){return Array.from(this.el.querySelectorAll("bds-select-option:not([invisible]):not(#option-add):not(#no-option)"))},enumerable:!1,configurable:!0}),t.prototype.enableCreateOption=function(){return!(0!==this.childOptionsEnabled.length||!this.nativeInput||!this.nativeInput.value)},t.prototype.addChip=function(t){return n(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.nativeInput.add(t)];case 1:return e.sent(),this.nativeInput.value="",this.toggle(),[2]}}))}))},t.prototype.filterOptions=function(t){return n(this,void 0,void 0,(function(){var e,i,s,n,r,c,l,a;return o(this,(function(o){switch(o.label){case 0:return t?[3,2]:[4,this.resetFilterOptions()];case 1:return o.sent(),[2];case 2:e=0,i=this.childOptions,o.label=3;case 3:return e<i.length?(s=i[e],r=this.existsChip,c=[s.textContent],[4,this.nativeInput.get()]):[3,6];case 4:n=r.apply(this,c.concat([o.sent()])),l=s.textContent.toLowerCase(),a=t.toLowerCase(),n&&s.setAttribute("invisible","invisible"),t&&l.includes(a)&&!n&&s.removeAttribute("invisible"),!t||l.includes(a)||n||s.setAttribute("invisible","invisible"),o.label=5;case 5:return e++,[3,3];case 6:return[2]}}))}))},t.prototype.resetFilterOptions=function(){return n(this,void 0,void 0,(function(){var t,e,i,s,n,r;return o(this,(function(o){switch(o.label){case 0:t=0,e=this.childOptions,o.label=1;case 1:return t<e.length?(i=e[t],s=i.querySelector("bds-typo").textContent,n=this.existsChip,r=[s],[4,this.nativeInput.get()]):[3,4];case 2:n.apply(this,r.concat([o.sent()]))?i.setAttribute("invisible","invisible"):i.removeAttribute("invisible"),o.label=3;case 3:return t++,[3,1];case 4:return[2]}}))}))},t.prototype.existsChip=function(t,e){return e.some((function(e){return t===e}))},t.prototype.generateKey=function(t){return t.toLowerCase().replace(/ /g,"-")},t.prototype.render=function(){var t=this,e=this.isOpen?"arrow-up":"arrow-down",i=[];if(this.options)if("string"===typeof this.options)try{i=JSON.parse(this.options)}catch(n){}else i=this.options;return Object(s.h)("div",{class:"select",tabindex:"0",onFocus:this.setFocusWrapper,onBlur:this.removeFocusWrapper,onKeyPress:this.keyPressWrapper},Object(s.h)("bds-input-chips",{ref:function(e){return t.nativeInput=e},onBdsChangeChips:this.handleChangeChipsValue,onBdsChange:this.changedInputValue,icon:this.icon,label:this.label,onFocus:this.onFocus,onBlur:this.onBlur,maxlength:this.maxlength,onClick:this.toggle,danger:this.danger,"error-message":this.errorMessage,chips:this.chips,"disable-submit":!0,delimiters:null,duplicated:this.duplicated,dataTest:this.dataTest},Object(s.h)("div",{slot:"input-right",class:"select__icon"},Object(s.h)("bds-icon",{size:"small",name:e,color:"inherit"}))),Object(s.h)("div",{class:{select__options:!0,"select__options--open":this.isOpen}},i.map((function(e){return Object(s.h)("bds-select-option",{key:t.generateKey(e.value),onOptionSelected:t.handler,value:e.value,status:e.status},e.label)})),Object(s.h)("slot",null),this.canAddNew&&this.enableCreateOption()&&Object(s.h)("bds-select-option",{id:"option-add",value:"add",onClick:function(){return t.handlerNewOption(t.nativeInput.value)}},this.newPrefix,this.nativeInput.value),!this.canAddNew&&this.enableCreateOption()&&Object(s.h)("bds-select-option",{id:"no-option",value:"add"},this.notFoundMessage)))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(s.g)(this)},enumerable:!1,configurable:!0}),t}();r.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0.sc-bds-select-chips,300.sc-bds-select-chips;0.sc-bds-select-chips,400.sc-bds-select-chips;0.sc-bds-select-chips,600.sc-bds-select-chips;0.sc-bds-select-chips,700.sc-bds-select-chips;0.sc-bds-select-chips,800.sc-bds-select-chips;0.sc-bds-select-chips,900.sc-bds-select-chips;1.sc-bds-select-chips,200.sc-bds-select-chips;1.sc-bds-select-chips,300.sc-bds-select-chips;1.sc-bds-select-chips,400.sc-bds-select-chips;1.sc-bds-select-chips,600.sc-bds-select-chips;1.sc-bds-select-chips,700.sc-bds-select-chips;1.sc-bds-select-chips,800.sc-bds-select-chips;1.sc-bds-select-chips,900&display=swap").sc-bds-select-chips; .sc-bds-select-chips-h{display:block}.select.sc-bds-select-chips{position:relative;outline:none}.select__icon.sc-bds-select-chips{color:#8ca0b3;display:-ms-flexbox;display:flex}.select__options.sc-bds-select-chips{background:#f8fbfb;width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);visibility:hidden;opacity:0;-webkit-box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4);box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4)}.select__options.sc-bds-select-chips::-webkit-scrollbar{width:16px;background-color:transparent}.select__options.sc-bds-select-chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.select__options--open.sc-bds-select-chips{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.select__options--position-top.sc-bds-select-chips{top:auto;bottom:100%;-webkit-transform-origin:bottom left;transform-origin:bottom left}'}}]);