(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[17],{76:function(a,t,r){"use strict";r.r(t),r.d(t,"bds_avatar_group",(function(){return e}));var s=r(10),e=function(){function a(a){Object(s.r)(this,a),this.size="standard"}return a.prototype.parseUsers=function(){if(this.users)try{this.internalUsers="string"===typeof this.users?JSON.parse(this.users):this.users}catch(a){this.internalUsers=[]}},a.prototype.componentWillLoad=function(){this.users&&this.parseUsers(),this.leftoversUsers=this.internalUsers.length-4},a.prototype.render=function(){var a,t=this;return Object(s.h)(s.H,null,Object(s.h)("div",{class:(a={avatar__group:!0},a["avatar__group__size--".concat(this.size)]=!0,a)},this.internalUsers?this.internalUsers.slice(0,5).map((function(a,r,e){return r+1===e.length&&t.internalUsers.length>5?Object(s.h)("bds-avatar",{size:t.size,ellipsis:t.leftoversUsers}):Object(s.h)("bds-avatar",{id:a.id,name:a.name,thumbnail:a.thumbnail,size:t.size})})):Object(s.h)("slot",null)))},a}();e.style='@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"); .avatar__group{display:-ms-flexbox;display:flex}.avatar__group>*:nth-child(1){z-index:5}.avatar__group>*:nth-child(2){z-index:4}.avatar__group>*:nth-child(3){z-index:3}.avatar__group>*:nth-child(4){z-index:2}.avatar__group>*:nth-child(5){z-index:1}.avatar__group .avatar{border:2px solid #ffffff;position:relative}.avatar__group__size--extra-small{margin-left:4px}.avatar__group__size--extra-small>*{margin-left:-4px}.avatar__group__size--extra-small .avatar{width:32px;height:32px}.avatar__group__size--small{margin-left:8px}.avatar__group__size--small>*{margin-left:-8px}.avatar__group__size--small .avatar{width:40px;height:40px}.avatar__group__size--standard{margin-left:12px}.avatar__group__size--standard>*{margin-left:-12px}.avatar__group__size--standard .avatar{width:56px;height:56px}'}}]);