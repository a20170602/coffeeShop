(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8f032f2"],{"0b99":function(e,t,a){},"4ec3":function(e,t,a){"use strict";a("c1f4"),a("c354");var r=a("4324"),n=a("1b6a"),s=a("82ae"),i=a.n(s);i.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",i.a.defaults.baseURL="http://www.kangliuyong.com:10002",i.a.defaults.withCredentials=!0;var o=function(){function e(){Object(r["a"])(this,e),this.appkey="U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA="}return Object(n["a"])(e,[{key:"register",value:function(e){var t=e.nickName,a=e.password,r=e.phone;return i()({method:"POST",url:"/register",data:{appkey:this.appkey,nickName:t,password:a,phone:r},transformRequest:this.transformRequest})}},{key:"login",value:function(e){var t=e.phone,a=e.password;return i()({method:"POST",url:"/login",data:{appkey:this.appkey,password:a,phone:t},transformRequest:this.transformRequest})}},{key:"getBanner",value:function(){return i.a.get("/banner",{params:{appkey:this.appkey}})}},{key:"getType",value:function(){return i.a.get("/type",{params:{appkey:this.appkey}})}},{key:"getTypeProducts",value:function(e){var t=e.key,a=e.value;return i.a.get("/typeProducts",{params:{appkey:this.appkey,key:t,value:a}})}},{key:"getProductDetail",value:function(e){var t=e.pid;return i.a.get("/productDetail",{params:{appkey:this.appkey,pid:t}})}},{key:"like",value:function(e){var t=e.pid,a=e.smallImg,r=e.name,n=e.price,s=e.tokenString;return i()({method:"POST",url:"/like",data:{appkey:this.appkey,pid:t,smallImg:a,name:r,price:n,tokenString:s},transformRequest:this.transformRequest})}},{key:"notlike",value:function(e){var t=e.pid,a=e.tokenString;return i()({method:"POST",url:"/notlike",data:{appkey:this.appkey,pid:t,tokenString:a},transformRequest:this.transformRequest})}},{key:"findlike",value:function(e){var t=e.pid,a=e.tokenString;return i.a.get("/findlike",{params:{appkey:this.appkey,pid:t,tokenString:a}})}},{key:"findAllLike",value:function(e){var t=e.tokenString;return i.a.get("/findAllLike",{params:{appkey:this.appkey,tokenString:t}})}},{key:"addShopcart",value:function(e){var t=e.pid,a=e.count,r=e.rule,n=e.tokenString;return i()({method:"POST",url:"/addShopcart",data:{appkey:this.appkey,count:a,pid:t,rule:r,tokenString:n},transformRequest:this.transformRequest})}},{key:"shopcartCount",value:function(e){var t=e.tokenString;return i.a.get("/shopcartCount",{params:{appkey:this.appkey,tokenString:t}})}},{key:"findAllShopcart",value:function(e){var t=e.tokenString;return i.a.get("/findAllShopcart",{params:{appkey:this.appkey,tokenString:t}})}},{key:"modifyShopcartCount",value:function(e){var t=e.tokenString,a=e.sid,r=e.count;return i()({method:"POST",url:"/modifyShopcartCount",data:{appkey:this.appkey,tokenString:t,sid:a,count:r},transformRequest:this.transformRequest})}},{key:"removeShopcart",value:function(e){var t=e.tokenString,a=e.sids;return i()({method:"POST",url:"/removeShopcart",data:{appkey:this.appkey,tokenString:t,sids:a},transformRequest:this.transformRequest})}},{key:"deleteShopcart",value:function(e){var t=e.tokenString,a=e.sids;return i()({method:"POST",url:"/deleteShopcart",data:{appkey:this.appkey,tokenString:t,sids:a},transformRequest:this.transformRequest})}},{key:"shopcartRows",value:function(e){var t=e.tokenString;return i.a.get("/shopcartRows",{params:{appkey:this.appkey,tokenString:t}})}},{key:"addAddress",value:function(e){var t=e.tokenString,a=e.name,r=e.tel,n=e.province,s=e.city,o=e.county,u=e.addressDetail,p=e.areaCode,d=e.postalCode,l=e.isDefault;return i()({method:"POST",url:"/addAddress",data:{appkey:this.appkey,tokenString:t,name:a,tel:r,province:n,city:s,county:o,addressDetail:u,areaCode:p,postalCode:d,isDefault:l},transformRequest:this.transformRequest})}},{key:"deleteAddress",value:function(e){var t=e.tokenString,a=e.aid;return i()({method:"POST",url:"/deleteAddress",data:{appkey:this.appkey,tokenString:t,aid:a},transformRequest:this.transformRequest})}},{key:"findAddress",value:function(e){var t=e.tokenString;return i.a.get("/findAddress",{params:{appkey:this.appkey,tokenString:t}})}},{key:"editAddress",value:function(e){var t=e.tokenString,a=e.aid,r=e.name,n=e.tel,s=e.province,o=e.city,u=e.county,p=e.addressDetail,d=e.areaCode,l=e.postalCode,c=e.isDefault;return i()({method:"POST",url:"/editAddress",data:{appkey:this.appkey,tokenString:t,aid:a,name:r,tel:n,province:s,city:o,county:u,addressDetail:p,areaCode:d,postalCode:l,isDefault:c},transformRequest:this.transformRequest})}},{key:"findAddressByAid",value:function(e){var t=e.tokenString,a=e.aid;return i.a.get("/findAddressByAid",{params:{appkey:this.appkey,tokenString:t,aid:a}})}},{key:"commitShopcart",value:function(e){var t=e.tokenString,a=e.sids;return i.a.get("/commitShopcart",{params:{appkey:this.appkey,tokenString:t,sids:a}})}},{key:"pay",value:function(e){var t=e.tokenString,a=e.sids,r=e.phone,n=e.address,s=e.receiver;return i()({method:"POST",url:"/pay",data:{appkey:this.appkey,tokenString:t,sids:a,phone:r,address:n,receiver:s},transformRequest:this.transformRequest})}},{key:"findOrder",value:function(e){var t=e.tokenString,a=e.status;return i.a.get("/findOrder",{params:{appkey:this.appkey,tokenString:t,status:a}})}},{key:"receive",value:function(e){var t=e.tokenString,a=e.oid;return i()({method:"POST",url:"/receive",data:{appkey:this.appkey,tokenString:t,oid:a},transformRequest:this.transformRequest})}},{key:"removeOrder",value:function(e){var t=e.tokenString,a=e.oid;return i()({method:"POST",url:"/removeOrder",data:{appkey:this.appkey,tokenString:t,oid:a},transformRequest:this.transformRequest})}},{key:"findMy",value:function(e){var t=e.tokenString;return i.a.get("/findMy",{params:{appkey:this.appkey,tokenString:t}})}},{key:"findAccountInfo",value:function(e){var t=e.tokenString;return i.a.get("/findAccountInfo",{params:{appkey:this.appkey,tokenString:t}})}},{key:"updateNickName",value:function(e){var t=e.tokenString,a=e.nickName;return i()({method:"POST",url:"/updateNickName",data:{appkey:this.appkey,tokenString:t,nickName:a},transformRequest:this.transformRequest})}},{key:"updateDesc",value:function(e){var t=e.tokenString,a=e.desc;return i()({method:"POST",url:"/updateDesc",data:{appkey:this.appkey,tokenString:t,desc:a},transformRequest:this.transformRequest})}},{key:"updatePassword",value:function(e){var t=e.tokenString,a=e.password,r=e.oldPassword;return i()({method:"POST",url:"/updatePassword",data:{appkey:this.appkey,tokenString:t,password:a,oldPassword:r},transformRequest:this.transformRequest})}},{key:"logout",value:function(e){var t=e.tokenString;return i()({method:"POST",url:"/logout",data:{appkey:this.appkey,tokenString:t},transformRequest:this.transformRequest})}},{key:"destroyAccount",value:function(e){var t=e.tokenString;return i()({method:"POST",url:"/destroyAccount",data:{appkey:this.appkey,tokenString:t},transformRequest:this.transformRequest})}},{key:"updateAvatar",value:function(e){var t=e.tokenString,a=e.imgType,r=e.serverBase64Img;return i()({method:"POST",url:"/updateAvatar",data:{appkey:this.appkey,tokenString:t,imgType:a,serverBase64Img:r},transformRequest:this.transformRequest})}},{key:"updateUserBg",value:function(e){var t=e.tokenString,a=e.imgType,r=e.serverBase64Img;return i()({method:"POST",url:"/updateUserBg",data:{appkey:this.appkey,tokenString:t,imgType:a,serverBase64Img:r},transformRequest:this.transformRequest})}},{key:"emailValidCode",value:function(e){var t=e.email;return i()({method:"POST",url:"/emailValidCode",data:{appkey:this.appkey,email:t},transformRequest:this.transformRequest})}},{key:"retrievePassword",value:function(e){var t=e.password,a=e.phone;return i()({method:"POST",url:"/retrievePassword",data:{appkey:this.appkey,password:t,phone:a},transformRequest:this.transformRequest})}},{key:"checkValidCode",value:function(e){var t=e.validCode;return i()({method:"POST",url:"/checkValidCode",data:{appkey:this.appkey,validCode:t},transformRequest:this.transformRequest})}},{key:"transformRequest",value:function(e){var t="";for(var a in e)t+=a+"="+e[a]+"&";return t.slice(0,-1)}}]),e}();t["a"]=new o},"837b":function(e,t,a){"use strict";var r=a("0b99"),n=a.n(r);n.a},"8e17":function(e,t,a){"use strict";a("c1f4");var r=a("4324"),n=a("1b6a"),s=function(){function e(){Object(r["a"])(this,e)}return Object(n["a"])(e,[{key:"getCookies",value:function(e){for(var t="",a=0;a<3;a++){var r=e.$cookies.get("m"+a);if(null==r)return!1;t+=r+"."}return t.slice(0,-1)}},{key:"showLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"加载中";e.$toast.loading({duration:0,message:t,forbidClick:!0})}},{key:"clearLoading",value:function(e){e.$toast.clear()}},{key:"removeCookies",value:function(e){for(var t=new Date("1997-01-01"),a=0;a<3;a++)e.$cookies.set("m"+a,"",t)}},{key:"localSet",value:function(e,t){window.localStorage.setItem(e,JSON.stringify(t))}},{key:"localGet",value:function(e){return JSON.parse(window.localStorage.getItem(e))}}]),e}();t["a"]=new s},bb51:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"top"},[a("div",{staticClass:"top-bg"},[a("div",{staticClass:"top-content"},[a("p",{staticClass:"title"},[e._v(e._s(e._f("makeNoon")(new Date))+"好,"+e._s(e.username?e.username:"xxx"))]),a("p",{staticClass:"content"},[e._v("现在是喝咖啡的好时间！")])])]),a("div",{staticClass:"top-banner"},[a("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},e._l(e.banners,(function(e,t){return a("van-swipe-item",{key:t},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.bannerImg,expression:"item.bannerImg",arg:"background-image"}],staticClass:"banner",style:{backgroundImage:"url("+e.bannerImg+")"}})])})),1)],1)]),a("div",{staticClass:"middle"},[a("div",{staticClass:"middle-list"},e._l(e.classify,(function(t,r){return a("div",{key:r,staticClass:"middle-item"},[a("div",{staticClass:"item-img",on:{click:function(a){return e.toMenu(t)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.pic,expression:"item.pic"}],attrs:{src:t.pic,alt:""}})]),a("div",{staticClass:"item-title"},[e._v(e._s(t.typeDesc))])])})),0)]),e._m(0),a("div",{staticClass:"recomend-box"},[a("div",{staticClass:"recomend-list"},e._l(e.hots,(function(t,r){return a("div",{key:r,staticClass:"recomend-item",on:{click:function(a){return e.toDetail(t)}}},[a("div",{staticClass:"recomend-img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.smallImg,expression:"item.smallImg"}],attrs:{src:t.smallImg,alt:""}})]),a("div",{staticClass:"recomend-t"},[e._v(e._s(t.name))])])})),0)])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"recomend-title"},[a("div",[e._v("为您推荐")])])}],s=a("4ec3"),i=a("8e17"),o={data:function(){return{username:""}},created:function(){var e=this;this.$toast.loading({duration:0,message:"加载中...",forbidClick:!0});var t=this;if(this.axios.all([s["a"].getBanner(),s["a"].getType(),s["a"].getTypeProducts({key:"isHot",value:1})]).then(this.axios.spread((function(e,a,r){var n=e.data.result,s=a.data.result,i=r.data.result;t.$store.commit("homeModule/initAll",{banner:n,classify:s,hots:i}),t.$toast.clear()}))),this.isLogin){var a=i["a"].getCookies(this);s["a"].findMy({tokenString:a}).then((function(t){e.username=t.data.result[0].nickName}))}},computed:{isLogin:function(){return this.$store.state.isLogin},banners:function(){return this.$store.state.homeModule.banner},classify:function(){return this.$store.state.homeModule.classify},hots:function(){return this.$store.state.homeModule.hots}},methods:{toMenu:function(e){this.$router.push({name:"Menu",query:{type:e.type}})},toDetail:function(e){this.$router.push({name:"Detail",params:{pid:e.pid}})}}},u=o,p=(a("837b"),a("e90a")),d=Object(p["a"])(u,r,n,!1,null,"33ed9591",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-c8f032f2.efbd164a.js.map