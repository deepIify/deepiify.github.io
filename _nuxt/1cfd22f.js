(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{400:function(t,e,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("63c9496b",content,!0,{sourceMap:!1})},401:function(t,e,n){var o=n(18)(!1);o.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=o},413:function(t,e,n){"use strict";var o=n(2),r=(n(46),n(50),n(61),n(400),n(85)),c=n(69),l=n(55),d=n(106),f=n(177),h=n(37),v=n(3),m=n(14);e.a=Object(h.a)(r.a,c.a,d.a,Object(f.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(v.d)(n+footer+o),paddingLeft:this.app?Object(v.d)(r):void 0,paddingRight:this.app?Object(v.d)(c):void 0,paddingTop:Object(v.d)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(m.e)("auto-height",this),0==this.timeout&&Object(m.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(v.j)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(o.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(v.j)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:r.a.options.computed.classes.call(this),style:r.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},536:function(t,e,n){var content=n(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("91806830",content,!0,{sourceMap:!1})},612:function(t,e,n){"use strict";n(536)},613:function(t,e,n){var o=n(18)(!1);o.push([t.i,'.diagnosis-container[data-v-181efcf4]{position:relative}.simple-diagnosis[data-v-181efcf4]{border:1px solid hsla(0,0%,80%,.8);border-radius:5px;padding:1rem 2.5rem 2rem;margin-bottom:20px}.simple-diagnosis h3.diagnosis-title[data-v-181efcf4]{background:#eee;border:1px solid transparent;border-radius:10px;padding:.3rem 1rem}.simple-diagnosis p[data-v-181efcf4]{padding:.3rem}.css-za4qqw[data-v-181efcf4]{background-image:linear-gradient(180deg,#fff 10%,#eef0f7);padding:60px 0 70px}.css-17ia555[data-v-181efcf4]{width:100%;padding-right:20px;padding-left:20px;margin-right:auto;margin-left:auto;display:flex;flex-direction:column;align-items:center;text-align:center}.css-1bk7ox4[data-v-181efcf4]{margin-bottom:40px;font-size:32px}.css-70qvj9[data-v-181efcf4]{display:flex;align-items:center}.css-ium0zo[data-v-181efcf4]{width:75px;min-width:75px;height:75px;border-radius:50%;overflow:hidden;border:2px solid #d6d6d6;margin-bottom:0;margin-right:20px}.css-1a2v9hb[data-v-181efcf4]{max-width:100%;height:auto}.css-1c7u7ph[data-v-181efcf4]{text-align:center;line-height:1.6;max-width:330px}.css-1c7u7ph strong[data-v-181efcf4]{font-weight:600}.css-1c7u7ph[data-v-181efcf4] :last-child{margin-bottom:0!important}.css-2thhi1[data-v-181efcf4]{width:100%;margin:35px 0 0;max-width:460px}.css-1vd0gw5[data-v-181efcf4],.css-79elbk[data-v-181efcf4]{position:relative}.css-1vd0gw5[data-v-181efcf4]{margin-bottom:0;padding-left:0;list-style:none}.css-1pkbgp8[data-v-181efcf4]{margin-bottom:0;padding:0}.css-1lj1a3e[data-v-181efcf4]{display:block;width:100%;height:3.7875rem;padding:1.05rem 1.2rem;font-family:Inter;font-weight:400;line-height:1.4;color:#000;background-color:#fff;background-clip:padding-box;border-radius:6px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:background-color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;font-size:11.25px;font-size:1.125rem;border:1px solid #ccd3e8;font-family:"Inter"}.css-1lj1a3e[data-v-181efcf4]::-ms-expand{background-color:transparent;border:0}.css-1lj1a3e[data-v-181efcf4]:focus{color:#000;background-color:#fff;border-color:#00afff;outline:0;box-shadow:none}.css-1lj1a3e[data-v-181efcf4]::-moz-placeholder{color:#a5a5a5;opacity:1}.css-1lj1a3e[data-v-181efcf4]:-ms-input-placeholder{color:#a5a5a5;opacity:1}.css-1lj1a3e[data-v-181efcf4]::placeholder{color:#a5a5a5;opacity:1}.css-1lj1a3e[data-v-181efcf4]:disabled,.css-1lj1a3e[readonly][data-v-181efcf4]{background-color:#e6e6e6;opacity:1}.css-q5hbwx[data-v-181efcf4]{display:block;width:100%;height:3.7875rem;padding:1.05rem 1.2rem;font-weight:400;line-height:1.4;background-clip:padding-box;border:1px solid #00afff;border-radius:6px;box-shadow:inset 0 1px 1px rgba(0,0,0,.08);transition:background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s,box-shadow .2s ease-in-out 0s;font-size:1.125rem;font-family:Inter;position:relative}.css-q5hbwx[data-v-181efcf4],.css-q5hbwx[data-v-181efcf4]:focus{color:#000;background-color:#fff}.css-q5hbwx[data-v-181efcf4]:focus{border-color:#00afff;outline:0;box-shadow:none}.caller-btn[data-v-181efcf4]{margin:0;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;padding:1.05rem 1.2rem;font-size:1.125rem;line-height:1.4;transition:all .2s ease-in-out;display:inline-flex;align-items:center;justify-content:center;font-style:normal;white-space:normal;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;cursor:pointer;text-transform:none;font-weight:600;min-height:3.7875rem;outline:none;border-radius:6px;top:0;right:0;min-width:170px;color:#fff;background-color:#00afff;border:1px solid #00afff}.caller-btn[data-v-181efcf4]:active,.caller-btn[data-v-181efcf4]:hover{background-color:#07f;border-color:#07f}.caller-btn:disabled[disabled][data-v-181efcf4]{cursor:not-allowed;background-color:#00afff;border-color:#00afff}.loader[data-v-181efcf4],.loader[data-v-181efcf4]:after{border-radius:50%;width:25px;height:25px}.loader[data-v-181efcf4]{font-size:10px;position:relative;text-indent:-9999em;border:4px solid hsla(0,0%,100%,.2);border-left-color:#fff;transform:translateZ(0);-webkit-animation:load8-data-v-181efcf4 1.1s linear infinite;animation:load8-data-v-181efcf4 1.1s linear infinite}@-webkit-keyframes load8-data-v-181efcf4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8-data-v-181efcf4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.css-17qfe8v[data-v-181efcf4]{top:calc(-100% + -.4rem);z-index:1}.css-17qfe8v[data-v-181efcf4],.css-ht3ahn[data-v-181efcf4]{position:absolute;left:0;right:0;margin:0 auto}.css-ht3ahn[data-v-181efcf4]{display:block;bottom:-.4rem;width:0;height:0;border-left:.4rem solid transparent;border-right:.4rem solid transparent;border-top:.4rem solid #000}.css-rj3kn9[data-v-181efcf4]{max-width:200px;margin:0 auto;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:6px;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif;font-style:normal;font-weight:400;line-height:1.8;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word}.share-box-wrapper[data-v-181efcf4]{margin-top:2rem}.share-box[data-v-181efcf4]{justify-content:center;display:flex;padding:1rem;background:#fff;border:1px solid #ebebeb;border-radius:5px;width:250px;margin:0 auto;position:relative}.share-title[data-v-181efcf4]{position:absolute;left:10px;top:-10px;font-size:14px;padding:0 .3rem;border-left:1px;border-right:1px;border-top:0;border-bottom:0;background:#fff;border-style:solid;border-radius:2px;border-color:#ebebeb;font-weight:700}@media(min-width:576px){.css-17ia555[data-v-181efcf4]{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-17ia555[data-v-181efcf4]{max-width:540px}}@media(max-width:767.98px){.css-za4qqw[data-v-181efcf4]{border-bottom:1 solid #ccd3e8}.caller-btn[data-v-181efcf4]{width:100%;margin-top:10px}}@media(min-width:768px){.css-17ia555[data-v-181efcf4]{max-width:720px}.css-za4qqw[data-v-181efcf4]{padding:90px 0 135px}.css-1bk7ox4[data-v-181efcf4]{font-size:48px}.css-ium0zo[data-v-181efcf4]{margin-right:30px}.css-2thhi1[data-v-181efcf4]{margin:45px 0 0}.caller-btn.with-input[data-v-181efcf4]{position:absolute}.caller-btn.without-input[data-v-181efcf4]{width:100%}.css-q5hbwx[data-v-181efcf4]{width:calc(100% - 162px)}}@media(min-width:992px){.css-17ia555[data-v-181efcf4]{max-width:960px}}@media(min-width:1200px){.css-17ia555[data-v-181efcf4]{max-width:1140px}}',""]),t.exports=o},645:function(t,e,n){"use strict";n.r(e);var o={name:"SimpleDiagnosis",props:{title:{type:String,required:!1,default:function(){return"사이트 진단"}},description:{type:String,required:!1,default:function(){return"여러분 사이트의 검색엔진 최적화 진단해보세요."}}},data:function(){return{activeTooltip:!1,activeInput:!1,inputOption:{name:"dignosis",type:"text",placeholder:"https://jettanalysis.com",isProcessing:!1},tooltipText:"사이트 진단을 위해 유효한 URL을 입력해주세요",url:"",snackbar:!1}},methods:{inputUrl:function(t){this.activeInput||(this.activeInput=!this.activeInput),this.url=t.target.value},onSubmit:function(t){t.preventDefault();/^(http|https):\/\/[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])*(\.[a-zA-Z]{2,}){1,2}([:\/?][^ㄱ-ㅎㅏ-ㅣ가-힣\s]*)?$|^(market):\/\//.test(this.url)?(this.activeInput=!0,this.$router.push({path:"/diagnosis",query:{url:this.url}})):this.snackbar=!0}}},r=(n(612),n(36)),c=n(49),l=n.n(c),d=n(390),f=n(389),h=n(413),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"simple-diagnosis"},[n("h3",{staticClass:"diagnosis-title"},[t._v(t._s(t.title))]),n("p",{staticClass:"diagnosis-description"},[t._v(t._s(t.description))]),n("div",{staticClass:"diagnosis-container"},[n("div",{staticClass:"caller"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("div",{staticClass:"aweber-form-body"},[n("ul",{staticClass:"css-1vd0gw5"},[n("li",{staticClass:"aweber-form-field form-group css-1pkbgp8"},[n("div",{staticClass:"aweber-input-container aweber-input-container-email",attrs:{id:"aweber-field-email"}},[n("input",{ref:"diagnosisInput",class:{"css-1lj1a3e":!t.activeInput,"css-q5hbwx":t.activeInput},attrs:{id:"form-item-email",name:t.inputOption.name,type:t.inputOption.type,placeholder:t.inputOption.placeholder,required:""},domProps:{value:t.url},on:{focus:function(e){t.activeTooltip=!0},blur:function(e){t.activeTooltip=!1},input:t.inputUrl}})])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTooltip,expression:"activeTooltip"}],staticClass:"tooltip fade bs-tooltip-top show css-17qfe8v",attrs:{role:"tooltip","x-placement":"top"}},[n("div",{staticClass:"arrow css-ht3ahn"}),n("div",{staticClass:"tooltip-inner css-rj3kn9"},[t._v(t._s(t.tooltipText))])])])]),n("div",{staticClass:"aweber-form-footer left"},[n("button",{staticClass:"caller-btn with-input e1fw58rm0",attrs:{disabled:t.inputOption.isProcessing,type:"submit",role:"button"}},[t.inputOption.isProcessing?[n("div",{staticClass:"loader"},[t._v("Loading...")])]:[t._v("진단")]],2)])])])]),n("v-snackbar",{staticClass:"crawl-error",attrs:{timeout:"2500",rounded:"pill",width:"320","min-width":"320",top:"",color:"error"},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{color:"#fff",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("닫기")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("v-icon",{style:{"margin-top":"-5px"}},[t._v("mdi-alert-circle-outline")]),t._v("유효하지 않은 URL입니다!")],1)],1)}),[],!1,null,"181efcf4",null);e.default=component.exports;l()(component,{VBtn:d.a,VIcon:f.a,VSnackbar:h.a})}}]);