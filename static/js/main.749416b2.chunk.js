(this.webpackJsonptodo_react=this.webpackJsonptodo_react||[]).push([[0],{11:function(t,e,o){t.exports={TodoTask:"TodoTask_TodoTask__Gg_td",TodoTask__Content:"TodoTask_TodoTask__Content__2piR8",TodoTask__description:"TodoTask_TodoTask__description__1JP8J",TodoTask__Date:"TodoTask_TodoTask__Date__2xnKk","TodoTask__description--done":"TodoTask_TodoTask__description--done__30aH7",TodoTask__Button:"TodoTask_TodoTask__Button__1zZvK","TodoTask__Button--done":"TodoTask_TodoTask__Button--done__2q2Id","TodoTask__Button--delete":"TodoTask_TodoTask__Button--delete__3cJ3C"}},18:function(t,e,o){t.exports={TodoInput:"TodoInput_TodoInput__2fSxB",TodoInput__input:"TodoInput_TodoInput__input__3jxWi",TodoInput__button:"TodoInput_TodoInput__button__1_cQt","TodoInput__button--disable":"TodoInput_TodoInput__button--disable__KkXpR"}},19:function(t,e,o){t.exports={Modal:"Modal_Modal__1T4ng",Modal__header:"Modal_Modal__header__3z7Aw",Modal__closeButton:"Modal_Modal__closeButton__1WxSv",Modal__X:"Modal_Modal__X__XJOus",Modal__contentWrapper:"Modal_Modal__contentWrapper__2-i_o"}},21:function(t,e,o){t.exports={TodoFilter:"TodoFilter_TodoFilter__2xQ-G",TodoFilter__description:"TodoFilter_TodoFilter__description__2b5A4",TodoFilter__button:"TodoFilter_TodoFilter__button__C1Ay9","TodoFilter__button--active":"TodoFilter_TodoFilter__button--active__1JVUi"}},23:function(t,e,o){t.exports={EditTask:"EditTask_EditTask__3yub3",EditTask__textarea:"EditTask_EditTask__textarea__3rg8f",SubmitButton:"EditTask_SubmitButton__Jkauz"}},25:function(t,e,o){t.exports={TodoApp__Background:"ToDoAppWrapper_TodoApp__Background__2PMDD",TodoApp__Wrapper:"ToDoAppWrapper_TodoApp__Wrapper__3JfRb"}},30:function(t,e,o){t.exports={TodoTasks:"TodoTasks_TodoTasks__3DJlU","TodoTasks__Task--enter":"TodoTasks_TodoTasks__Task--enter__1eIDu","TodoTasks__Task--enterActive":"TodoTasks_TodoTasks__Task--enterActive__MFMf2","TodoTasks__Task--exit":"TodoTasks_TodoTasks__Task--exit__3EzSd","TodoTasks__Task--exitActive":"TodoTasks_TodoTasks__Task--exitActive__2JRe0"}},31:function(t,e,o){t.exports={Backdrop:"Backdrop_Backdrop__3bnRo"}},37:function(t,e,o){},41:function(t,e,o){"use strict";o.r(e);var a=o(1),n=o.n(a),s=o(28),d=o.n(s),i=(o(37),o(32)),c=o(14),r=o(6),_=o(29),u=o(18),l=o.n(u),T=o(2),j=function(t){var e=t.addNewTaskToList,o=Object(a.useState)(""),n=Object(r.a)(o,2),s=n[0],d=n[1],i=[l.a.TodoInput__button];s.length||(i=[l.a.TodoInput__button,l.a["TodoInput__button--disable"]]);var c=function(t){t.preventDefault(),s.trim()&&e(s),d("")};return Object(T.jsxs)("form",{onSubmit:c,className:l.a.TodoInput,children:[Object(T.jsx)("input",{className:l.a.TodoInput__input,value:s,onChange:function(t){return d(t.target.value)},type:"text",placeholder:"I have to do..."}),Object(T.jsx)("button",{onClick:c,type:"submit",className:i.join(" "),children:"Add"})]})},k=o(45),p=o(44),b=o(21),O=o.n(b),f=function(t){var e=t.setFilterBy,o=Object(a.useState)("all"),n=Object(r.a)(o,2),s=n[0],d=n[1],i=function(t){d(t.target.name),e(t.target.name)};return Object(T.jsxs)("div",{className:O.a.TodoFilter,children:[Object(T.jsx)("p",{className:O.a.TodoFilter__description,children:"Show: "}),["all","done","undone"].map((function(t){var e=[O.a.TodoFilter__button];return t===s&&e.push(O.a["TodoFilter__button--active"]),Object(T.jsx)("button",{name:t,onClick:i,className:e.join(" "),children:t},t)}))]})},x=o(11),h=o.n(x),m=function(t,e){var o=t.taskDescription,a=t.status,n=t.taskListDoneHandler,s=t.id,d=t.taskListDeleteHandler,i=t.addedDate,c=t.finishedDate,r=t.turnOnModalHandler,_=[h.a.TodoTask__description];return"done"===a&&(_=[h.a.TodoTask__description,h.a["TodoTask__description--done"]]),Object(T.jsxs)("div",{className:h.a.TodoTask,children:[Object(T.jsxs)("div",{className:h.a.TodoTask__Content,children:[Object(T.jsx)("p",{className:_.join(" "),onClick:function(){return"done"!==a?r(s):null},children:o}),Object(T.jsx)("button",{onClick:function(){return n(s)},className:[h.a.TodoTask__Button,h.a["TodoTask__Button--done"]].join(" "),children:"\u2713"}),Object(T.jsx)("button",{onClick:function(){return d(s)},className:[h.a.TodoTask__Button,h.a["TodoTask__Button--delete"]].join(" "),children:"X"})]}),Object(T.jsxs)("div",{className:h.a.TodoTask__Date,children:[Object(T.jsx)("p",{children:i}),Object(T.jsx)("p",{children:c})]})]})},v=o(30),D=o.n(v),g=function(t){var e=t.setFilterBy,o=t.taskList,a=t.taskListDoneHandler,n=t.taskListDeleteHandler,s=t.turnOnModalHandler,d={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,transition:"ease-in-out"}};return Object(T.jsxs)("div",{className:D.a.TodoTasks,children:[Object(T.jsx)(f,{setFilterBy:e}),o.map((function(t){return Object(T.jsx)(k.a,{children:Object(T.jsx)(p.a.div,Object(c.a)(Object(c.a)({},d),{},{layout:!0,children:Object(T.jsx)(m,{turnOnModalHandler:s,taskListDoneHandler:a,taskListDeleteHandler:n,id:t.id,status:t.status,taskDescription:t.description,addedDate:t.addedDate,finishedDate:t.finishedDate},t.id)}))})}))]})},M=o(31),B=o.n(M),F=function(t){var e=t.show,o=t.clicked;return e?Object(T.jsx)("div",{className:B.a.Backdrop,onClick:o}):null},N=o(19),I=o.n(N),S=function(t){var e=t.background,o=t.modalOpen,a=t.modalName,n=t.modalOFF,s=t.children;return Object(T.jsxs)("div",{className:I.a.Modal,style:{background:e,opacity:o?1:0,transform:o?"translate(-50%, -50%)":"translate(-50%, -200vh)"},children:[Object(T.jsxs)("div",{className:I.a.Modal__header,children:[Object(T.jsx)("p",{children:a}),Object(T.jsx)("div",{className:I.a.Modal__closeButton,onClick:n,children:Object(T.jsx)("div",{className:I.a.Modal__X})})]}),Object(T.jsx)("div",{className:I.a.Modal__contentWrapper,children:s})]})},y=o(23),C=o.n(y),L=function(t){var e=t.show,o=t.turnOffModalHandler,s=t.taskId,d=t.currentTaskDescription,i=t.changeTaskDescription,c=Object(a.useState)(""),_=Object(r.a)(c,2),u=_[0],l=_[1],j=Object(a.useState)(!1),k=Object(r.a)(j,2),p=k[0],b=k[1];Object(a.useEffect)((function(){l(d(s))}),[s]),Object(a.useEffect)((function(){void 0===u||""!==u.trim()&&"\n"!==u&&"\r"!==u?b(!0):b(!1)}),[u]);return Object(T.jsxs)(n.a.Fragment,{children:[Object(T.jsx)(F,{show:e,clicked:o}),Object(T.jsx)(S,{modalOFF:o,modalOpen:e,modalName:"Edit task",background:"linear-gradient(to right, #185a9d, #43cea2)",children:Object(T.jsxs)("form",{className:C.a.EditTask,onSubmit:function(){return i(s,u.trim()),b(!1),void o()},children:[Object(T.jsx)("textarea",{className:C.a.EditTask__textarea,value:u,onChange:function(t){return l(t.target.value)}}),Object(T.jsx)("button",{className:C.a.SubmitButton,type:"submit",disabled:!p,children:"OK"})]})})]})},A=o(25),E=o.n(A),H=function(t){return Object(T.jsx)("div",{className:E.a.TodoApp__Background,children:Object(T.jsx)("div",{className:E.a.TodoApp__Wrapper,children:t.children})})},J=function(){var t=Object(a.useState)("all"),e=Object(r.a)(t,2),o=e[0],n=e[1],s=Object(a.useState)([]),d=Object(r.a)(s,2),u=d[0],l=d[1],k=Object(a.useState)(!1),p=Object(r.a)(k,2),b=p[0],O=p[1],f=Object(a.useState)(null),x=Object(r.a)(f,2),h=x[0],m=x[1],v=function(){var t=new Date,e=t.getHours(),o=t.getMinutes();return"".concat(t.toLocaleDateString()," ").concat(e<10?"0"+e:e,":").concat(o<10?"0"+o:o)};return Object(a.useEffect)((function(){l(JSON.parse(localStorage.getItem("taskList"))||[])}),[]),Object(a.useEffect)((function(){localStorage.setItem("taskList",JSON.stringify(u))}),[u]),Object(T.jsxs)(H,{children:[Object(T.jsx)(L,{show:b,turnOffModalHandler:function(){m(null),O(!1)},taskId:h,currentTaskDescription:function(t){if(null!==t)return u.filter((function(e){return e.id===t}))[0].description},changeTaskDescription:function(t,e){var o=u.map((function(o){return o.id===t&&(o.description=e,o.addedDate=v()),o}));l(o)}}),Object(T.jsx)(j,{addNewTaskToList:function(t){var e={description:t,id:Object(_.v4)(),status:"undone",addedDate:v(),finishedDate:""};l([].concat(Object(i.a)(u),[e]))}}),Object(T.jsx)(g,{taskList:u.filter((function(t){return"all"===o||t.status===o})),turnOnModalHandler:function(t){m(t),O(!0)},setFilterBy:n,taskListDoneHandler:function(t){var e=u.map((function(e){return e.id===t?"done"===e.status?Object(c.a)(Object(c.a)({},e),{},{status:"undone",finishedDate:""}):Object(c.a)(Object(c.a)({},e),{},{status:"done",finishedDate:v()}):e}));l(e)},taskListDeleteHandler:function(t){var e=u.filter((function(e){return e.id!==t}));l(e)}})]})};var w=function(){return Object(T.jsx)(J,{})},W=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,46)).then((function(e){var o=e.getCLS,a=e.getFID,n=e.getFCP,s=e.getLCP,d=e.getTTFB;o(t),a(t),n(t),s(t),d(t)}))};d.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(w,{})}),document.getElementById("root")),W()}},[[41,1,2]]]);
//# sourceMappingURL=main.749416b2.chunk.js.map