(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(4),r=c.n(o),a=c(0),i=c.n(a),s=(c(19),function(){return Object(n.jsxs)("div",{className:"attribution",children:["Challenge by ",Object(n.jsx)("a",{href:"//www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by ",Object(n.jsx)("a",{href:"//github.com/stephenduenas",target:"_blank",rel:"noreferrer",children:"Stephen Due\xf1as"}),"."]})}),l=(c(20),function(){return Object(n.jsx)("div",{className:"banner-img"})}),d=c(3),j=c(2),b=c(7),u=c(6),m=(c(21),c.p+"static/media/icon-cross.6ee81d30.svg"),f=c.p+"static/media/icon-check.a8fb15d0.svg",O=function(e){var t=e.oItem,c=e.iIndex,o=e.onCheckClick,r=e.onRemoveClick,a=e.id;return Object(n.jsx)(u.b,{draggableId:a,index:c,children:function(e){return Object(n.jsxs)("li",Object(d.a)(Object(d.a)(Object(d.a)({className:"todo__item"},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:[Object(n.jsx)("span",{className:"todo__checkbox ".concat(!0===t.is_completed?"todo__checkbox--checked":""),onClick:function(){o(c)},children:Object(n.jsx)("img",{className:"todo__checkbox__check",src:f})}),Object(n.jsx)("p",{children:t.name}),Object(n.jsx)("span",{className:"todo__delete",onClick:function(){r(c)},children:Object(n.jsx)("img",{src:m,alt:"delete button"})})]}))}})},h=(c(28),function(e){var t=e.todo_list,c=e.onSetTodo,o=Object(a.useRef)(null),r=function(){var e=o.current.value,n=Object(j.a)(t),r={is_completed:!1,name:e};0!==e.length&&(n.push(r),localStorage.setItem("todo_list",JSON.stringify(n)),c(Object(j.a)(n)),o.current.value="")};return Object(n.jsxs)("form",{className:"todo__form",onSubmit:function(e){return function(e){e.preventDefault(),r()}(e)},children:[Object(n.jsx)("span",{className:"todo__checkbox",onClick:r}),Object(n.jsx)("input",{ref:o,type:"text",placeholder:"Create a new todo...",onChange:function(){var e=o.current.value;e.length>50&&(o.current.value=e.slice(0,50))}})]})}),p=(c(29),c.p+"static/media/icon-sun.910b1f9a.svg"),x=c.p+"static/media/icon-moon.6c03114b.svg",_=function(){var e=Object(a.useState)(!0),t=Object(b.a)(e,2),c=t[0],o=t[1];return Object(n.jsxs)("div",{className:"todo__header",children:[Object(n.jsx)("h1",{children:"Todo"}),Object(n.jsx)("span",{className:"mode",onClick:function(){var e="light";c?document.body.classList.add(e):document.body.classList.remove(e),o(!c)},children:Object(n.jsx)("img",{src:"".concat(c?p:x),alt:"switch mode"})})]})},g=(c(30),function(e){var t=e.todo_list,c=e.onSetTodo,o=e.filter,r=e.onSetFilter,a=["All","Active","Completed"],i=a.map((function(e,t){return Object(n.jsx)("div",{className:"".concat(o===e?"todo__handle__filter--active":""),onClick:function(){r(a[t])},children:e},e)})),s=t.reduce((function(e,t){return!1===t.is_completed?e+1:e}),0);return Object(n.jsxs)("div",{className:"todo__handle",children:[Object(n.jsxs)("div",{children:[s," items left"]}),Object(n.jsx)("div",{className:"todo__handle__filter",children:i}),Object(n.jsx)("div",{onClick:function(){localStorage.removeItem("todo_list"),c([])},children:"Clear Completed"})]})}),v=(c(31),function(e){var t=e.dark_mode,c=e.onSetDarkMode,o="todo_list";if(!localStorage.getItem(o)){var r=JSON.stringify([{is_completed:!1,name:"Exercise"}]);localStorage.setItem(o,r)}var i=Object(a.useState)("All"),s=Object(b.a)(i,2),l=s[0],m=s[1],f=Object(a.useState)(JSON.parse(localStorage.getItem(o))),p=Object(b.a)(f,2),x=p[0],v=p[1],S=function(e){var t=Object(j.a)(x);t[e].is_completed=!t[e].is_completed,localStorage.setItem(o,JSON.stringify(t)),v(t)},k=function(e){var t=Object(j.a)(x);t.splice(e,1),0===t.length?localStorage.removeItem(o):localStorage.setItem(o,JSON.stringify(t)),v(t)},N=x.map((function(e,t){var c="".concat(t).concat(e.name);return"All"===l||"Active"===l&&!1===e.is_completed||"Completed"===l&&!0===e.is_completed?Object(n.jsx)(O,{oItem:e,iIndex:t,id:"".concat(c),onCheckClick:S,onRemoveClick:k},"".concat(c)):null}));return Object(n.jsxs)("div",{className:"todo",children:[Object(n.jsx)(_,{dark_mode:t,onSetDarkMode:c}),Object(n.jsx)(h,{todo_list:x,onSetTodo:v}),Object(n.jsx)(u.a,{onDragEnd:function(e){var t=e.source,c=e.destination;if(c&&(t.droppableId!==c.droppableId||t.index!==c.index)){var n=Object(j.a)(x);n.splice(c.index,0,n.splice(t.index,1)[0]),localStorage.setItem(o,JSON.stringify(n)),v(n)}},children:Object(n.jsx)(u.c,{droppableId:"1",children:function(e){return Object(n.jsxs)("ul",Object(d.a)(Object(d.a)({className:"todo__list",ref:e.innerRef},e.droppableProps),{},{children:[N,e.placeholder]}))}})}),Object(n.jsx)(g,{todo_list:x,onSetTodo:v,onSetFilter:m,filter:l}),Object(n.jsx)("p",{children:"Drag and drop to reorder list"})]})}),S=function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(l,{}),Object(n.jsx)(v,{}),Object(n.jsx)(s,{})]})};c(32);r.a.render(Object(n.jsx)(S,{}),document.querySelector("#root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e27002dd.chunk.js.map