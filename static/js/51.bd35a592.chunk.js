(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[51],{117:function(e,t,s){"use strict";s.r(t),s.d(t,"bds_select_option",(function(){return n}));var o=s(11),n=function(){function e(e){var t=this;Object(o.r)(this,e),this.optionSelected=Object(o.c)(this,"optionSelected",7),this.selected=!1,this.disabled=!1,this.invisible=!1,this.danger=!1,this.bulkOption="",this.slotAlign="center",this.dataTest=null,this.onClickSelectOption=function(){t.disabled||t.optionSelected.emit({value:t.value})},this.attachOptionKeyboardListeners=function(e){var s=e.target;switch(e.key){case"Enter":t.onClickSelectOption();break;case"ArrowDown":s.parentElement.nextElementSibling&&!s.parentElement.nextElementSibling.hasAttribute("invisible")&&(e.preventDefault(),e.stopPropagation(),s.parentElement.nextElementSibling.firstElementChild.focus());break;case"ArrowUp":s.parentElement.previousElementSibling&&!s.parentElement.previousElementSibling.hasAttribute("invisible")&&(e.preventDefault(),e.stopPropagation(),s.parentElement.previousElementSibling.firstElementChild.focus())}}}return e.prototype.render=function(){return Object(o.h)("div",{id:"bds-select-option-".concat(this.value),tabindex:"0",onKeyDown:this.attachOptionKeyboardListeners,onClick:this.onClickSelectOption,"data-value":this.value,"data-test":this.dataTest,class:{"select-option":!0,"select-option--selected":this.selected,"select-option--disabled":this.disabled,"select-option--invisible":this.invisible}},Object(o.h)("div",{style:{alignSelf:this.slotAlign}},Object(o.h)("slot",{name:"input-left"})),Object(o.h)("div",{class:{"select-option__container":!0,"select-option__container__fill_space":!!this.status}},Object(o.h)("bds-typo",{class:{"select-option__container--value":!0,"select-option__container__overflow":!!this.status},noWrap:!!this.status,variant:"fs-14",id:"bds-typo-label-".concat(this.value)},Object(o.h)("bds-typo",{class:"select-option__container--value",variant:"fs-16",bold:"semi-bold"},this.titleText),Object(o.h)("slot",null)),this.bulkOption&&Object(o.h)("bds-typo",{class:"select-option__container--bulk",variant:"fs-10"},this.bulkOption),this.status&&Object(o.h)("bds-typo",{class:"select-option__container--status",noWrap:!0,variant:"fs-10"},this.status)))},e}();n.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0.sc-bds-select-option,300.sc-bds-select-option;0.sc-bds-select-option,400.sc-bds-select-option;0.sc-bds-select-option,600.sc-bds-select-option;0.sc-bds-select-option,700.sc-bds-select-option;0.sc-bds-select-option,800.sc-bds-select-option;0.sc-bds-select-option,900.sc-bds-select-option;1.sc-bds-select-option,200.sc-bds-select-option;1.sc-bds-select-option,300.sc-bds-select-option;1.sc-bds-select-option,400.sc-bds-select-option;1.sc-bds-select-option,600.sc-bds-select-option;1.sc-bds-select-option,700.sc-bds-select-option;1.sc-bds-select-option,800.sc-bds-select-option;1.sc-bds-select-option,900&display=swap").sc-bds-select-option; .select-option.sc-bds-select-option{width:100%;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background-color:#ffffff;padding:8px;padding-left:12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;outline:none}.select-option--selected.sc-bds-select-option .select-option__container--value.sc-bds-select-option{color:#3f7de8}.select-option--disabled.sc-bds-select-option .select-option__container--value.sc-bds-select-option,.select-option--disabled.sc-bds-select-option .select-option__container--bulk.sc-bds-select-option{cursor:not-allowed;color:#b9cbd3}.select-option--disabled.sc-bds-select-option .select-option__container--value.sc-bds-select-option:hover,.select-option--disabled.sc-bds-select-option .select-option__container--bulk.sc-bds-select-option:hover{background-color:#ffffff}.select-option.sc-bds-select-option-s>bds-icon,.select-option .sc-bds-select-option-s>bds-icon{margin-right:10px}.select-option__container.sc-bds-select-option{color:#202c44;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.select-option__container__fill_space.sc-bds-select-option{width:100%}.select-option__container--bulk.sc-bds-select-option,.select-option__container--status.sc-bds-select-option{color:#8ca0b3}.select-option__container__overflow.sc-bds-select-option{overflow:hidden;padding-right:16px}.select-option__container.sc-bds-select-option:hover>.select-option__container--value.sc-bds-select-option,.select-option__container.sc-bds-select-option:hover>.select-option__container--bulk.sc-bds-select-option,.select-option__container.sc-bds-select-option:hover>.select-option__container--status.sc-bds-select-option{color:#3f7de8}.select-option__container.sc-bds-select-option:active>.select-option__container--value.sc-bds-select-option,.select-option__container.sc-bds-select-option:active>.select-option__container--bulk.sc-bds-select-option,.select-option__container.sc-bds-select-option:active>.select-option__container--status.sc-bds-select-option{color:#3f7de8}.select-option.sc-bds-select-option:hover{background-color:#f3f6fa}.select-option.sc-bds-select-option:focus{background-color:#d1e3fa;color:#3f7de8}.select-option--selected.sc-bds-select-option{background-color:#d1e3fa}.select-option--invisible.sc-bds-select-option{display:none}'}}]);