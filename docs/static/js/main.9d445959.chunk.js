(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(n,e,t){n.exports=t(38)},38:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(14),i=t.n(o),c=t(4),u=t.n(c),l=t(6),f=t(41),s=t(1),d=t(2);function b(){var n=Object(s.a)(["\n  color: #1e71ff;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background: #deeaff;\n  }\n"]);return b=function(){return n},n}function p(){var n=Object(s.a)(["\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    color: red;\n    background: #ffcfcf;\n  }\n"]);return p=function(){return n},n}function m(){var n=Object(s.a)(["\n  margin: 0 10px;\n"]);return m=function(){return n},n}function x(){var n=Object(s.a)(['\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.04);\n  box-shadow: inset 2px 2px 10px -10px;\n  position: relative;\n\n  &:after {\n    content: "";\n    position: absolute;\n    display: none;\n    left: 6px;\n    top: 2px;\n    width: 5px;\n    height: 10px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n\n  ',"\n"]);return x=function(){return n},n}function g(){var n=Object(s.a)(["\n  display: flex;\n  text-align: left;\n  flex-grow: 1;\n  line-height: 20px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  &:hover {\n    background: #eee;\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(s.a)(["\n  margin: 0;\n  display: flex;\n  flex-grow: 1;\n  padding: 20px;\n  font-size: 18px;\n"]);return h=function(){return n},n}function v(){var n=Object(s.a)(["\n  width: 60px;\n  height: 60px;\n  line-height: 60px;\n  padding: 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.2s ease;\n"]);return v=function(){return n},n}function j(){var n=Object(s.a)(["\n  border: none;\n  background: transparent;\n  padding: 0;\n"]);return j=function(){return n},n}function O(){var n=Object(s.a)(["\n  padding: 20px 0 20px 20px;\n  height: 60px;\n  flex-grow: 1;\n  font-size: 18px;\n  border: none;\n  width: calc(100% - 60px);\n"]);return O=function(){return n},n}function k(){var n=Object(s.a)([""]);return k=function(){return n},n}function E(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  line-height: 24px;\n\n  border-top: 1px solid #eee;\n"]);return E=function(){return n},n}function w(){var n=Object(s.a)(["\n  height: 70px;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s ease;\n\n  &:hover {\n    color: #1e71ff;\n    background: #deeaff;\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(s.a)(["\n  padding: 20px;\n  flex-grow: 1;\n  line-height: 30px;\n  margin: 0;\n"]);return y=function(){return n},n}function z(){var n=Object(s.a)(["\n  margin: 0;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return z=function(){return n},n}function C(){var n=Object(s.a)(["\n  background: #fff;\n  max-width: 600px;\n  overflow: hidden;\n  box-shadow: 2px 2px 6px -6px;\n  margin: 10px;\n  transition: all 0.2s ease;\n\n  @media (min-width: 620px) {\n    margin: 60px auto;\n    border-radius: 6px;\n  }\n"]);return C=function(){return n},n}function S(){var n=Object(s.a)(['\n  * {\n    box-sizing: inherit;\n  }\n  body {\n    margin: 0;\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n      background-image: linear-gradient(45deg, #a7f0ff, #e0beff);\n      background-size: cover;\n      background-attachment: fixed;\n      min-height: 100%;\n  }\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n      monospace;\n  }\n']);return S=function(){return n},n}var A=Object(d.a)(S()),I=d.b.div(C()),M=d.b.header(z()),B=d.b.h1(y()),D=d.b.a.attrs({target:"_blank",rel:"noopener noreferrer"})(w()),F=d.b.div(E()),J=Object(d.b)(F).attrs({as:"form"})(k()),N=d.b.input(O()),U=d.b.button(j()),q=Object(d.b)(U)(v()),H=d.b.div(h()),R=Object(d.b)(U)(g()),T=d.b.div(x(),function(n){return n.checked&&"\n    background: #1e71ff;\n    &:after {\n      display: block;\n    }\n  "}),_=d.b.p(m()),G=Object(d.b)(q)(p()),K=Object(d.b)(q)(b()),L=t(5),P=t(39),Q=function(n){var e=n.checked;return a.a.createElement(T,{checked:e})},V=function(n){var e=n.onClick;return a.a.createElement(G,{onClick:e},a.a.createElement(P.a,{size:16}))},W=function(n){var e=n.id,t=n.text,r=n.done,o=Object(c.useSelector)(function(n){return n.items.findIndex(function(n){return n.id===e})}),i=Object(c.useActions)("items").remove,u=Object(c.useActions)("items.".concat(o)).extend;return-1===o?null:a.a.createElement(F,null,a.a.createElement(R,{onClick:function(){return u({done:!r})}},a.a.createElement(H,null,a.a.createElement(Q,{checked:r}),a.a.createElement(_,null,t))),a.a.createElement(V,{onClick:function(){return i(o)}}))},X=function(){var n=Object(c.useStore)("items"),e=Object(L.a)(n,1)[0];return e.length?e.slice().sort(function(n,e){return n.done===e.done?0:n.done?1:-1}).map(function(n){return a.a.createElement(W,Object.assign({key:n.id},n))}):null},Y=t(40),Z=t(17),$=t.n(Z),nn=function(){return a.a.createElement(K,null,a.a.createElement(Y.a,{size:18}))},en=function(){var n=Object(c.useStore)("items"),e=Object(L.a)(n,2),t=e[0],r=e[1].append;return a.a.createElement(J,{onSubmit:$()(function(n){return r(n)},{reset:!0}),autoComplete:"off"},a.a.createElement(N,{type:"hidden",name:"id",value:t.length}),a.a.createElement(N,{name:"text",placeholder:t.length?"Add a new item":"Add the first item",required:!0,autoComplete:"off"}),a.a.createElement(nn,null))},tn=function(){var n=Object(c.useStore)("items"),e=Object(L.a)(n,1)[0];return Object(r.useEffect)(function(){l.local.items=e},[e]),null};i.a.render(a.a.createElement(function(){return a.a.createElement(u.a,{items:l.local.items||[]},a.a.createElement(A,null),a.a.createElement(tn,null),a.a.createElement(I,null,a.a.createElement(M,null,a.a.createElement(B,null,"To Do"),a.a.createElement(D,{href:"https://github.com/franciscop/todo"},a.a.createElement(f.a,{size:26}))),a.a.createElement(X,null),a.a.createElement(en,null)))},null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9d445959.chunk.js.map