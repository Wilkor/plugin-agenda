(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[58],{106:function(t,e,n){"use strict";n.r(e),n.d(e,"bds_tabs",(function(){return s}));var i=n(7),r=function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{a(i.next(t))}catch(e){o(e)}}function l(t){try{a(i.throw(t))}catch(e){o(e)}}function a(t){t.done?n(t.value):r(t.value).then(s,l)}a((i=i.apply(t,e||[])).next())}))},o=function(t,e){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(t){return function(e){return a([t,e])}}function a(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(l){o=[6,l],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},s=function(){function t(t){var e=this;Object(i.r)(this,t),this.scrollButtonClick=Object(i.c)(this,"scrollButtonClick",7),this.SCROLL_BEHAVIOR="smooth",this.align="center",this.handleHeaderResize=function(){e.tabsHeaderChildElement.offsetWidth<e.tabsHeaderChildElement.scrollWidth?e.updateButtonsVisibility(!0):e.updateButtonsVisibility(!1)},this.updateButtonsVisibility=function(t){e.setLeftButtonVisibility(t),e.setRightButtonVisibility(t)},this.handleScrollButtonClick=function(t){e.scrollButtonClick.emit({direction:t})}}return t.prototype.componentWillLoad=function(){this.createGroup();var t=this.tabGroup[0];this.selectGroup(t)},t.prototype.componentDidLoad=function(){this.getChildElements(),this.attachEvents(),this.setLeftButtonVisibility(!1),this.setRightButtonVisibility(!0)},t.prototype.onScrollButtonClick=function(t){var e;t.preventDefault();var n={behavior:this.SCROLL_BEHAVIOR,top:0,left:t.detail.distance};null!==(e=n.left)&&void 0!==e||(n.left=this.getDistance(n,t)),this.tabsHeaderChildElement.scrollTo(n)},t.prototype.onSelectedTab=function(t){var e=this.tabGroup.find((function(e){return e.header.group===t.detail.group}));this.selectGroup(e),this.handleButtonOverlay(e)},t.prototype.createGroup=function(){var t=this;this.tabsHeader=Array.from(this.el.querySelectorAll("bds-tab")),this.tabsContent=Array.from(document.querySelectorAll("bds-tab-panel")),this.buttonsChildElement=document.getElementsByTagName("bds-button-icon"),this.tabGroup=this.tabsHeader.map((function(e){var n;try{if(!(n=t.tabsContent.find((function(t){return t.group===e.group}))))throw new Error("Missing TabPanel with key: ".concat(e.group))}catch(i){console.warn(i)}return{header:e,content:n}}))},t.prototype.selectGroup=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.resetActiveGroup()];case 1:return e.sent(),t.header.active=!0,t.content.active=!0,[2]}}))}))},t.prototype.resetActiveGroup=function(){return r(this,void 0,void 0,(function(){var t,e,n;return o(this,(function(i){for(t=0,e=this.tabGroup;t<e.length;t++)(n=e[t]).content.active=!1,n.header.active=!1;return[2]}))}))},t.prototype.getChildElements=function(){this.tabsHeaderChildElement=this.el.querySelector(".bds-tabs__header"),this.leftButtonChildElement=this.el.querySelector("#bds-tabs-button-left"),this.rightButtonChildElement=this.el.querySelector("#bds-tabs-button-right")},t.prototype.attachEvents=function(){var t=this;window.onresize=this.handleHeaderResize,this.tabsHeaderChildElement.onscroll=function(){return t.updateButtonsVisibility(t.tabsHeaderChildElement.scrollWidth>t.tabsHeaderChildElement.clientWidth)}},t.prototype.setRightButtonVisibility=function(t){t&&this.tabsHeaderChildElement.scrollWidth>Math.ceil(this.tabsHeaderChildElement.scrollLeft+this.tabsHeaderChildElement.clientWidth)?this.rightButtonChildElement.style.display="block":this.rightButtonChildElement.style.display="none"},t.prototype.setLeftButtonVisibility=function(t){this.leftButtonChildElement.style.display=this.tabsHeaderChildElement.scrollLeft>0&&t?"block":"none"},t.prototype.handleButtonOverlay=function(t){var e=this,n=Array.from(this.tabsHeaderChildElement.getElementsByTagName("bds-tab")).find((function(e){return e.group==t.header.group}));[this.leftButtonChildElement,this.rightButtonChildElement].forEach((function(t){if(e.isButtonOverlappingTab(t,n)){var i=e.getAdjutScrollDistance(t,n);e.scrollButtonClick.emit({distance:i})}}))},t.prototype.isButtonOverlappingTab=function(t,e){var n=e.getBoundingClientRect(),i=t.getBoundingClientRect();return this.elementIsOverlapping(i,n)},t.prototype.elementIsOverlapping=function(t,e){var n=t.x,i=t.x+t.width,r=e.x,o=e.x+e.width;return n>=r&&n<=o||i>=r&&i<=o},t.prototype.getAdjutScrollDistance=function(t,e){var n="bds-tabs-button-left"==t.id?"left":"right",i=e.clientWidth+parseInt(getComputedStyle(e).marginRight)-t.offsetWidth;return"right"==n?e.parentElement.scrollLeft+i:e.parentElement.scrollLeft-i},t.prototype.getDistance=function(t,e){return"right"==e.detail.direction?t.left=this.tabsHeaderChildElement.scrollLeft+this.tabsHeaderChildElement.clientWidth:t.left=this.tabsHeaderChildElement.scrollLeft-this.tabsHeaderChildElement.clientWidth},t.prototype.render=function(){var t,e=this;return Object(i.h)(i.H,{class:(t={"bds-tabs":!0},t["bds-tabs--".concat(this.align)]=!0,t)},Object(i.h)("div",{class:"bds-tabs__header-button-container"},Object(i.h)("bds-button-icon",{class:"bds-tabs__header-button",icon:"arrow-left",size:"short",id:"bds-tabs-button-left",onClick:function(){return e.handleScrollButtonClick("left")},variant:"secondary"})),Object(i.h)("div",{class:"bds-tabs__header"},Object(i.h)("slot",null)),Object(i.h)("div",{class:"bds-tabs__header-button-container"},Object(i.h)("bds-button-icon",{class:"bds-tabs__header-button",icon:"arrow-right",size:"short",id:"bds-tabs-button-right",onClick:function(){return e.handleScrollButtonClick("right")},variant:"secondary"})))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.g)(this)},enumerable:!1,configurable:!0}),t}();s.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .bds-tabs{width:100%;display:-ms-flexbox;display:flex;z-index:1100;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;height:48px;padding:0 10px 0 10px}.bds-tabs--center{-ms-flex-pack:center;justify-content:center}.bds-tabs--left{-ms-flex-pack:start;justify-content:flex-start}.bds-tabs--right{-ms-flex-pack:end;justify-content:flex-end}.bds-tabs .bds-tabs__header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;overflow:hidden;-ms-flex-align:stretch;align-items:stretch;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.bds-tabs .bds-tabs__header-button-container{padding:0px;min-width:40px}'}}]);
//# sourceMappingURL=58.e906def8.chunk.js.map