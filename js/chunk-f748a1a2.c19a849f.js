(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f748a1a2"],{"132d":function(t,e,i){"use strict";i("44dc");var n,a=i("b64a"),o=i("2b0e"),r=o["a"].extend({name:"sizeable",props:{large:Boolean,medium:Boolean,size:{type:[Number,String]},small:Boolean,xLarge:Boolean}}),s=i("6a18"),c=i("80d2"),l=i("58df"),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};function u(t){return["fas","far","fal","fab"].some(function(e){return t.includes(e)})}(function(t){t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(n||(n={}));var d=Object(l["a"])(a["a"],r,s["a"]).extend({name:"v-icon",props:{disabled:Boolean,left:Boolean,right:Boolean},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(c["k"])(this,t)},getSize:function(){var t={small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(c["j"])(t).find(function(e){return t[e]});return e&&n[e]||Object(c["a"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.$listeners.click||this.$listeners["!click"],"v-icon--right":this.right},attrs:p({"aria-hidden":!0},this.$attrs),on:this.$listeners};return t},applyColors:function(t){t.class=p({},t.class,this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],n=this.getDefaultData(),a="material-icons",o=t.indexOf("-"),r=o<=-1;r?i.push(t):(a=t.slice(0,o),u(a)&&(a="")),n.class[a]=!0,n.class[t]=!r;var s=this.getSize();return s&&(n.style={fontSize:s}),this.applyColors(n),e("i",n,i)},renderSvgIcon:function(t,e){var i=this.getDefaultData();i.class["v-icon--is-component"]=!0;var n=this.getSize();n&&(i.style={fontSize:n,height:n}),this.applyColors(i);var a=t.component;return i.props=t.props,e(a,i)}},render:function(t){var e=this.getIcon();return"string"===typeof e?this.renderFontIcon(e,t):this.renderSvgIcon(e,t)}});e["a"]=o["a"].extend({name:"v-icon",$_wrapperFor:d,functional:!0,render:function(t,e){var i=e.data,n=e.children,a="";return i.domProps&&(a=i.domProps.textContent||i.domProps.innerHTML||a,delete i.domProps.textContent,delete i.domProps.innerHTML),t(d,i,a?[a]:n)}})},"44dc":function(t,e,i){},"549c":function(t,e,i){"use strict";i("f134");var n=i("b57a");e["a"]={name:"v-content",mixins:[n["a"]],props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,n=t.right,a=t.footer,o=t.insetFooter,r=t.bottom,s=t.left;return{paddingTop:i+e+"px",paddingRight:n+"px",paddingBottom:a+o+r+"px",paddingLeft:s+"px"}}},render:function(t){var e={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,e,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}}},"7a74":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{staticClass:"py-1",attrs:{dark:"",height:"auto"}},[i("v-container",{attrs:{"mx-auto":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs9:""}},t._l(t.items,function(e,n){return i("base-btn",{key:n,staticClass:"ml-0 mr-3",attrs:{href:e.href,color:"primary",square:"",target:"_blank"}},[i("v-icon",{domProps:{textContent:t._s(e.icon)}})],1)}),1),i("v-spacer"),i("base-btn",{staticClass:"mr-0",attrs:{square:"",title:"Go to top"},on:{click:function(e){return t.$vuetify.goTo(0)}}},[i("v-icon",[t._v("mdi-chevron-up")])],1)],1)],1)],1)},a=[],o=(i("cadf"),i("551c"),i("097d"),{data:function(){return{items:[{href:"https://twitter.com/yoitsu05",icon:"mdi-twitter"},{href:"#!",icon:"mdi-instagram"},{href:"#!",icon:"mdi-facebook"},{href:"#!",icon:"mdi-discord"}]}}}),r=o,s=i("2877"),c=i("6544"),l=i.n(c),p=i("a523"),u=i("0e8f"),d=(i("e93b"),i("c6f7")),h=i("b64a"),f=i("6a18"),m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},v={name:"v-footer",mixins:[Object(d["a"])(null,["height","inset"]),h["a"],f["a"]],props:{height:{default:32,type:[Number,String]},inset:Boolean},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},computedMarginBottom:function(){if(this.app)return this.$vuetify.application.bottom},computedPaddingLeft:function(){return this.app&&this.inset?this.$vuetify.application.left:0},computedPaddingRight:function(){return this.app&&this.inset?this.$vuetify.application.right:0},styles:function(){var t={height:isNaN(this.height)?this.height:this.height+"px"};return this.computedPaddingLeft&&(t.paddingLeft=this.computedPaddingLeft+"px"),this.computedPaddingRight&&(t.paddingRight=this.computedPaddingRight+"px"),this.computedMarginBottom&&(t.marginBottom=this.computedMarginBottom+"px"),t}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:m({"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--inset":this.inset},this.themeClasses),style:this.styles,ref:"content"});return t("footer",e,this.$slots.default)}},g=i("132d"),b=i("a722"),y=i("9910"),x=Object(s["a"])(r,n,a,!1,null,null,null);e["default"]=x.exports;l()(x,{VContainer:p["a"],VFlex:u["a"],VFooter:v,VIcon:g["a"],VLayout:b["a"],VSpacer:y["a"]})},9910:function(t,e,i){"use strict";i.d(e,"a",function(){return c});var n=i("80d2"),a=i("a523"),o=i("549c"),r=i("0e8f"),s=i("a722"),c=Object(n["c"])("spacer","div","v-spacer");a["a"],o["a"],r["a"],s["a"]},b57a:function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame(function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0})}})},c6f7:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i("c22b"),a=i("58df");function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(n["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unbind(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.bind(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unbind(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},e93b:function(t,e,i){},f134:function(t,e,i){}}]);
//# sourceMappingURL=chunk-f748a1a2.c19a849f.js.map