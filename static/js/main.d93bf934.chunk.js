(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(69)},47:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(36),s=a.n(o),c=(a(47),a(12)),l=a(13),i=a(15),m=a(14),u=a(16),h=a(20),d=a.n(h),p=d.a.initializeApp({apiKey:"AIzaSyCsc_C7QIiBzCpPcyKBsFvsuEccHHOW-a8",authDomain:"todo-c64e8.firebaseapp.com",databaseURL:"https://todo-c64e8.firebaseio.com",projectId:"todo-c64e8",storageBucket:"todo-c64e8.appspot.com",messagingSenderId:"867932857254",appId:"1:867932857254:web:92f8cbf72bf352f1332567",measurementId:"G-4LGGPN3MGY"}),b=d.a.firestore(p),f=p,E=a(17),g=a(19),v=(a(63),r.a.createContext()),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={currentUser:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){e.setState({currentUser:t})})}},{key:"render",value:function(){var e=this.state.currentUser;return r.a.createElement(v.Provider,{value:{currentUser:e}},this.props.children)}}]),t}(n.Component),w=a(26),O=function(e){var t=e.component,a=Object(w.a)(e,["component"]),o=Object(n.useContext)(v).currentUser;return r.a.createElement(g.b,Object.assign({},a,{render:function(e){return o?r.a.createElement(t,e):r.a.createElement(g.a,{to:"/login"})}}))},j=function(e){var t=e.component,a=Object(w.a)(e,["component"]),o=Object(n.useContext)(v).currentUser;return r.a.createElement(g.b,Object.assign({},a,{render:function(e){return o?r.a.createElement(g.a,{to:"/profile"}):r.a.createElement(t,e)}}))},C=a(22),k=a(73),S=a(74),N=a(75),D=a(76),U=a(77),P=a(78),I=a(79),x=a(80),A=a(81),B=a(82),W=a(83),G=a(84),L=a(85),M=a(86),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={uid:"",data:null,post:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=f.auth().currentUser.uid,a=[];this.setState({uid:t}),console.log(t,"is sign in....."),b.collection("Data").doc(t).collection("posts").onSnapshot(function(t){t.forEach(function(e){a.push(e.data())}),e.setState({data:a})})}},{key:"handleLogout",value:function(){f.auth().signOut()}},{key:"handleDelete",value:function(){d.a.auth().currentUser.delete().then(function(){console.log("User deleted"),this.props.history.push("/sign-up")}).catch(function(e){console.log(e,"An error happened.")})}},{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.uid,r=a.post;b.collection("Data").doc(n).collection("posts").add({name:"admin",post:r,date:new Date}).then(function(e){t.setState({post:""}),console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)})}},{key:"render",value:function(){var e=this.state,t=e.post,a=e.data;return r.a.createElement(k.a,{fluid:!0,className:"jumbotron"},a?r.a.createElement(N.a,{fluid:!0},r.a.createElement(D.a,null,r.a.createElement(U.a,{className:"logout"},r.a.createElement(P.a,{color:"danger",onClick:this.handleDelete.bind(this)}," Delete ")),r.a.createElement(U.a,{className:"logout"},r.a.createElement(P.a,{color:"danger",onClick:this.handleLogout.bind(this)}," logOut "))),r.a.createElement(D.a,null,r.a.createElement(I.a,{className:"data"},a.map(function(e,t){return r.a.createElement(x.a,{key:t},r.a.createElement(A.a,null,r.a.createElement(B.a,null,e.name),r.a.createElement(W.a,null,e.post),r.a.createElement(P.a,null,"Delete")))}))),r.a.createElement(G.a,{className:"bottom-form",onSubmit:this.handleSubmit.bind(this)},r.a.createElement(D.a,{form:!0},r.a.createElement(U.a,{md:10},r.a.createElement(L.a,null,r.a.createElement(M.a,{type:"text",placeholder:"Posts",name:"post",value:t,onChange:this.handleChange.bind(this)}))),r.a.createElement(U.a,{md:1},r.a.createElement(P.a,{color:"primary",type:"submit"},"Submit"))))):r.a.createElement("div",{className:"loading"},r.a.createElement(S.a,{animated:!0,color:"primary",value:"100"})))}}]),t}(r.a.Component),H=a(87),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.email,n=t.password;console.log(this.state,"state------"),this.setState({email:"",password:""}),d.a.auth().signInWithEmailAndPassword(a,n).catch(function(e){console.log(e,"error on signin")})}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement(N.a,{className:"wrapper"},r.a.createElement(G.a,{inline:!0,onSubmit:this.handleSubmit.bind(this)},r.a.createElement(L.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(H.a,{for:"Email",className:"mr-sm-2"},"Email"),r.a.createElement(M.a,{type:"email",name:"email",value:t,placeholder:"something@idk.cool",onChange:this.handleChange.bind(this)})),r.a.createElement(L.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(H.a,{for:"Password",className:"mr-sm-2"},"Password"),r.a.createElement(M.a,{type:"password",name:"password",value:a,placeholder:"don't tell!",onChange:this.handleChange.bind(this)})),r.a.createElement(P.a,{type:"submit"},"Submit")),r.a.createElement(E.b,{to:"/sign-up"},"Don't have an account ?"))}}]),t}(n.Component),K=a(31),F=a.n(K),Q=a(41),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={name:"",email:"",phone:"",password:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.name,r=a.email,o=a.phone,s=a.password;console.log(this.state,"state------");var c=f.auth().createUserWithEmailAndPassword(r,s);c.then(function(){var e=Object(Q.a)(F.a.mark(function e(t){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.user.updateProfile({displayName:n});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log(e,"err-=-=-=-")}),c.then(function(){var e=f.auth().currentUser.uid;b.collection("Data").doc(e).set({name:n,email:r,phone:o}),t.props.history.push("/profile")})}},{key:"addUserInfo",value:function(e){console.log(e,"addUserInfo=-=-=-")}},{key:"setValues",value:function(){this.setState({name:"",email:"",phone:"",password:""})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,o=e.password;return r.a.createElement(N.a,{className:"wrapper"},r.a.createElement(G.a,{onSubmit:this.handleSubmit.bind(this)},r.a.createElement(L.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(H.a,{for:"User Name",className:"mr-sm-2"},"Name"),r.a.createElement(M.a,{type:"text",name:"name",value:t,placeholder:"something",onChange:this.handleChange.bind(this)})),r.a.createElement(L.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(H.a,{for:"Email",className:"mr-sm-2"},"Email"),r.a.createElement(M.a,{type:"email",name:"email",value:a,placeholder:"something@idk.cool",onChange:this.handleChange.bind(this)})),r.a.createElement(L.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(H.a,{for:"Email",className:"mr-sm-2"},"Phone"),r.a.createElement(M.a,{type:"phone",name:"phone",value:n,placeholder:"+92-6546545",onChange:this.handleChange.bind(this)})),r.a.createElement(L.a,{className:"mb-2 mr-sm-2 mb-sm-0"},r.a.createElement(H.a,{for:"Password",className:"mr-sm-2"},"Password"),r.a.createElement(M.a,{type:"password",name:"password",value:o,placeholder:"don't tell!",onChange:this.handleChange.bind(this)})),r.a.createElement(P.a,{type:"submit"},"Submit")),r.a.createElement(E.b,{to:"/login"},"Already have an account"))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={uid:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.auth().onAuthStateChanged(function(t){t?(console.log(t.uid,"this user is signin"),e.setState({uid:t.uid})):(console.log("user is not signin"),e.setState({uid:null}))})}},{key:"render",value:function(){this.state.uid;return r.a.createElement(y,null,r.a.createElement(E.a,null,r.a.createElement(g.d,null,r.a.createElement(j,{exact:!0,path:"/",component:J}),r.a.createElement(g.b,{path:"/sign-up",component:R}),r.a.createElement(O,{path:"/profile",component:z}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.d93bf934.chunk.js.map