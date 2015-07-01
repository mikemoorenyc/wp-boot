//LOAD MAP
function loadMap() {
  if($('html').hasClass('__map-loaded') === false) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?sensor=true&v=3.exp&' +
    'callback=mapinitialize';
    document.body.appendChild(script);

  } else {
    mapinitialize();
  }
}

function mapinitialize() {

  var dragvalue = true;

  if(Modernizr.touch) {
    dragvalue = false;
  }

  centerLat = 40.7544458,
  centerLon = -73.9855619
  center = new google.maps.LatLng(centerLat,centerLon);
  var zoomLevel = 16;

  if(windoww <= 600) {
    zoomLevel = 14;
  }

  var mapOptions = {
    zoom: zoomLevel,
    disableDefaultUI: true,
    center: center,
    styles: mapStyles,
    scrollwheel: false,
    draggable : dragvalue
  };
  map = new google.maps.Map(document.getElementById('map'),
  mapOptions);





  //LOAD IN INFO BOX

  function loadinfobox() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = siteDir +
    '/js/infobox.js';
    document.body.appendChild(script);
  }

  if($('html').hasClass('__map-loaded') === false) {
    loadinfobox();

  } else {
    pinRollout();
  }



  //REMOVE LOADER
  $('html').addClass('__map-loaded');

  //$('.pois .cat:first-child .header').click();

  //MAP CENTERING

  setTimeout(function(){
        //initialize();
        map.panTo(center);
        //console.log('centering');
  }, 1000);
  google.maps.event.addDomListener(window, 'resize', function() {
    google.maps.event.trigger(map, 'resize');
    map.panTo(center);
    var zoomLevel = 16;
    if(windoww <= 600) {
      zoomLevel = 14;
    }
    map.setZoom(zoomLevel);


  });


}

function pinRollout() {
  pinMaker();
  singlePin('mainPin', '<span class="hide">114 W 41',centerLat,centerLon);
}

function pinMaker() {
  var catCounter = 0;
  var currentCat = mapPins[0][3];
  var firstCat = mapPins[0][3];
  $(mapPins).each(function(e){

    var activeClass = '';

    var pinInfo = $(this),
        pinName = pinInfo[0],
        pinLat = pinInfo[1],
        pinLong = pinInfo[2],
        pinCat = pinInfo[3];


    if (pinCat == firstCat) {
      activeClass = "__activated";
    } else {
      activeClass = '';
    }
    if(pinCat !== currentCat) {
      catCounter = 0;
      currentCat = pinCat;
    }

    var siteLatLng = new google.maps.LatLng(pinLat, pinLong);
    var mainPin = new InfoBox({
    content: ''
    ,disableAutoPan: false
    ,maxWidth: 1
    ,pixelOffset: new google.maps.Size(0, 0)
    ,zIndex: 2
    ,boxClass: 'pinAnchor'
    ,boxStyle: {
     background: "red"

    }
    ,closeBoxMargin: "0"
    ,closeBoxURL: ""
    ,infoBoxClearance: new google.maps.Size(1, 1)
    ,isHidden: false
    ,pane: "floatPane"
    ,enableEventPropagation: false
    ,alignBottom: false
    });
    mainPin.setContent('<div data-hover="'+pinCat+'-'+(catCounter+1)+'" class="'+pinCat+' siteDot '+activeClass+'">'+'<span class="counter replica">'+(catCounter+1)+'</span><span class="name">'+pinName+'</span>'+'</div>');
    mainPin.open(map);
    mainPin.setPosition(siteLatLng);
    catCounter++;

  });

}


function singlePin(pinClass, pinContent, lat,lng, pinCat) {
  var mainPin = new InfoBox({
  content: ''
  ,disableAutoPan: false
  ,maxWidth: 1
  ,pixelOffset: new google.maps.Size(0, 0)
  ,zIndex: 1
  ,boxClass: 'pinAnchor'
  ,boxStyle: {
   background: "red"

  }
  ,closeBoxMargin: "0"
  ,closeBoxURL: ""
  ,infoBoxClearance: new google.maps.Size(1, 1)
  ,isHidden: false
  ,pane: "floatPane"
  ,enableEventPropagation: false
  ,alignBottom: false
  });
  mainPin.setContent('<div class="'+pinClass+'">'+pinContent+'</div>');
  mainPin.open(map);
  mainPin.setPosition(new google.maps.LatLng(lat,lng));

}
