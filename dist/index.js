!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).elementInView=e()}(this,(function(){"use strict";function t(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function e(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}return function(o,r){return null==r&&(r={}),function(t,e){var o=t.getBoundingClientRect(),r=(e.parent||document.documentElement).getBoundingClientRect(),n={left:r.left+(e.offsetX||e.offsetLeft||0),right:r.right-(e.offsetX||e.offsetRight||0),top:r.top+(e.offsetY||e.offsetTop||0),bottom:r.bottom-(e.offsetY||e.offsetBottom||0)},f=n.left<=o.right&&n.right>o.right,i=n.left<=o.left&&n.right>=o.left,c=n.top<=o.bottom&&n.bottom>o.bottom,u=n.top<=o.top&&n.bottom>o.top;if(e.partial)return(u||c)&&(f||i);return f&&i&&u&&c}(o,function(o){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach((function(e){t(o,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(n,t))}))}return o}({partial:!1},r))}}));
