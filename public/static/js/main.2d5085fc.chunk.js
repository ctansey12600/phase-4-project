(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(4),c=n.n(r),s=(n(9),n(2)),i=n.p+"static/media/logo.6ce24c58.svg",u=(n(10),n(0));var l=function(e){var t=e.onLogin,n=Object(a.useState)(""),o=Object(s.a)(n,2),r=o[0],c=o[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),j=l[0],b=l[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={username:r,password:j};fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){return t(e)}))},children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(u.jsx)("input",{type:"text",autoComplete:"off",value:r,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(u.jsx)("input",{type:"password",autoComplete:"off",value:j,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Login"})]})};var j=function(e){var t=e.onLogin,n=Object(a.useState)(""),o=Object(s.a)(n,2),r=o[0],c=o[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),j=l[0],b=l[1],p=Object(a.useState)(""),h=Object(s.a)(p,2),f=h[0],d=h[1],O=Object(a.useState)(""),m=Object(s.a)(O,2),g=m[0],x=m[1],v=Object(a.useState)(""),C=Object(s.a)(v,2),S=C[0],y=C[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={first_name:g,last_name:S,username:r,password:j,password_confirmation:f};fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then(t)},children:[Object(u.jsx)("label",{htmlFor:"first_name",children:"First Name:"}),Object(u.jsx)("input",{type:"text",autoComplete:"off",id:"first_name",value:g,onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"last_name",children:"Last Name:"}),Object(u.jsx)("input",{type:"text",autoComplete:"off",id:"last_name",value:S,onChange:function(e){return y(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(u.jsx)("input",{type:"text",autoComplete:"off",id:"username",value:r,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(u.jsx)("input",{type:"password",autoComplete:"off",id:"password",value:j,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"password_confirmation",children:"Confirm Password:"}),Object(u.jsx)("input",{type:"password",autoComplete:"off",id:"password_confirmation",value:f,onChange:function(e){return d(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Sign Up"})]})};var b=function(e){var t=e.onLogin,n=Object(a.useState)(!0),o=Object(s.a)(n,2),r=o[0],c=o[1];return Object(u.jsx)("section",{children:r?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{onLogin:t}),Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:["Don't have an account?",Object(u.jsx)("button",{onClick:function(){return c(!1)},children:"Sign Up"})]})})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{onLogin:t}),Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:["Already have an account?",Object(u.jsx)("button",{onClick:function(){return c(!0)},children:"Log In"})]})})]})})};var p=function(e){var t=e.setUser;return Object(u.jsx)("nav",{children:Object(u.jsx)("button",{onClick:function(){fetch("/logout",{method:"DELETE"}).then((function(e){e.ok&&t(null)}))},children:"Logout"})})};var h=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],o=t[1];return console.log(n),Object(a.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return o(e)}))}))}),[]),n?Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{setUser:o}),Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(u.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})]}):Object(u.jsx)(b,{onLogin:o})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),f()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.2d5085fc.chunk.js.map