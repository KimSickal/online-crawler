(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(41)},27:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),i=(n(27),n(3)),s=n(4),u=n(6),l=n(5),p=n(7),h=n(2),O=n(10),b=n(21),f=n(14),m=function(e){return e.navigator},v=Object(f.a)([m],function(e){return e.path}),d=Object(f.a)([m],function(e){return e.isOpen}),j=(n(33),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={responseText:""},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"requestCORS",value:function(e){console.log("asdf");var t=new XMLHttpRequest;t.open("GET","https://cors-anywhere.herokuapp.com/"+e),t.onreadystatechange=function(){if(t.readyState===t.DONE&&200===t.status){var e=document.getElementById("iframe");if(null===e)return;e.src=URL.createObjectURL(t.response)}},t.responseType="blob",t.send()}},{key:"componentDidMount",value:function(){var e=this.props.path;this.requestCORS(e)}},{key:"componentDidUpdate",value:function(e){var t=this.props.path;e.path!==t&&this.requestCORS(t)}},{key:"render",value:function(){return a.createElement("iframe",{id:"iframe",src:""},a.createElement("p",null,"Your browser does not support iframes."))}}]),t}(a.Component));var g,E=Object(O.b)(function(e){return{path:v(e)}})(j);function y(e){return{type:g.UPDATE_PATH,path:e}}function k(){return{type:g.TOGGLE_OPEN}}!function(e){e.UPDATE_PATH="UPDATE_PATH",e.TOGGLE_OPEN="TOGGLE_OPEN"}(g||(g={}));var C=n(1),P=n(9),_="https://naver.com",w=(n(35),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={inputPath:_},n.onChange=n.onChange.bind(Object(C.a)(Object(C.a)(n))),n.onClick=n.onClick.bind(Object(C.a)(Object(C.a)(n))),n.onKeyPress=n.onKeyPress.bind(Object(C.a)(Object(C.a)(n))),n.onClickArrowButton=n.onClickArrowButton.bind(Object(C.a)(Object(C.a)(n))),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){this.setState({inputPath:e.target.value})}},{key:"onClick",value:function(){var e=this.state.inputPath;this.props.updatePath(e)}},{key:"onKeyPress",value:function(e){return 13===e.charCode&&this.onClick(),!1}},{key:"onClickArrowButton",value:function(e){var t=document.getElementById("iframe");return null!==t&&(null!==t.contentWindow&&(t.contentWindow.history.go(e),!1))}},{key:"render",value:function(){var e=this,t=this.state.inputPath,n=this.props.isOpen?P.a:P.b;return a.createElement("div",{className:"navigator_searchBar"},a.createElement(P.c,{className:"navigator_searchBar_icon",onClick:function(){return e.onClickArrowButton(-1)}}),a.createElement(P.d,{className:"navigator_searchBar_icon",onClick:function(){return e.onClickArrowButton(1)}}),a.createElement(P.e,{className:"navigator_searchBar_icon"}),a.createElement("input",{className:"navigator_searchBar_input",type:"text",value:t,onChange:this.onChange,onKeyPress:this.onKeyPress}),a.createElement("div",{className:"navigator_searchBar_button",onClick:this.onClick},a.createElement(P.f,{className:"navigator_searchBar_icon",style:{marginLeft:"4.5px",marginTop:"2.5px"}})),a.createElement(n,{className:"navigator_searchBar_icon",onClick:this.props.toggleOpen,style:{marginRight:"10px"}}))}}]),t}(a.Component)),B=(n(37),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.isOpen;return a.createElement("div",{className:"navigator",style:{height:e?"300px":void 0}},a.createElement(w,this.props))}}]),t}(a.Component));var T=Object(O.b)(function(e){return{isOpen:d(e)}},function(e){return Object(h.b)({updatePath:y,toggleOpen:k},e)})(B),N=n(15),A={path:_,isOpen:!0};var G=Object(h.c)({navigator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=e.isOpen;switch(t.type){case g.UPDATE_PATH:return Object(N.a)({},e,{path:t.path});case g.TOGGLE_OPEN:return Object(N.a)({},e,{isOpen:!n});default:return e}}}),L=(n(39),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.createElement(O.a,{store:Object(h.d)(G,Object(h.a)(b.a))},a.createElement("div",{className:"App"},a.createElement(E,null),a.createElement(T,null)))}}]),t}(a.Component));o.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.412582d5.chunk.js.map