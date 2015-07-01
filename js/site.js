function siteInit() {
  //GLOBALS
  ts = 250,
  tab = 401,
  dt = 801;
  windoww = $(window).width();
  windowh = $(window).height();
  orientationClass();
  $(window).resize(function(){
    windoww = $(window).width();
    windowh = $(window).height();
    orientationClass();
  });

  //CHECK IF CSS IS LOADED
  var thechecker = setInterval(function(){
    var ztest = $('#css-checker').css('height');

    console.log(ztest);

    if(ztest == '1px') {
      cssLoaded = true;
      clearInterval(thechecker);
      console.log('css loaded');
    }

  }, 200);




  $('html').addClass('_page-loaded');
}
function orientationClass() {
  if (windoww >= windowh) {
    $('html').addClass('_orientation-landscape').removeClass('_orientation-portrait');
  } else {
    $('html').removeClass('_orientation-landscape').addClass('_orientation-portrait');
  }
}


siteScriptsLoaded = true;
