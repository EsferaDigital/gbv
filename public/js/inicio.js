
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.CopyDate=void 0;var _varBasicas=require("../lib/var-basicas");var CopyDate=function CopyDate(){var e=document.getElementById('Year');e.innerHTML=_varBasicas.Ano;};exports.CopyDate=CopyDate;},{"../lib/var-basicas":4}],2:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.scrollNav=exports.toggleNav=void 0;var toggleNav=function toggleNav(){var d=document,panel=d.querySelector('.Panel'),panelBtn=d.querySelector('.Panel-btn');panelBtn.addEventListener('click',function(e){e.preventDefault();panelBtn.classList.toggle('is-active');panel.classList.toggle('is-active');});};exports.toggleNav=toggleNav;var scrollNav=function scrollNav(){var itemLinks=document.querySelectorAll(".Menu-link");itemLinks.forEach(function(elem){return elem.addEventListener('click',navBarClick);});function navBarClick(e){smoothScroll(e);}
function smoothScroll(e){e.preventDefault();var targetId=e.currentTarget.getAttribute("href");var targetPosition=document.querySelector(targetId).offsetTop;var startPosition=window.pageYOffset;var distance=targetPosition-startPosition-80;var duration=1000;var start=null;window.requestAnimationFrame(step);function step(timestamp){if(!start)start=timestamp;var progress=timestamp-start;window.scrollTo(0,easeInOut(progress,startPosition,distance,duration));if(progress<duration)window.requestAnimationFrame(step);}}
function easeInOut(t,b,c,d){t/=d/2;if(t<1)return c/2*t*t+b;t--;return-c/2*(t*(t-2)-1)+b;}};exports.scrollNav=scrollNav;},{}],3:[function(require,module,exports){"use strict";var _nav=require("./dev/nav");var _footer=require("./dev/footer");(0,_nav.toggleNav)();(0,_footer.CopyDate)();},{"./dev/footer":1,"./dev/nav":2}],4:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Ano=void 0;var Ano=new Date().getFullYear();exports.Ano=Ano;},{}]},{},[3]);