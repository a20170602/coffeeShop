(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-083f1c3c"],{a6dc:function(t,e,a){"use strict";var s=a("bb30"),d=a.n(s);d.a},a821:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address"},[a("van-nav-bar",{attrs:{title:"地址管理","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),0==t.list.length?a("div",{staticClass:"tig"},[t._v("还么有地址，快去添加吧！")]):t._e(),a("van-address-list",{attrs:{list:t.list,"default-tag-text":"默认"},on:{add:t.onAdd,edit:t.onEdit},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)},d=[],n=(a("af82"),a("9a14"),a("c451")),i=a("8876"),c=a("8e17"),o=a("4ec3"),r={data:function(){return{chosenAddressId:"0"}},created:function(){var t=this,e=c["a"].getCookies(this);c["a"].showLoading(this),o["a"].findAddress({tokenString:e}).then((function(e){if(2e4==e.data.code){t.$toast(e.data.msg);var a=e.data.result;a.forEach((function(t){t.address=t.province+t.city+t.county+t.addressDetail})),t.changeData({key:"list",value:a})}}))},mounted:function(){},computed:Object(n["a"])({},Object(i["d"])("addressModule",["list"])),methods:Object(n["a"])({},Object(i["c"])("addressModule",["changeData"]),{onClickLeft:function(){this.$router.go(-1)},onAdd:function(){this.$toast("新增地址"),this.$router.push({name:"Editaddress"})},onEdit:function(t){this.$toast("编辑地址"),this.$router.push({name:"Editaddress",params:{aid:t.aid}})}})},u=r,l=(a("a6dc"),a("e90a")),f=Object(l["a"])(u,s,d,!1,null,"f4ce94a4",null);e["default"]=f.exports},bb30:function(t,e,a){}}]);
//# sourceMappingURL=chunk-083f1c3c.7ae58df5.js.map