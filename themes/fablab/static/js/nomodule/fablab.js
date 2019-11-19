/*
 domready (c) Dustin Diaz 2014 - License MIT
*/
'use strict';System.register([],function(){return{execute:function(){var e=function(c,b){return b={exports:{}},c(b,b.exports),b.exports}(function(c){!function(b,a){c.exports=a()}('domready',function(){var b=[],a,d=document,c=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState);c||d.addEventListener('DOMContentLoaded',a=function(){d.removeEventListener('DOMContentLoaded',a);for(c=1;a=b.shift();)a()});return function(a){c?setTimeout(a,0):b.push(a)}})});let f=window.console.debug.bind(window.console,
'DEBUG:');e(()=>{f('test');document.documentElement.className=document.documentElement.className.replace(/\bno-js\b/,'js')})}}});
//# sourceMappingURL=fablab.js.map
