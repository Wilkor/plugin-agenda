(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[61],{200:function(t,o,i){"use strict";i.r(o),i.d(o,"bds_tooltip",(function(){return p}));var e=i(15),p=function(){function t(t){Object(e.r)(this,t),this.isMouseOver=!1,this.tooltipText="Tooltip",this.disabled=!1,this.position="left-center",this.dataTest=null}return t.prototype.setVisibility=function(t){this.disabled?this.isMouseOver=!1:this.isMouseOver=t},t.prototype.render=function(){var t,o=this;return Object(e.h)("div",{class:"tooltip__wrapper"},Object(e.h)("div",{onMouseEnter:function(){return o.setVisibility(!0)},onMouseLeave:function(){return o.setVisibility(!1)},"data-test":this.dataTest},Object(e.h)("slot",null)),Object(e.h)("div",{class:(t={tooltip__tip:!0},t["tooltip__tip--".concat(this.position)]=!0,t["tooltip__tip--visible"]=this.isMouseOver,t)},Object(e.h)("bds-typo",{variant:"fs-12"},this.tooltipText)))},t}();p.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .tooltip__wrapper{display:inline-block;position:relative}.tooltip__tip{position:absolute;left:50%;border-radius:8px;padding:8px;color:#ffffff;background:#0a0f1a;z-index:70000;white-space:normal;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:32px;max-width:320px;-webkit-filter:drop-shadow(0 2px 8px rgba(96, 123, 153, 0.4));filter:drop-shadow(0 2px 8px rgba(96, 123, 153, 0.4));visibility:hidden;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:default}.tooltip__tip--visible{visibility:visible}.tooltip__tip::before{content:"";left:50%;border:solid transparent;height:0;width:0;position:absolute;pointer-events:none;margin-left:-6px;border-width:6px}.tooltip__tip--top-center,.tooltip__tip--top-left,.tooltip__tip--top-right{bottom:calc(100% + 10px)}.tooltip__tip--top-center::before,.tooltip__tip--top-left::before,.tooltip__tip--top-right::before{top:100%;border-top-color:#0a0f1a}.tooltip__tip--top-left{left:0}.tooltip__tip--top-left::before{left:calc(15% + 6px)}.tooltip__tip--top-right{left:initial;right:0}.tooltip__tip--top-right::before{left:calc(85% - 6px)}.tooltip__tip--bottom-center,.tooltip__tip--top-center{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltip__tip--left-center,.tooltip__tip--right-center{-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%)}.tooltip__tip--right-center,.tooltip__tip--right-top,.tooltip__tip--right-bottom{left:calc(100% + 10px);top:50%}.tooltip__tip--right-center::before,.tooltip__tip--right-top::before,.tooltip__tip--right-bottom::before{left:-6px;top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-right-color:#0a0f1a}.tooltip__tip--right-top{top:0}.tooltip__tip--right-top::before{top:40%}.tooltip__tip--right-bottom{top:initial;bottom:0}.tooltip__tip--right-bottom::before{top:60%}.tooltip__tip--bottom-center,.tooltip__tip--bottom-right,.tooltip__tip--bottom-left{top:calc(100% + 10px)}.tooltip__tip--bottom-center::before,.tooltip__tip--bottom-right::before,.tooltip__tip--bottom-left::before{bottom:100%;border-bottom-color:#0a0f1a}.tooltip__tip--bottom-right{left:initial;right:0}.tooltip__tip--bottom-right::before{left:calc(85% - 6px)}.tooltip__tip--bottom-left{left:0}.tooltip__tip--bottom-left::before{left:calc(15% + 6px)}.tooltip__tip--left-center,.tooltip__tip--left-top,.tooltip__tip--left-bottom{left:auto;right:calc(100% + 10px);top:50%}.tooltip__tip--left-center::before,.tooltip__tip--left-top::before,.tooltip__tip--left-bottom::before{left:auto;right:-12px;top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-left-color:#0a0f1a}.tooltip__tip--left-top{top:0}.tooltip__tip--left-top::before{top:40%}.tooltip__tip--left-bottom{top:initial;bottom:0}.tooltip__tip--left-bottom::before{top:60%}'}}]);