function progressiveImageLoader() {
  var imgArray = $('.page-content').find('img.pro');
      imgCount = $(imgArray).length;
      slidesLoaded = 0;
  $(imgArray).each(function(e){
    $(this).addClass('pro-'+e);
  });

  if(imgCount > 0) {
    theLoader(slidesLoaded);
  }

  function theLoader(num) {
    if(num == imgCount) {
      //console.log('all loaded');
      return false;
    } else {
      var theImg = $('img.pro-'+num),
          theSrc = $(theImg).data('src');
      $(theImg).attr('src', theSrc);
      $(theImg).load(function(){
        //console.log("Image Loaded");
        slidesLoaded++;
        theLoader(slidesLoaded);
        $(theImg).addClass("__loaded");
      });
    }
  }
}
