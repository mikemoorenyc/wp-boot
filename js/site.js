function siteInit() {
  
  
  
  //GLOBALS
  app.ts = 250,
  app.tab = 401,
  app.dt = 801;
  app.ww = $(window).width();
  app.wh = $(window).height();
  orientationClass();
  $(window).resize(function(){
    windoww = $(window).width();
    windowh = $(window).height();
    orientationClass();
  });

  //theHistory();


  //CHECK IF CSS IS LOADED
  var thechecker = setInterval(function(){
    var ztest = $('#css-checker').css('height');

    if(ztest == '1px') {
      cssLoaded = true;
      clearInterval(thechecker);
      console.log('css loaded');
    }
  }, 10);







  pageLoader();

  $('html').addClass('_page-loaded');
  console.log('scripts loaded');
}






function orientationClass() {
  if (app.ww >= app.wh) {
    $('html').addClass('_orientation-landscape').removeClass('_orientation-portrait');
  } else {
    $('html').removeClass('_orientation-landscape').addClass('_orientation-portrait');
  }
}



//DON'T TOUCH

siteInit();
