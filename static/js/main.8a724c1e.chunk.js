(this["webpackJsonpreactjs-quickstart"]=this["webpackJsonpreactjs-quickstart"]||[]).push([[0],{69:function(e,t,a){e.exports=a(96)},74:function(e,t,a){},85:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(40),s=a.n(l),i=(a(74),a(9)),c=a(10),o=a(12),m=a(11),u=a(13),d=a(22),h=a.n(d),f=h.a.initializeApp({apiKey:"AIzaSyCsc_C7QIiBzCpPcyKBsFvsuEccHHOW-a8",authDomain:"todo-c64e8.firebaseapp.com",databaseURL:"https://todo-c64e8.firebaseio.com",projectId:"todo-c64e8",storageBucket:"todo-c64e8.appspot.com",messagingSenderId:"867932857254",appId:"1:867932857254:web:92f8cbf72bf352f1332567",measurementId:"G-4LGGPN3MGY"}),E=h.a.firestore(f),p=f,b=a(20),g=a(27),v=(a(85),a(68)),k=r.a.createContext(),x=function(e){var t=e.children,a=Object(n.useState)(null),l=Object(v.a)(a,2),s=l[0],i=l[1];return Object(n.useEffect)((function(){p.auth().onAuthStateChanged(i)}),[]),r.a.createElement(k.Provider,{value:{currentUser:s}},t)},C=a(45),y=function(e){var t=e.Component,a=Object(C.a)(e,["Component"]),l=Object(n.useContext)(k).currentUser;return r.a.createElement(g.b,Object.assign({},a,{render:function(e){return l?r.a.createElement(t,e):r.a.createElement(g.a,{to:"/login"})}}))},N=function(e){var t=e.component,a=Object(C.a)(e,["component"]),l=Object(n.useContext)(k).currentUser;return r.a.createElement(g.b,Object.assign({},a,{render:function(e){return l?r.a.createElement(g.a,{to:"/profile"}):r.a.createElement(t,e)}}))},j=a(99),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{version:"1.1",width:"320",height:"320",viewBox:"0 0 320 320",fill:"none",stroke:"#000",strokeLinecap:"round",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},r.a.createElement("defs",null,r.a.createElement("path",{id:"r1"},r.a.createElement("animate",{id:"p1",attributeName:"d",values:"m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0",dur:"6s",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"stroke-width",values:"0;4;4;4;0",dur:"6s",repeatCount:"indefinite",begin:"p1.begin"})),r.a.createElement("path",{id:"r2"},r.a.createElement("animate",{attributeName:"d",values:"m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0",dur:"6s",repeatCount:"indefinite",begin:"p1.begin+1s"}),r.a.createElement("animate",{attributeName:"stroke-width",values:"0;4;4;4;0",dur:"6s",repeatCount:"indefinite",begin:"p1.begin+1s"})),r.a.createElement("path",{id:"r3"},r.a.createElement("animate",{attributeName:"d",values:"m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0",dur:"6s",repeatCount:"indefinite",begin:"p1.begin+2s"}),r.a.createElement("animate",{attributeName:"stroke-width",values:"0;4;4;4;0",dur:"6s",repeatCount:"indefinite",begin:"p1.begin+2s"})),r.a.createElement("path",{id:"r4"},r.a.createElement("animate",{id:"p1",attributeName:"d",values:"m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0",dur:"6s",repeatCount:"indefinite",begin:"p1.begin+3s"}),r.a.createElement("animate",{attributeName:"stroke-width",values:"0;4;4;4;0",dur:"6s",repeatCount:"indefinite",begin:"p1.begin+3s"})),r.a.createElement("path",{id:"r5"},r.a.createElement("animate",{attributeName:"d",values:"m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0",dur:"6s",repeatCount:"indefinite",begin:"p1.begin+4s"}),r.a.createElement("animate",{attributeName:"stroke-width",values:"0;4;4;4;0",dur:"6s",repeatCount:"indefinite",begin:"p1.begin+4s"})),r.a.createElement("path",{id:"r6"},r.a.createElement("animate",{attributeName:"d",values:"m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0",dur:"6s",repeatCount:"indefinite",begin:"p1.begin+5s"}),r.a.createElement("animate",{attributeName:"stroke-width",values:"0;4;4;4;0",dur:"6s",repeatCount:"indefinite",begin:"p1.begin+5s"}))),r.a.createElement("use",{xlinkHref:"#r1"}),r.a.createElement("use",{xlinkHref:"#r1",transform:"rotate(60 160 160)"}),r.a.createElement("use",{xlinkHref:"#r1",transform:"rotate(120 160 160)"}),r.a.createElement("use",{xlinkHref:"#r1",transform:"rotate(180 160 160)"}),r.a.createElement("use",{xlinkHref:"#r1",transform:"rotate(240 160 160)"}),r.a.createElement("use",{xlinkHref:"#r1",transform:"rotate(300 160 160)"}),r.a.createElement("use",{xlinkHref:"#r2",transform:"rotate(30 160 160)"}),r.a.createElement("use",{xlinkHref:"#r2",transform:"rotate(90 160 160)"}),r.a.createElement("use",{xlinkHref:"#r2",transform:"rotate(150 160 160)"}),r.a.createElement("use",{xlinkHref:"#r2",transform:"rotate(210 160 160)"}),r.a.createElement("use",{xlinkHref:"#r2",transform:"rotate(270 160 160)"}),r.a.createElement("use",{xlinkHref:"#r2",transform:"rotate(330 160 160)"}),r.a.createElement("use",{xlinkHref:"#r3"}),r.a.createElement("use",{xlinkHref:"#r3",transform:"rotate(60 160 160)"}),r.a.createElement("use",{xlinkHref:"#r3",transform:"rotate(120 160 160)"}),r.a.createElement("use",{xlinkHref:"#r3",transform:"rotate(180 160 160)"}),r.a.createElement("use",{xlinkHref:"#r3",transform:"rotate(240 160 160)"}),r.a.createElement("use",{xlinkHref:"#r3",transform:"rotate(300 160 160)"}),r.a.createElement("use",{xlinkHref:"#r4",transform:"rotate(30 160 160)"}),r.a.createElement("use",{xlinkHref:"#r4",transform:"rotate(90 160 160)"}),r.a.createElement("use",{xlinkHref:"#r4",transform:"rotate(150 160 160)"}),r.a.createElement("use",{xlinkHref:"#r4",transform:"rotate(210 160 160)"}),r.a.createElement("use",{xlinkHref:"#r4",transform:"rotate(270 160 160)"}),r.a.createElement("use",{xlinkHref:"#r4",transform:"rotate(330 160 160)"}),r.a.createElement("use",{xlinkHref:"#r5"}),r.a.createElement("use",{xlinkHref:"#r5",transform:"rotate(60 160 160)"}),r.a.createElement("use",{xlinkHref:"#r5",transform:"rotate(120 160 160)"}),r.a.createElement("use",{xlinkHref:"#r5",transform:"rotate(180 160 160)"}),r.a.createElement("use",{xlinkHref:"#r5",transform:"rotate(240 160 160)"}),r.a.createElement("use",{xlinkHref:"#r5",transform:"rotate(300 160 160)"}),r.a.createElement("use",{xlinkHref:"#r6",transform:"rotate(30 160 160)"}),r.a.createElement("use",{xlinkHref:"#r6",transform:"rotate(90 160 160)"}),r.a.createElement("use",{xlinkHref:"#r6",transform:"rotate(150 160 160)"}),r.a.createElement("use",{xlinkHref:"#r6",transform:"rotate(210 160 160)"}),r.a.createElement("use",{xlinkHref:"#r6",transform:"rotate(270 160 160)"}),r.a.createElement("use",{xlinkHref:"#r6",transform:"rotate(330 160 160)"})))}}]),t}(n.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"banner d-flex justify-content-center align-items-center mb-5"},r.a.createElement(j.a,{className:" d-flex align-items-center flex-column"},r.a.createElement(b.b,{to:"/profile"},r.a.createElement("p",{className:"display-3 display-sm-4 effect-underline"},"List Your Todos...")),r.a.createElement(O,null)))}}]),t}(n.Component),H=a(31),S=a(100),I=a(59),L=a(105),D=a(104),U=a(61),A=a(101),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={uid:"",user:"",data:null,post:"",curIndex:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getData",value:function(){var e=this;p.auth().onAuthStateChanged((function(t){if(t){var a=[];e.setState({uid:t.uid,user:t.displayName}),E.collection("Users").doc(t.uid).collection("posts").onSnapshot((function(t){t.docChanges().forEach((function(t){var n={id:t.doc.id,name:t.doc.data().name,comment:t.doc.data().post};"added"===t.type&&(a.push(n),e.setState({post:"",data:a}))}))}))}}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"handleLogout",value:function(){p.auth().signOut()}},{key:"handleDelete",value:function(e,t){var a=this,n=this.state.data;this.setState({currIndex:t});var r=p.auth().currentUser.uid;E.collection("Users").doc(r).collection("posts").doc(e).delete().then((function(){var t=n.filter((function(t){return t.id!==e}));a.setState({data:t,currIndex:null})})).catch((function(e){console.error("Error removing document: ",e)}))}},{key:"handleChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.uid,n=t.user,r=t.post,l=E.collection("Users").doc(a);l.collection("posts").doc().id;l.collection("posts").add({name:n,post:r,date:h.a.firestore.FieldValue.serverTimestamp()}).then((function(e){console.log("Document successfully written!")})).catch((function(e){console.error("Error writing document: ",e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.post,n=t.data,l=t.currIndex;return r.a.createElement("div",{className:"mb-3"},n?r.a.createElement(j.a,null,r.a.createElement(S.a,null,r.a.createElement(I.a,{className:"wrapper",lg:"12"},r.a.createElement(L.a,{variant:"flush"},n.map((function(t,a){return r.a.createElement(L.a.Item,{key:a,className:"d-flex justify-content-between"},t.comment,l==a?r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("button",{onClick:e.handleDelete.bind(e,t.id,a),type:"button",className:"close","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))})))),r.a.createElement(I.a,null,r.a.createElement(D.a,{onSubmit:this.handleSubmit.bind(this)},r.a.createElement(j.a,null,r.a.createElement(S.a,{className:"mt-3"},r.a.createElement(I.a,{md:"10",sm:"12",xs:"12",className:"pt-1 pb-1"},r.a.createElement(D.a.Control,{type:"text",name:"post",value:a,placeholder:"Type Something in your mind...",className:"post-field",onChange:this.handleChange.bind(this)})),r.a.createElement(I.a,{md:"2",sm:"12",xs:"12",className:"text-center pt-1 pb-1"},r.a.createElement(U.a,{type:"submit",className:"post"},"Post")))))))):r.a.createElement("div",{className:"main"},r.a.createElement(A.a,{animation:"grow",style:{width:"50px",height:"50px"}})))}}]),t}(r.a.Component),T=a(60),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:"",loading:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.email,r=a.password;console.log(this.state,"state------"),this.setState({email:"",password:"",loading:!0}),h.a.auth().signInWithEmailAndPassword(n,r).catch((function(e){console.log(e,"error on signin"),t.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.loading;return r.a.createElement("div",{className:"main"},n?r.a.createElement("div",null,r.a.createElement(A.a,{animation:"grow",style:{width:"50px",height:"50px"}})):r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{className:"mb-3 container",onSubmit:this.handleSubmit.bind(this)},r.a.createElement(T.a,{className:"container"},r.a.createElement(S.a,null,r.a.createElement(I.a,{md:"2",sm:"2"},r.a.createElement(D.a.Label,null,"Email")),r.a.createElement(I.a,{md:"10",sm:"10"},r.a.createElement(D.a.Control,{className:"fields",type:"email",name:"email",value:t,placeholder:"something@idk.cool",onChange:this.handleChange.bind(this)})))),r.a.createElement(T.a,{className:"container"},r.a.createElement(S.a,null,r.a.createElement(I.a,{md:"2",sm:"2"},r.a.createElement(D.a.Label,null,"Password")),r.a.createElement(I.a,{md:"10",sm:"10"},r.a.createElement(D.a.Control,{className:"fields",type:"password",name:"password",value:a,placeholder:"don't tell!",onChange:this.handleChange.bind(this)})))),r.a.createElement(j.a,null,r.a.createElement(S.a,null,r.a.createElement(I.a,{className:"text-center"},r.a.createElement(U.a,{className:"submit",type:"submit"},"Submit"))))),r.a.createElement(j.a,null,r.a.createElement(S.a,null,r.a.createElement(I.a,null,r.a.createElement(b.b,{className:"navlink",to:"/sign-up"},"Don't have an account ?"))))))}}]),t}(n.Component),F=a(51),M=a.n(F),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={name:"",email:"",phone:"",password:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(H.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.name,r=a.email,l=a.phone,s=a.password;p.auth().createUserWithEmailAndPassword(r,s).then((function(e){return M.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,M.a.awrap(e.user.updateProfile({displayName:n}).then((function(){var e=p.auth().currentUser.uid;E.collection("Users").doc(e).set({name:n,email:r,phone:l,createdAt:h.a.firestore.FieldValue.serverTimestamp()}),t.props.history.push("/profile")})));case 2:case"end":return a.stop()}}))})).catch((function(e){console.log(e,"err-=-=-=-")}))}},{key:"setValues",value:function(){this.setState({name:"",email:"",phone:"",password:""})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,l=e.password;e.loading;return r.a.createElement("div",{className:"main"},r.a.createElement(D.a,{className:"mb-3 container",onSubmit:this.handleSubmit.bind(this)},r.a.createElement(T.a,{className:"container"},r.a.createElement(S.a,null,r.a.createElement(I.a,{md:"2",sm:"2"},r.a.createElement(D.a.Label,null,"Name")),r.a.createElement(I.a,{md:"10",sm:"10"},r.a.createElement(D.a.Control,{className:"fields",type:"text",name:"name",value:t,placeholder:"something",onChange:this.handleChange.bind(this)})))),r.a.createElement(T.a,{className:"container"},r.a.createElement(S.a,null,r.a.createElement(I.a,{md:"2",sm:"2"},r.a.createElement(D.a.Label,null,"Email")),r.a.createElement(I.a,{md:"10",sm:"10"},r.a.createElement(D.a.Control,{className:"fields",type:"email",name:"email",value:a,placeholder:"something@example.com",onChange:this.handleChange.bind(this)})))),r.a.createElement(T.a,{className:"container"},r.a.createElement(S.a,null,r.a.createElement(I.a,{md:"2",sm:"2"},r.a.createElement(D.a.Label,null,"Phone")),r.a.createElement(I.a,{md:"10",sm:"10"},r.a.createElement(D.a.Control,{className:"fields",type:"phone",name:"phone",value:n,placeholder:"+92-6546545",onChange:this.handleChange.bind(this)})))),r.a.createElement(T.a,{className:"container"},r.a.createElement(S.a,null,r.a.createElement(I.a,{md:"2",sm:"2"},r.a.createElement(D.a.Label,null,"Password")),r.a.createElement(I.a,{md:"10",sm:"10"},r.a.createElement(D.a.Control,{className:"fields",type:"password",name:"password",value:l,placeholder:"don't tell!",onChange:this.handleChange.bind(this)})))),r.a.createElement(j.a,null,r.a.createElement(S.a,null,r.a.createElement(I.a,{className:"text-center"},r.a.createElement(U.a,{className:"submit",type:"submit"},"Submit"))))),r.a.createElement(j.a,null,r.a.createElement(S.a,null,r.a.createElement(I.a,null,r.a.createElement(b.b,{className:"navlink",to:"/login"},"Already have an account")))))}}]),t}(n.Component),q=a(48),z=a(62),G=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement(S.a,null,r.a.createElement(I.a,{className:"text-right"},r.a.createElement("a",{className:"repolink",href:"https://github.com/faiqkhan480/react-firestore"},"faiqkhan480.",r.a.createElement(q.a,{size:"2x",icon:z.a})))))}}]),t}(n.Component),V=a(103),J=a(102),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={status:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.auth().onAuthStateChanged((function(t){t&&e.setState({status:!0})}))}},{key:"handleLogout",value:function(){p.auth().signOut()}},{key:"render",value:function(){var e=this.state.status;return r.a.createElement(j.a,{className:"menu"},r.a.createElement(V.a,null,r.a.createElement(V.a.Brand,{href:"#",className:"brand"},"Timbuktu"),r.a.createElement(V.a.Toggle,null),r.a.createElement(V.a.Collapse,{className:"justify-content-end"},e?r.a.createElement(J.a,null,r.a.createElement(J.a.Toggle,{variant:"info",className:"outlined-button",style:{backgroundColor:"white"}},"User"),r.a.createElement(J.a.Menu,null,r.a.createElement(J.a.Item,{onClick:this.handleLogout.bind(this)},"Sign-Out"))):r.a.createElement(V.a.Text,null,r.a.createElement(b.b,{className:"outlined-button text-decoration-none pt-2 pb-2 pl-3 pr-3",to:"/login",variant:"outline-info"},"Signed in:")))))}}]),t}(n.Component),Y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.auth().onAuthStateChanged((function(t){t?console.log(t.uid,"this user is signin"):(console.log("user is not signin"),e.setState({uid:null}))}))}},{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement(b.a,null,r.a.createElement(K,null),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:w}),r.a.createElement(N,{exact:!0,path:"/login",component:B}),r.a.createElement(g.b,{exact:!0,path:"/sign-up",component:W}),r.a.createElement(y,{exact:!0,path:"/profile",component:P})),r.a.createElement(G,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[69,1,2]]]);
//# sourceMappingURL=main.8a724c1e.chunk.js.map