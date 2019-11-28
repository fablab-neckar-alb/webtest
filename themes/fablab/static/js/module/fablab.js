/*
 domready (c) Dustin Diaz 2014 - License MIT
*/
var e=void 0;let g=(b,f,a)=>new Promise((d,c)=>{b instanceof window.HTMLElement?(c=b.className.replace(new RegExp(`\\b${f}\\b`),a),b.className=c,d(c)):c(Error('Object not a HTMLELement'))});
(e={exports:{}},function(b){!function(f,a){b.exports=a()}('domready',function(){var b=[],a,d=document,c=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState);c||d.addEventListener('DOMContentLoaded',a=function(){d.removeEventListener('DOMContentLoaded',a);for(c=1;a=b.shift();)a()});return function(a){c?setTimeout(a,0):b.push(a)}})}(e,e.exports),e.exports)(()=>{g(window.document.documentElement,'no-js','js')});//# sourceMappingURL=fablab.js.map
