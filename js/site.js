$(document).ready(function(){
  //GLOBALS
  siteDir = '/wp-content/themes/w25th-build',
  ts = 250,
  tab = 401,
  dt = 801;
  windoww = $(window).width();
  windowh = $(window).height();
  $(window).resize(function(){
    windoww = $(window).width();
    windowh = $(window).height();
  });


  //LOAD IN EXPANDED CSS
  loadCSS(cssExpand);
  $('body').addClass('page-loaded');
});
