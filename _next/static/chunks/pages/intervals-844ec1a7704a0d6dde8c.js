(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{1593:function(L,t,u){"use strict";u.r(t),u.d(t,{default:function(){return r}});var M=u(5893),n=u(18),j=u(8764),i=u(9878),e=u.n(i),I=u(9859),N=u.n(I),c=u(7294),o=u(5329),y=u(7423),g=u(8822),a=["m2","M2","m3","M3","P4","aug4","dim5","P5","aug5","m6","M6","m7","M7","P8","M9","m9"],S=["C2","C5"];function r(){var L=(new y.WV).toDestination(),t=(0,c.useState)(["C4"]),u=t[0],i=t[1],I=(0,c.useState)([]),r=I[0],s=I[1],T=(0,c.useState)(null),x=T[0],l=T[1],D=(0,c.useState)(0),C=D[0],z=D[1];(0,c.useEffect)((function(){switch(window.addEventListener("keydown",h),window.addEventListener("keyup",f),x){case 13:case 32:d();break;case 39:E();break;case 37:A()}return function(){window.removeEventListener("keydown",h),window.removeEventListener("keyup",f)}}),[x]);var A=function(){console.log("prev"),z(C+1)},E=function L(){if(0!==C)return z(C-1),null;var t,M=function(){var L=(0,g.n)(["\u2191","\u2193"])+(0,g.n)(a);return console.log(L),L}(),j=o.note.create(u[u.length-1]).transpose(M.substring(1),function(L){return"\u2193"===L[0]}(M)).clean();return(t=j).lowerThan(S[1])&&t.higherThan(S[0])?(i([].concat((0,n.Z)(u.slice(Math.max(0,u.length-5+1))),[j.fullName])),s([].concat((0,n.Z)(r.slice(Math.max(0,r.length-5+2))),[M])),z(0),null):L()},d=function(){console.log("check"),L.triggerAttack(u[Math.max(0,u.length-C-1)],"+0.0",.5)},h=function(L){var t=L.keyCode;console.log("keyDown",t),x||l(t)},f=function(){console.log("keyUp"),x&&l(null),L.triggerRelease()};return(0,M.jsxs)(j.default,{children:[(0,M.jsx)("div",{className:N().viewPanel,children:u.length-C-1<=0||13===x?u[Math.max(0,u.length-C-1)]:r[Math.max(0,r.length-C-1)]}),(0,M.jsxs)("div",{className:N().controlPanel,children:[(0,M.jsx)("button",{onClick:function(){return A()},className:e().button,children:"Previous"}),(0,M.jsx)("button",{onMouseDown:function(){return d(u[u.length-1])},onMouseUp:function(){return f()},className:e().button,children:"Check"}),(0,M.jsx)("button",{onClick:function(){return E()},className:e().button,children:"Next"})]})]})}},8764:function(L,t,u){"use strict";u.r(t),u.d(t,{default:function(){return c}});var M=u(5893),n=u(9008),j=u(2137),i=u.n(j),e=u(9878),I=u.n(e),N=u(1664);function c(L){var t=L.withHomeIcon,u=void 0===t||t,j=L.children;return(0,M.jsxs)("div",{className:I().container,children:[(0,M.jsxs)(n.default,{children:[(0,M.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"/Jazz-Ears/favicon.ico?"}),(0,M.jsx)("title",{children:"Jazzy Ears!"})]}),u&&(0,M.jsx)(N.default,{href:"/index",children:(0,M.jsxs)("a",{className:I().goHome,children:[(0,M.jsx)("img",{src:i()}),"Jazzy Ears!"]})}),(0,M.jsx)("main",{className:I().main,children:j})]})}},8822:function(L,t,u){"use strict";u.d(t,{n:function(){return M}});var M=function(L){return L[Math.floor(Math.random()*L.length)]}},3280:function(L,t,u){(window.__NEXT_P=window.__NEXT_P||[]).push(["/intervals",function(){return u(1593)}])},9859:function(L){L.exports={controlPanel:"Intervals_controlPanel__1e-oV",viewPanel:"Intervals_viewPanel__1YFsk"}},9878:function(L){L.exports={container:"Layout_container__3Msas",goHome:"Layout_goHome__3U5Wn",main:"Layout_main__18HQ4",footer:"Layout_footer__2HGdY",code:"Layout_code__3-Wsz",grid:"Layout_grid__20rLc",button:"Layout_button__3DRLY",card:"Layout_card__3Jhaf"}},2137:function(L){var t="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA3MDAgNzAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTB9PC9zdHlsZT48ZyBpZD0iTGF5ZXJfMl8xXyI+PGcgaWQ9IkxheWVyXzEtMiI+PHBhdGggZD0iTTY1OCAyNTEuM2MwLS43IDAtMy4yLTIuOS0yLjktMy44LjYtNi42IDUuMy0yNi44IDI1LjQtMjYuNiAyNi41LTMyLjMgMzEtNDUuOCAzNi4yLTE1LjQgNS45LTE1LjIgNS45LTEwMy4zIDUuOWgtODAuNHYtN2MwLTYuNi0uMS03LTIuMi03LjEtMS4zIDAtNi4zLS4xLTExLjMtLjFoLTlsLS4zIDcuMS0uMyA3LjItMTQuMi0uMy0xNC4yLS4zLS4zLTYuOGMtLjItNS0uNy02LjctMS43LTYuOC0uOCAwLTUuNy0uMS0xMC43LS4xbC05LjMtLjEtLjMgNy4yLS4zIDcuMi0xNC4yLS4zLTE0LjItLjMtLjMtNi44Yy0uMi00LjMtLjctNi43LTEuNS02LjhzLTUuNS0uMS0xMC43LS4xbC05LjUtLjItLjMgNy4yLS4zIDcuMkgxNzVjLTY2LjQgMC05OS45LS4zLTEwMi4yLTEuMS0xLjktLjUtNC4yLTEuMi01LjEtMS40LS45LS4yLTQuNC0xLjUtOC0zLTMuNi0xLjUtOS4yLTMuOC0xMi42LTUtOS45LTMuNi05LjYtNC4yLTkuOCAyMy4xLS4xIDIzLjIuMiAyNi43IDIuNyAyNy43LjguMyA4LjQtMi4zIDE2LjktNS43bDE1LjQtNi4xIDUwLjMtLjNjMzYuMS0uMiA1MC4yIDAgNTAuMi44IDAgLjYtMS4xIDIuNi0yLjQgNC4zLTcuMyA5LjctMTIuNSAyNS4xLTEzLjMgMzkuMi0yLjMgMzkuOCAyNS4zIDczLjQgNjUuNyA4MC4xIDEuOS4zIDE0IC42IDI2LjguNiAyMC43IDAgMjMuNC4yIDIzLjggMS43IDIuOSA5LjYgMTIuMSAxMi45IDE4LjggNi42IDEuNS0xLjUgMi42LTMuMyAzLjItNS4zbC42LTIuOWgyNy45bDEuOCA0LjNjMi4yIDQuOSA2IDcuMyAxMSA2LjkgNC40LS40IDguMi0zLjQgOS43LTcuNmwxLjItMy40IDE0LjEtLjFjMTEuNi0uMSAxNC4xLjEgMTQuMSAxLjMgMCAyLjYgMi44IDYuOCA1LjcgOC40IDUuOCAzLjQgMTMuNC41IDE2LTZsMS40LTMuNyAyNi43LS4xYzMxLjUtLjEgMzgtMS4xIDUxLjctNy44IDIwLjMtOS45IDMzLjUtMjUuOCA0MC43LTQ4LjYgMy4yLTEwLjQgMy4yLTI4LjkgMC00MC4yLTIuNC04LjQtNi45LTE4LjItMTAuOC0yMy40LTEuMy0xLjctMi40LTMuNy0yLjQtNC4zIDAtMS42IDUyLjUtMS4yIDYxLjUuNSA5LjMgMS44IDEwIDIgMTcuMSA0LjkgMTQuMSA1LjggMTYuOSA4IDQ2IDM2LjggMTMuMiAxMy4xIDIzLjIgMjIuNSAyNS4yIDIzLjggMS4zLjkgMi42LjIgMi42LTEuNm0tMzgwLTE3LjZ2NDhsLTIzLjYuMmMtMjUuNS4yLTI5LjctLjQtMzkuOC01LjgtMTItNi40LTIxLjktMjEtMjQuMS0zNS41LTMuNy0yNC4zIDEzLjEtNDguNyAzNy4zLTUzLjkgNC4yLS45IDEzLjItMS4yIDI4LjItMS4xbDIyIC4xdjQ4em01MS41IDB2NDguNWgtMjl2LTQ3LjhjMC0yNi4zLjMtNDguMi43LTQ4LjUuNC0uMyA2LjktLjcgMTQuNS0uN2gxMy44djQ4LjV6bTUxIC4xdjQ4LjRoLTI5di00Ny44YzAtMjYuMy4zLTQ4LjEuNi00OC40LjMtLjMgNi44LS42IDE0LjUtLjZsMTMuOS4xdjQ4LjN6bTc4LjUtNDYuOWMxNy41IDQuMSAzMS4zIDE3LjUgMzYuMSAzNC44IDEuOSA2LjggMS43IDE5LS4yIDI1LjYtNCAxMy45LTE0LjggMjUuNi0yOS40IDMxLjktNS4zIDIuMy02LjYgMi40LTMzLjcgMi44bC0yOC4zLjR2LTk3LjFsMjQuOC4xYzE3LjIuMSAyNi41LjUgMzAuNyAxLjV6Ii8+PHBhdGggZD0iTTI2Ny4xIDI4NS4zYy0xLjcgMS45LTEuOCA3LjEtLjIgOC43LjguOCA2LjQgMS4yIDE4LjQgMS4yIDE5IDAgMjAuNC0uNCAyMC40LTUuOSAwLTUtMS42LTUuNC0yMC4xLTUuNS0xNC4zLS4xLTE3LjMuMS0xOC41IDEuNXpNMzE4LjEgMjg1LjNjLTEuNyAxLjgtMS44IDUuMi0uNCA4IDEgMS44IDIuMyAxLjkgMTguMSAxLjkgOS44IDAgMTcuOC0uNCAxOS0xIDItMS4xIDIuNi02LjMgMS04LjktMS40LTIuMi0zNS43LTIuMi0zNy43IDB6TTM2OS4zIDI4NS42Yy0yIDItMS42IDcuMy43IDguOCAyLjEgMS4zIDM1LjEgMSAzNi41LS40IDEuNC0xLjQgMS42LTguNS4xLTkuNC0uNy0uNC04LjktLjctMTguMy0uOC0xNS40LS4xLTE3LjMuMS0xOSAxLjh6Ii8+PC9nPjwvZz48L3N2Zz4=";L.exports={src:t,width:700,height:700,format:"svg",toString:function(){return t}}},5443:function(){},4129:function(){},2361:function(){},4616:function(){},3114:function(){}},function(L){L.O(0,[774,597,996,329,855],(function(){return t=3280,L(L.s=t);var t}));var t=L.O();_N_E=t}]);