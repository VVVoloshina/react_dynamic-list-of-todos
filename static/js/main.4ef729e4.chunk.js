(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),s=a.n(c),o=a(5),l=a.n(o),i=a(6),u=a(1),d=a(2),m=a(4),p=a(3),f=(a(16),a(17),a(18),a(7)),h=a.n(f),v=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todoId:0,filterStatus:"all",filterTitle:""},e.selectUser=function(t,a){e.setState({todoId:t}),e.props.onSelectUser(a)},e.setFilter=function(t){e.setState({filterStatus:t.target.value})},e.onInputHandler=function(t){e.setState({filterTitle:t.target.value})},e.filterByStatus=function(t){switch(e.state.filterStatus){case"completed":return t.completed;case"active":return!t.completed;default:return!0}},e.filterByTitle=function(t){var a=e.state.filterTitle;if(null!==t.title)return t.title.toLowerCase().includes(a.toLowerCase())},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.todos,a=this.state.todoId,n=t.filter(this.filterByStatus).filter(this.filterByTitle);return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("form",null,r.a.createElement("label",{className:"TodoList__label"},"Todo filter:",r.a.createElement("input",{onChange:this.onInputHandler,className:"TodoList__filter"})),r.a.createElement("label",{className:"TodoList__label"},"Filter by status:",r.a.createElement("select",{className:"TodoList__select",onChange:function(t){return e.setFilter(t)}},r.a.createElement("option",{value:"all"},"Show all"),r.a.createElement("option",{value:"active"},"Show active"),r.a.createElement("option",{value:"completed"},"Show completed")))),r.a.createElement("ul",{className:"TodoList__list"},n.map((function(t){return r.a.createElement("li",{key:t.id,className:h()("TodoList__item",{"TodoList__item--checked":t.completed,"TodoList__item--unchecked":!t.completed})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:t.completed,readOnly:!0}),r.a.createElement("p",null,t.title)),r.a.createElement("button",{onClick:function(){return e.selectUser(t.id,t.userId)},className:h()("TodoList__user-button","button",{"TodoList__user-button--selected":t.id===a}),type:"button"},"User #".concat(t.userId)))})))))}}]),a}(r.a.Component);function _(e){return fetch("".concat("https://mate-api.herokuapp.com").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," --- ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))}function E(e){return _("/users/".concat(e))}a(19);var b=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e.loadData=Object(i.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e.props.userId);case 2:a=t.sent,e.setState({user:a});case 4:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadData()}},{key:"render",value:function(){var e=this.state.user,t=this.props.onClearUser;return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: ".concat(e.id))),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone),r.a.createElement("button",{type:"button",className:"button CurrentUser__clear",onClick:t},"Clear")))}}]),a}(r.a.Component),y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.handleSelectUser=function(t){e.setState({selectedUserId:t})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("/todos");case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.todos,n=t.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(v,{todos:a,onSelectUser:this.handleSelectUser})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(b,{userId:n,onClearUser:function(){return e.handleSelectUser(0)}}):"No user selected")))}}]),a}(r.a.Component);s.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.4ef729e4.chunk.js.map