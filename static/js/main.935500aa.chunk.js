(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},38:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),r=s(14),a=s.n(r),o=s(9),l=s(12),u=(s(33),s(2)),i=(s(34),s(35),s(1)),j=function(){return Object(i.jsx)("div",{className:"NotFound",children:"This page is not found"})},b=s(5),h=s(16),d=localStorage.getItem("posts"),f=[];null!==d&&(f=JSON.parse(d));var O={users:[],posts:[],albums:[],chosenPosts:f,chosenAlbums:[]},m=Object(h.b)({name:"userInfo",initialState:O,reducers:{setUsersInfo:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{users:t.payload})},setPostsInfo:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{posts:t.payload})},setAlbumsInfo:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{albums:t.payload})},setChosenPosts:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{chosenPosts:t.payload})},setChosenAlbums:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{chosenAlbums:t.payload})}}}),p=function(e){return e.users},x=function(e){return e.posts},_=function(e){return e.chosenPosts},N=m.actions,I=N.setUsersInfo,U=N.setPostsInfo,y=N.setAlbumsInfo,v=N.setChosenPosts,P=(N.setChosenAlbums,m.reducer),w=(s(38),function(){var e=Object(o.c)(_),t=Object(u.f)(),s=Object(c.useCallback)((function(){t("/")}),[]);return Object(i.jsxs)("div",{className:"Posts",children:[Object(i.jsx)("button",{type:"button",title:"Return to the list of users",className:"Posts__returnUsers",onClick:s,children:"Return to the list of users"}),Object(i.jsx)("ul",{className:"Posts__list",children:e.map((function(e){return Object(i.jsxs)("li",{className:"Posts__item",children:[Object(i.jsx)("p",{className:"Posts__id",children:"ID - ".concat(e.id)}),Object(i.jsx)("p",{className:"Posts__title",children:e.title}),Object(i.jsx)("p",{className:"Posts__text",children:e.body})]},e.id)}))})]})}),g=s(11),k=s.n(g),T=s(17),A=s(7),S=function(){var e=Object(T.a)(k.a.mark((function e(t){var s,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://jsonplaceholder.typicode.com/").concat(t),{method:"GET"});case 2:return s=e.sent,e.next=5,s.json().catch((function(e){throw Error("".concat(e))}));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=(s(40),function(){var e=Object(o.c)(p),t=Object(o.c)(x),s=Object(u.f)(),n=Object(o.b)(),r=Object(c.useCallback)((function(e){var c=t.filter((function(t){return t.userId===e}));n(v(c)),localStorage.setItem("posts",JSON.stringify(c)),s("/".concat(e))}),[t]);return Object(i.jsx)(i.Fragment,{children:e.map((function(e){return Object(i.jsxs)("tr",{className:"UsersTable__row",children:[Object(i.jsx)("td",{className:"UsersTable__text",children:e.id}),Object(i.jsx)("td",{className:"UsersTable__text",children:e.name}),Object(i.jsx)("td",{className:"UsersTable__text",children:e.username}),Object(i.jsx)("td",{className:"UsersTable__text",children:Object(i.jsx)("button",{type:"button",title:"show the posts of the user",className:"UsersTable__posts-albums",onClick:function(){return r(e.id)},children:"posts"})}),Object(i.jsx)("td",{className:"UsersTable__text",children:Object(i.jsx)("button",{type:"button",title:"show the Albums of the user",className:"UsersTable__posts-albums",children:"albums"})})]},e.id)}))})}),E=(s(41),function(){var e=Object(c.useState)(""),t=Object(A.a)(e,2),s=t[0],n=t[1],r=Object(o.b)();return Object(c.useEffect)((function(){function e(){return(e=Object(T.a)(k.a.mark((function e(){var t,s,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S("users");case 3:return t=e.sent,e.next=6,S("posts");case 6:return s=e.sent,e.next=9,S("albums");case 9:c=e.sent,r(I(t)),r(U(s)),r(y(c)),n(""),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),n("Something went wrong. Reload the page, please.");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(i.jsxs)("div",{className:"UsersInfo",children:[Object(i.jsx)("p",{className:"UsersInfo__textError",children:s}),!s&&Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("table",{className:"UsersInfo__table",children:[Object(i.jsx)("caption",{className:"UsersInfo__title",children:"Information about users"}),Object(i.jsx)("thead",{className:"UsersInfo__head",children:Object(i.jsxs)("tr",{className:"UsersInfo__head--row",children:[Object(i.jsx)("th",{className:"UsersInfo__head--cell",children:"ID"}),Object(i.jsx)("th",{className:"UsersInfo__head--cell",children:"Name"}),Object(i.jsx)("th",{className:"UsersInfo__head--cell",children:"Surname"}),Object(i.jsx)("th",{className:"UsersInfo__head--cell",children:"Posts of the chosen user"}),Object(i.jsx)("th",{className:"UsersInfo__head--cell",children:"Albums of the chosen user"})]})}),Object(i.jsx)("tbody",{className:"UsersInfo__body",children:Object(i.jsx)(C,{})})]})})]})}),J=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(u.c,{children:[Object(i.jsxs)(u.a,{path:"/",children:[Object(i.jsx)(u.a,{index:!0,element:Object(i.jsx)(E,{})}),Object(i.jsx)(u.a,{path:":userId",element:Object(i.jsx)(w,{})})]}),Object(i.jsx)(u.a,{path:"*",element:Object(i.jsx)(j,{})})]})})},F=Object(h.a)({reducer:P});a.a.render(Object(i.jsx)(o.a,{store:F,children:Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(l.a,{children:Object(i.jsx)(J,{})})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.935500aa.chunk.js.map