
//GLOBAL JAVASCRIPT VARIABLES TAKEN FROM PHP
var phpvars_siteDir = '***REPLACEWITHTHEMEDIRECTORY***',
    phpvars_timestamp = '***TIMESTAMP***';

var cssExpand = phpvars_siteDir+"/css/expanded.css?v="+phpvars_timestamp;

function loadCSS(e,t,n){"use strict";function o(){var t;for(var i=0;i<s.length;i++){if(s[i].href&&s[i].href.indexOf(e)>-1){t=true}}if(t){r.media=n||"all"}else{setTimeout(o)}}var r=window.document.createElement("link");var i=t||window.document.getElementById("inline-scripts");var s=window.document.styleSheets;r.rel="stylesheet";r.href=e;r.media="only x";i.parentNode.insertBefore(r,i);o();return r}


loadCSS(cssExpand);




function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                if (callback && typeof callback === "function") {
                    callback();
                }
            }
        };
    } else {
        script.onload = function () {
            if (callback && typeof callback === "function") {
                callback();
            }
        };
    }
    script.src = url;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
}
// How to use it
loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js", function () {
    console.log('jquery loaded');
    $.getScript(phpvars_siteDir+"/js/main.js?v="+phpvars_timestamp);
});
