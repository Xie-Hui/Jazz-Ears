(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{6156:function(t,u,L){"use strict";function n(t,u,L){return u in t?Object.defineProperty(t,u,{value:L,enumerable:!0,configurable:!0,writable:!0}):t[u]=L,t}L.d(u,{Z:function(){return n}})},5360:function(t,u,L){"use strict";L.d(u,{W8:function(){return n},Pn:function(){return M}});var n=["C2","C5"],M={0:"1",1:"b9",2:"9",3:"b3",4:"3",5:"11",6:"#11",7:"5",8:"b13",9:"13",10:"b7",11:"7"}},5703:function(t,u,L){"use strict";L.r(u),L.d(u,{default:function(){return k}});var n,M,e,i,j,r,c,o,I,a,N,y,g,s,S,l,x=L(5893),T=L(18),D=L(7146),C=L(9878),z=L.n(C),A=L(9859),d=L.n(A),E=L(7294),f=L(5329),h=L(7423),Z=L(8822),b=L(6156),O="\u2191",m="\u2193",_=(n={},(0,b.Z)(n,O,"b2"),(0,b.Z)(n,m,"7"),M={},(0,b.Z)(M,O,"2"),(0,b.Z)(M,m,"b7"),e={},(0,b.Z)(e,O,"b3"),(0,b.Z)(e,m,"13"),i={},(0,b.Z)(i,O,"3"),(0,b.Z)(i,m,"b13"),j={},(0,b.Z)(j,O,"4"),(0,b.Z)(j,m,"5"),r={},(0,b.Z)(r,O,"#11"),(0,b.Z)(r,m,"#11"),c={},(0,b.Z)(c,O,"#11"),(0,b.Z)(c,m,"#11"),o={},(0,b.Z)(o,O,"5"),(0,b.Z)(o,m,"4"),I={},(0,b.Z)(I,O,"b13"),(0,b.Z)(I,m,"3"),a={},(0,b.Z)(a,O,"b13"),(0,b.Z)(a,m,"3"),N={},(0,b.Z)(N,O,"13"),(0,b.Z)(N,m,"b3"),y={},(0,b.Z)(y,O,"b7"),(0,b.Z)(y,m,"2"),g={},(0,b.Z)(g,O,"7"),(0,b.Z)(g,m,"b2"),s={},(0,b.Z)(s,O,"1"),(0,b.Z)(s,m,"1"),S={},(0,b.Z)(S,O,"b2"),(0,b.Z)(S,m,"7"),l={},(0,b.Z)(l,O,"2"),(0,b.Z)(l,m,"b7"),["m2","M2","m3","M3","P4","dim5","P5","m6","M6","m7","M7","P8","M9","m9"]),v=L(5360),w=function(t){return t.lowerThan(v.W8[1])&&t.higherThan(v.W8[0])};function k(){var t=(new h.WV).toDestination(),u=(0,E.useState)(["C4"]),L=u[0],n=u[1],M=(0,E.useState)([]),e=M[0],i=M[1],j=(0,E.useState)(null),r=j[0],c=j[1],o=(0,E.useState)(0),I=o[0],a=o[1];(0,E.useEffect)((function(){switch(window.addEventListener("keydown",s),window.addEventListener("keyup",S),r){case 13:case 32:g();break;case 39:y();break;case 37:N()}return function(){window.removeEventListener("keydown",s),window.removeEventListener("keyup",S)}}),[r]);var N=function(){a(I+1)},y=function t(){if(0!==I)return a(I-1),null;var u=(0,Z.n)([O,m])+(0,Z.n)(_),M=f.note.create(L[L.length-1]).transpose(u.substring(1),function(t){return t[0]===m}(u)).clean();return w(M)?(n([].concat((0,T.Z)(L.slice(Math.max(0,L.length-5+1))),[M.fullName])),i([].concat((0,T.Z)(e.slice(Math.max(0,e.length-5+2))),[u])),a(0),null):t()},g=function(){t.triggerAttack(L[Math.max(0,L.length-I-1)],"+0.0",.5)},s=function(t){var u=t.keyCode;r||c(u)},S=function(){r&&c(null),t.triggerRelease()};return(0,x.jsxs)(D.default,{children:[(0,x.jsx)("div",{className:d().viewPanel,children:(0,x.jsx)("div",{className:d().interval,children:function(){var t=L.length-I-1<=0||13===r||32===r?L[Math.max(0,L.length-I-1)]:e[Math.max(0,e.length-I-1)];return"".concat(t)}()})}),(0,x.jsxs)("div",{className:d().controlPanel,children:[(0,x.jsx)("button",{onClick:function(){return N()},className:z().button,children:"Previous"}),(0,x.jsx)("button",{onMouseDown:function(){return g(L[L.length-1])},onMouseUp:function(){return S()},className:z().button,children:"Check"}),(0,x.jsx)("button",{onClick:function(){return y()},className:z().button,children:"Next"})]})]})}},7146:function(t,u,L){"use strict";L.r(u),L.d(u,{default:function(){return o}});var n=L(5893),M=L(9008),e=L(2137),i=L.n(e),j=L(9878),r=L.n(j),c=L(1664);function o(t){var u=t.withHomeIcon,L=void 0===u||u,e=t.withFooter,j=void 0!==e&&e,o=t.children;return(0,n.jsxs)("div",{className:r().container,children:[(0,n.jsxs)(M.default,{children:[(0,n.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"".concat("/Jazz-Ears","/favicon.ico?")}),(0,n.jsx)("title",{children:"Jazzy Ears!"})]}),L&&(0,n.jsx)(c.default,{href:"/",children:(0,n.jsxs)("a",{className:r().goHome,children:[(0,n.jsx)("img",{src:i()}),"Jazzy Ears!"]})}),(0,n.jsx)("main",{className:r().main,children:o}),j&&(0,n.jsx)("footer",{className:r().footer,children:(0,n.jsxs)("div",{className:r().footerContent,children:["Developed by"," ",(0,n.jsx)("a",{href:"https://github.com/Xie-Hui/Jazz-Ears",children:"Hui Xie"})]})})]})}},8822:function(t,u,L){"use strict";L.d(u,{n:function(){return n}});var n=function(t){return Array.isArray(t)?t[Math.floor(Math.random()*t.length)]:Number.isInteger(t)?Math.floor(Math.random()*t):void 0}},3280:function(t,u,L){(window.__NEXT_P=window.__NEXT_P||[]).push(["/intervals",function(){return L(5703)}])},9859:function(t){t.exports={controlPanel:"Intervals_controlPanel__1e-oV",viewPanel:"Intervals_viewPanel__1YFsk",interval:"Intervals_interval__kZn2R",scaleDegree:"Intervals_scaleDegree__poUcZ"}},9878:function(t){t.exports={container:"Layout_container__3Msas",goHome:"Layout_goHome__3U5Wn",main:"Layout_main__18HQ4",footer:"Layout_footer__2HGdY",footerContent:"Layout_footerContent__XzlLA",code:"Layout_code__3-Wsz",grid:"Layout_grid__20rLc",button:"Layout_button__3DRLY",card:"Layout_card__3Jhaf"}},2137:function(t){var u="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA3MDAgNzAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTB9PC9zdHlsZT48ZyBpZD0iTGF5ZXJfMl8xXyI+PGcgaWQ9IkxheWVyXzEtMiI+PHBhdGggZD0iTTY1OCAyNTEuM2MwLS43IDAtMy4yLTIuOS0yLjktMy44LjYtNi42IDUuMy0yNi44IDI1LjQtMjYuNiAyNi41LTMyLjMgMzEtNDUuOCAzNi4yLTE1LjQgNS45LTE1LjIgNS45LTEwMy4zIDUuOWgtODAuNHYtN2MwLTYuNi0uMS03LTIuMi03LjEtMS4zIDAtNi4zLS4xLTExLjMtLjFoLTlsLS4zIDcuMS0uMyA3LjItMTQuMi0uMy0xNC4yLS4zLS4zLTYuOGMtLjItNS0uNy02LjctMS43LTYuOC0uOCAwLTUuNy0uMS0xMC43LS4xbC05LjMtLjEtLjMgNy4yLS4zIDcuMi0xNC4yLS4zLTE0LjItLjMtLjMtNi44Yy0uMi00LjMtLjctNi43LTEuNS02LjhzLTUuNS0uMS0xMC43LS4xbC05LjUtLjItLjMgNy4yLS4zIDcuMkgxNzVjLTY2LjQgMC05OS45LS4zLTEwMi4yLTEuMS0xLjktLjUtNC4yLTEuMi01LjEtMS40LS45LS4yLTQuNC0xLjUtOC0zLTMuNi0xLjUtOS4yLTMuOC0xMi42LTUtOS45LTMuNi05LjYtNC4yLTkuOCAyMy4xLS4xIDIzLjIuMiAyNi43IDIuNyAyNy43LjguMyA4LjQtMi4zIDE2LjktNS43bDE1LjQtNi4xIDUwLjMtLjNjMzYuMS0uMiA1MC4yIDAgNTAuMi44IDAgLjYtMS4xIDIuNi0yLjQgNC4zLTcuMyA5LjctMTIuNSAyNS4xLTEzLjMgMzkuMi0yLjMgMzkuOCAyNS4zIDczLjQgNjUuNyA4MC4xIDEuOS4zIDE0IC42IDI2LjguNiAyMC43IDAgMjMuNC4yIDIzLjggMS43IDIuOSA5LjYgMTIuMSAxMi45IDE4LjggNi42IDEuNS0xLjUgMi42LTMuMyAzLjItNS4zbC42LTIuOWgyNy45bDEuOCA0LjNjMi4yIDQuOSA2IDcuMyAxMSA2LjkgNC40LS40IDguMi0zLjQgOS43LTcuNmwxLjItMy40IDE0LjEtLjFjMTEuNi0uMSAxNC4xLjEgMTQuMSAxLjMgMCAyLjYgMi44IDYuOCA1LjcgOC40IDUuOCAzLjQgMTMuNC41IDE2LTZsMS40LTMuNyAyNi43LS4xYzMxLjUtLjEgMzgtMS4xIDUxLjctNy44IDIwLjMtOS45IDMzLjUtMjUuOCA0MC43LTQ4LjYgMy4yLTEwLjQgMy4yLTI4LjkgMC00MC4yLTIuNC04LjQtNi45LTE4LjItMTAuOC0yMy40LTEuMy0xLjctMi40LTMuNy0yLjQtNC4zIDAtMS42IDUyLjUtMS4yIDYxLjUuNSA5LjMgMS44IDEwIDIgMTcuMSA0LjkgMTQuMSA1LjggMTYuOSA4IDQ2IDM2LjggMTMuMiAxMy4xIDIzLjIgMjIuNSAyNS4yIDIzLjggMS4zLjkgMi42LjIgMi42LTEuNm0tMzgwLTE3LjZ2NDhsLTIzLjYuMmMtMjUuNS4yLTI5LjctLjQtMzkuOC01LjgtMTItNi40LTIxLjktMjEtMjQuMS0zNS41LTMuNy0yNC4zIDEzLjEtNDguNyAzNy4zLTUzLjkgNC4yLS45IDEzLjItMS4yIDI4LjItMS4xbDIyIC4xdjQ4em01MS41IDB2NDguNWgtMjl2LTQ3LjhjMC0yNi4zLjMtNDguMi43LTQ4LjUuNC0uMyA2LjktLjcgMTQuNS0uN2gxMy44djQ4LjV6bTUxIC4xdjQ4LjRoLTI5di00Ny44YzAtMjYuMy4zLTQ4LjEuNi00OC40LjMtLjMgNi44LS42IDE0LjUtLjZsMTMuOS4xdjQ4LjN6bTc4LjUtNDYuOWMxNy41IDQuMSAzMS4zIDE3LjUgMzYuMSAzNC44IDEuOSA2LjggMS43IDE5LS4yIDI1LjYtNCAxMy45LTE0LjggMjUuNi0yOS40IDMxLjktNS4zIDIuMy02LjYgMi40LTMzLjcgMi44bC0yOC4zLjR2LTk3LjFsMjQuOC4xYzE3LjIuMSAyNi41LjUgMzAuNyAxLjV6Ii8+PHBhdGggZD0iTTI2Ny4xIDI4NS4zYy0xLjcgMS45LTEuOCA3LjEtLjIgOC43LjguOCA2LjQgMS4yIDE4LjQgMS4yIDE5IDAgMjAuNC0uNCAyMC40LTUuOSAwLTUtMS42LTUuNC0yMC4xLTUuNS0xNC4zLS4xLTE3LjMuMS0xOC41IDEuNXpNMzE4LjEgMjg1LjNjLTEuNyAxLjgtMS44IDUuMi0uNCA4IDEgMS44IDIuMyAxLjkgMTguMSAxLjkgOS44IDAgMTcuOC0uNCAxOS0xIDItMS4xIDIuNi02LjMgMS04LjktMS40LTIuMi0zNS43LTIuMi0zNy43IDB6TTM2OS4zIDI4NS42Yy0yIDItMS42IDcuMy43IDguOCAyLjEgMS4zIDM1LjEgMSAzNi41LS40IDEuNC0xLjQgMS42LTguNS4xLTkuNC0uNy0uNC04LjktLjctMTguMy0uOC0xNS40LS4xLTE3LjMuMS0xOSAxLjh6Ii8+PC9nPjwvZz48L3N2Zz4=";t.exports={src:u,width:700,height:700,format:"svg",toString:function(){return u}}},5443:function(){},4129:function(){},2361:function(){},4616:function(){},3114:function(){}},function(t){t.O(0,[774,597,996,473],(function(){return u=3280,t(t.s=u);var u}));var u=t.O();_N_E=u}]);