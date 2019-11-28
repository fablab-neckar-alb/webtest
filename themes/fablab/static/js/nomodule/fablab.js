/*
 domready (c) Dustin Diaz 2014 - License MIT
*/
'use strict';System.register([],function(){return{execute:function(){let f=(a,b,c)=>new Promise((e,d)=>{a instanceof window.HTMLElement?(d=a.className.replace(new RegExp(`\\b${b}\\b`),c),a.className=d,e(d)):d(Error('Object not a HTMLELement'))});(function(a,b){return b={exports:{}},a(b,b.exports),b.exports})(function(a){!function(b,c){a.exports=c()}('domready',function(){var b=[],c,a=document,d=(a.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(a.readyState);d||a.addEventListener('DOMContentLoaded',
c=function(){a.removeEventListener('DOMContentLoaded',c);for(d=1;c=b.shift();)c()});return function(a){d?setTimeout(a,0):b.push(a)}})})(()=>{f(window.document.documentElement,'no-js','js')})}}});
//# sourceMappingURL=fablab.js.map
