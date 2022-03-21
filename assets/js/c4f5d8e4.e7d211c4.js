/*! For license information please see c4f5d8e4.e7d211c4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[4195,9894],{20551:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s=void 0,c={type:"mdx",permalink:"/bottom",source:"@site/src/pages/bottom.md"},u=[{value:"News and updates",id:"news-and-updates",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"news-and-updates"},"News and updates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2022-02-28"),": ",(0,i.kt)("a",{parentName:"li",href:"/_/language/deep-insight-into-programming-languages-2021"},"Deep insight about Programming Language (hosted on GitHub) in 2021.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2022-02-28"),": ",(0,i.kt)("a",{parentName:"li",href:"/_/low-code/deep-insight-into-lowcode-development-tools-2021"},"Deep insight about Low Code (hosted on GitHub) in 2021.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2022-02-25"),": ",(0,i.kt)("a",{parentName:"li",href:"/_/web-framework/deep-insight-about-web-framework-2021"},"Deep insight about Web Framework (hosted on GitHub) in 2021.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2022-02-25"),": ",(0,i.kt)("a",{parentName:"li",href:"/_/js-framework/deep-insight-into-js-framework-2021"},"Deep insight about Javascript Framework (hosted on GitHub) in 2021.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2022-02-20"),": ",(0,i.kt)("a",{parentName:"li",href:"/_/database/deep-insight-about-oss-database-2021"},"Deep insight about OSS Database (hosted on GitHub) in 2021.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"2022-02-06"),": Read ",(0,i.kt)("a",{parentName:"li",href:"/blog/about"},"About")," to learn more about this project.")))}m.isMDXComponent=!0},25640:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ae}});var r=n(67294),a=n(86010),i=n(77019),o=n(52263),l=(n(12859),"heroWc_+Gf6"),s="heroWcTitle_KLg-",c="wcContainer_U70N",u="heroBanner_etFc",d="autoBr_BISs";function m(e,t){var n,r={};if(window.isSupported){var a=Math.floor(Math.random()*Date.now());Array.isArray(e)||(e=[e]),e.forEach((function(t,n){if("string"==typeof t){if(e[n]=document.getElementById(t),!e[n])throw new Error("The element id specified is not found.")}else if(!t.tagName&&!t.appendChild)throw new Error("You must pass valid HTML elements, or ID of the element.")}));var i={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "\u5fae\u8edf\u6b63\u9ed1\u9ad4", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},shape:"circle",ellipticity:.65,createElement:null!=(n=t.createElement)?n:function(e){return document.createElement("a")}};if(t)for(var o in t)o in i&&(i[o]=t[o]);if("function"!=typeof i.weightFactor){var l=i.weightFactor;i.weightFactor=function(e){return e*l}}if("function"!=typeof i.shape)switch(i.shape){case"circle":default:i.shape="circle";break;case"square":i.shape=function(e){return Math.min(1/Math.abs(Math.cos(e)),1/Math.abs(Math.sin(e)))}}i.gridSize=Math.max(Math.floor(i.gridSize),4);var s,c,u,d,m,f,h,p,v=i.gridSize,g=v-i.maskGapWidth;"function"==typeof i.color&&(h=i.color),"function"==typeof i.fontWeight&&(p=i.fontWeight);var w=[],b=function(e){if(w[e])return w[e];var t=8*e,n=t,r=[];for(0===e&&r.push([d[0],d[1],0]);n--;){var a=1;"circle"!==i.shape&&(a=i.shape(n/t*2*Math.PI)),r.push([d[0]+e*a*Math.cos(-n/t*2*Math.PI),d[1]+e*a*Math.sin(-n/t*2*Math.PI)*i.ellipticity,n/t*2*Math.PI])}return w[e]=r,r},y=function(){return i.abortThreshold>0&&(new Date).getTime()-f>i.abortThreshold},E=document.createElement("canvas"),k=E.getContext("2d",{willReadFrequently:!0}),T=function(e,t){var n,r=i.weightFactor(t);if(r<=i.minSize)return!1;n=p?p(e,t,r):i.fontWeight;var a=(k.setTransform(1,0,0,1,0,0),k.clearRect(0,0,E.width,E.height),{fcanvas:E,fctx:k}),o=a.fcanvas,l=a.fctx;l.font=n+" "+r.toString(10)+"px "+i.fontFamily;var s=l.measureText(e).width,c=Math.max(r,l.measureText("m").width,l.measureText("\uff37").width),u=s+2*c,d=3*c,m=-s/2,f=-c/2,h=Math.ceil(u/v),g=Math.ceil(d/v),w=h*v,b=g*v;o.width=w,o.height=b,l.scale(1,1),l.translate(w/2,b/2),l.font=n+" "+r.toString(10)+"px "+i.fontFamily,l.fillStyle="#000",l.textBaseline="middle",l.fillText(e,m,f+.4*r);var T=l.getImageData(0,0,w,b).data;if(y())return!1;for(var x,I,M,C=[[],[]],S=h,j=[g/2,h/2,g/2,h/2];S--;)for(x=g;x--;){M=v;e:for(;M--;)for(var Z=4*((x*v+M)*w+(S*v+(I=v)))+3;I--;){if(T[Z]){C[0].push(S),C[1].push(x),j[3]=Math.min(j[3],S),j[1]=Math.max(j[1],S),j[0]=Math.min(j[0],x),j[2]=Math.max(j[2],x);break e}Z-=4}}return{occupied:C,bounds:j,gw:h,gh:g,fillTextOffsetX:m,fillTextOffsetY:f,fillTextWidth:s,fillTextHeight:c,fontSize:r}},x=function(t,n,r,a){t>=c||n>=u||t<0||n<0||(s[t][n]=!1,!r)||e[0].getContext("2d").fillRect(t*v,n*v,g,g)},I=function t(n){var r,a;Array.isArray(n)?(r=n[0],a=n[1]):(r=n.word,a=n.weight,n.attributes);var o=T(r,a);if(!o)return!1;if(y())return!1;if(!i.drawOutOfBound&&!i.shrinkToFit){var l=o.bounds;if(l[1]-l[3]+1>c||l[2]-l[0]+1>u)return!1}for(var d=m+1,f=function(t){var l=Math.floor(t[0]-o.gw/2),f=Math.floor(t[1]-o.gh/2);return o.gw,o.gh,!!function(e,t,n,r,a){for(var o=a[0].length;o--;){var l=e+a[0][o],d=t+a[1][o];if(l>=c||d>=u||l<0||d<0){if(!i.drawOutOfBound)return!1}else if(!s[l][d])return!1}return!0}(l,f,0,0,o.occupied)&&(function(t,n,r,a,o,l,s,c,u){var d,m,f=r.fontSize;d=h?h(a,o,f,l,s):i.color,m=p?p(a,o,f):i.fontWeight;var g=e[1],w=i.createElement(u),b={},y=f;y<12&&(b.scale=y/12);var E=b.scale?" scale("+b.scale+")":"",k={font:m+" "+Math.max(12,y)+"px "+i.fontFamily,left:(t+r.gw/2)*v+r.fillTextOffsetX+"px",top:(n+r.gh/2)*v+r.fillTextOffsetY+"px",width:r.fillTextWidth+"px",height:r.fillTextHeight+"px","line-height":Math.max(f,12)+"px",transform:E,"-webkit-transform":E,"-ms-transform":E};d&&(k.color=d),w.textContent=a;var T=Object.entries(k).map((function(e){return e[0]+": "+e[1]+";"})).join(" ");w.style.cssText+=" "+T,g.appendChild(w)}(l,f,o,r,a,m-d,t[2],0,n),function(t,n,r,a,o,l){var s,d=o.occupied,m=i.drawMask;m&&((s=e[0].getContext("2d")).save(),s.fillStyle=i.maskColor);for(var f=d[0].length;f--;){var h=t+d[0][f],p=n+d[1][f];h>=c||p>=u||h<0||p<0||x(h,p,m)}m&&s.restore()}(l,f,0,0,o),!0)};d--;)if(b(m-d).some(f))return!0;return!!i.shrinkToFit&&(Array.isArray(n)?n[1]=3*n[1]/4:n.weight=3*n.weight/4,t(n))},M=function(t,n,r){if(n)return!e.some((function(e){var n=new CustomEvent(t,{detail:r||{}});return!e.dispatchEvent(n)}),this);e.forEach((function(e){var n=new CustomEvent(t,{detail:r||{}});e.dispatchEvent(n)}),this)};this.start=function(){var t,n,o,l,h,p=e[0];if(p.getContext)c=Math.ceil(p.width/v),u=Math.ceil(p.height/v);else{var g=p.getBoundingClientRect();c=Math.ceil(g.width/v),u=Math.ceil(g.height/v)}if(M("wordcloudstart",!0)){if(d=i.origin?[i.origin[0]/v,i.origin[1]/v]:[c/2,u/2],m=Math.floor(Math.sqrt(c*c+u*u)),s=[],!p.getContext||i.clearCanvas)for(e.forEach((function(e){if(e.getContext){var t=e.getContext("2d");t.fillStyle=i.backgroundColor,t.clearRect(0,0,c*(v+1),u*(v+1)),t.fillRect(0,0,c*(v+1),u*(v+1))}else e.textContent="",e.style.position="relative"})),t=c;t--;)for(s[t]=[],n=u;n--;)s[t][n]=!0;else{var w=document.createElement("canvas").getContext("2d");w.fillStyle=i.backgroundColor,w.fillRect(0,0,1,1);var b,E,k=w.getImageData(0,0,1,1).data,T=p.getContext("2d").getImageData(0,0,c*v,u*v).data;for(t=c;t--;)for(s[t]=[],n=u;n--;){E=v;e:for(;E--;)for(b=v;b--;)for(o=4;o--;)if(T[4*((n*v+E)*c*v+(t*v+b))+o]!==k[o]){s[t][n]=!1;break e}!1!==s[t][n]&&(s[t][n]=!0)}T=w=k=void 0}o=0,0!==i.wait?(l=window.setTimeout,h=window.clearTimeout):(l=window.setImmediate,h=window.clearImmediate);var x=function(t,n){e.forEach((function(e){e.removeEventListener(t,n)}),this)},C=function e(){x("wordcloudstart",e),h(r[a])};!function(t,n){e.forEach((function(e){e.addEventListener("wordcloudstart",n)}),this)}(0,C),r[a]=l((function e(){if(o>=i.list.length)return h(r[a]),M("wordcloudstop",!1),x("wordcloudstart",C),void delete r[a];f=(new Date).getTime();var t=I(i.list[o]),n=!M("wordclouddrawn",!0,{item:i.list[o],drawn:t});if(y()||n)return h(r[a]),i.abort(),M("wordcloudabort",!1),M("wordcloudstop",!1),x("wordcloudstart",C),void delete r[a];o++,r[a]=l(e,i.wait)}),i.wait)}},this.stop=function(){if(r)for(var e in r)window.clearImmediate(r[e])}}}"undefined"!=typeof window&&(window.setImmediate||(window.setImmediate=window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var e=[void 0],t="zero-timeout-message";return window.addEventListener("message",(function(n){if("string"==typeof n.data&&n.data.substr(0,t.length)===t){n.stopImmediatePropagation();var r=parseInt(n.data.substr(t.length),36);e[r]&&(e[r](),e[r]=void 0)}}),!0),window.clearImmediate=function(t){e[t]&&(e[t]=void 0)},function(n){var r=e.length;return e.push(n),window.postMessage(t+r.toString(36),"*"),r}}()||function(e){window.setTimeout(e,0)}),window.clearImmediate||(window.clearImmediate=window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(e){window.clearTimeout(e)}),Object.defineProperty(window,"isSupported",{get:function(){return function(){var e=document.createElement("canvas");if(!e||!e.getContext)return!1;var t=e.getContext("2d");return!!(t&&t.getImageData&&t.fillText&&Array.prototype.some&&Array.prototype.push)}()}}));var f,h,p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},v={exports:{}};f=v,h=v.exports,function(e,t){var n=function(){var e=null,t={};u("monochrome",null,[[0,0],[100,0]]),u("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),u("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),u("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),u("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),u("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),u("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),u("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var n=[];function r(e){if(n.length>0){var t=c(i=h(e.hue)),r=(i[1]-i[0])/n.length,a=parseInt((t-i[0])/r);return!0===n[a]?a=(a+2)%n.length:n[a]=!0,(t=c(i=[(i[0]+a*r)%359,(i[0]+(a+1)*r)%359]))<0&&(t=360+t),t}var i;return(t=c(i=l(e.hue)))<0&&(t=360+t),t}function a(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return c([0,100]);var n=function(e){return s(e).saturationRange}(e),r=n[0],a=n[1];switch(t.luminosity){case"bright":r=55;break;case"dark":r=a-10;break;case"light":a=55}return c([r,a])}function i(e,t,n){var r=function(e,t){for(var n=s(e).lowerBounds,r=0;r<n.length-1;r++){var a=n[r][0],i=n[r][1],o=n[r+1][0],l=n[r+1][1];if(t>=a&&t<=o){var c=(l-i)/(o-a);return c*t+(i-c*a)}}return 0}(e,t),a=100;switch(n.luminosity){case"dark":a=r+20;break;case"light":r=(a+r)/2;break;case"random":r=0,a=100}return c([r,a])}function o(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return f(e);case"hsl":var n=f(e);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var r=f(e),a=t.alpha||Math.random();return"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+a+")";case"rgbArray":return d(e);case"rgb":return"rgb("+d(e).join(", ")+")";case"rgba":var i=d(e);return a=t.alpha||Math.random(),"rgba("+i.join(", ")+", "+a+")";default:return function(e){var t=d(e);function n(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return"#"+n(t[0])+n(t[1])+n(t[2])}(e)}}function l(e){if("number"==typeof parseInt(e)){var n=parseInt(e);if(n<360&&n>0)return[n,n]}if("string"==typeof e)if(t[e]){var r=t[e];if(r.hueRange)return r.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var a=m(e)[0];return[a,a]}return[0,360]}function s(e){for(var n in e>=334&&e<=360&&(e-=360),t){var r=t[n];if(r.hueRange&&e>=r.hueRange[0]&&e<=r.hueRange[1])return t[n]}return"Color not found"}function c(t){if(null===e){var n=Math.random();return n+=.618033988749895,n%=1,Math.floor(t[0]+n*(t[1]+1-t[0]))}var r=t[1]||1,a=t[0]||0,i=(e=(9301*e+49297)%233280)/233280;return Math.floor(a+i*(r-a))}function u(e,n,r){var a=r[0][0],i=r[r.length-1][0],o=r[r.length-1][1],l=r[0][1];t[e]={hueRange:n,lowerBounds:r,saturationRange:[a,i],brightnessRange:[o,l]}}function d(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var n=e[1]/100,r=e[2]/100,a=Math.floor(6*t),i=6*t-a,o=r*(1-n),l=r*(1-i*n),s=r*(1-(1-i)*n),c=256,u=256,d=256;switch(a){case 0:c=r,u=s,d=o;break;case 1:c=l,u=r,d=o;break;case 2:c=o,u=r,d=s;break;case 3:c=o,u=l,d=r;break;case 4:c=s,u=o,d=r;break;case 5:c=r,u=o,d=l}return[Math.floor(255*c),Math.floor(255*u),Math.floor(255*d)]}function m(e){e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e;var t=parseInt(e.substr(0,2),16)/255,n=parseInt(e.substr(2,2),16)/255,r=parseInt(e.substr(4,2),16)/255,a=Math.max(t,n,r),i=a-Math.min(t,n,r),o=a?i/a:0;switch(a){case t:return[(n-r)/i%6*60||0,o,a];case n:return[60*((r-t)/i+2)||0,o,a];case r:return[60*((t-n)/i+4)||0,o,a]}}function f(e){var t=e[0],n=e[1]/100,r=e[2]/100,a=(2-n)*r;return[t,Math.round(n*r/(a<1?a:2-a)*1e4)/100,a/2*100]}function h(e){if(isNaN(e)){if("string"==typeof e)if(t[e]){var n=t[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i))return s(m(e)[0]).hueRange}else{var r=parseInt(e);if(r<360&&r>0)return s(e).hueRange}return[0,360]}return function t(l){if(void 0!==(l=l||{}).seed&&null!==l.seed&&l.seed===parseInt(l.seed,10))e=l.seed;else if("string"==typeof l.seed)e=function(e){for(var t=0,n=0;n!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);n++)t+=e.charCodeAt(n);return t}(l.seed);else{if(void 0!==l.seed&&null!==l.seed)throw new TypeError("The seed value must be an integer or string");e=null}var s,c;if(null!==l.count&&void 0!==l.count){for(var u=l.count,d=[],m=0;m<l.count;m++)n.push(!1);for(l.count=null;u>d.length;){var f=t(l);null!==e&&(l.seed=e),d.push(f)}return l.count=u,d}return o([s=r(l),c=a(s,l),i(s,c,l)],l)}}();f&&f.exports&&(h=f.exports=n),h.randomColor=n}();var g=v.exports,w=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},b="object"==typeof p&&p&&p.Object===Object&&p,y="object"==typeof self&&self&&self.Object===Object&&self,E=b||y||Function("return this")(),k=E,T=/\s/,x=/^\s+/,I=E.Symbol,M=I,C=Object.prototype,S=C.hasOwnProperty,j=C.toString,Z=M?M.toStringTag:void 0,F=Object.prototype.toString,N=function(e){var t=S.call(e,Z),n=e[Z];try{e[Z]=void 0;var r=!0}catch(e){}var a=j.call(e);return r&&(t?e[Z]=n:delete e[Z]),a},R=I?I.toStringTag:void 0,_=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":R&&R in Object(e)?N(e):function(e){return F.call(e)}(e)},A=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&T.test(e.charAt(t)););return t}(e)+1).replace(x,""):e},q=w,O=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,W=/^0o[0-7]+$/i,D=parseInt,L=w,P=function(){return k.Date.now()},H=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==_(e)}(e))return NaN;if(q(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=q(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=A(e);var n=z.test(e);return n||W.test(e)?D(e.slice(2),n?2:8):O.test(e)?NaN:+e},B=Math.max,G=Math.min,$=w,U=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return $(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),function(e,t,n){var r,a,i,o,l,s,c=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,i=a;return r=a=void 0,c=t,o=e.apply(i,n)}function h(e){return c=e,l=setTimeout(v,t),u?f(e):o}function p(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=i}function v(){var e=P();if(p(e))return g(e);l=setTimeout(v,function(e){var n=t-(e-s);return d?G(n,i-(e-c)):n}(e))}function g(e){return l=void 0,m&&r?f(e):(r=a=void 0,o)}function w(){var e=P(),n=p(e);if(r=arguments,a=this,s=e,n){if(void 0===l)return h(s);if(d)return clearTimeout(l),l=setTimeout(v,t),f(s)}return void 0===l&&(l=setTimeout(v,t)),o}return t=H(t)||0,L(n)&&(u=!!n.leading,i=(d="maxWait"in n)?B(H(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=a=l=void 0},w.flush=function(){return void 0===l?o:g(P())},w}(e,t,{leading:r,maxWait:t,trailing:a})};function X(e,t){var n=t.container,r=document.createElement("div");r.style.cssText="position: absolute; left: 0;top: 0; width: 100%; height: 100%; font-size-adjust: none; user-select: none;",n.insertBefore(r,n.childNodes.item(0));var a=function(){var t=document.createElement("canvas");r.innerHTML="",r.classList.remove("animated","zoomOut");var a=getComputedStyle(n),i=a.fontFamily,o=a.fontSize,l=a.fontWeight,s=a.width,c=a.height,u=a.lineHeight;t.width=parseInt(s),t.height=parseInt(c);var d=0,f=function(e,t){var n=t.fontWeight,r=t.fontSize,a=t.fontFamily,i=t.width,o=t.height,l=t.lineHeight,s=document.createElement("canvas");s.width=i,s.height=o;var c=s.getContext("2d");return c.fillStyle="#ffffffff",c.textBaseline="middle",c.textAlign="center",c.font=n+" "+r+"px "+a,function(e,t,n,r,a,i){for(var o=[],l=t.split(" "),s="",c=0;c<l.length;c++){var u=s+l[c]+" ";e.measureText(u).width>a&&c>0?(o.push(s),s=l[c]+" "):s=u}s&&o.push(s),r-=(o.length-1)*i/2;for(var d=0;d<o.length;d++)e.fillText(o[d].trim(),n,r),r+=i}(c,e,i/2,o/2,i,l),c.globalCompositeOperation="source-out",c.fillStyle="#ffffffff",c.fillRect(0,0,i,o),c.restore(),window.m=s,s}(n.textContent.trim(),{fontSize:parseInt(o),fontWeight:parseInt(l)||l,fontFamily:i,width:parseInt(s),height:parseInt(c),lineHeight:parseInt(u)});!function(e,t){var n=document.createElement("canvas").getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,1,1);var r=n.getImageData(0,0,1,1).data,a=document.createElement("canvas");a.width=e.width,a.height=e.height;var i=a.getContext("2d");i.drawImage(t,0,0,t.width,t.height,0,0,a.width,a.height);for(var o=i.getImageData(0,0,e.width,e.height),l=i.createImageData(o),s=0;s<o.data.length;s+=4)o.data[s+3]>128?(l.data[s]=r[0],l.data[s+1]=r[1],l.data[s+2]=r[2],l.data[s+3]=r[3]):(l.data[s]=r[0],l.data[s+1]=r[1],l.data[s+2]=r[2],l.data[s+3]=r[3]?r[3]-1:0);i.putImageData(l,0,0),(i=e.getContext("2d")).drawImage(a,0,0),a=i=o=l=n=r=void 0}(t,f),r.innerHTML="";var h=new m([t,r],{fontSize:parseInt(o),fontWeight:parseInt(l)||l,fontFamily:i,gridSize:8,wait:0,list:e,drawMask:!1,maskGapWidth:16,rotateRatio:0,shuffle:!1,clearCanvas:!1,createElement:function(e){var t=document.createElement("a");return t.classList.add("wordcloud-element","zoomIn"),t.href="https://github.com/"+e.key,t.target="_blank",t},weightFactor:function(e){return 4+.618*(parseInt(o)-4)*e},color:function(e,t,n,r,a){return g({seed:d++,luminosity:"dark",format:"rgba",alpha:.1+.4*Math.sqrt(t)})}});return h.start(),function(){h.stop()}},i=a(),o=U((function(){i(),r.classList.add("animated","zoomOut")}),1e3,{trailing:!1,leading:!0}),l=U((function(){setTimeout((function(){i=a()}),0)}),1e3,{trailing:!0,leading:!1}),s=function(e,t){if("undefined"==typeof window)return function(){};var n={cb:function(){o(),l()}};if(window.ResizeObserver){var r=new ResizeObserver((function(){n.cb()}));return r.observe(e),function(){r.unobserve(e),delete n.cb}}var a=e.getClientRects().item(0),i=a.width,s=a.height,c=function(){var t=e.getClientRects().item(0),r=t.width,a=t.height;r===i&&a===s||(n.cb(),i=r,s=a)};return window.addEventListener("resize",c,{passive:!0}),function(){window.removeEventListener("resize",c),delete n.cb}}(n);return function(){s(),i(),r.classList.add("animated","zoomOut"),r.ontransitionend=function(){n.removeChild(r)}}}var Q=n(15861),Y=n(87757),J=n.n(Y),K=n(8100),V=n(21703),ee=function(){var e,t=V._+"/q/recent-events-rank";return(0,K.ZP)(["key"],{fetcher:(e=(0,Q.Z)(J().mark((function e(){var n,r,a;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(""+t).then((function(e){return e.json()}));case 2:return n=e.sent,r=n.data,a=n.sql,r.sql=a,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),revalidateOnFocus:!1,revalidateOnReconnect:!1})};function te(e){var t=e.children,n=(0,r.useRef)(),a=ee().data,i=void 0===a?[]:a;return(0,r.useLayoutEffect)((function(){if(i&&n.current){if(0===i.length)return;var e=i[0].history_events;return X(i.map((function(t){var n=t.repo_name,r=t.history_events;return{key:n,word:n.split("/")[1],weight:r/e}})),{container:n.current})}}),[i]),r.createElement("div",{ref:n,className:"wordcloud-container"},t)}var ne=n(20551),re=n(63366),ae=n(7906),ie=n(295),oe=n(53252),le=n(72882),se=n(53184),ce=n(53816),ue=n(87357),de=n(55113),me=n(67720),fe=n(50122),he=n(26447),pe=n(46483),ve=n(92902),ge=n(88078),we=n(69661),be=function(e){var t=e.owner,n=e.size,a=void 0===n?"1em":n;return r.createElement(he.Z,{direction:"row",spacing:1,sx:{alignItems:"center"},component:"a",href:"https://github.com/"+t,target:"_blank"},r.createElement(we.Z,{alt:t,src:"https://github.com/"+t+".png?size=20",sx:{width:a,height:a}}),r.createElement(pe.Z,null,t))};be.displayName="GithubOwner";var ye=be,Ee=n(4842),ke=n(85529),Te="superIcon_d3Jt",xe="clearTable_Ur9+",Ie=[{title:"Events",headline:{content:"Events",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types"},tooltip:"All events in recent 1 hour",key:"history_events"},{title:r.createElement(ke.r7p,null),headline:{content:"WatchEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#watchevent"},tooltip:r.createElement(r.Fragment,null,'When someone stars a repository. The type of activity is specified in the action property of the payload object. For more information, see the "starring" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"watch_events"},{title:r.createElement(ke.UWO,null),headline:{content:"PullRequestEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#pullrequestevent"},tooltip:r.createElement(r.Fragment,null,'Activity related to pull requests. The type of activity is specified in the action property of the payload object. For more information, see the "pull requests" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"pull_request_events"},{title:r.createElement(ke.GFI,null),headline:{content:"IssuesEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#issuesevent"},tooltip:r.createElement(r.Fragment,null,'Activity related to an issue. The type of activity is specified in the action property of the payload object. For more information, see the "issues" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"issues_events"},{title:r.createElement(ke.fg9,null),headline:{content:"PullRequestReviewEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#pullrequestreviewevent"},tooltip:r.createElement(r.Fragment,null,'Activity related to pull request reviews. The type of activity is specified in the action property of the payload object. For more information, see the "pull request reviews" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"pull_request_review_events"},{title:r.createElement(r.Fragment,null,r.createElement(ke.GFI,null),r.createElement(ke.qtd,{className:Te,size:10})),headline:{content:"IssueCommentEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#issuecommentevent"},tooltip:r.createElement(r.Fragment,null,'Activity related to an issue or pull request comment. The type of activity is specified in the action property of the payload object. For more information, see the "issue comments" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"issue_comment_events"},{title:r.createElement(r.Fragment,null,r.createElement(ke.fg9,null),r.createElement(ke.qtd,{className:Te,size:10})),headline:{content:"PullRequestReviewCommentEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#pullrequestreviewcommentevent"},tooltip:r.createElement(r.Fragment,null,'Activity related to pull request review comments in the pull request\'s unified diff. The type of activity is specified in the action property of the payload object. For more information, see the "pull request review comments" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"pull_request_review_comment_events"},{title:r.createElement(r.Fragment,null,r.createElement(ke.Edb,null),r.createElement(ke.qtd,{className:Te,size:10})),headline:{content:"CommitCommentEvent",url:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#commitcommentevent"},tooltip:r.createElement(r.Fragment,null,'A commit comment is created. The type of activity is specified in the action property of the payload object. For more information, see the "commit comment" REST API.',r.createElement("br",null),r.createElement("br",null),"The event object includes properties that are common for all events. Each event object includes a payload property and the value is unique to each event type. The payload object for this event is described below."),key:"commit_comment_events"}],Me=n(83321),Ce=n(93946),Se=n(74721),je=n(18557),Ze=n(50657),Fe=n(286),Ne=["repo_name"];function Re(){var e=ee(),t=e.data,n=e.isValidating,a=r.useState(!1),i=a[0],o=a[1];return n?r.createElement(ue.Z,null,r.createElement(ge.Z,{animation:"wave"}),r.createElement(ge.Z,{animation:"wave"}),r.createElement(ge.Z,{animation:"wave"}),r.createElement(ge.Z,{animation:"wave"}),r.createElement(ge.Z,{animation:"wave"})):r.createElement(Ee.Z,null,r.createElement("h2",null,"Top 20 most active repositories in ",r.createElement("u",null,"real time"),".",r.createElement(ve.Z,{title:r.createElement(pe.Z,{variant:"body2"},"Query was filtered due to massive bots' commits.",r.createElement("br",null),r.createElement(Me.Z,{disabled:n,onClick:function(){return o(!0)}},"SHOW SQL"))},r.createElement(Ce.Z,null,r.createElement(Se.Z,null)))),r.createElement(le.Z,{component:de.Z},r.createElement(ae.Z,{sx:{minWidth:650,marginBottom:0},"aria-label":"simple table",size:"small",className:xe},r.createElement(se.Z,null,r.createElement(ce.Z,null,r.createElement(oe.Z,{align:"center"},r.createElement("b",null,"#")),r.createElement(oe.Z,null,"Repo"),(Ie||[]).map((function(e){var t=e.title,n=e.headline,a=e.tooltip,i=e.key;return r.createElement(oe.Z,{key:i,align:"center"},r.createElement(ve.Z,{title:r.createElement(ue.Z,{sx:{padding:1}},r.createElement(fe.Z,{variant:"subtitle1",href:n.url,target:"_blank"},n.content),r.createElement(me.Z,{sx:{my:1}}),r.createElement(pe.Z,{variant:"body2",component:"p"},a))},r.createElement("span",null,t)))})))),r.createElement(ie.Z,null,t.map((function(e,t){var n=e.repo_name,a=(0,re.Z)(e,Ne),i=n.split("/"),o=i[0],l=i[1];return r.createElement(ce.Z,{key:n},r.createElement(oe.Z,{component:"th",scope:"row",align:"center"},t+1),r.createElement(oe.Z,{component:"th",scope:"row"},r.createElement(he.Z,{direction:"row",spacing:1,sx:{alignItems:"center"}},r.createElement(ye,{owner:o}),r.createElement("span",null,"/"),r.createElement(pe.Z,{component:"a",href:"https://github.com/"+n,target:"_blank"},l))),Ie.map((function(e){var t=e.key;return r.createElement(oe.Z,{key:t,align:"center"},r.createElement(pe.Z,{variant:"body2",component:"span",color:0===a[t]?"text.disabled":void 0},a[t]||"--"))})))}))))),r.createElement(Ze.Z,{maxWidth:"lg",open:i,onClose:function(){return o(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},r.createElement(je.Z,null,"[For Debug] SQL Execution info"),r.createElement(ue.Z,{sx:{p:4}},(0,Fe.H1)(null==t?void 0:t.sql))))}function _e(){var e=(0,o.Z)().siteConfig;return r.createElement(r.Fragment,null,r.createElement("header",{className:(0,a.Z)("hero",l)},r.createElement("div",{className:c},r.createElement(te,null,r.createElement("h1",{className:(0,a.Z)("hero__title",s)},e.title)))),r.createElement("div",{className:(0,a.Z)("hero",u)},r.createElement("div",{className:"container"},r.createElement("p",{className:(0,a.Z)("hero__subtitle",d)},e.tagline))),r.createElement("div",{className:(0,a.Z)("hero",u)},r.createElement("div",{className:"container"},r.createElement(Re,null))))}function Ae(){(0,o.Z)().siteConfig;return r.createElement(i.Z,{title:"\ud83d\udcc8 2021 OSS Analysis",description:"\ud83d\udc8e Comprehensive analysis of open source software trends on github, include database field, javascript framework field, web framework, lowcode development tool, etc."},r.createElement("div",{style:{"--ifm-container-width-xl":"960px"}},r.createElement(_e,null),r.createElement("div",{style:{margin:"4em 0"}},r.createElement("div",{className:"container container-fluid"},r.createElement(ne.default,null)))))}}}]);