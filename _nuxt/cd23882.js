(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{328:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));n(43),n(7),n(19),n(44),n(21),n(16),n(49),n(56),n(23),n(20),n(29),n(17),n(30);var r=n(4),o=n(9),m=(n(34),n(63),n(99),n(18),n(39),n(14));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,m=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return m=t.done,t},e:function(t){c=!0,o=t},f:function(){try{m||null==n.return||n.return()}finally{if(c)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var v=/;(?![^(]*\))/g,f=/:(.*)/;function _(style){var t,e={},n=l(style.split(v));try{for(n.s();!(t=n.n()).done;){var r=t.value.split(f),c=Object(o.a)(r,2),d=c[0],h=c[1];(d=d.trim())&&("string"==typeof h&&(h=h.trim()),e[Object(m.a)(d)]=h)}}catch(t){n.e(t)}finally{n.f()}return e}function k(){for(var t,e={},i=arguments.length;i--;)for(var n=0,r=Object.keys(arguments[i]);n<r.length;n++)switch(t=r[n]){case"class":case"directives":arguments[i][t]&&(e[t]=y(e[t],arguments[i][t]));break;case"style":arguments[i][t]&&(e[t]=x(e[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(e[t]=w(e[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;e[t]||(e[t]={}),e[t]=d(d({},arguments[i][t]),e[t]);break;default:e[t]||(e[t]=arguments[i][t])}return e}function x(t,source){return t?source?(t=Object(m.r)("string"==typeof t?_(t):t)).concat("string"==typeof source?_(source):source):t:source}function y(t,source){return source?t&&t?Object(m.r)(t).concat(source):source:t}function w(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},i=2;i--;){var e=i<0||arguments.length<=i?void 0:arguments[i];for(var n in e)e[n]&&(t[n]?t[n]=[].concat(e[n],t[n]):t[n]=e[n])}return t}},334:function(t,e,n){"use strict";var r=n(25);function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var m={inserted:function(t,e){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=e.modifiers||{},m=e.value,c="object"===Object(r.a)(m)?m:{handler:m,options:{}},d=c.handler,l=c.options,h=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(t._observe){var m=e.some((function(t){return t.isIntersecting}));!d||n.quiet&&!t._observe.init||n.once&&!m&&t._observe.init||d(e,r,m),m&&n.once?o(t):t._observe.init=!0}}),l);t._observe={init:!1,observer:h},h.observe(t)}},unbind:o};e.a=m},379:function(t,e,n){"use strict";n(156);var r=n(14),o=n(0);e.a=o.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r.d)(this.height),n=Object(r.d)(this.minHeight),o=Object(r.d)(this.minWidth),m=Object(r.d)(this.maxHeight),c=Object(r.d)(this.maxWidth),d=Object(r.d)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),o&&(t.minWidth=o),m&&(t.maxHeight=m),c&&(t.maxWidth=c),d&&(t.width=d),t}}})},396:function(t,e,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("bd30a354",content,!0,{sourceMap:!1})},397:function(t,e,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("5eab6db7",content,!0,{sourceMap:!1})},427:function(t,e,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("1cdf85c7",content,!0,{sourceMap:!1})},428:function(t,e,n){var r=n(74)(!1);r.push([t.i,".theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=r},429:function(t,e,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("2fba213c",content,!0,{sourceMap:!1})},430:function(t,e,n){var r=n(74)(!1);r.push([t.i,".v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=r},431:function(t,e,n){"use strict";n(396)},432:function(t,e,n){var r=n(74)(!1);r.push([t.i,'a[data-v-aa0c72de]{text-decoration:none;transition:all .2s ease-in-out 0s}.article-img[data-v-aa0c72de]{width:100%;margin-bottom:2rem}.css-u5p2ag[data-v-aa0c72de]{padding:25px 0 35px}.css-79elbk[data-v-aa0c72de],.css-u5p2ag[data-v-aa0c72de]{position:relative}.css-1izrdyl[data-v-aa0c72de]{font-size:28px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;cursor:pointer;margin-bottom:25px;color:#000;transition:color .5s}.css-1izrdyl[data-v-aa0c72de]:focus,.css-1izrdyl[data-v-aa0c72de]:hover{color:#bb4a03}.css-1a2v9hb[data-v-aa0c72de]{max-width:100%;height:auto}.css-1d7x0cs[data-v-aa0c72de]{display:flex;align-items:center;justify-content:flex-start;margin-bottom:30px}.css-1d7x0cs p[data-v-aa0c72de]{margin-bottom:0;line-height:1.2;font-size:14px}.css-qyxjlf[data-v-aa0c72de]{margin-bottom:0;width:35px;height:35px;border-radius:50%;overflow:hidden;margin-right:15px}.css-12m1dn8[data-v-aa0c72de]{font-family:"Georgia",serif}.css-12m1dn8 p[data-v-aa0c72de]{margin-bottom:1.2rem}.css-12m1dn8 figure[data-v-aa0c72de]{margin-bottom:1.3rem}.css-12m1dn8 img[data-v-aa0c72de]{width:100%}.css-12m1dn8[data-v-aa0c72de] :last-child{margin-bottom:0!important}.css-12m1dn8 p>img[data-v-aa0c72de]{width:auto}.css-12m1dn8 .backlinko-image img[data-v-aa0c72de]{display:inline-block;width:100%}.css-12m1dn8 .backlinko-image.backlinko-has-border img[data-v-aa0c72de]{border:4px solid #ccc}.css-12m1dn8 .backlinko-image.img-circle img[data-v-aa0c72de]{border-radius:50%!important}.css-12m1dn8 .alignnone[data-v-aa0c72de]{margin-left:0;margin-right:0;max-width:100%;height:auto}.css-12m1dn8 .aligncenter[data-v-aa0c72de]{display:block;margin:1rem auto;height:auto}.css-12m1dn8 .alignleft[data-v-aa0c72de],.css-12m1dn8 .alignright[data-v-aa0c72de]{margin-bottom:1rem;height:auto}.css-12m1dn8 .backlinko-image__centered-image img[data-v-aa0c72de]{margin:0 auto!important}.css-12m1dn8 .backlinko-image__img-explicit-no-border:not(.backlinko-has-border) img[data-v-aa0c72de]{border:0!important;border-radius:0!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-xs-up img[data-v-aa0c72de]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-xs-up img[data-v-aa0c72de]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-xs-up img[data-v-aa0c72de]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-xs-up img[data-v-aa0c72de]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-xs-up img[data-v-aa0c72de]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-xs-up img[data-v-aa0c72de]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-xs-up img[data-v-aa0c72de]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-0 img[data-v-aa0c72de]{margin-bottom:0!important}.css-12m1dn8 .backlinko-image__img-border-radius-4 img[data-v-aa0c72de],.css-12m1dn8 .visual>img[data-v-aa0c72de]{border:0!important;border-radius:.25rem!important}.css-12m1dn8 .backlinko-image__img-hub-rounded img[data-v-aa0c72de],.css-12m1dn8 .backlinko-image__rounded img[data-v-aa0c72de]{border:0!important;border-radius:.5rem!important}.css-12m1dn8 .backlinko-image__screenshot img[data-v-aa0c72de]{outline:none!important;margin:0 auto!important;border:4px solid #ccc;border-radius:0!important}.css-12m1dn8 .backlinko-image__visual-chart img[data-v-aa0c72de]{outline:none!important;margin:0 auto!important;border:0!important;border-radius:.3rem!important}.css-12m1dn8 .backlinko-image__bg-white img[data-v-aa0c72de]{background-color:#fff!important}.css-12m1dn8 .backlinko-image__bg-light-gray-lighter img[data-v-aa0c72de]{background-color:#f8f8f8!important}.css-12m1dn8 .backlinko-image__bg-light-gray-darker img[data-v-aa0c72de]{background-color:#f4f4f4!important}.css-3872h1[data-v-aa0c72de]{align-items:center;margin-top:1.5rem}.css-toegfy[data-v-aa0c72de]{font-size:14px;display:flex;line-height:1;align-items:center;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";margin-bottom:0!important}.css-toegfy span[data-v-aa0c72de]{color:#00afff;font-size:36px;font-weight:700;padding-right:10px}.css-13xd08w[data-v-aa0c72de]{display:inline-flex;align-items:center;justify-content:center;font-style:normal;white-space:normal;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;cursor:pointer;text-transform:none;font-weight:600;min-height:3.7875rem;color:#fff;background-color:#00afff;border-color:#00afff;width:100%;border-radius:6px}.css-13xd08w[data-v-aa0c72de]:active,.css-13xd08w[data-v-aa0c72de]:hover,.css-13xd08w[data-v-aa0c72de]:link,.css-13xd08w[data-v-aa0c72de]:visited{color:#fff;-webkit-text-decoration:none;text-decoration:none}.css-13xd08w[data-v-aa0c72de]:hover{background:#07f;border-color:#07f}@media(min-width:540px){.css-12m1dn8 .alignright[data-v-aa0c72de]{float:right;margin-left:1rem}.css-12m1dn8 .alignleft[data-v-aa0c72de]{float:left;margin-left:1rem}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-sm-up img[data-v-aa0c72de]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-sm-up img[data-v-aa0c72de]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-sm-up img[data-v-aa0c72de]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-sm-up img[data-v-aa0c72de]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-sm-up img[data-v-aa0c72de]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-sm-up img[data-v-aa0c72de]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-sm-up img[data-v-aa0c72de]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-1-sm-up img[data-v-aa0c72de]{margin-bottom:-1rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-sm-up img[data-v-aa0c72de]{margin-bottom:-2rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-sm-up img[data-v-aa0c72de]{margin-bottom:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-3-sm-up img[data-v-aa0c72de]{margin-bottom:-3rem!important}}@media(min-width:768px){.css-u5p2ag[data-v-aa0c72de]{padding:35px 0 55px}.css-1izrdyl[data-v-aa0c72de]{font-size:38px}.css-toegfy[data-v-aa0c72de]{margin-right:30px}.css-12m1dn8 .backlinko-image.alignleft-md-up[data-v-aa0c72de]{float:left;margin-left:1rem}.css-12m1dn8 .backlinko-image.alignright-md-up[data-v-aa0c72de]{float:right;margin-left:1rem}.css-12m1dn8 .backlinko-image__img-mt-minus-1-md-up img[data-v-aa0c72de]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-md-up img[data-v-aa0c72de]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-md-up img[data-v-aa0c72de]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-md-up img[data-v-aa0c72de]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-md-up img[data-v-aa0c72de]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-md-up img[data-v-aa0c72de]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-md-up img[data-v-aa0c72de]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-1-md-up img[data-v-aa0c72de]{margin-bottom:-1rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-md-up img[data-v-aa0c72de]{margin-bottom:-2rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-md-up img[data-v-aa0c72de]{margin-bottom:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-3-md-up img[data-v-aa0c72de]{margin-bottom:-3rem!important}.css-3872h1[data-v-aa0c72de]{display:flex;margin-top:2rem}}@media(min-width:992px){.css-u5p2ag[data-v-aa0c72de]{padding:50px 0}.css-12m1dn8 .backlinko-image__img-mt-minus-1-lg-up img[data-v-aa0c72de]{margin-top:-1rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-1-point-5-lg-up img[data-v-aa0c72de]{margin-top:-1.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-lg-up img[data-v-aa0c72de]{margin-top:-2rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-5-lg-up img[data-v-aa0c72de]{margin-top:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-2-point-75-lg-up img[data-v-aa0c72de]{margin-top:-2.75rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-3-lg-up img[data-v-aa0c72de]{margin-top:-3rem!important}.css-12m1dn8 .backlinko-image__img-mt-minus-4-point-5-lg-up img[data-v-aa0c72de]{margin-top:-4.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-1-lg-up img[data-v-aa0c72de]{margin-bottom:-1rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-lg-up img[data-v-aa0c72de]{margin-bottom:-2rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-2-point-5-lg-up img[data-v-aa0c72de]{margin-bottom:-2.5rem!important}.css-12m1dn8 .backlinko-image__img-mb-minus-3-lg-up img[data-v-aa0c72de]{margin-bottom:-3rem!important}}',""]),t.exports=r},433:function(t,e,n){"use strict";n(397)},434:function(t,e,n){var r=n(74)(!1);r.push([t.i,".css-15j7bd7 .post+.post>div{border-top:1px solid #e6e6e6}.css-15j7bd7 article:last-of-type>div:last-of-type{border-bottom:1px solid #e6e6e6}@media(min-width:576px){.css-15j7bd7{padding-right:10px;padding-left:10px}}@media(min-width:540px){.css-15j7bd7{max-width:540px}}@media(min-width:768px){.css-15j7bd7{padding-bottom:50px;max-width:720px}}@media(min-width:992px){.css-15j7bd7{padding-top:20px;padding-bottom:90px;max-width:850px}.css-15j7bd7 article{padding:0 60px;margin-top:20px}.css-15j7bd7 article:first-child{margin-top:0}}",""]),t.exports=r},492:function(t,e,n){"use strict";n.r(e);n(39);var r={name:"ArticlePreview",props:{type:{type:String,required:!0},article:{type:Object,required:!0}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}},computed:{link:function(){return this.article?"/".concat(this.type,"/").concat(this.article.slug):""},excerpt:function(){return this.article,""}}},o=(n(431),n(433),n(76)),m=n(98),c=n.n(m),d=n(523),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post"},[n("div",{staticClass:"css-u5p2ag"},[n("header",{staticClass:"css-79elbk"},[n("div",[n("router-link",{attrs:{to:t.link}},[n("h2",{staticClass:"css-1izrdyl"},[t._v(t._s(t.article.title))])]),n("div",{staticClass:"css-1d7x0cs"},[n("time",{staticClass:"updated",attrs:{datetime:t.article.updatedAt}}),n("p",[t._v(t._s(t.article.author.name)+" · "+t._s(t.formatDate(t.article.updatedAt))+" 업데이트")])])],1)]),n("div",{staticClass:"css-12m1dn8"},[n("v-img",{staticClass:"article-img",attrs:{src:t.article.img}}),n("nuxt-content",{attrs:{document:t.article.excerpt}})],1),n("footer",{staticClass:"css-3872h1"},[n("router-link",{staticClass:"css-13xd08w",attrs:{to:t.link}},[t._v("이어서 읽기")])],1)])])}),[],!1,null,"aa0c72de",null);e.default=component.exports;c()(component,{VImg:d.a})},523:function(t,e,n){"use strict";var r=n(25),o=(n(156),n(78),n(239),n(67),n(65),n(427),n(334)),m=(n(429),n(379)),c=n(155),d=Object(c.a)(m.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=n(157),h=n(328),v=n(40),f="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(c.a)(d,l.a).extend({name:"v-img",directives:{intersect:o.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(r.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,n){if(!f||n||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(v.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=img.naturalHeight,o=img.naturalWidth;r||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/r):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(n,e)};n()},genContent:function(){var content=d.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=d.options.render.call(this,t),data=Object(h.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:f?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})}}]);