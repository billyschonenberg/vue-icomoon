(function(o,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(o=typeof globalThis!="undefined"?globalThis:o||self,e(o["vue-icomoon"]={},o.vue))})(this,function(o,e){"use strict";var u=(n,r)=>{for(const[i,t]of r)n[i]=t;return n};const f={name:"Icomoon",props:{iconSet:{type:Object,required:!0},icon:{type:String,default:null},name:{type:String,required:!0},title:{type:String,default:null},color:{type:String,default:""},size:{type:Number,default:16},disableFill:{type:Boolean,default:!1},removeInitialStyle:{type:Boolean,default:!1},style:{type:Object,default:{}}},setup({iconSet:n,icon:r,name:i,size:t,title:g,disableFill:d,removeInitialStyle:c,...S}){const b={display:"inline-block",stroke:"currentColor",fill:"currentColor"},w=r||i,l=n.icons.find(a=>a.properties.name===w);if(!l)return{};const{width:x="1024"}=l.icon,I=`0 0 ${x} 1024`,s={...c?{}:b};t&&(s.width=t,s.height=t);const P=l.icon.paths.map((a,j)=>{const p=l.icon.attrs?.[j];return{d:a,...!d&&p?p:{}}});return{currentIcon:l,viewBox:I,style:s,paths:P,svgProps:S}}},m=["viewBox"],y=["d"],h={key:0};function _(n,r,i,t,g,d){return t.currentIcon?(e.openBlock(),e.createElementBlock("svg",e.mergeProps({key:0,viewBox:t.viewBox,style:t.style},t.svgProps),[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.paths,c=>(e.openBlock(),e.createElementBlock("path",{d:c.d},null,8,y))),256)),i.title?(e.openBlock(),e.createElementBlock("title",h,e.toDisplayString(i.title),1)):e.createCommentVNode("",!0)],16,m)):e.createCommentVNode("",!0)}var B=u(f,[["render",_]]);const k=n=>n&&Array.isArray(n.icons)?n.icons.map(r=>r.properties.name):null;o.Icomoon=B,o.iconList=k,Object.defineProperty(o,"__esModule",{value:!0}),o[Symbol.toStringTag]="Module"});
