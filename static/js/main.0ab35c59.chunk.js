(this["webpackJsonplogictron-test"]=this["webpackJsonplogictron-test"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(32),s=c.n(i),j=(c(41),c(16)),a=c(17),l=c(36),o=c(35),d=c(3),b=c(4),u=c(80),x=(c(42),c(0)),O=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{id:"red-box-2"})})},h=(c(44),function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{id:"response-box"})})}),f=(c(45),function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{id:"bg-box"})})}),m=(c(46),function(e){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{id:"blue-circle"})})}),v=(c(47),function(e){return Object(x.jsx)("div",{children:Object(x.jsx)("button",{id:"gradient-btn",children:"gradient-btn"})})}),p=(c(48),function(e){return Object(x.jsx)("div",{children:Object(x.jsx)("button",{id:"fade-btn",children:"fade-btn"})})}),g=(c(49),function(e){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{id:"red-box"})})}),y=(c(50),function(e){return Object(x.jsxs)("div",{id:"main-box",children:[Object(x.jsx)("div",{id:"main-div-start",children:Object(x.jsx)("div",{id:"green-box"})}),Object(x.jsx)("div",{id:"main-div-center",children:Object(x.jsx)("div",{id:"red-box-9"})}),Object(x.jsx)("div",{id:"main-div-end",children:Object(x.jsx)("div",{id:"blue-box"})})]})}),k=(c(51),function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{id:"parent",children:Object(x.jsx)("div",{id:"child",children:"Hello World"})})})}),C=function(e){var t=Object(b.f)().id;return Object(x.jsxs)(u.a,{children:["\u0e41\u0e1a\u0e1a\u0e17\u0e14\u0e2a\u0e2d\u0e1a Css \u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 ",t,Object(x.jsx)("div",{className:"main-layout",children:function(){switch(parseInt(t)){case 2:return Object(x.jsx)(O,{});case 3:return Object(x.jsx)(h,{});case 4:return Object(x.jsx)(f,{});case 5:return Object(x.jsx)(m,{});case 6:return Object(x.jsx)(v,{});case 7:return Object(x.jsx)(p,{});case 8:return Object(x.jsx)(g,{});case 9:return Object(x.jsx)(y,{});case 10:return Object(x.jsx)(k,{});default:return null}}()})]})},E=c(11),F=c(82),I=function(e){var t=Object(n.useState)(""),c=Object(E.a)(t,2),r=c[0],i=c[1],s=function(e){for(var t="",c=0;c<e.length;c++)t+=e.charAt(e.length-(c+1));return t};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)}}),Object(x.jsx)(F.a,{onClick:function(e){return function(e){e.preventDefault(),alert("text reverse is = "+s(r))}(e)},children:"Reverse"})]})},A=c(81),w=c.p+"static/media/test.6cc88d4a.mp4",J=function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(A.a,{children:[Object(x.jsx)(F.a,{onClick:function(e){return function(e){e.preventDefault(),document.getElementById("video").play()}(e)},children:"Play"}),Object(x.jsx)(F.a,{onClick:function(e){return function(e){e.preventDefault(),document.getElementById("video").pause()}(e)},children:"Pause"})]}),Object(x.jsx)(A.a,{children:Object(x.jsx)("video",{id:"video",width:"500",height:"360",controls:!0,children:Object(x.jsx)("source",{src:w,type:"video/mp4"})})})]})},B=c(14),L=c.n(B),T=c(18),S=c(34),P=c.n(S).a.create({baseURL:"https://my.private-server.com",timeout:3e4,headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Methods":"DELETE, POST, GET, PUT, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"}});P.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),P.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var R=P,D=function(e){Object(n.useEffect)((function(){t()}),[]);var t=function(){var e=Object(T.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=R.get("/users.json"),console.log("res",t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:"\u0e14\u0e39\u0e42\u0e04\u0e49\u0e14\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48\u0e44\u0e1f\u0e25\u0e4c JsArticle 12"})},H=function(e){var t=function(){var e=Object(T.a)(L.a.mark((function e(t){var c,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c={name:"John",lastname:"Adam",age:28},n=R.post("/save",c),console.log("res",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:["\u0e14\u0e39\u0e42\u0e04\u0e49\u0e14\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48\u0e44\u0e1f\u0e25\u0e4c JsArticle 13",Object(x.jsx)(A.a,{children:Object(x.jsx)(F.a,{onClick:function(e){return t(e)},children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})},_=function(e){var t=[1,9,9,3,2,1,3,6],c=[];return Object(x.jsxs)(x.Fragment,{children:[void t.forEach((function(e,t){c.push(e*(t+1))})),"\u0e14\u0e39\u0e42\u0e04\u0e49\u0e14\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48\u0e44\u0e1f\u0e25\u0e4c JsArticle 14",Object(x.jsxs)(A.a,{children:["old arr :",t.join(",")]}),Object(x.jsxs)(A.a,{children:["new arr : ",c.join(",")]})]})},M=function(e){var t=["adam","wanda","john","sean","danny","jean"],c=["adam","sean","jean"];return Object(x.jsxs)(x.Fragment,{children:["\u0e14\u0e39\u0e42\u0e04\u0e49\u0e14\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48\u0e44\u0e1f\u0e25\u0e4c JsArticle 15",Object(x.jsxs)(A.a,{children:["old arr :",t.join(",")]}),Object(x.jsxs)(A.a,{children:["filter arr :",t.filter((function(e){return c.includes(e)})).join(",")]})]})},N=(c(76),function(e){return Object(n.useEffect)((function(){var e=document.getElementById("article-16-red-box");e.classList.add("box-move"),e.classList.add("move-bottom")}),[]),Object(x.jsxs)(x.Fragment,{children:["\u0e14\u0e39\u0e42\u0e04\u0e49\u0e14\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48\u0e44\u0e1f\u0e25\u0e4c JsArticle 16",Object(x.jsx)("div",{style:{position:"relative"},children:Object(x.jsx)("div",{id:"article-16-red-box"})})]})}),U=function(e){return Object(n.useEffect)((function(){var e=document.getElementById("body"),t=document.createElement("div");t.style.border="1px solid red",t.style.height="150px",t.style.padding="10px",t.id="parent";var c=document.createElement("div");c.className="child",c.style.border="1px solid blue",c.style.backgroundColor="green",c.style.height="75px",c.style.padding="10px";var n=document.createElement("span");n.id="inner-message",n.innerText="Hi..",c.appendChild(n),t.appendChild(c),e.appendChild(t)}),[]),Object(x.jsxs)(x.Fragment,{children:["\u0e14\u0e39\u0e42\u0e04\u0e49\u0e14\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48\u0e44\u0e1f\u0e25\u0e4c JsArticle 17",Object(x.jsx)("div",{id:"body"})]})},q=function(e){return Object(n.useEffect)((function(){document.getElementById("box").style.backgroundColor="red",document.getElementById("box").style.width="100px",document.getElementById("box").style.height="100px",document.getElementById("box").style.opacity="0.7"}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{id:"box"})})},W=function(e){var t=Object(n.useState)(""),c=Object(E.a)(t,2),r=c[0],i=c[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(A.a,{children:Object(x.jsx)("input",{placeholder:"input text here...",onChange:function(e){i(e.target.value)}})}),Object(x.jsx)(A.a,{children:Object(x.jsxs)("p",{children:["my text ",r]})})]})},Y=function(e){var t=Object(n.useState)(!0),c=Object(E.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)("Rose`"),j=Object(E.a)(s,2),a=j[0],l=j[1],o=function(e){l(e.target.value)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(A.a,{children:Object(x.jsx)("input",{type:"checkbox",onChange:function(e){i(e.target.checked)}})}),Object(x.jsx)(A.a,{children:Object(x.jsxs)("p",{children:["checked : ","".concat(r)]})}),Object(x.jsx)("hr",{}),Object(x.jsxs)(A.a,{children:[Object(x.jsx)("input",{type:"radio",id:"male",name:"blackpink",value:"Jennie",onClick:o}),Object(x.jsx)("label",{htmlFor:"male",children:"Jennie"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"radio",id:"female",name:"blackpink",value:"Rose`",onClick:o}),Object(x.jsx)("label",{htmlFor:"female",children:"Rose"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"radio",id:"other",name:"blackpink",value:"Lisa",onClick:o}),Object(x.jsx)("label",{htmlFor:"other",children:"Lisa"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"radio",id:"other",name:"blackpink",value:"Jisoo",onClick:o}),Object(x.jsx)("label",{htmlFor:"other",children:"Jisoo"}),Object(x.jsx)("br",{})]}),Object(x.jsx)(A.a,{children:Object(x.jsxs)("p",{children:["radio selected : ","".concat(a)]})})]})},z=function(e){var t=Object(n.useState)("Rose`"),c=Object(E.a)(t,2),r=c[0],i=c[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(A.a,{children:Object(x.jsxs)("select",{name:"blackpink",onChange:function(e){i(e.target.value)},value:r,children:[Object(x.jsx)("option",{value:"Jennie",children:"Jennie"}),Object(x.jsx)("option",{value:"Rose`",children:"Rose"}),Object(x.jsx)("option",{value:"Lisa",children:"Lisa"}),Object(x.jsx)("option",{value:"Jisoo",children:"Jisoo"})]})}),Object(x.jsx)(A.a,{children:Object(x.jsxs)("p",{children:["you selected : ","".concat(r)]})})]})},G=function(){function e(){Object(j.a)(this,e)}return Object(a.a)(e,[{key:"price",set:function(e){this._price=e}},{key:"amount",set:function(e){this._amount=e}},{key:"discount",set:function(e){this._discount=e}},{key:"summary",get:function(){return this._amount*this._price-this._discount}}]),e}(),X=function(){var e=new G;return e.amount=100,e.price=50,e.discount=500,console.log("summary",e.summary),Object(x.jsxs)("div",{children:[Object(x.jsx)(A.a,{children:"\u0e14\u0e39\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48 JsArticle 6"}),e.summary]})},K=function(e){return Object(n.useEffect)((function(){var e=setInterval((function(){!function(){var e=(new Date).toLocaleTimeString();document.getElementById("clock").innerHTML=e}()}),1e3),t=setInterval((function(){document.getElementById("love-message").innerText="I Love You"}),8e3);return function(){clearInterval(t),clearInterval(e)}}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{id:"clock"}),Object(x.jsx)("div",{id:"love-message"})]})};var Q=function(e){var t=5e3;return Object(n.useEffect)((function(){var e=document.getElementById("like-message");t*=1.2;var c=setInterval((function(){null!==e&&(e.innerHTML+="<p>I Like You</p>")}),t);return function(){clearInterval(c)}})),Object(x.jsx)("div",{id:"like-message"})},V=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(F.a,{onClick:function(e){return function(e){e.preventDefault(),alert("Blackpink in your area ya !!!")}(e)},children:"Alert"})})},Z=function(e){var t=Object(b.f)().id;return Object(x.jsxs)(u.a,{children:["\u0e41\u0e1a\u0e1a\u0e17\u0e14\u0e2a\u0e2d\u0e1a Js \u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 ",t,Object(x.jsx)("div",{className:"main-layout",children:function(){switch(parseInt(t)){case 2:return Object(x.jsx)(q,{});case 3:return Object(x.jsx)(W,{});case 4:return Object(x.jsx)(Y,{});case 5:return Object(x.jsx)(z,{});case 6:return Object(x.jsx)(X,{});case 7:return Object(x.jsx)(K,{});case 8:return Object(x.jsx)(Q,{});case 9:return Object(x.jsx)(V,{});case 10:return Object(x.jsx)(I,{});case 11:return Object(x.jsx)(J,{});case 12:return Object(x.jsx)(D,{});case 13:return Object(x.jsx)(H,{});case 14:return Object(x.jsx)(_,{});case 15:return Object(x.jsx)(M,{});case 16:return Object(x.jsx)(N,{});case 17:return Object(x.jsx)(U,{});default:return null}}()})]})},$=function(e){return Object(x.jsxs)(u.a,{children:[Object(x.jsx)(A.a,{children:Object(x.jsx)("p",{children:"\u0e41\u0e1a\u0e1a\u0e17\u0e14\u0e2a\u0e2d\u0e1a css"})}),Object(x.jsx)(A.a,{children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 1 \u0e14\u0e39\u0e17\u0e35\u0e48\u0e44\u0e1f\u0e25\u0e4c index.html \u0e04\u0e23\u0e31\u0e1a"}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/css/article/2",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 2"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/css/article/3",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 3"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/css/article/4",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 4"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/css/article/5",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 5"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/css/article/6",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 6"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/css/article/7",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 7"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/css/article/8",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 8"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/css/article/9",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 9"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/css/article/10",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 10"})}),Object(x.jsx)("hr",{}),Object(x.jsx)(A.a,{children:Object(x.jsx)("p",{children:"\u0e41\u0e1a\u0e1a\u0e17\u0e14\u0e2a\u0e2d\u0e1a js"})}),Object(x.jsxs)(A.a,{children:["\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 1",Object(x.jsx)("p",{children:'document.getElementById("mylist")'})]}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/2",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 2"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/3",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 3"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/4",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 4"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/5",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 5"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/6",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 6"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/7",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 7"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/8",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 8"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/9",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 9"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/10",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 10"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/11",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 11"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/12",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 12"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/13",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 13"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/14",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 14"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/15",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 15"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/16",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 16"})}),Object(x.jsx)(A.a,{children:Object(x.jsx)(d.b,{to:"/js/article/17",children:"\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48 17"})})]})},ee=(c(77),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return Object(x.jsxs)(d.a,{basename:"/logictron-test",children:[Object(x.jsx)("ul",{children:Object(x.jsx)("li",{children:Object(x.jsx)(d.b,{to:"/",children:"Home"})})}),Object(x.jsx)("hr",{}),Object(x.jsxs)(b.c,{children:[Object(x.jsx)(b.a,{exact:!0,path:"/",children:Object(x.jsx)($,{})}),Object(x.jsx)(b.a,{path:"/css/article/:id",children:Object(x.jsx)(C,{})}),Object(x.jsx)(b.a,{path:"/js/article/:id",children:Object(x.jsx)(Z,{})})]})]})}}]),c}(n.Component)),te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};c(78);s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(ee,{})}),document.getElementById("root")),te()}},[[79,1,2]]]);
//# sourceMappingURL=main.0ab35c59.chunk.js.map