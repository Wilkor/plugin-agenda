(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[8],{61:function(t,n,e){"use strict";e.r(n),e.d(n,"bds_accordion_body",(function(){return a}));var o=e(9),i=function(t,n,e,o){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,r){function a(t){try{s(o.next(t))}catch(n){r(n)}}function c(t){try{s(o.throw(t))}catch(n){r(n)}}function s(t){t.done?e(t.value):i(t.value).then(a,c)}s((o=o.apply(t,n||[])).next())}))},r=function(t,n){var e,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function c(t){return function(n){return s([t,n])}}function s(r){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=n.call(t,a)}catch(c){r=[6,c],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},a=function(){function t(t){var n=this;Object(o.r)(this,t),this.container=null,this.isOpen=!1,this.numberElement=null,this.refContainer=function(t){n.container=t}}return t.prototype.toggle=function(){return i(this,void 0,void 0,(function(){return r(this,(function(t){return this.isOpen=!this.isOpen,[2]}))}))},t.prototype.close=function(){return i(this,void 0,void 0,(function(){return r(this,(function(t){return this.isOpen=!1,[2]}))}))},t.prototype.isOpenChanged=function(){this.heightContainer=this.isOpen?this.container.offsetHeight:0},t.prototype.render=function(){var t=this;return Object(o.h)("div",{class:"accordion_body",style:{height:"".concat(this.heightContainer,"px")}},Object(o.h)("div",{class:"container",ref:function(n){return t.refContainer(n)}},Object(o.h)("slot",null)))},Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["isOpenChanged"]}},enumerable:!1,configurable:!0}),t}();a.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .accordion_header{display:grid;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:#202c44;cursor:pointer}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:#c226fb}.accordion_header .accButton:hover{background-color:#f2f2f2}.accordion_header .accButton:active{background-color:#e6e6e6}.accordion_body{height:0;overflow:hidden;border-bottom:1px solid #b9cbd3;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.accordion_body .container{padding:0 24px 48px;position:relative;color:#202c44}'}}]);
//# sourceMappingURL=8.1bc094a5.chunk.js.map