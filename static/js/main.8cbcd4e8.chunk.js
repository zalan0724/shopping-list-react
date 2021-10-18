(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],{139:function(e,t,n){},141:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),c=n(62),r=n.n(c),s=(n(139),n(0)),o=n.n(s),l=n(3),d=(n(141),n(205)),j=n(206),u=n(208),b=n(209),h=n(210),x=n(118),p=n.n(x),O=n(8);function v(){return Object(O.jsx)(d.a,{sx:{flexGrow:1},children:Object(O.jsx)(j.a,{position:"static",children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(b.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Shopping List"}),localStorage.getItem("userID")?Object(O.jsx)(h.a,{"aria-label":"settings",sx:{color:"white"},href:"/shopping-list-react/account",children:Object(O.jsx)(p.a,{})}):null]})})})}var g=n(18),m=n(55);var f=n(211),y=n(212),I=n(213),S=n(199),C=n(198),A=n(214),w=n(195),D=n(215),_=n(216),P=n(54),T=n(120),E=n.n(T),k=n(201);function R(e){var t=function(){var e=i.a.useState([]),t=Object(g.a)(e,2),n=t[0],a=t[1],c=m.a.firestore();return i.a.useEffect((function(){c.collection("items").where("user","==",localStorage.getItem("userID")).onSnapshot((function(e){var t=[];e.docs.map((function(e){return t.push({id:e.id,item:e.data()})})),a(t)}))}),[c]),[n]}(),n=Object(g.a)(t,1)[0],a="/shopping-list-react";return Object(O.jsxs)(P.a,{basename:"/shopping-list-react",children:[Object(O.jsx)(f.a,{dense:!0,sx:{width:"100%",bgcolor:"background.paper"},children:[!1,!0].map((function(t,c){return Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(y.a,{component:"div",children:t?"M\xe1r meg lett v\xe9ve":"M\xe9g nincs megv\xe9ve"}),Object(O.jsx)(k.a,{children:n.map((function(n){var c,r,s,o,l,d="checkbox-list-secondary-label-".concat(null===n||void 0===n?void 0:n.id);return t===(null===n||void 0===n||null===(c=n.item)||void 0===c?void 0:c.done)?Object(O.jsx)(I.a,{children:Object(O.jsx)(S.a,{secondaryAction:Object(O.jsx)(C.a,{edge:"end",checked:null===n||void 0===n||null===(r=n.item)||void 0===r?void 0:r.done,onClick:e.handleUpdate,id:null===n||void 0===n?void 0:n.id}),disablePadding:!0,children:Object(O.jsx)(A.a,{href:a+"item/"+n.id,sx:{width:"100%",height:"100%"},children:Object(O.jsx)(w.a,{children:Object(O.jsx)(D.a,{id:d,primary:Object(O.jsx)(b.a,{variant:"body1",component:"div",children:n.item.name}),secondary:Object(O.jsx)(i.a.Fragment,{children:Object(O.jsxs)(b.a,{sx:{display:"inline"},component:"span",variant:"body2",children:[null===n||void 0===n||null===(s=n.item)||void 0===s?void 0:s.quantity," db",(null===n||void 0===n||null===(o=n.item)||void 0===o?void 0:o.type)?" - "+n.item.type:"",(null===n||void 0===n||null===(l=n.item)||void 0===l?void 0:l.shop)?" - "+n.item.shop:""]})})})})})})},null===n||void 0===n?void 0:n.id):null}))})]},c)}))}),Object(O.jsx)(A.a,{href:a+"/addItem",children:Object(O.jsx)(_.a,{variant:"contained",color:"primary",size:"large",sx:{position:"absolute",bottom:"16px",right:"16px",zIndex:"2"},children:Object(O.jsx)(E.a,{})})})]})}var F=n(32);var z=n(217),B=n(218),K=n(202),L=n(219);function J(e){var t=function(){var e=i.a.useState({}),t=Object(g.a)(e,2),n=t[0],a=t[1],c=Object(F.f)().itemID,r=m.a.firestore();return i.a.useEffect((function(){r.collection("items").doc(c).get().then((function(e){a(e.data())}))}),[r,c]),[n]}(),n=Object(g.a)(t,1)[0],a=Object(F.f)().itemID,c={subtitleStyle:{marginBottom:"4px"},buttonContainer:{display:"flex",justifyContent:"flex-end",margin:"0 16px 0 16px"}};return Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(z.a,{sx:{margin:"16px"},children:Object(O.jsx)(B.a,{children:(null===n||void 0===n?void 0:n.name)?Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(b.a,{variant:"h4",sx:{marginBottom:"16px"},children:n.name}),Object(O.jsxs)(b.a,{variant:"subtitle1",children:[Object(O.jsx)("div",{style:c.subtitleStyle,children:"Darab: "+(null===n||void 0===n?void 0:n.quantity)}),Object(O.jsx)("div",{style:c.subtitleStyle,children:"T\xedpus: "+((null===n||void 0===n?void 0:n.type)?n.type:"-")}),Object(O.jsx)("div",{style:c.subtitleStyle,children:"Bolt: "+((null===n||void 0===n?void 0:n.shop)?n.shop:"-")}),Object(O.jsx)("div",{style:c.subtitleStyle,children:Object(O.jsx)("b",{children:(null===n||void 0===n?void 0:n.done)?"M\xe1r meg lett v\xe9ve!":"M\xe9g nem lett megv\xe9ve!"})})]})]}):Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(K.a,{variant:"text",height:50}),Object(O.jsx)(K.a,{variant:"rectangular",height:200})]})})}),Object(O.jsxs)(d.a,{style:c.buttonContainer,children:[Object(O.jsx)(L.a,{variant:"contained",sx:{marginRight:"16px"},href:"/shopping-list-react",children:"Vissza"}),Object(O.jsx)(L.a,{variant:"contained",color:"error",onClick:function(t){t.preventDefault(),e.deleteItem(a)},children:"T\xf6rl\xe9s"})]})]})}var U=n(203),N=n(197),H=n(123);function M(){var e=Object(a.useState)(""),t=Object(g.a)(e,2),n=t[0],i=t[1],c={card:{margin:"16px"},content:{height:"100%"}};return Object(O.jsx)(d.a,{children:Object(O.jsx)(z.a,{sx:c.card,children:Object(O.jsx)(B.a,{sx:c.content,children:Object(O.jsxs)(U.a,{container:!0,rowSpacing:3,alignItems:"center",justifyContent:"space-between",direction:"column",children:[Object(O.jsx)(U.a,{item:!0,children:Object(O.jsx)(L.a,{variant:"contained",href:"/",onClick:function(){localStorage.setItem("userID",H.a.TextNumCode(8,8))},children:"\xdaj lista l\xe9trehoz\xe1sa"})}),Object(O.jsx)(U.a,{item:!0,children:Object(O.jsx)(b.a,{variant:"subtitle1",children:"Vagy"})}),Object(O.jsxs)(U.a,{item:!0,children:[Object(O.jsx)(b.a,{variant:"subtitle1",children:"Megl\xe9v\u0151 lista megnyit\xe1sa:"}),Object(O.jsx)(N.a,{sx:{width:"100%"},onChange:function(e){return i(e.target.value)}}),Object(O.jsx)(L.a,{href:"/",onClick:function(){localStorage.setItem("userID",n)},children:"K\xf3d haszn\xe1lata"})]})]})})})})}var V=n(220);function q(e){var t=Object(a.useState)(""),n=Object(g.a)(t,2),i=n[0],c=n[1],r=Object(a.useState)(1),s=Object(g.a)(r,2),o=s[0],l=s[1],j=Object(a.useState)(""),u=Object(g.a)(j,2),b=u[0],h=u[1],x=Object(a.useState)(""),p=Object(g.a)(x,2),v=p[0],m=p[1],f={textField:{width:"100%",marginBottom:"16px"},card:{padding:"16px",margin:"16px"},buttonContainer:{display:"flex",margin:"0px 16px 0px 16px",justifyContent:"flex-end"}};return Object(O.jsxs)(d.a,{component:"form",autoComplete:"off",children:[Object(O.jsxs)(z.a,{sx:f.card,children:[Object(O.jsx)(N.a,{sx:f.textField,label:"Product name",onChange:function(e){return c(e.target.value)},required:!0}),Object(O.jsx)(N.a,{sx:f.textField,label:"Quantity",defaultValue:1,type:"number",InputProps:{endAdornment:Object(O.jsx)(V.a,{position:"end",children:"db"})},onChange:function(e){return l(Number(e.target.value))}}),Object(O.jsx)(N.a,{sx:f.textField,label:"Type",onChange:function(e){return h(e.target.value)}}),Object(O.jsx)(N.a,{sx:f.textField,label:"Shop",onChange:function(e){return m(e.target.value)}})]}),Object(O.jsxs)(d.a,{sx:f.buttonContainer,children:[Object(O.jsx)(L.a,{variant:"contained",color:"primary",sx:{marginRight:"16px"},href:"/shopping-list-react",children:"Elvet"}),Object(O.jsx)(L.a,{variant:"contained",color:"success",onClick:function(t){t.preventDefault(),e.addItem({name:i,quantity:o,type:b,shop:v,user:localStorage.getItem("userID"),done:!1})},type:"submit",children:"Hozz\xe1ad"})]})]})}var W=n(121),G=n.n(W);function Y(e){var t=localStorage.getItem("userID"),n={card:{margin:"16px"},box:{margin:"0 16px 0 16px",display:"flex",justifyContent:"flex-end"}};return Object(O.jsxs)(d.a,{children:[Object(O.jsx)(z.a,{sx:n.card,children:Object(O.jsxs)(B.a,{children:[Object(O.jsxs)(b.a,{variant:"subtitle1",sx:{marginBottom:"32px"},children:["Az azonos\xedt\xf3d: ",t]}),Object(O.jsx)(G.a,{value:window.location.href+"/shopping-list-reactlinkAccount/"+t})]})}),Object(O.jsxs)(d.a,{sx:n.box,children:[Object(O.jsx)(L.a,{variant:"contained",href:"/shopping-list-react",sx:{marginRight:"16px"},children:"Vissza"}),Object(O.jsx)(L.a,{variant:"contained",onClick:e.resetApp,color:"error",children:"\xdaj lista"})]})]})}function Q(){var e=Object(F.f)().userID;return Object(a.useEffect)((function(){e&&(localStorage.setItem("userID",e),window.location.href="/shopping-list-react")}),[e]),Object(O.jsx)("div",{})}var X=function(){var e=m.a.firestore(),t="/shopping-list-react",n=function(){var n=Object(l.a)(o.a.mark((function n(a){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.collection("items").add(a).then((function(){return console.log("hozzaadva")})).catch((function(e){return console.log(e)}));case 2:window.location.href=t;case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),a=function(){var e=Object(l.a)(o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m.a.firestore(),e.next=3,a.collection("items").doc(n).delete().catch((function(e){return console.log(e)}));case 3:window.location.href=t;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"App",style:{height:"100vh"},children:[Object(O.jsx)(v,{sx:{position:"sticky"}}),Object(O.jsx)(P.a,{children:Object(O.jsxs)(F.c,{children:[Object(O.jsx)(F.a,{path:t+"addItem",children:Object(O.jsx)(q,{addItem:n})}),Object(O.jsx)(F.a,{path:t+"item/:itemID",children:Object(O.jsx)(J,{deleteItem:a})}),Object(O.jsx)(F.a,{path:t+"account",children:Object(O.jsx)(Y,{resetApp:function(){localStorage.clear(),window.location.href=t}})}),Object(O.jsx)(F.a,{path:t+"linkAccount/:userID",children:Object(O.jsx)(Q,{})}),Object(O.jsx)(F.a,{path:t,children:localStorage.getItem("userID")?Object(O.jsx)(R,{handleUpdate:function(t){e.collection("items").doc(t.target.id).update({done:t.target.checked}).catch((function(e){return console.log(e)}))},sx:{height:"100vh"}}):Object(O.jsx)(M,{})})]})})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,221)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};n(156),n(157),n(158),n(159);m.a.initializeApp({apiKey:"AIzaSyDbjSvN7B8JtKaJKfsxCJ6KHboEvbUTL1Y",authDomain:"shopping-list-36346.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/shopping-list-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_apiKey:"AIzaSyDbjSvN7B8JtKaJKfsxCJ6KHboEvbUTL1Y",REACT_APP_appId:"1:438534046402:web:8316d1bdf0486a8223b15b",REACT_APP_authDomain:"shopping-list-36346.firebaseapp.com",REACT_APP_measurementId:"G-0BXWTBV3B9",REACT_APP_messagingSenderId:"438534046402",REACT_APP_projectId:"shopping-list-36346",REACT_APP_storageBucket:"shopping-list-36346.appspot.com"}).REACT_APP_databaseURL,projectId:"shopping-list-36346",storageBucket:"shopping-list-36346.appspot.com",messagingSenderId:"438534046402",appId:"1:438534046402:web:8316d1bdf0486a8223b15b"}),r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(P.a,{children:Object(O.jsx)(X,{})})}),document.getElementById("root")),Z()}},[[160,1,2]]]);
//# sourceMappingURL=main.8cbcd4e8.chunk.js.map