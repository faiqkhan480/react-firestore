(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,a,t){e.exports=t(74)},50:function(e,a,t){},66:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(37),c=t.n(r),o=(t(50),t(11)),s=t(12),i=t(14),m=t(13),u=t(15),h=t(21),d=t.n(h),p=d.a.initializeApp({apiKey:"AIzaSyCsc_C7QIiBzCpPcyKBsFvsuEccHHOW-a8",authDomain:"todo-c64e8.firebaseapp.com",databaseURL:"https://todo-c64e8.firebaseio.com",projectId:"todo-c64e8",storageBucket:"todo-c64e8.appspot.com",messagingSenderId:"867932857254",appId:"1:867932857254:web:92f8cbf72bf352f1332567",measurementId:"G-4LGGPN3MGY"}),E=d.a.firestore(p),f=p,b=t(18),v=t(20),g=(t(66),l.a.createContext()),y=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={currentUser:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.auth().onAuthStateChanged(function(a){e.setState({currentUser:a})})}},{key:"render",value:function(){var e=this.state.currentUser;return l.a.createElement(g.Provider,{value:{currentUser:e}},this.props.children)}}]),a}(n.Component),O=t(26),j=function(e){var a=e.component,t=Object(O.a)(e,["component"]),r=Object(n.useContext)(g).currentUser;return l.a.createElement(v.b,Object.assign({},t,{render:function(e){return r?l.a.createElement(a,e):l.a.createElement(v.a,{to:"/"})}}))},w=function(e){var a=e.component,t=Object(O.a)(e,["component"]),r=Object(n.useContext)(g).currentUser;return l.a.createElement(v.b,Object.assign({},t,{render:function(e){return r?l.a.createElement(v.a,{to:"/profile"}):l.a.createElement(a,e)}}))},k=t(22),N=t(78),C=t(79),S=t(80),D=t(81),U=t(82),x=t(83),P=t(84),I=t(85),A=t(86),B=t(87),W=t(88),z=t(89),G=t(90),L=t(91),M=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={uid:"",data:null,post:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=f.auth().currentUser.uid,t=[];this.setState({uid:a}),console.log(a,"is sign in....."),E.collection("Data").doc(a).collection("posts").onSnapshot(function(a){a.forEach(function(e){t.push(e.data())}),e.setState({data:t})})}},{key:"handleLogout",value:function(){f.auth().signOut()}},{key:"handleDelete",value:function(){d.a.auth().currentUser.delete().then(function(){console.log("User deleted"),this.props.history.push("/sign-up")}).catch(function(e){console.log(e,"An error happened.")})}},{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=this.state,n=t.uid,l=t.post;E.collection("Data").doc(n).collection("posts").add({name:"admin",post:l,date:new Date}).then(function(e){a.setState({post:""}),console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)})}},{key:"render",value:function(){var e=this.state,a=e.post,t=e.data;return l.a.createElement(N.a,{fluid:!0,className:"jumbotron"},t?l.a.createElement(S.a,{fluid:!0},l.a.createElement(D.a,null,l.a.createElement(U.a,{className:"logout"},l.a.createElement(x.a,{color:"danger",onClick:this.handleDelete.bind(this)}," Delete ")),l.a.createElement(U.a,{className:"logout"},l.a.createElement(x.a,{color:"danger",onClick:this.handleLogout.bind(this)}," logOut "))),l.a.createElement(D.a,null,l.a.createElement(P.a,{className:"data"},t.map(function(e,a){return l.a.createElement(I.a,{key:a},l.a.createElement(A.a,null,l.a.createElement(B.a,null,e.name),l.a.createElement(W.a,null,e.post),l.a.createElement(x.a,null,"Delete")))}))),l.a.createElement(z.a,{className:"bottom-form",onSubmit:this.handleSubmit.bind(this)},l.a.createElement(D.a,{form:!0},l.a.createElement(U.a,{md:10},l.a.createElement(G.a,null,l.a.createElement(L.a,{type:"text",placeholder:"Posts",name:"post",value:a,onChange:this.handleChange.bind(this)}))),l.a.createElement(U.a,{md:1},l.a.createElement(x.a,{color:"primary",type:"submit"},"Submit"))))):l.a.createElement("div",{className:"loading"},l.a.createElement(C.a,{animated:!0,color:"primary",value:"100"})))}}]),a}(l.a.Component),q=t(92),H=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={email:"",password:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t=a.email,n=a.password;console.log(this.state,"state------"),this.setState({email:"",password:""}),d.a.auth().signInWithEmailAndPassword(t,n).catch(function(e){console.log(e,"error on signin")})}},{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return l.a.createElement("div",{className:"wrapper"},l.a.createElement(z.a,{className:"mb-4 container",onSubmit:this.handleSubmit.bind(this)},l.a.createElement(G.a,{className:"container"},l.a.createElement(D.a,null,l.a.createElement(U.a,{md:"2",sm:"2"},l.a.createElement(q.a,{for:"Email"},"Email")),l.a.createElement(U.a,{md:"10",sm:"10"},l.a.createElement(L.a,{className:"fields",type:"email",name:"email",value:a,placeholder:"something@idk.cool",onChange:this.handleChange.bind(this)})))),l.a.createElement(G.a,{className:"container"},l.a.createElement(D.a,null,l.a.createElement(U.a,{md:"2",sm:"2"},l.a.createElement(q.a,{for:"Password"},"Password")),l.a.createElement(U.a,{md:"10",sm:"10"},l.a.createElement(L.a,{className:"fields",type:"password",name:"password",value:t,placeholder:"don't tell!",onChange:this.handleChange.bind(this)})))),l.a.createElement(S.a,null,l.a.createElement(D.a,null,l.a.createElement(U.a,{className:"text-center"},l.a.createElement(x.a,{className:"submit",type:"submit"},"Submit"))))),l.a.createElement(S.a,null,l.a.createElement(D.a,null,l.a.createElement(U.a,null,l.a.createElement(b.b,{className:"navlink",to:"/sign-up"},"Don't have an account ?")))))}}]),a}(n.Component),J=t(33),K=t.n(J),F=t(42),Q=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={name:"",email:"",phone:"",password:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=this.state,n=t.name,l=t.email,r=t.phone,c=t.password;console.log(this.state,"state------");var o=f.auth().createUserWithEmailAndPassword(l,c);o.then(function(){var e=Object(F.a)(K.a.mark(function e(a){return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.user.updateProfile({displayName:n});case 2:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()).catch(function(e){console.log(e,"err-=-=-=-")}),o.then(function(){var e=f.auth().currentUser.uid;E.collection("Data").doc(e).set({name:n,email:l,phone:r}),a.props.history.push("/profile")})}},{key:"addUserInfo",value:function(e){console.log(e,"addUserInfo=-=-=-")}},{key:"setValues",value:function(){this.setState({name:"",email:"",phone:"",password:""})}},{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.phone,r=e.password;return l.a.createElement("div",{className:"wrapper"},l.a.createElement(z.a,{className:"mb-4 container",onSubmit:this.handleSubmit.bind(this)},l.a.createElement(G.a,{className:"container"},l.a.createElement(D.a,null,l.a.createElement(U.a,{md:"2",sm:"2"},l.a.createElement(q.a,{for:"Name"},"Name")),l.a.createElement(U.a,{md:"10",sm:"10"},l.a.createElement(L.a,{className:"fields",type:"text",name:"name",value:a,placeholder:"something",onChange:this.handleChange.bind(this)})))),l.a.createElement(G.a,{className:"container"},l.a.createElement(D.a,null,l.a.createElement(U.a,{md:"2",sm:"2"},l.a.createElement(q.a,{for:"Email"},"Email")),l.a.createElement(U.a,{md:"10",sm:"10"},l.a.createElement(L.a,{className:"fields",type:"email",name:"email",value:t,placeholder:"something@example.com",onChange:this.handleChange.bind(this)})))),l.a.createElement(G.a,{className:"container"},l.a.createElement(D.a,null,l.a.createElement(U.a,{md:"2",sm:"2"},l.a.createElement(q.a,{for:"Phone"},"Phone")),l.a.createElement(U.a,{md:"10",sm:"10"},l.a.createElement(L.a,{className:"fields",type:"phone",name:"phone",value:n,placeholder:"+92-6546545",onChange:this.handleChange.bind(this)})))),l.a.createElement(G.a,{className:"container"},l.a.createElement(D.a,null,l.a.createElement(U.a,{md:"2",sm:"2"},l.a.createElement(q.a,{for:"Password"},"Password")),l.a.createElement(U.a,{md:"10",sm:"10"},l.a.createElement(L.a,{className:"fields",type:"password",name:"password",value:r,placeholder:"don't tell!",onChange:this.handleChange.bind(this)})))),l.a.createElement(S.a,null,l.a.createElement(D.a,null,l.a.createElement(U.a,{className:"text-center"},l.a.createElement(x.a,{className:"submit",type:"submit"},"Submit"))))),l.a.createElement(S.a,null,l.a.createElement(D.a,null,l.a.createElement(U.a,null,l.a.createElement(b.b,{className:"navlink",to:"/"},"Already have an account")))))}}]),a}(n.Component),R=t(43),V=t(44),Y=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(S.a,null,l.a.createElement(D.a,{className:"footer"},l.a.createElement(U.a,null,l.a.createElement("a",{className:"repolink",href:"https://github.com/faiqkhan480/react-firestore"},"faiqkhan480.",l.a.createElement(R.a,{size:"2x",icon:V.a})))))}}]),a}(n.Component),$=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={uid:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.auth().onAuthStateChanged(function(a){a?(console.log(a.uid,"this user is signin"),e.setState({uid:a.uid})):(console.log("user is not signin"),e.setState({uid:null}))})}},{key:"render",value:function(){this.state.uid;return l.a.createElement(y,null,l.a.createElement(b.a,{basename:"/"},l.a.createElement(v.d,null,l.a.createElement(w,{exact:!0,path:"/",component:H}),l.a.createElement(v.b,{path:"/sign-up",component:Q}),l.a.createElement(j,{path:"/profile",component:M})),l.a.createElement(Y,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.7ac48485.chunk.js.map