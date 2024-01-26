(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(6),n=c.n(a),l=c(2),i=c(8),d=c(1),o=(c(13),c(14),c(7)),r=c.n(o),j=c(0),u=function(e){var t=e.items,c=e.selectedTodo,s=e.setSelectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":(null===c||void 0===c?void 0:c.id)===e.id}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded ".concat(e.completed?"has-text-success":"has-text-danger"),children:Object(j.jsx)("p",{className:"".concat(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){s(e)}(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"far fa-eye".concat((null===c||void 0===c?void 0:c.id)!==e.id?"":"-slash")})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=function(e){var t=e.filterOption,c=e.query,a=e.setQuery;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:[Object(j.jsx)("option",{value:s.All,children:"All"}),Object(j.jsx)("option",{value:s.Active,children:"Active"}),Object(j.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(d.useState)(null),a=Object(l.a)(s,2),n=a[0],i=a[1],o=Object(d.useState)(!0),r=Object(l.a)(o,2),u=r[0],b=r[1];Object(d.useEffect)((function(){var e;(e=null===t||void 0===t?void 0:t.userId,m("/users/".concat(e))).then(i).finally((function(){return b(!1)}))}),[t]);return Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),u?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(null),i(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(j.jsx)("span",{className:"has-text-success",children:"Done"}):Object(j.jsx)("span",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})};var x=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(!1),o=Object(l.a)(n,2),r=o[0],x=o[1],f=Object(d.useState)(s.All),v=Object(l.a)(f,2),p=v[0],N=v[1],y=Object(d.useState)(""),g=Object(l.a)(y,2),k=g[0],S=g[1],C=Object(d.useState)(null),T=Object(l.a)(C,2),w=T[0],A=T[1],B=function(e,t){var c=t.filterBy,a=t.query,n=Object(i.a)(e),l=a.trim().toLowerCase();switch(c){case s.Active:n=e.filter((function(e){return!e.completed}));break;case s.Completed:n=e.filter((function(e){return e.completed}))}return l?n.filter((function(e){return e.title.toLowerCase().includes(l)})):n}(c,{filterBy:p,query:k});return Object(d.useEffect)((function(){x(!0),m("/todos").then(a).finally((function(){return x(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{filterOption:N,query:k,setQuery:function(e){S(e)}})}),Object(j.jsxs)("div",{className:"block",children:[r&&Object(j.jsx)(h,{}),!r&&c.length>0&&Object(j.jsx)(u,{items:B,selectedTodo:w,setSelectedTodo:A})]})]})})}),w&&Object(j.jsx)(O,{selectedTodo:w,setSelectedTodo:A})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cc7e35e9.chunk.js.map