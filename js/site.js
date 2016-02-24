function siteInit() {
  //DECLARE GLOBAL APP HERE
  var myApp = {
    siteDir: phpvars_siteDir,
    ww: $(window).width(),
    wh: $(window).height(),
    dt: 801,
    tab: 401,
    ts: 500,
    orientation = function() {
      function decider(w,x) {
        if (w >= x) {
        $('html').addClass('_orientation-landscape').removeClass('_orientation-portrait');
        }else {
         $('html').removeClass('_orientation-landscape').addClass('_orientation-portrait');
        }
      }
      decider(this.parent.ww,this.parent.wh);
      
      $(window).resize(function(){
        this.parent.ww = $(window).width();
        this.parent.wh = $(window).height();
        decider(this.parent.ww,this.parent.wh);
      });
    }
  }.orientation();

 /* orientationClass();
  $(window).resize(function(){
    myApp.ww = $(window).width(),
    myApp.wh = $(window).height();
    orientationClass();
  });
  */

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




/*

function orientationClass() {
  if (myApp.ww >= myApp.wh) {
    $('html').addClass('_orientation-landscape').removeClass('_orientation-portrait');
  } else {
    $('html').removeClass('_orientation-landscape').addClass('_orientation-portrait');
  }
}

*/

//DON'T TOUCH

siteInit();
