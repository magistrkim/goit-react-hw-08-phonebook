"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[796],{341:function(e,t){t.Z={name:{type:"text",required:!0,autoComplete:"off",placeholder:"Name",label:"User name"},email:{type:"text",required:!0,autoComplete:"off",placeholder:"Email",label:"User email"},password:{type:"text",required:!0,autoComplete:"off",placeholder:"Password",label:"User password"}}},422:function(e,t){t.Z={name:"",email:"",password:""}},688:function(e,t,n){n.d(t,{Z:function(){return l}});var r="button_btn__zbgd-",a=n(184),l=function(e){var t=e.children,n=e.type,l=void 0===n?"submit":n;return(0,a.jsx)("button",{type:l,className:r,children:t})}},847:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(413),a=n(366);var l=n(791),o="text-field_wrapper__F5-wH",i="text-field_label__7jSYo",u="text-field_input__zcppx",s=n(184),c=["label","handleChange"],d=function(e){var t=e.label,n=e.handleChange,d=function(e,t){if(null==e)return{};var n,r,l=(0,a.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,c),f=(0,l.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}()}),[]);return(0,s.jsxs)("div",{className:o,children:[(0,s.jsx)("label",{htmlFor:f,className:i,children:t}),(0,s.jsx)("input",(0,r.Z)((0,r.Z)({id:f,onChange:n},d),{},{className:u}))]})}},943:function(e,t,n){var r=n(942),a=n(413),l=n(439),o=n(791);t.Z=function(e){var t=e.initialState,n=e.onSubmit,i=(0,o.useState)((0,a.Z)({},t)),u=(0,l.Z)(i,2),s=u[0],c=u[1];return{state:s,setState:c,handleChange:function(e){var t=e.target;c((function(e){var n=t.name,l=t.value,o=t.type,i=t.checked,u="chekbox"===o?i:l;return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},n,u))}))},handleSubmit:function(e){e.preventDefault(),n((0,a.Z)({},s)),c((0,a.Z)({},t))}}}},796:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(6),a=n(413),l=n(847),o=n(943),i=n(422),u=n(341),s=n(640),c=n(688),d=n(184),f=function(e){var t=e.onSubmit,n=(0,o.Z)({initialState:i.Z,onSubmit:t}),r=n.state,f=n.handleChange,m=n.handleSubmit,h=r.name,p=r.email,Z=r.password;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{onSubmit:m,className:s.Z.form,children:[(0,d.jsx)(l.Z,(0,a.Z)({value:h,handleChange:f},u.Z.name)),(0,d.jsx)(l.Z,(0,a.Z)({value:p,handleChange:f},u.Z.email)),(0,d.jsx)(l.Z,(0,a.Z)({value:Z,handleChange:f},u.Z.password)),(0,d.jsx)(c.Z,{children:"Register"})]})})},m=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(r.Z,{children:"Register page"}),(0,d.jsx)(f,{})]})}},640:function(e,t){t.Z={form:"register-form_form__7sl83"}}}]);
//# sourceMappingURL=796.a4ad3993.chunk.js.map