//EM ASPECT RATIOER
function aspecter(theObject, baseWidth) {
  $('.aspecter').each(function(){
    var theObject = $(this),
        baseWidth = $(theObject).data('basewidth'),
        percenter = $(theObject).width() / baseWidth;
        //console.log($(theObject).width());
    $(theObject).css('font-size', (basefont * percenter)+'px');
  });
}
