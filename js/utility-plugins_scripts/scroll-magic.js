function scrollMagic() {
  //console.log('scroll');





  var cutoff = windowh /2;

  var stop = $(document).scrollTop();

  

  $('.scroll-magic').each(function(){
    var theMagic = $(this);
    if($(theMagic).hasClass('__scroll-activated') === false) {

      var destop = $(theMagic).offset(),
          dtop = destop.top;
      //console.log(dtop+' '+stop);
      if ((dtop-200)-cutoff <= stop) {
      //  console.log('asdfasfds');
        $(theMagic).addClass('__scroll-activated');
        scrollRunner(theMagic);

      }/* else {
        if (stop > (dtop-100)-cutoff && stop < (dtop+100)-cutoff) {
          $(theMagic).addClass('__scroll-activated');
          scrollRunner(theMagic);

        }
      }*/
    }

  });
  function scrollRunner(theMagic) {
  //  console.log(theMagic);
    var thefunction = $(theMagic).data('scrollfunction'),
        thevariables = $(theMagic).data('scrollvariables');
    if (thevariables === "theObject") {
      thevariables = theMagic;
    }
    if (typeof window[thefunction] == 'function') {
      //console.log(thefunction);
      window[thefunction](thevariables);
    } else {

    }
  }
}
