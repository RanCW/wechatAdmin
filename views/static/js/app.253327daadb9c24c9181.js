webpackJsonp([1],{"0VVY":function(t,e,n){"use strict";function a(t){n("wSk3")}var s=n("jHJ2"),r=n.n(s),o=n("Y7uH"),i=n("VU/8"),l=a,c=i(r.a,o.a,!1,l,"data-v-fff5e186",null);e.a=c.exports},"1Kly":function(t,e,n){"use strict";e.a={data:function(){return{menuRouter:!0}},methods:{handleMenu:function(t){console.log(t)},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}}},"2Yqn":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"pages_goods_index"}},[t._v("\n  这里是商品的首页\n")])},s=[],r={render:a,staticRenderFns:s};e.a=r},"3DYK":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register-page",attrs:{id:"regiter_page"}},[a("el-row",[a("el-col",{attrs:{span:8,offset:4}},[a("img",{staticClass:"login-img",attrs:{src:n("s4Ux"),alt:"后台管理系统"}})]),t._v(" "),a("el-col",{attrs:{span:4,offset:1}},[a("div",{staticClass:"form-content"},[a("el-form",{ref:"register_form",staticClass:"demo-ruleForm",attrs:{model:t.register_form,"status-icon":""}},[a("el-form-item",{attrs:{label:"",prop:"user_name"}},[a("el-input",{staticClass:"input-item",attrs:{placeholder:"请输入用户名"},model:{value:t.register_form.user_name,callback:function(e){t.$set(t.register_form,"user_name",e)},expression:"register_form.user_name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"",prop:"password"}},[a("el-input",{staticClass:"input-item",attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.register_form.password,callback:function(e){t.$set(t.register_form,"password",e)},expression:"register_form.password"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"",prop:"password"}},[a("el-input",{staticClass:"input-item",attrs:{type:"password",placeholder:"请再次输入密码"},model:{value:t.register_form.password_again,callback:function(e){t.$set(t.register_form,"password_again",e)},expression:"register_form.password_again"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("register_form")}}},[t._v("注册")]),t._v(" "),a("el-button",{on:{click:function(e){t.toLogin()}}},[t._v("登录>>")])],1)],1)],1)])],1)],1)},s=[],r={render:a,staticRenderFns:s};e.a=r},"5y46":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"news_details"}},[t._v("\n  这里是新闻资讯的详情页面\n")])},s=[],r={render:a,staticRenderFns:s};e.a=r},"7tvP":function(t,e){},AXZ6:function(t,e){},"B/zY":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-page",attrs:{id:"login_page"}},[a("el-row",[a("el-col",{attrs:{span:8,offset:4}},[a("img",{staticClass:"login-img",attrs:{src:n("s4Ux"),alt:"后台管理系统"}})]),t._v(" "),a("el-col",{attrs:{span:4,offset:1}},[a("div",{staticClass:"form-content"},[a("el-form",{ref:"register_form",staticClass:"demo-ruleForm",attrs:{model:t.register_form,"status-icon":""}},[a("el-form-item",{attrs:{label:"",prop:"user_name"}},[a("el-input",{staticClass:"input-item",attrs:{placeholder:"请输入用户名"},model:{value:t.register_form.user_name,callback:function(e){t.$set(t.register_form,"user_name",e)},expression:"register_form.user_name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"",prop:"password"}},[a("el-input",{staticClass:"input-item",attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.register_form.password,callback:function(e){t.$set(t.register_form,"password",e)},expression:"register_form.password"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("register_form")}}},[t._v("登录")]),t._v(" "),a("el-button",{on:{click:function(e){t.toRegister()}}},[t._v("去注册>>")])],1)],1)],1)])],1)],1)},s=[],r={render:a,staticRenderFns:s};e.a=r},C2yf:function(t,e,n){"use strict";function a(t){n("AXZ6")}var s=n("aXFo"),r=n.n(s),o=n("Cw0F"),i=n("VU/8"),l=a,c=i(r.a,o.a,!1,l,"data-v-b15b209a",null);e.a=c.exports},CLr6:function(t,e){},Cw0F:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-header"},[t._t("header")],2),t._v(" "),n("div",{staticClass:"panel-body"},[t._t("body")],2),t._v(" "),n("div",{staticClass:"panel-footer"},[t._t("footer")],2)])},s=[],r={render:a,staticRenderFns:s};e.a=r},GhND:function(t,e,n){"use strict";e.a={data:function(){return{register_form:{user_name:"",password:"",password_again:""}}},methods:{submitForm:function(){this.$axios.post("/users/user_register",this.register_form)},toLogin:function(){this.$router.push({name:"login"})}}}},HNXP:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],r={render:a,staticRenderFns:s};e.a=r},JCuE:function(t,e,n){"use strict";function a(t){n("iaDY")}var s=n("LAoA"),r=n.n(s),o=n("Q7fy"),i=n("VU/8"),l=a,c=i(r.a,o.a,!1,l,"data-v-67aba15c",null);e.a=c.exports},LAoA:function(t,e){},LU49:function(t,e,n){"use strict";var a=n("C2yf");e.a={components:{panel:a.a},data:function(){return{keywords:"",contentSize:{minRows:5},newsForm:{title:"",auth:"冉成伟",sort:1,content:"",abstract:""},tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],editModal:!1}},methods:{handleSearch:function(){console.log("sousuo")},openEditDialog:function(){console.log("sss"),this.editModal=!0},handleDetail:function(t,e){console.log(t,e)},handleEdit:function(t,e){console.log(t,e)},handleDelete:function(t,e){console.log(t,e,"这里是删除")},changeListPage:function(t){console.log(t)},handleCancleEdit:function(){this.editModal=!1},handleSureEdit:function(){var t=this,e={url:"/news/add_news",method:"post",data:this.newsForm};console.log(e),this.$httpAjax(e).then(function(e){console.log(e),t.editModal=!1})}}}},M93x:function(t,e,n){"use strict";function a(t){n("XCHj")}var s=n("xJD8"),r=n("HNXP"),o=n("VU/8"),i=a,l=o(s.a,r.a,!1,i,null,null);e.a=l.exports},MU1b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-content",attrs:{id:"pages_news_index"}},[n("panel",{staticClass:"bg-white"},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n      新闻资讯\n\n    ")]),t._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},[n("div",{staticClass:"search-bar"},[n("el-row",[n("form",[n("el-col",{attrs:{span:4}},[n("el-input",{attrs:{placeholder:"文章、资讯名称"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),t._v(" "),n("el-col",{attrs:{span:4,offset:1}},[n("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:t.handleSearch}},[t._v("查询")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.openEditDialog}},[t._v("新增")])],1)],1)])],1)])]),t._v(" "),n("div",{staticClass:"bg-white table-list"},[n("el-table",{staticClass:"table-response",attrs:{data:t.tableData,stripe:"",border:""}},[n("el-table-column",{attrs:{prop:"date",width:"220",label:"添加日期"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",width:"220",label:"作者"}}),t._v(" "),n("el-table-column",{attrs:{prop:"address",label:"简介"}}),t._v(" "),n("el-table-column",{attrs:{width:"220",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.handleDetail(e.$index,e.row)}}},[t._v("查看\n\n\n\n          ")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){t.handleEdit(e.$index,e.row)}}},[t._v("编辑\n\n\n\n          ")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){t.handleDelete(e.$index,e.row)}}},[t._v("删除\n\n\n\n          ")])]}}])})],1),t._v(" "),n("div",{staticClass:"table-list-footer"},[n("el-pagination",{attrs:{layout:"prev, pager, next",total:1e3},on:{"current-change":t.changeListPage}})],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"新增",visible:t.editModal,width:"600"},on:{"update:visible":function(e){t.editModal=e}}},[n("div",[n("el-form",{attrs:{model:t.newsForm,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"标题"}},[n("el-input",{attrs:{placeholder:"请输入文章标题"},model:{value:t.newsForm.title,callback:function(e){t.$set(t.newsForm,"title",e)},expression:"newsForm.title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"作者"}},[n("el-input",{attrs:{placeholder:"请输入作者"},model:{value:t.newsForm.auth,callback:function(e){t.$set(t.newsForm,"auth",e)},expression:"newsForm.auth"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"排序"}},[n("el-input",{attrs:{placeholder:"请输入排序号"},model:{value:t.newsForm.sort,callback:function(e){t.$set(t.newsForm,"sort",e)},expression:"newsForm.sort"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"简介"}},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入简介"},model:{value:t.newsForm.abstract,callback:function(e){t.$set(t.newsForm,"abstract",e)},expression:"newsForm.abstract"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"内容"}},[n("el-input",{attrs:{autosize:t.contentSize,type:"textarea",placeholder:"请输入内容"},model:{value:t.newsForm.content,callback:function(e){t.$set(t.newsForm,"content",e)},expression:"newsForm.content"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.handleCancleEdit}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSureEdit}},[t._v("确 定")])],1)])],1)},s=[],r={render:a,staticRenderFns:s};e.a=r},"N+yH":function(t,e,n){"use strict";function a(t){n("ZR7h")}var s=n("uuYO"),r=n.n(s),o=n("2Yqn"),i=n("VU/8"),l=a,c=i(r.a,o.a,!1,l,"data-v-26f2a2d4",null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("M93x"),r=n("YaEn"),o=n("zL8q"),i=n.n(o),l=n("tvR6"),c=(n.n(l),n("pP4B"));a.default.use(i.a),a.default.prototype.$httpAjax=c.a,a.default.config.productionTip=!1,new a.default({el:"#app",router:r.a,template:"<App/>",components:{App:s.a}})},OrPU:function(t,e,n){"use strict";function a(t){n("sdEY")}var s=n("LU49"),r=n("MU1b"),o=n("VU/8"),i=a,l=o(s.a,r.a,!1,i,"data-v-d1a7dde4",null);e.a=l.exports},Q7fy:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header",attrs:{id:"components_header"}},[n("span",{staticClass:"header-logo"}),t._v("\n  管理平台\n  "),n("div",{staticClass:"user-info"},[n("el-dropdown",{attrs:{"hide-on-click":!0}},[n("span",{staticClass:"el-dropdown-link"},[t._v("\n        admin"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("修改密码")]),t._v(" "),n("el-dropdown-item",[t._v("退出")])],1)],1)],1)])},s=[],r={render:a,staticRenderFns:s};e.a=r},QAIc:function(t,e){},Qt9A:function(t,e,n){"use strict";function a(t){n("gK6l")}var s=n("x2x/"),r=n("yaQt"),o=n("VU/8"),i=a,l=o(s.a,r.a,!1,i,"data-v-c79ae49e",null);e.a=l.exports},R927:function(t,e,n){"use strict";function a(t){n("CLr6")}var s=n("7tvP"),r=n.n(s),o=n("5y46"),i=n("VU/8"),l=a,c=i(r.a,o.a,!1,l,"data-v-7ce98a80",null);e.a=c.exports},TTwy:function(t,e,n){"use strict";function a(t){n("rLug")}var s=n("GhND"),r=n("3DYK"),o=n("VU/8"),i=a,l=o(s.a,r.a,!1,i,"data-v-7b0e6af0",null);e.a=l.exports},Wbwb:function(t,e,n){"use strict";e.a={data:function(){return{register_form:{user_name:"",password:""}}},methods:{submitForm:function(t){var e=this;this.$httpAjax({url:"/users/user_login",method:"post",data:this.register_form}).then(function(t){"1"==t.data.state&&e.$router.push({name:"newsIndex"})})},toRegister:function(){this.$router.push({name:"register"})}}}},XCHj:function(t,e){},Y7uH:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"pages_goods_detail"},[t._v("\n  这里是商品的详情页面\n")])},s=[],r={render:a,staticRenderFns:s};e.a=r},YaEn:function(t,e,n){"use strict";var a=n("7+uW"),s=n("/ocq"),r=n("jT7l"),o=n("TTwy"),i=n("Qt9A"),l=n("N+yH"),c=n("0VVY"),u=n("OrPU"),d=n("R927");a.default.use(s.a),e.a=new s.a({routes:[{path:"/",name:"login",component:r.a,meta:"登录"},{path:"/register",name:"register",component:o.a,meta:"注册"},{path:"/index",name:"index",component:i.a,meta:"首页",children:[{path:"/",name:"newsIndex",component:u.a},{path:"goods",name:"goodsIndex",component:l.a},{path:"goodsdetail",name:"goodsDetail",component:c.a},{path:"news",name:"newsIndex",component:u.a},{path:"newsdetail",name:"newsDetail",component:d.a}]}]})},ZR7h:function(t,e){},aXFo:function(t,e){},gK6l:function(t,e){},iaDY:function(t,e){},jHJ2:function(t,e){},jT7l:function(t,e,n){"use strict";function a(t){n("QAIc")}var s=n("Wbwb"),r=n("B/zY"),o=n("VU/8"),i=a,l=o(s.a,r.a,!1,i,"data-v-3d444253",null);e.a=l.exports},pP4B:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var a=n("woOf"),s=n.n(a),r=n("mtWM"),o=n.n(r);o.a.defaults.baseURL="http://localhost:3000";var i=n("1nuA"),l=function(t){var e={method:"post"};return e=s()(e,t),e.data=i.stringify(e.data),o()(e)}},rLug:function(t,e){},re5u:function(t,e,n){"use strict";function a(t){n("yw36")}var s=n("1Kly"),r=n("xLCM"),o=n("VU/8"),i=a,l=o(s.a,r.a,!1,i,"data-v-50d2d461",null);e.a=l.exports},s4Ux:function(t,e,n){t.exports=n.p+"static/img/cover.8c24e99.jpg"},sdEY:function(t,e){},tvR6:function(t,e){},uuYO:function(t,e){},wSk3:function(t,e){},"x2x/":function(t,e,n){"use strict";var a=n("JCuE"),s=n("re5u");e.a={components:{navHeader:a.a,asideMenu:s.a},data:function(){return{}}}},xJD8:function(t,e,n){"use strict";e.a={name:"app"}},xLCM:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"components_aside_menu"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"/index/news",router:t.menuRouter,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[n("el-menu-item",{attrs:{index:"/index/news"}},[n("i",{staticClass:"el-icon-tickets"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("文章")])]),t._v(" "),n("el-menu-item",{attrs:{index:"/index/goods"}},[n("i",{staticClass:"el-icon-goods"}),t._v(" "),n("span",[t._v("商品")])])],1)],1)},s=[],r={render:a,staticRenderFns:s};e.a=r},yaQt:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page_index"}},[n("navHeader"),t._v(" "),n("el-row",[n("el-col",{attrs:{span:3}},[n("div",{staticClass:"left-menu"},[n("asideMenu")],1)]),t._v(" "),n("el-col",{attrs:{span:21}},[n("router-view")],1)],1),t._v(" "),n("div",[t._v("\n    这里页面的底部\n\n\n\n  ")])],1)},s=[],r={render:a,staticRenderFns:s};e.a=r},yw36:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.253327daadb9c24c9181.js.map