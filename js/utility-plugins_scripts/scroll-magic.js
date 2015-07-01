function scrollMagic() {

  var cutoff = windowh /2;

  var stop = $(document).scrollTop();



  $('.scroll-magic').each(function(){
    var theMagic = $(this);
    if($(theMagic).hasClass('__scroll-activated') === false) {

      var destop = $(theMagic).offset(),
          dtop = destop.top;

      if ((dtop-200)-cutoff <= stop) {

        $(theMagic).addClass('__scroll-activated');
        scrollRunner(theMagic);

      }
    }

  });
  function scrollRunner(theMagic) {

    var thefunction = $(theMagic).data('scrollfunction'),
        thevariables = $(theMagic).data('scrollvariables');
    if (thevariables === "theObject") {
      thevariables = theMagic;
    }
    if (typeof window[thefunction] == 'function') {

      window[thefunction](thevariables);
    }
  }
}
