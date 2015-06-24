siteDir = '***REPLACEWITHTHEMEDIRECTORY***';

var timestamp = '***TIMESTAMP***';

cssExpand = siteDir+"/css/expanded.css?v="+timestamp;

function loadCSS(e,t,n){"use strict";function o(){var t;for(var i=0;i<s.length;i++){if(s[i].href&&s[i].href.indexOf(e)>-1){t=true}}if(t){r.media=n||"all"}else{setTimeout(o)}}var r=window.document.createElement("link");var i=t||window.document.getElementsByTagName("footer")[0];var s=window.document.styleSheets;r.rel="stylesheet";r.href=e;r.media="only x";i.parentNode.insertBefore(r,i);o();return r}

/*
function downloadJSAtOnload(){var e=document.createElement("script");e.src=siteDir+"/js/main.js?v="+timestamp;document.body.appendChild(e)}if(window.addEventListener)window.addEventListener("load",downloadJSAtOnload,false);else if(window.attachEvent)window.attachEvent("onload",downloadJSAtOnload);else window.onload=downloadJSAtOnload*/

var jquerychecker = setInterval(function(){
  if (typeof jQuery != 'undefined') {
    console.log('jquery loaded');

    var e=document.createElement("script");e.src=siteDir+"/js/main.js?v="+timestamp;document.body.appendChild(e);

    clearInterval(jquerychecker);


  }

}, 100);
