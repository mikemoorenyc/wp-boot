siteDir = '***REPLACEWITHTHEMEDIRECTORY***';

var timestamp = '***TIMESTAMP***';

cssExpand = siteDir+"/css/expanded.css?v="+timestamp;

function loadCSS(e,t,n){"use strict";function o(){var t;for(var i=0;i<s.length;i++){if(s[i].href&&s[i].href.indexOf(e)>-1){t=true}}if(t){r.media=n||"all"}else{setTimeout(o)}}var r=window.document.createElement("link");var i=t||window.document.getElementById("inline-scripts");var s=window.document.styleSheets;r.rel="stylesheet";r.href=e;r.media="only x";i.parentNode.insertBefore(r,i);o();return r}


loadCSS(cssExpand);


var jquerychecker = setInterval(function(){

  if (typeof jQuery != 'undefined' ) {
    console.log('jquery loaded');
    $.getScript(siteDir+"/js/main.js?v="+timestamp);
    clearInterval(jquerychecker);
  } 

}, 10);
