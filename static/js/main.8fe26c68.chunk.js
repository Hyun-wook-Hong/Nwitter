(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(32),s=n.n(c),i=n(10),u=n(22),o=n(6),l=n(8),j=n.n(l),b=n(16),d=n(12),p=n(23),f=n(24);n(46),n(54),n(53);f.a.initializeApp({apiKey:"AIzaSyC7T2DJN54nprxDkaLT24VKrB5q94jVZLk",authDomain:"nwitter-fca84.firebaseapp.com",projectId:"nwitter-fca84",storageBucket:"nwitter-fca84.appspot.com",messagingSenderId:"245186074460",appId:"1:245186074460:web:5c3778a33a1879eb9e5399"});var O=f.a,h=f.a.firestore(),x=f.a.auth(),m=f.a.storage(),v=n(1),g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),u=s[0],o=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],f=d[1],O=Object(a.useState)(""),h=Object(i.a)(O,2),m=h[0],g=h[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&o(a)},y=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,x.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,x.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:y,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:w,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,className:"authInput",onChange:w}),Object(v.jsx)("input",{type:"submit",value:p?"Create Account":"Login",className:"authInput authSubmit"}),m&&Object(v.jsx)("span",{className:"authError",children:m})]}),Object(v.jsxs)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:[" ",p?"Sign in":"Create Account"," "]})]})},w=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new O.auth.GoogleAuthProvider:"github"===n&&(a=new O.auth.GithubAuthProvider),e.next=4,x.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"3x",style:{marginBottm:30}}),Object(v.jsx)(g,{}),Object(v.jsxs)("div",{className:"autoBtns",children:[Object(v.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(v.jsx)(d.a,{icon:p.b})]}),Object(v.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with GitHub ",Object(v.jsx)(d.a,{icon:p.a})]})]})]})},y=n(35),N=n(19),k=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(a.useState)(!1),c=Object(i.a)(r,2),s=c[0],u=c[1],o=Object(a.useState)(t.text),l=Object(i.a)(o,2),p=l[0],f=l[1],O=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,h.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,m.refFromURL(t.attachmentURL).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return u((function(e){return!e}))},g=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.doc("nweets/".concat(t.id)).update({text:p});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"nweet",children:s?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(v.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:p,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;f(t)},className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(v.jsx)("button",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{children:t.text}),t.attachmentURL&&Object(v.jsx)("img",{src:t.attachmentURL}),n&&Object(v.jsxs)("div",{className:"nweet__actions",children:[Object(v.jsx)("span",{onClick:O,children:Object(v.jsx)(d.a,{icon:N.d})}),Object(v.jsx)("span",{onClick:x,children:Object(v.jsx)(d.a,{icon:N.a})})]})]})})},S=n(55),C=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),l=o[0],p=o[1],f=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,r,i,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return r=m.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=8,r.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:u={text:c,createdAt:Date.now(),creatorId:t.uid,attachmentURL:a},h.collection("nweets").add(u),s(""),p("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(v.jsxs)("div",{className:"factoryInput__input",children:[Object(v.jsx)("input",{value:c,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(v.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(v.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"Add photos"}),Object(v.jsx)(d.a,{icon:N.b})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(v.jsx)("span",{children:"Remove"}),Object(v.jsx)(d.a,{icon:N.c})]})]})},I=function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){h.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)(C,{userObj:t}),Object(v.jsx)("div",{children:c.map((function(e){return Object(v.jsx)(k,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.refreshUser,n=e.userObj,r=Object(o.g)(),c=Object(a.useState)(n.displayName),s=Object(i.a)(c,2),u=s[0],l=s[1],d=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===u){e.next=4;break}return e.next=4,n.updateProfile({displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("nweets").where("creatorID","==",n.uid).orderBy("createdAt").get();case 2:t=e.sent,console.log(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){p()}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",placeholder:"Display name",value:u,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(v.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){x.signOut(),r.push("/")},children:"Log Out"})]})},B=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(v.jsx)(d.a,{icon:p.c,color:"#04AAF",size:"2x"})})}),Object(v.jsx)("li",{children:Object(v.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(v.jsx)(d.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(v.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"'s Profile"):"Profile"})]})})]})})},F=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(v.jsxs)(u.a,{children:[n&&Object(v.jsx)(B,{userObj:a}),Object(v.jsx)(o.d,{children:n?Object(v.jsxs)("div",{style:{maxWidth:800,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(v.jsx)(o.b,{exact:!0,path:"/",children:Object(v.jsx)(I,{userObj:a})}),Object(v.jsx)(o.b,{exact:!0,path:"/profile",children:Object(v.jsx)(A,{refreshUser:t,userObj:a})}),Object(v.jsx)(o.a,{from:"*",to:"/"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.b,{children:Object(v.jsx)(w,{exact:!0,path:"/"})}),Object(v.jsx)(o.a,{from:"*",to:"/"})]})})]})};var L=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),u=s[0],o=s[1];return Object(a.useEffect)((function(){x.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:n?Object(v.jsx)(F,{refreshUser:function(){var e=x.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing...."})};n(51);s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(L,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.8fe26c68.chunk.js.map