webpackJsonp([7],{1019:function(t,e,i){e=t.exports=i(291)(),e.push([t.i,".cols{padding:5px;width:90%;font-size:15px;color:#555;text-align:left}.home{height:100%;overflow:hidden;padding-left:10px}.home .home_content{margin-top:15px;overflow:scroll;height:100%;padding-right:10px}.home .home_content .titleHome{border-bottom:1px solid #dcdcdc;position:relative;margin-bottom:20px}.home .home_content .titleHome .text{display:inline-block;vertical-align:top;margin-bottom:10px;width:80%}.home .home_content .titleHome .homeImg{width:200px;height:175px}.home .home_content .titleHome .homeInfo{margin-top:25px;padding-left:44px}.home .home_content .main{width:100%;overflow:hidden;height:721px}.home .home_content .main .leftMain{width:68%;background:url("+i(1042)+") no-repeat;background-size:100% 100%;height:718px;float:left;display:inline-block;position:relative}.home .home_content .main .leftMain div{width:260px;height:200px}.home .home_content .main .leftMain h1,.home .home_content .main .rightMain h1{font-size:22px;text-align:left;color:#333;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.home .home_content .main .rightMain h1{padding-bottom:15px}.home .home_content .main .rightMain{width:26%;float:right;padding-top:170px;min-width:500x}.home .home_content .main .rightMain .siderTip{margin:10px 0;line-height:55px;height:55px}.home .home_content .main .rightMain .siderTip .siderImg{display:inline-block;width:56px;margin-right:20px;text-align:center}.home .home_content .main .rightMain .siderTip .siderImg img{vertical-align:middle}.home .home_content .main .rightMain .siderTip .siderKey,.home .home_content .main .rightMain .siderTip .siderType{display:inline-block;text-align:center;width:120px;font-size:16px}.home .home_content .main .rightMain .siderTip .siderKey{color:#0098ca}.home .home_content .dataRecord{width:100%;margin-top:80px;overflow:hidden;padding-bottom:50px}.home .home_content .dataRecord .chart{width:60%;float:left}.home .home_content .dataRecord .record{width:26%;float:right;padding-top:80px}.home .home_content .dataRecord .record p{margin:70px 0;font-size:20px}.home .home_content .coltext{font-size:14px;color:#898989;padding:20px}.home .home_content .A{position:absolute;bottom:16%;left:2%}.home .home_content .B{position:absolute;top:25%;left:11%}.home .home_content .C{position:absolute;bottom:38%;left:41%}.home .home_content .D{position:absolute;bottom:30%;left:68%}",""])},1040:function(t,e,i){e=t.exports=i(291)(),e.push([t.i,".chart-container .el-col div{height:350px;padding-left:70px}",""])},1041:function(t,e,i){t.exports=i(2),i(302),i(294),i(307),i(310),i(308),i(304),i(312),i(300),i(299),i(298),i(305),i(309),i(295),i(296),i(297),i(303),i(301),i(306),i(311),i(316),i(87),i(317),i(325),i(321),i(315),i(187),i(188),i(313),i(323),i(314),i(326),i(320),i(319),i(318),i(322),i(324),i(189)},1042:function(t,e,i){t.exports=i.p+"9.png?b5d8ec51a9c75899cf16c2b10d62949a"},1055:function(t,e,i){var a,n;i(1127),a=i(987);var o=i(1095);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=a},1071:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"home_content"},[i("contain-title",{attrs:{settitle:t.settitle}}),i("div",{staticClass:"titleHome"},[i("span",{class:{picture:t.isClass}},[i("img",{staticClass:"homeImg",attrs:{src:t.listV.logo}})]),i("el-row",{staticClass:"text homeInfo",attrs:{gutter:20}},t._l(t.listN,function(e,a){return i("el-col",{staticClass:"coltext",attrs:{span:12}},[t._v("\n\t\t\t\t\t"+t._s(e)+" "+t._s(t.listV[a])+" "+t._s(t.plans.come)+"\n\t\t\t\t")])}))],1),i("div",{staticClass:"main"},[i("div",{staticClass:"leftMain"},[t._l(t.areas,function(e,a){return[i("div",{class:t.style[a]},[i("h1",[t._v(t._s(e.name))]),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("div",{staticClass:"cols",staticStyle:{height:"20px"}},[t._v("区域面积："+t._s(e.area)+" "+t._s(e.unit))]),i("div",{staticClass:"cols",staticStyle:{height:"20px"}},[t._v("区域负责人："+t._s(e.operate))])])],1)],1)]})],2),i("div",{staticClass:"rightMain"},[i("h1",[t._v("My plan")]),i("ul",[t._l(t.siderBeast,function(e){return void 0===t.plans.harvest||null===t.plans.harvest?i("li",{staticClass:"siderTip"},[i("span",{staticClass:"siderImg"},[i("img",{attrs:{src:e.src}})]),i("span",{staticClass:"siderType"},[t._v(t._s(e.type))]),null!==t.plans?i("span",{staticClass:"siderKey"},[t._v(t._s(t.plans[e.key]))]):t._e()]):t._e()}),t._l(t.siderPlant,function(e){return void 0===t.plans.come||null===t.plans.come?i("li",{staticClass:"siderTip"},[i("span",{staticClass:"siderImg"},[i("img",{attrs:{src:e.src}})]),i("span",{staticClass:"siderType"},[t._v(t._s(e.type))]),null!==t.plans?i("span",{staticClass:"siderKey"},[t._v(t._s(t.plans[e.key]))]):t._e()]):t._e()})],2)])]),i("div",{staticClass:"dataRecord"},[i("chart",{staticClass:"chart"}),i("div",{staticClass:"record"},[i("p",[t._v("本月追溯次数："+t._s(t.codes.time)+"次")]),i("p",[t._v("本月生产溯源码："+t._s(t.codes.code)+"个")])])],1)],1)])},staticRenderFns:[]}},1095:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"chart-container"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("div",{attrs:{id:"chartColumn"}})]),i("el-col",{attrs:{span:12}},[i("div",{attrs:{id:"chartBar"}})]),i("el-col",{attrs:{span:12}},[i("div",{attrs:{id:"chartLine"}})]),i("el-col",{attrs:{span:12}},[i("div",{attrs:{id:"chartPie"}})])],1)],1)},staticRenderFns:[]}},1106:function(t,e,i){var a=i(1019);"string"==typeof a&&(a=[[t.i,a,""]]);i(292)(a,{});a.locals&&(t.exports=a.locals)},1127:function(t,e,i){var a=i(1040);"string"==typeof a&&(a=[[t.i,a,""]]);i(292)(a,{});a.locals&&(t.exports=a.locals)},329:function(t,e,i){var a,n;i(1106),a=i(982);var o=i(1071);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=a},844:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ContainTitle",props:{settitle:{type:String,default:""},isShow:{type:Boolean,default:!1}},methods:{back:function(){this.$router.go(-1)}}}},845:function(t,e,i){e=t.exports=i(291)(),e.push([t.i,".title[data-v-612b4f50]{padding:0 8px 14px 0;border-bottom:2px solid #e5e5e5;margin-bottom:10px}.title h2[data-v-612b4f50]{border-radius:4px;padding-left:14px;display:inline-block;font-family:YouYuan;color:#333;font-weight:400}.title .back[data-v-612b4f50]{display:inline-block;float:right;border:1px solid #dcdcdc;border-radius:4px;padding:0 10px 2px 0}.title .back[data-v-612b4f50]:hover{cursor:pointer}.title .back:hover .back_text[data-v-612b4f50]{color:#ccc}.title .back .back_icon[data-v-612b4f50]{display:inline-block;width:28px;height:15px;vertical-align:middle;margin-right:5px}",""])},846:function(t,e,i){var a,n;i(848),a=i(844);var o=i(847);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,n._scopeId="data-v-612b4f50",t.exports=a},847:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h2",[t._v(t._s(t.settitle))]),t.isShow?i("a",{staticClass:"back",on:{click:t.back}},[i("span",{staticClass:"back_icon"}),i("span",{staticClass:"back_text"},[t._v("返回")])]):t._e()])},staticRenderFns:[]}},848:function(t,e,i){var a=i(845);"string"==typeof a&&(a=[[t.i,a,""]]);i(292)(a,{});a.locals&&(t.exports=a.locals)},982:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=i(846),n=i.n(a),o=i(1055),s=i.n(o),r=i(128),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e.default={name:"home",data:function(){return{areas:{},style:[{A:!0,B:!1,C:!1,D:!1},{A:!1,B:!0,C:!1,D:!1},{A:!1,B:!1,C:!0,D:!1},{A:!1,B:!1,C:!1,D:!0}],settitle:"首页",isClass:!1,listN:{company_name:"所属公司:",name:"用户名:",date:"登录时间:",type:"用户类型:"},listV:{},state:"plant",plans:{},codes:{},siderPlant:[{src:"/public/images/fertilize-home.png",type:"施肥",key:"fertilize"},{src:"/public/images/medicine-home.png",type:"施药",key:"spray"},{src:"/public/images/sale-home.png",type:"检测",key:"detect"},{src:"/public/images/harvest-home.png",type:"采收",key:"harvest"}],siderBeast:[{src:"/public/images/fertilize-home.png",type:"喂养",key:"fodderuse"},{src:"/public/images/medicine-home.png",type:"病疫",key:"disease"},{src:"/public/images/sale-home.png",type:"检测",key:"detect"},{src:"/public/images/harvest-home.png",type:"出栏",key:"come"},{src:"/public/images/sale-home.png",type:"检疫",key:"detection"}],isCloseSiderBar:!1}},components:{ContainTitle:n.a,chart:s.a},methods:l({},i.i(r.mapActions)(["change_siderBar"])),mounted:function(){var e=this;this.change_siderBar(!0),t.get("api/index/state").then(function(t){"plant"!==t.data&&"all"!==t.data&&(e.state="beast")}),t.get("api/index").then(function(t){e.listV=t.data,e.listV.date=localStorage.getItem("loginDate")}),t.get("api/index/district").then(function(t){var i=[];for(var a in t.data)i[a]=t.data[a];e.areas=i.data}),t.get("api/index/plan").then(function(t){e.plans=t.data}),t.get("api/index/code").then(function(t){e.codes=t.data})},created:function(){document.title="首页"}}}).call(e,i(75))},987:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=i(1041),n=i.n(a);e.default={data:function(){return{chartColumn:null,chartBar:null,chartLine:null,chartPie:null}},mounted:function(){var e=this;this.chartColumn=n.a.init(document.getElementById("chartColumn")),this.chartBar=n.a.init(document.getElementById("chartBar")),this.chartLine=n.a.init(document.getElementById("chartLine")),this.chartPie=n.a.init(document.getElementById("chartPie")),t.get("api/index/echarts").then(function(t){var i={},a=[],n=[],o=[],s=[],r=[],l="养殖",c=[],d=[],p=[],h=[],m=[],u=[],f=[],g=[],v=[],x=[];if(void 0!==t.data.area&&(i=t.data),void 0!==i.area&&(a=i.area),void 0!==i.sell&&(n=i.sell.data),void 0!==i.delivery&&(o=i.delivery),void 0===i.come){if(l="种植",void 0!==i.harvest){s=i.harvest.data;for(var y=0;y<s.length;y++)f[y]=s[y].date,g[y]=parseInt(s[y].amount)}e.chartLine.setOption({title:{text:"采收报表",x:"center"},xAxis:{data:f},yAxis:{},series:[{name:"销量",type:"bar",data:g}]})}else{if(void 0!==i.come){r=i.come.data;for(var _=0;_<r.lengtc;_++)m[_]=r[_].date,u[_]=parseInt(r[_].amount)}e.chartLine.setOption({title:{text:"出栏报表",x:"center"},xAxis:{data:m},yAxis:{},series:[{name:"销量",type:"bar",data:u}]})}for(var b=0;b<a.length;b++)c[b]=a[b].date,d[b]=parseInt(a[b].area);for(var C=0;C<n.length;C++)p[C]=n[C].date,h[C]=parseInt(n[C].amount);for(var w in o)"self"===w&&(v.push("自运"),x.push({value:o[w],name:"自运"})),"consign"===w&&(v.push("托运"),x.push({value:o[w],name:"托运"})),"selve"===w&&(v.push("自提"),x.push({value:o[w],name:"自提"}));e.chartColumn.setOption({title:{text:l+"面积(单位：亩)",x:"center"},xAxis:{data:c},yAxis:{type:"value"},series:[{name:"",type:"bar",data:d}]}),e.chartBar.setOption({title:{text:"销售订单",x:"center"},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,grid:{borderWidth:0,y:80,y2:60},xAxis:{type:"category",show:!1,data:p},yAxis:[{type:"value",show:!1}],series:[{type:"bar",itemStyle:{normal:{color:function(t){return["#C1232B","#B5C334","#FCCE10","#E87C25","#27727B","#FE8463","#9BCA63","#FAD860","#F3A43B","#60C0DD","#D7504B","#C6E579","#F4E001","#F0805A","#26C0C0"][t.dataIndex]},label:{show:!0,position:"top",formatter:"{b}\n{c}"}}},data:h}]}),e.chartPie.setOption({title:{text:"物流统计",x:"center"},legend:{orient:"vertical",x:"left",data:v},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:x}]})}),window.onresize=this.chartColumn.resize,window.onresize=this.chartBar.resize,window.onresize=this.chartLine.resize,window.onresize=this.chartPie.resize}}}).call(e,i(75))}});