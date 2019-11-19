/*
 domready (c) Dustin Diaz 2014 - License MIT
*/
var b,f=void 0;b=(f={exports:{}},function(g){!function(d,a){g.exports=a()}('domready',function(){var d=[],a,c=document,e=(c.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(c.readyState);e||c.addEventListener('DOMContentLoaded',a=function(){c.removeEventListener('DOMContentLoaded',a);for(e=1;a=d.shift();)a()});return function(a){e?setTimeout(a,0):d.push(a)}})}(f,f.exports),f.exports);let h=window.console.debug.bind(window.console,'DEBUG:');
b(()=>{h('test');document.documentElement.className=document.documentElement.className.replace(/\bno-js\b/,'js')});//# sourceMappingURL=fablab.js.map
