(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f722a74"],{"278b":function(e,t,a){},"4ec3":function(e,t,a){"use strict";a("c1f4"),a("c354");var r=a("4324"),n=a("1b6a"),o=a("82ae"),i=a.n(o);i.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",i.a.defaults.baseURL="http://www.kangliuyong.com:10002",i.a.defaults.withCredentials=!0;var s=function(){function e(){Object(r["a"])(this,e),this.appkey="U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA="}return Object(n["a"])(e,[{key:"register",value:function(e){var t=e.nickName,a=e.password,r=e.phone;return i()({method:"POST",url:"/register",data:{appkey:this.appkey,nickName:t,password:a,phone:r},transformRequest:this.transformRequest})}},{key:"login",value:function(e){var t=e.phone,a=e.password;return i()({method:"POST",url:"/login",data:{appkey:this.appkey,password:a,phone:t},transformRequest:this.transformRequest})}},{key:"getBanner",value:function(){return i.a.get("/banner",{params:{appkey:this.appkey}})}},{key:"getType",value:function(){return i.a.get("/type",{params:{appkey:this.appkey}})}},{key:"getTypeProducts",value:function(e){var t=e.key,a=e.value;return i.a.get("/typeProducts",{params:{appkey:this.appkey,key:t,value:a}})}},{key:"getProductDetail",value:function(e){var t=e.pid;return i.a.get("/productDetail",{params:{appkey:this.appkey,pid:t}})}},{key:"like",value:function(e){var t=e.pid,a=e.smallImg,r=e.name,n=e.price,o=e.tokenString;return i()({method:"POST",url:"/like",data:{appkey:this.appkey,pid:t,smallImg:a,name:r,price:n,tokenString:o},transformRequest:this.transformRequest})}},{key:"notlike",value:function(e){var t=e.pid,a=e.tokenString;return i()({method:"POST",url:"/notlike",data:{appkey:this.appkey,pid:t,tokenString:a},transformRequest:this.transformRequest})}},{key:"findlike",value:function(e){var t=e.pid,a=e.tokenString;return i.a.get("/findlike",{params:{appkey:this.appkey,pid:t,tokenString:a}})}},{key:"findAllLike",value:function(e){var t=e.tokenString;return i.a.get("/findAllLike",{params:{appkey:this.appkey,tokenString:t}})}},{key:"addShopcart",value:function(e){var t=e.pid,a=e.count,r=e.rule,n=e.tokenString;return i()({method:"POST",url:"/addShopcart",data:{appkey:this.appkey,count:a,pid:t,rule:r,tokenString:n},transformRequest:this.transformRequest})}},{key:"shopcartCount",value:function(e){var t=e.tokenString;return i.a.get("/shopcartCount",{params:{appkey:this.appkey,tokenString:t}})}},{key:"findAllShopcart",value:function(e){var t=e.tokenString;return i.a.get("/findAllShopcart",{params:{appkey:this.appkey,tokenString:t}})}},{key:"modifyShopcartCount",value:function(e){var t=e.tokenString,a=e.sid,r=e.count;return i()({method:"POST",url:"/modifyShopcartCount",data:{appkey:this.appkey,tokenString:t,sid:a,count:r},transformRequest:this.transformRequest})}},{key:"removeShopcart",value:function(e){var t=e.tokenString,a=e.sids;return i()({method:"POST",url:"/removeShopcart",data:{appkey:this.appkey,tokenString:t,sids:a},transformRequest:this.transformRequest})}},{key:"deleteShopcart",value:function(e){var t=e.tokenString,a=e.sids;return i()({method:"POST",url:"/deleteShopcart",data:{appkey:this.appkey,tokenString:t,sids:a},transformRequest:this.transformRequest})}},{key:"shopcartRows",value:function(e){var t=e.tokenString;return i.a.get("/shopcartRows",{params:{appkey:this.appkey,tokenString:t}})}},{key:"addAddress",value:function(e){var t=e.tokenString,a=e.name,r=e.tel,n=e.province,o=e.city,s=e.county,u=e.addressDetail,p=e.areaCode,d=e.postalCode,l=e.isDefault;return i()({method:"POST",url:"/addAddress",data:{appkey:this.appkey,tokenString:t,name:a,tel:r,province:n,city:o,county:s,addressDetail:u,areaCode:p,postalCode:d,isDefault:l},transformRequest:this.transformRequest})}},{key:"deleteAddress",value:function(e){var t=e.tokenString,a=e.aid;return i()({method:"POST",url:"/deleteAddress",data:{appkey:this.appkey,tokenString:t,aid:a},transformRequest:this.transformRequest})}},{key:"findAddress",value:function(e){var t=e.tokenString;return i.a.get("/findAddress",{params:{appkey:this.appkey,tokenString:t}})}},{key:"editAddress",value:function(e){var t=e.tokenString,a=e.aid,r=e.name,n=e.tel,o=e.province,s=e.city,u=e.county,p=e.addressDetail,d=e.areaCode,l=e.postalCode,k=e.isDefault;return i()({method:"POST",url:"/editAddress",data:{appkey:this.appkey,tokenString:t,aid:a,name:r,tel:n,province:o,city:s,county:u,addressDetail:p,areaCode:d,postalCode:l,isDefault:k},transformRequest:this.transformRequest})}},{key:"findAddressByAid",value:function(e){var t=e.tokenString,a=e.aid;return i.a.get("/findAddressByAid",{params:{appkey:this.appkey,tokenString:t,aid:a}})}},{key:"commitShopcart",value:function(e){var t=e.tokenString,a=e.sids;return i.a.get("/commitShopcart",{params:{appkey:this.appkey,tokenString:t,sids:a}})}},{key:"pay",value:function(e){var t=e.tokenString,a=e.sids,r=e.phone,n=e.address,o=e.receiver;return i()({method:"POST",url:"/pay",data:{appkey:this.appkey,tokenString:t,sids:a,phone:r,address:n,receiver:o},transformRequest:this.transformRequest})}},{key:"findOrder",value:function(e){var t=e.tokenString,a=e.status;return i.a.get("/findOrder",{params:{appkey:this.appkey,tokenString:t,status:a}})}},{key:"receive",value:function(e){var t=e.tokenString,a=e.oid;return i()({method:"POST",url:"/receive",data:{appkey:this.appkey,tokenString:t,oid:a},transformRequest:this.transformRequest})}},{key:"removeOrder",value:function(e){var t=e.tokenString,a=e.oid;return i()({method:"POST",url:"/removeOrder",data:{appkey:this.appkey,tokenString:t,oid:a},transformRequest:this.transformRequest})}},{key:"findMy",value:function(e){var t=e.tokenString;return i.a.get("/findMy",{params:{appkey:this.appkey,tokenString:t}})}},{key:"findAccountInfo",value:function(e){var t=e.tokenString;return i.a.get("/findAccountInfo",{params:{appkey:this.appkey,tokenString:t}})}},{key:"updateNickName",value:function(e){var t=e.tokenString,a=e.nickName;return i()({method:"POST",url:"/updateNickName",data:{appkey:this.appkey,tokenString:t,nickName:a},transformRequest:this.transformRequest})}},{key:"updateDesc",value:function(e){var t=e.tokenString,a=e.desc;return i()({method:"POST",url:"/updateDesc",data:{appkey:this.appkey,tokenString:t,desc:a},transformRequest:this.transformRequest})}},{key:"updatePassword",value:function(e){var t=e.tokenString,a=e.password,r=e.oldPassword;return i()({method:"POST",url:"/updatePassword",data:{appkey:this.appkey,tokenString:t,password:a,oldPassword:r},transformRequest:this.transformRequest})}},{key:"logout",value:function(e){var t=e.tokenString;return i()({method:"POST",url:"/logout",data:{appkey:this.appkey,tokenString:t},transformRequest:this.transformRequest})}},{key:"destroyAccount",value:function(e){var t=e.tokenString;return i()({method:"POST",url:"/destroyAccount",data:{appkey:this.appkey,tokenString:t},transformRequest:this.transformRequest})}},{key:"updateAvatar",value:function(e){var t=e.tokenString,a=e.imgType,r=e.serverBase64Img;return i()({method:"POST",url:"/updateAvatar",data:{appkey:this.appkey,tokenString:t,imgType:a,serverBase64Img:r},transformRequest:this.transformRequest})}},{key:"updateUserBg",value:function(e){var t=e.tokenString,a=e.imgType,r=e.serverBase64Img;return i()({method:"POST",url:"/updateUserBg",data:{appkey:this.appkey,tokenString:t,imgType:a,serverBase64Img:r},transformRequest:this.transformRequest})}},{key:"emailValidCode",value:function(e){var t=e.email;return i()({method:"POST",url:"/emailValidCode",data:{appkey:this.appkey,email:t},transformRequest:this.transformRequest})}},{key:"retrievePassword",value:function(e){var t=e.password,a=e.phone;return i()({method:"POST",url:"/retrievePassword",data:{appkey:this.appkey,password:t,phone:a},transformRequest:this.transformRequest})}},{key:"checkValidCode",value:function(e){var t=e.validCode;return i()({method:"POST",url:"/checkValidCode",data:{appkey:this.appkey,validCode:t},transformRequest:this.transformRequest})}},{key:"transformRequest",value:function(e){var t="";for(var a in e)t+=a+"="+e[a]+"&";return t.slice(0,-1)}}]),e}();t["a"]=new s},"88f3":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"forget"},[a("van-nav-bar",{attrs:{title:"忘记密码","left-text":"返回","left-arrow":""},on:{"click-left":e.onClickLeft}}),a("van-cell",{attrs:{title:"邮箱验证",size:"large","is-link":""},on:{click:e.showPopup}}),a("van-popup",{style:{height:"40%"},attrs:{position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("van-form",{on:{submit:e.saveEmail}},[a("van-field",{attrs:{type:"email",name:"邮箱",label:"邮箱",placeholder:"邮箱",autocomplete:"false",rules:[{pattern:e.emailPattern,required:!0,message:"请填写正确邮箱号"}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("van-field",{attrs:{center:"",clearable:"",label:"邮箱验证码",placeholder:"请输入邮箱验证码",rules:[{pattern:e.ValidCodePattern,required:!0,message:"验证码格式错误"}]},scopedSlots:e._u([{key:"button",fn:function(){return[a("van-button",{attrs:{disabled:e.isSend,"native-type":"button",type:"primary",size:"small",color:"#7f5839"},on:{click:e.sendCode}},[e._v(e._s(e.text))])]},proxy:!0}]),model:{value:e.emailCode,callback:function(t){e.emailCode=t},expression:"emailCode"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info",color:"#7f5839","native-type":"submit"}},[e._v("下一步")])],1)],1)],1)],1)},n=[],o=a("4ec3"),i=a("8e17"),s={data:function(){return{email:"",show:!1,emailPattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,emailCode:"",isSend:!1,ValidCodePattern:/^[0-9]{6}$/,text:"发送验证码"}},methods:{onClickLeft:function(){this.$router.go(-1)},showPopup:function(){this.show=!0},sendCode:function(){var e=this;if(this.emailPattern.test(this.email)){var t=60;this.isSend=!0,this.text="".concat(t,"s后重新发送");var a=window.setInterval((function(){if(0==t)return e.text="发送验证码",e.isSend=!1,void window.clearInterval(a);e.text="".concat(--t,"s后重新发送")}),1e3);i["a"].showLoading(this,"正在发送中"),o["a"].emailValidCode({email:this.email}).then((function(t){e.$toast(t.data.msg)}))}else this.$toast("请先输入正确的邮箱")},saveEmail:function(){var e=this;i["a"].showLoading(this,"正在验证"),o["a"].checkValidCode({validCode:this.emailCode}).then((function(t){"K001"==t.data.code&&(e.$toast(t.data.msg),e.$router.push({name:"Retrieve"})),e.$toast(t.data.msg)}))}}},u=s,p=(a("b577"),a("e90a")),d=Object(p["a"])(u,r,n,!1,null,"e0ae171e",null);t["default"]=d.exports},"8e17":function(e,t,a){"use strict";a("c1f4");var r=a("4324"),n=a("1b6a"),o=function(){function e(){Object(r["a"])(this,e)}return Object(n["a"])(e,[{key:"getCookies",value:function(e){for(var t="",a=0;a<3;a++){var r=e.$cookies.get("m"+a);if(null==r)return!1;t+=r+"."}return t.slice(0,-1)}},{key:"showLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"加载中";e.$toast.loading({duration:0,message:t,forbidClick:!0})}},{key:"clearLoading",value:function(e){e.$toast.clear()}},{key:"removeCookies",value:function(e){for(var t=new Date("1997-01-01"),a=0;a<3;a++)e.$cookies.set("m"+a,"",t)}},{key:"localSet",value:function(e,t){window.localStorage.setItem(e,JSON.stringify(t))}},{key:"localGet",value:function(e){return JSON.parse(window.localStorage.getItem(e))}}]),e}();t["a"]=new o},b577:function(e,t,a){"use strict";var r=a("278b"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-2f722a74.cfc7de17.js.map