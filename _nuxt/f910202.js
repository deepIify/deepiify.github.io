(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{608:function(e,t,n){"use strict";(function(e){n(6),n(5),n(7),n(12),n(8),n(13);var r=n(1),o=(n(25),n(82));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=e.env.NUXT_APP_BASE_URL||"https://jettanalysis.com",O=e.env.NUXT_APP_FRONTEND_PORT||"",h="".concat(f).concat(O);t.a={name:"Profile",components:{},head:function(t){var title="유저 프로필";return{title:title,meta:(0,t.$seoMeta)({title:"".concat(title," | ").concat(e.env.NUXT_APP_SITE_NAME||"JETT Analysis"),url:"".concat(h).concat(this.$route.path),description:"유저 프로필 페이지입니다."},!1).concat([{hid:"robots",name:"robots",content:"noindex, nofollow"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"".concat(title," | JETT Analysis")}]),link:[{rel:"canonical",href:"".concat(h).concat(this.$route.path)}]}},created:function(){this.user||this.$router.push("/")},computed:l(l({},Object(o.c)({user:"user/user"})),{},{providerType:function(){return this.user&&this.user.uid?"":"UNKNOWN"}})}}).call(this,n(124))},772:function(e,t,n){"use strict";n.r(t);var r=n(608).a,o=n(38),c=n(57),l=n.n(c),f=n(459),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jett-container"},[n("navigation-bar"),n("v-main",[e._v("프로필"),n("ul",[n("li",[e._v("이름: "+e._s(e.user?e.user.displayName:"UNKOWN"))]),n("li",[e._v("이메일: "+e._s(e.user?e.user.email:"UNKOWN"))]),n("li",[e._v("폰번호: "+e._s(e.user?e.user.phoneNumber:""))])])]),n("page-footer")],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{NavigationBar:n(157).default,PageFooter:n(158).default}),l()(component,{VMain:f.a})}}]);