"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[459],{478:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var n=a(413),r=a(366);var l=a(791),i="text-field_wrapper__F5-wH",o="text-field_label__7jSYo",s="text-field_input__zcppx",u=a(184),c=["label","handleChange"],d=function(e){var t=e.label,a=e.handleChange,d=function(e,t){if(null==e)return{};var a,n,l=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}(e,c),m=(0,l.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}()}),[]);return(0,u.jsxs)("div",{className:i,children:[(0,u.jsx)("label",{htmlFor:m,className:o,children:t}),(0,u.jsx)("input",(0,n.Z)((0,n.Z)({id:m,onChange:a},d),{},{className:s}))]})},m=a(942),h=a(439),p=function(e){var t=e.initialState,a=e.onSubmit,r=(0,l.useState)((0,n.Z)({},t)),i=(0,h.Z)(r,2),o=i[0],s=i[1];return{state:o,setState:s,handleChange:function(e){var t=e.target;s((function(e){var a=t.name,r=t.value,l=t.type,i=t.checked,o="chekbox"===l?i:r;return(0,n.Z)((0,n.Z)({},e),{},(0,m.Z)({},a,o))}))},handleSubmit:function(e){e.preventDefault(),a((0,n.Z)({},o)),s((0,n.Z)({},t))}}},f={name:"",email:"",password:""},b={name:{type:"text",required:!0,autoComplete:"off",placeholder:"Name",label:"User name"},email:{type:"text",required:!0,autoComplete:"off",placeholder:"Email",label:"User email"},password:{type:"text",required:!0,autoComplete:"off",placeholder:"Password",label:"User password"}},g="register-form_form__7sl83",x="button_btn__zbgd-",v=function(e){var t=e.children,a=e.type,n=void 0===a?"submit":a;return(0,u.jsx)("button",{type:n,className:x,children:t})},_=function(e){var t=e.onSubmit,a=p({initialState:f,onSubmit:t}),r=a.state,l=a.handleChange,i=a.handleSubmit,o=r.name,s=r.email,c=r.password;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{onSubmit:i,className:g,children:[(0,u.jsx)(d,(0,n.Z)({value:o,handleChange:l},b.name)),(0,u.jsx)(d,(0,n.Z)({value:s,handleChange:l},b.email)),(0,u.jsx)(d,(0,n.Z)({value:c,handleChange:l},b.password)),(0,u.jsx)(v,{children:"Register"})]})})},j=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"RegisterPage"}),(0,u.jsx)(_,{})]})}}}]);
//# sourceMappingURL=459.f06099b3.chunk.js.map