(this.webpackJsonpgithooks=this.webpackJsonpgithooks||[]).push([[0],{16:function(e,n,t){e.exports=t(27)},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(10),c=t.n(i),o=t(11),u=t(3),l=t.n(u),s=t(5),f=t(4),p=t(1),b=t(2);function m(){var e=Object(p.a)(["\n  margin-top: 30px;\n  grid-row: 3;\n  grid-column: 1 / -1;\n  justify-self: center;\n\n  li {\n    margin: 6px;\n  }\n\n  a {\n    text-decoration: none;\n    color: white;\n  }\n\n  @media only screen and (max-width: 600px) {\n    font-size: 0.6em;\n  }\n"]);return m=function(){return e},e}function h(){var e=Object(p.a)(["\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n"]);return h=function(){return e},e}function d(){var e=Object(p.a)(["\n  font-weight: 600;\n  width: 200px;\n  height: 40px;\n  margin-right: 1rem;\n"]);return d=function(){return e},e}function g(){var e=Object(p.a)(["\n  grid-column: 1 / -1;\n  grid-row: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n"]);return g=function(){return e},e}function v(){var e=Object(p.a)(["\n  grid-column: 1 / -1;\n  grid-row: 1;\n  justify-self: center;\n  align-self: center;\n\n  font-size: 1.8em;\n\n  @media only screen and (max-width: 600px) {\n    font-size: 0.8em;\n  }\n"]);return v=function(){return e},e}function O(){var e=Object(p.a)(["\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: 10vh 10vh 1fr;\n"]);return O=function(){return e},e}function j(){var e=Object(p.a)(["\n    html, body {\n        box-sizing: border-box;\n        background-color: rgb(40, 40, 40);\n        height: 100%;\n        font-family: 'Roboto';\n        font-size: 1.3em;\n        color: white;\n    }\n    ul {\n      list-style: none;\n    }\n    *{\n      margin: 0px;\n      padding: 0px;\n    }\n"]);return j=function(){return e},e}var y=Object(b.a)(j()),x=b.b.div(O()),w=b.b.div(v()),E=b.b.div(g()),k=b.b.input(d()),P=b.b.img(h()),S=b.b.div(m());function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(t,!0).forEach(function(n){Object(o.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}c.a.render(a.a.createElement(a.a.Fragment,null,a.a.createElement(function(){var e=Object(r.useState)([]),n=Object(f.a)(e,2),t=n[0],i=n[1],c=Object(r.useState)(""),o=Object(f.a)(c,2),u=o[0],p=o[1],b=Object(r.useState)("Fill with a valid username"),m=Object(f.a)(b,2),h=m[0],d=m[1],g=Object(r.useState)("https://api.adorable.io/avatars/78/abott@adorable.png"),v=Object(f.a)(g,2),O=v[0],j=v[1];function y(e){var n=t.map(function(n){return n.id===e?F({},n,{favorite:!n.favorite}):F({},n)});i(n)}return Object(r.useEffect)(function(){function e(){return(e=Object(s.a)(l.a.mark(function e(){var n,t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(u));case 2:if(200!==(n=e.sent).status){e.next=11;break}return e.next=6,n.json();case 6:t=e.sent,d(""),j(t.avatar_url),e.next=12;break;case 11:j("https://api.adorable.io/avatars/78/abott@adorable.png");case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[u]),Object(r.useEffect)(function(){function e(){return(e=Object(s.a)(l.a.mark(function e(){var n,t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(u,"/repos"));case 2:if(200!==(n=e.sent).status){e.next=11;break}return e.next=6,n.json();case 6:t=e.sent,d(""),i(t),e.next=13;break;case 11:i([]),d("Fill with a valid username");case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}""!==u?function(){e.apply(this,arguments)}():(d("Fill with a valid username"),i([]))},[u]),Object(r.useEffect)(function(){var e=t.filter(function(e){return e.favorite});document.title="Voc\xea tem ".concat(e.length," favoritos")},[t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(x,null,a.a.createElement(w,null,u," github repository list"),a.a.createElement(E,null,a.a.createElement(k,{onChange:function(e){p(e.target.value)},placeholder:"Type a user name"}),a.a.createElement(P,{src:O})),a.a.createElement(S,null,a.a.createElement("ul",null,t.length<=0?a.a.createElement("p",null,h):t.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement("a",{href:e.html_url},e.name),e.favorite?a.a.createElement("span",{role:"img","aria-label":"favorite",onClick:function(){return y(e.id)},style:{cursor:"pointer"}}," ","\ud83c\udf1f"," "):a.a.createElement("span",{role:"img","aria-label":"shining-star",onClick:function(){return y(e.id)},style:{cursor:"pointer"}}," ","\u2b50"," "))})))))},null),a.a.createElement(y,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ede3e2b1.chunk.js.map