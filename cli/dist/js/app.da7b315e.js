(function(t){function a(a){for(var i,o,l=a[0],n=a[1],u=a[2],c=0,m=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);d&&d(a);while(m.length)m.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],i=!0,o=1;o<e.length;o++){var n=e[o];0!==s[n]&&(i=!1)}i&&(r.splice(a--,1),t=l(l.s=e[0]))}return t}var i={},s={app:0},r=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7f95938e"}[t]+".js"}function l(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(t){var a=[],e=s[t];if(0!==e)if(e)a.push(e[2]);else{var i=new Promise((function(a,i){e=s[t]=[a,i]}));a.push(e[2]=i);var r,n=document.createElement("script");n.charset="utf-8",n.timeout=120,l.nc&&n.setAttribute("nonce",l.nc),n.src=o(t);var u=new Error;r=function(a){n.onerror=n.onload=null,clearTimeout(c);var e=s[t];if(0!==e){if(e){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",u.name="ChunkLoadError",u.type=i,u.request=r,e[1](u)}s[t]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:n})}),12e4);n.onerror=n.onload=r,document.head.appendChild(n)}return Promise.all(a)},l.m=t,l.c=i,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)l.d(e,i,function(a){return t[a]}.bind(null,i));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/",l.oe=function(t){throw console.error(t),t};var n=window["webpackJsonp"]=window["webpackJsonp"]||[],u=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var d=u;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"03ec":function(t,a,e){t.exports=e.p+"img/DomingoImagen.ee7b49ee.png"},"0418":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"navBar"}},[e("header",{staticClass:"seccion__header"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar navbar-expand-lg custom_nav-container "},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("span",[t._v("FoodPly")])]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav  mx-auto "},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/About"}},[t._v("ver Productos")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/Equipo"}},[t._v("Equipo")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/CRUD"}},[t._v("CRUD")])],1)]),e("div",{staticClass:"user_option"},[e("router-link",{staticClass:"user_link",attrs:{to:"/Login"}},[t._v("LOGIN"),e("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}})])],1)])],1)])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{})])}],r={name:"Header"},o=r,l=e("2877"),n=Object(l["a"])(o,i,s,!1,null,null,null);a["a"]=n.exports},"050c":function(t,a,e){t.exports=e.p+"img/FotoHenryCogua.78b1d3dc.png"},"0992":function(t,a,e){},"0eaf":function(t,a,e){t.exports=e.p+"img/OfertaLacteos.cc2e1be2.png"},"3f35":function(t,a,e){t.exports=e.p+"img/MartesImagen.5c7c95cc.png"},"45e6":function(t,a,e){t.exports=e.p+"img/OfertaMercados.518793ec.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],o=(e("9c96"),e("2877")),l={},n=Object(o["a"])(l,s,r,!1,null,"6c17bb5c",null),u=n.exports,c=(e("d3b7"),e("3ca3"),e("ddb0"),e("8c4f")),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{attrs:{id:"header"}},[e("Header")],1),e("IntroPage"),e("OfertasDiarias"),e("Equipo"),e("Footer")],1)},m=[],p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._m(0),e("h3",[t._v("Installed CLI Plugins")]),t._m(1),e("h3",[t._v("Essential Links")]),t._m(2),e("h3",[t._v("Ecosystem")]),t._m(3)])},v=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),e("br"),t._v(" check out the "),e("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),e("li",[e("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),e("li",[e("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),e("li",[e("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],f={name:"HelloWorld",props:{msg:String}},b=f,g=(e("e2d3"),Object(o["a"])(b,p,v,!1,null,"1dfc7223",null)),_=g.exports,h=e("0418"),q=e("fd2d"),C=e("a611"),y=e("80ab"),x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",{staticClass:"seccion__slider"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 "},[e("div",{staticClass:"detalles__caja"},[e("h1",[t._v(" Bienvenido a tu tienda de confianza ")]),e("p",[t._v(" Aqui podras encontrar muchos productos que podrán ser reclamados en las tiendas mas cercanas con las cuales tenemos convenio. ")]),e("div",{staticClass:"btn-box"},[e("router-link",{staticClass:"user_link",attrs:{to:"/Login"}},[t._v("Reserva Ahora")])],1)])]),t._m(0)])])])])},E=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"col lg-6"},[i("img",{staticClass:"seccion__slider-imagen",attrs:{src:e("8d27"),alt:""}})])}],j={name:"IntroPage"},k=j,L=Object(o["a"])(k,x,E,!1,null,null,null),w=L.exports,M={components:{HelloWorld:_,Header:h["a"],Footer:q["a"],OfertasDiarias:C["a"],Equipo:y["a"],IntroPage:w}},O=M,A=(e("cccb"),Object(o["a"])(O,d,m,!1,null,null,null)),D=A.exports;i["a"].use(c["a"]);var $=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/crud",name:"CRUD",component:function(){return e.e("about").then(e.bind(null,"b2ee"))}},{path:"/equipo",name:"Equipo",component:function(){return e.e("about").then(e.bind(null,"b547"))}},{path:"/login",name:"Login",component:function(){return e.e("about").then(e.bind(null,"a55b"))}}],P=new c["a"]({mode:"history",base:"/",routes:$}),F=P,T=e("2f62");i["a"].use(T["a"]);var S=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}}),I=e("ac81"),R=(e("5ce4"),e("bc3a")),H=e.n(R),J=e("130e");i["a"].use(I["a"]),i["a"].use(J["a"],H.a),H.a.defaults.baseURL="http://localhost:3000/api",i["a"].config.productionTip=!1,new i["a"]({router:F,store:S,render:function(t){return t(u)}}).$mount("#app")},"5ced":function(t,a,e){},6202:function(t,a,e){t.exports=e.p+"img/ViernesImagen.5af11505.png"},"80ab":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"equipo"}},[i("section",{staticClass:"about_section layout_padding"},[i("div",{staticClass:"container  "},[i("div",{staticClass:"heading_container heading_center"},[i("h2",[t._v(" Equipo ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4 col-sm-12"},[i("div",{staticClass:"img-box"},[i("img",{attrs:{src:e("050c"),alt:""}})])]),i("div",{staticClass:"col-md-8 col-sm-12"},[i("div",{staticClass:"detalles__caja"},[i("h3",[t._v("Henry Jhovanny Cogua Mora")]),i("p",[t._v(" Saludos soy henry, tecnólogo en gestion en redes de datos del SENA, soy de la ciudad de Bogotá, estoy motivado a terminar mi curso en MisionTIC 2022 , donde afianze mi pasion en el diseno grafico de paginas web. ")]),i("a",{attrs:{href:""}},[t._v(" Read More ")])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-8 col-sm-12"},[i("div",{staticClass:"detalles__caja"},[i("h3",[t._v("Julian Felipe Lancheros")]),i("p",[t._v(" Soy estudiante de ingenieria agricola y ex-estudiante de ingenieria agronomica con muchas ganas de adquirir nuevos conocimientos, me gusta aprender de forma autodidacta y aprovechar las oportunidades para llenarme de experiencias enriquesedoras. ")]),i("a",{attrs:{href:"https:julianflancheros.js.org",target:"_blank"}},[t._v(" Read More ")])])]),i("div",{staticClass:"col-md-4 col-sm-12"},[i("div",{staticClass:"img-box"},[i("img",{attrs:{src:e("cc8c"),alt:""}})])])])])])])}],r={components:{name:"Equipo"}},o=r,l=e("2877"),n=Object(l["a"])(o,i,s,!1,null,null,null);a["a"]=n.exports},"8d27":function(t,a,e){t.exports=e.p+"img/fresh-market.4a390e0f.jpg"},"9c96":function(t,a,e){"use strict";e("b7f1")},a611:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"ofertas"}},[i("section",{staticClass:"offer_section layout_padding-bottom"},[i("div",{staticClass:"offer_container"},[i("div",{staticClass:"container"},[i("div",{staticClass:"container"},[i("div",{staticClass:"heading_container heading_center"},[i("h2",[t._v(" Ofertas de la semana ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-6 col-12"},[i("div",{staticClass:"box "},[i("div",{staticClass:"img-box"},[i("img",{attrs:{src:e("0eaf"),alt:""}})]),i("div",{staticClass:"detalles__caja"},[i("h5",[t._v(" Martes de lácteos ")]),i("h6",[i("span",[t._v("20%")]),t._v(" Dcto ")]),i("a",{attrs:{href:"","data-toggle":"modal","data-target":"#martesModal"}},[t._v(" Mas información "),i("i",{staticClass:"fa fa-arrow-circle-right",attrs:{"aria-hidden":"true"}})])])])]),i("div",{staticClass:"col-lg-6 col-12"},[i("div",{staticClass:"box "},[i("div",{staticClass:"img-box"},[i("img",{attrs:{src:e("f344"),alt:""}})]),i("div",{staticClass:"detalles__caja"},[i("h5",[t._v(" Miercoles de tubérculos ")]),i("h6",[i("span",[t._v("10%")]),t._v(" Dcto ")]),i("a",{attrs:{href:"","data-toggle":"modal","data-target":"#miercolesModal"}},[t._v(" Mas información "),i("i",{staticClass:"fa fa-arrow-circle-right",attrs:{"aria-hidden":"true"}})])])])]),i("div",{staticClass:"col-lg-6  col-12"},[i("div",{staticClass:"box "},[i("div",{staticClass:"img-box"},[i("img",{attrs:{src:e("d70c"),alt:""}})]),i("div",{staticClass:"detalles__caja"},[i("h5",[t._v(" Viernes de carnes ")]),i("h6",[i("span",[t._v("15%")]),t._v(" Dcto ")]),i("a",{attrs:{href:"","data-toggle":"modal","data-target":"#viernesModal"}},[t._v(" Mas información "),i("i",{staticClass:"fa fa-arrow-circle-right",attrs:{"aria-hidden":"true"}})])])])]),i("div",{staticClass:"col-lg-6  col-12"},[i("div",{staticClass:"box "},[i("div",{staticClass:"img-box"},[i("img",{attrs:{src:e("45e6"),alt:""}})]),i("div",{staticClass:"detalles__caja"},[i("h5",[t._v(" Domingos de mercados ")]),i("h6",[i("span",[t._v("35%")]),t._v(" Dcto ")]),i("a",{attrs:{href:"","data-toggle":"modal","data-target":"#domingoModal"}},[t._v(" Mas información "),i("i",{staticClass:"fa fa-arrow-circle-right",attrs:{"aria-hidden":"true"}})])])])])])])])])]),i("div",{staticClass:"offer_section modal fade bd-example-modal-lg",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true",id:"martesModal"}},[i("div",{staticClass:"modal-dialog modal-lg"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-titulo",attrs:{id:"martesModalTitle"}},[t._v("Martes de lácteos")]),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),i("div",{staticClass:"modal-body"},[i("img",{attrs:{src:e("3f35"),alt:""}}),i("p",[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! ")])]),i("div",{staticClass:"modal-footer"},[i("a",{attrs:{href:"","data-dismiss":"modal"}},[t._v("Cerrar")])])])])]),i("div",{staticClass:"offer_section modal fade bd-example-modal-lg",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true",id:"miercolesModal"}},[i("div",{staticClass:"modal-dialog modal-lg"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-titulo",attrs:{id:"miercolesModalTitle"}},[t._v("Domingos de mercados")]),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),i("div",{staticClass:"modal-body"},[i("img",{attrs:{src:e("f142"),alt:""}}),i("p",[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! ")])]),i("div",{staticClass:"modal-footer"},[i("a",{attrs:{href:"","data-dismiss":"modal"}},[t._v("Cerrar")])])])])]),i("div",{staticClass:"offer_section modal fade bd-example-modal-lg",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true",id:"viernesModal"}},[i("div",{staticClass:"modal-dialog modal-lg"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-titulo",attrs:{id:"viernesModalTitle"}},[t._v("Viernes de carnes")]),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),i("div",{staticClass:"modal-body"},[i("img",{attrs:{src:e("6202"),alt:""}}),i("p",[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! ")])]),i("div",{staticClass:"modal-footer"},[i("a",{attrs:{href:"","data-dismiss":"modal"}},[t._v("Cerrar")])])])])]),i("div",{staticClass:"offer_section modal fade bd-example-modal-lg",attrs:{tabindex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true",id:"domingoModal"}},[i("div",{staticClass:"modal-dialog modal-lg"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-titulo",attrs:{id:"domingoModalTitle"}},[t._v("Domingos de mercados")]),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[i("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),i("div",{staticClass:"modal-body"},[i("img",{attrs:{src:e("03ec"),alt:""}}),i("p",[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! Lorem ipsum dolor sit, amet consectetur adipisicing elit. At odio natus debitis, aliquid laboriosam cumque similique quasi error, labore ut laudantium sequi culpa quam perspiciatis voluptas! Eveniet consequatur sit at! ")])]),i("div",{staticClass:"modal-footer"},[i("a",{attrs:{href:"","data-dismiss":"modal"}},[t._v("Cerrar")])])])])])])}],r={name:"OfertasDiarias"},o=r,l=e("2877"),n=Object(l["a"])(o,i,s,!1,null,null,null);a["a"]=n.exports},b7f1:function(t,a,e){},cc8c:function(t,a,e){t.exports=e.p+"img/FotoJulianFLancheros.b9a9f2d7.jpg"},cccb:function(t,a,e){"use strict";e("5ced")},d70c:function(t,a,e){t.exports=e.p+"img/OfertaCarnes.3754507a.png"},e2d3:function(t,a,e){"use strict";e("0992")},f142:function(t,a,e){t.exports=e.p+"img/MiercolesImagen.b43e6112.png"},f344:function(t,a,e){t.exports=e.p+"img/OfertaTuberculos.7702ba68.png"},fd2d:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"footer"}},[e("footer",{staticClass:"footer_section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-md-4 footer-col"},[e("div",{staticClass:"footer_detail"},[e("router-link",{staticClass:"footer-logo",attrs:{to:"/"}},[e("span",[t._v("FoodPly")])]),t._m(1),t._m(2)],1)]),t._m(3)]),t._m(4)])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-4 footer-col"},[e("div",{staticClass:"footer_contact"},[e("h4",[t._v(" Contactanos ")]),e("div",{staticClass:"contact_link_box"},[e("a",{attrs:{href:"https://www.google.com/maps/place/Centro+Comercial+Iserra+100/@4.6882356,-74.0647965,3a,49.1y,62.53h,87.65t/data=!3m7!1e1!3m5!1s03JT19DSuaRNOa3VLSf2eQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D03JT19DSuaRNOa3VLSf2eQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D355.63156%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x8e3f9ac2c446bfa1:0x8f774384bde268b6!8m2!3d4.6879668!4d-74.064409"}},[e("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),e("span",[t._v(" Tv. 55 # 98A-66, Bogotá, Cundinamarca ")])]),e("a",{attrs:{href:"tel:+573219167952"}},[e("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}}),e("span",[t._v(" 3219167952 ")])]),e("a",{attrs:{href:"mailto:contacto@FoodPly.com"}},[e("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),e("span",[t._v(" contacto@FoodPly.com ")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" Reserva tus alimentos desde cualquier sitio del pais, reclama en la tienda con convenio mas cercana y sin intermediarios. "),e("br"),t._v(" FoodPly tu compañia en la comida ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer_social"},[e("a",{attrs:{href:""}},[e("i",{staticClass:"fab fa-facebook",attrs:{"aria-hidden":"true"}})]),e("a",{attrs:{href:""}},[e("i",{staticClass:"fab fa-twitter",attrs:{"aria-hidden":"true"}})]),e("a",{attrs:{href:""}},[e("i",{staticClass:"fab fa-linkedin",attrs:{"aria-hidden":"true"}})]),e("a",{attrs:{href:""}},[e("i",{staticClass:"fab fa-instagram",attrs:{"aria-hidden":"true"}})]),e("a",{attrs:{href:""}},[e("i",{staticClass:"fab fa-pinterest",attrs:{"aria-hidden":"true"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-4 footer-col"},[e("h4",[t._v(" Horas de servicio ")]),e("p",[t._v(" Todos los dias ")]),e("p",[t._v(" 8:00 Am - 8:00 Pm ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-info"},[e("p",[t._v(" © "),e("span",{attrs:{id:"displayYear"}}),t._v(" Todos los derechos reservados por "),e("a",{attrs:{href:"#"}},[t._v("FoodPly")])])])}],r={name:"Footer"},o=r,l=e("2877"),n=Object(l["a"])(o,i,s,!1,null,null,null);a["a"]=n.exports}});
//# sourceMappingURL=app.da7b315e.js.map