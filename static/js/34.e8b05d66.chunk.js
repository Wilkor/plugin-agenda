(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[34],{100:function(e,t,i){"use strict";i.r(t),i.d(t,"bds_input_editable",(function(){return n}));var a=i(12),n=function(){function e(e){var t=this;Object(a.r)(this,e),this.bdsInputEditableSave=Object(a.c)(this,"bdsInputEditableSave",7),this.size="standard",this.expand=!1,this.dataTest=null,this.isEditing=!1,this.isValid=!0,this.inputName="",this.value="",this.minlength=0,this.errorMessage="",this.helperMessage="",this.danger=!1,this.onInputChange=function(e){e.detail&&(e.detail.value.length<Number(t.minlength)?t.isValid=!1:t.isValid=!0)},this.handleEditing=function(){t.toggleEditing()},this.toggleEditing=function(){t.isEditing=!t.isEditing},this.handleSaveText=function(){var e=t.el.shadowRoot.querySelector("bds-input").value;e.length>0&&e.length>=t.minlength&&!t.danger&&(t.bdsInputEditableSave.emit({value:e,oldValue:t.value}),t.value=e,t.toggleEditing())},this.getExpand=function(){return t.expand?"expanded":"fixed"}}return e.prototype.getFontSizeClass=function(){return"short"==this.size?"fs-16":"standard"==this.size?"fs-24":"tall"==this.size?"fs-40":"fs-24"},e.prototype.render=function(){var e,t=this.getFontSizeClass(),i=this.getExpand();return Object(a.h)(a.H,null,Object(a.h)("div",{class:"input__editable"},Object(a.h)("div",{class:{"input__editable--static":!0,"input__editable--hidden":this.isEditing},onClick:this.handleEditing},Object(a.h)("bds-typo",{tag:"span",part:"input__editable--static__typo",class:"input__editable--static__typo",variant:t},this.value),Object(a.h)("bds-icon",{key:"edit-icon",class:"input__editable--static__icon",name:"edit"})),Object(a.h)("div",{class:{"input__editable--active":!0,"input__editable--hidden":!this.isEditing}},Object(a.h)("bds-input",{class:(e={},e[i]=!0,e[this.size]=!0,e),type:"text","input-name":this.inputName,value:this.value,minlength:this.minlength,minlengthErrorMessage:this.minlengthErrorMessage,maxlength:this.maxlength,required:!0,"required-error-message":this.requiredErrorMessage,"error-message":this.errorMessage,onBdsChange:this.onInputChange,danger:this.danger,helperMessage:this.helperMessage,"data-test":this.dataTest}),Object(a.h)("div",{class:"input__editable--active__icon"},Object(a.h)("bds-icon",{key:"error-icon",class:"input__editable--active__icon--error",theme:"solid",name:"error",onClick:this.handleEditing}),Object(a.h)("bds-icon",{key:"checkball-icon",class:{"input__editable--active__icon--checkball":!0,"input__editable--active__icon--checkball--error":!this.isValid},theme:"solid",name:"checkball",onClick:this.handleSaveText})))))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(a.g)(this)},enumerable:!1,configurable:!0}),e}();n.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .input__editable{display:block}.input__editable--static{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}.input__editable--static:hover .input__editable--static__typo{border:1px solid #3f7de8}.input__editable--static:hover .input__editable--static__icon{color:#3f7de8}.input__editable--static__typo{border:1px solid transparent;margin:0;padding:8px;border-radius:8px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:80%}.input__editable--static__icon{margin-left:8px;color:#8ca0b3}.input__editable--active{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.input__editable--active bds-input{min-width:120px;margin-right:4px}.input__editable--active bds-input.expanded{max-width:100%}.input__editable--active bds-input.fixed{max-width:140px}.input__editable--active bds-input.short::part(input){font-size:1rem;line-height:0px}.input__editable--active bds-input.standard::part(input){font-size:1.5rem;line-height:0px}.input__editable--active bds-input.tall::part(input){font-size:2.5rem;line-height:0px}.input__editable--active bds-input::part(input-container){padding:4px 4px 5px 12px}.input__editable--active bds-input::part(input__message){min-width:180px}.input__editable--active bds-icon{cursor:pointer}.input__editable--active__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:auto 0}.input__editable--active__icon--error{color:#ff4c4c}.input__editable--active__icon--error:hover{color:#a01c2c}.input__editable--active__icon--checkball{color:#3f7de8}.input__editable--active__icon--checkball:hover{color:#125ad5}.input__editable--active__icon--checkball--error{color:#8ca0b3}.input__editable--active__icon--checkball--error:hover{color:#8ca0b3}.input__editable--hidden{display:none}'}}]);