(function () {
   function setCss() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
   }

   setCss();

   window.addEventListener('resize', () => {
      // We execute the same script as before
      setCss();
   });
})();

$(function () {
   var ContactData = {
      emailHref: `mailto:info@matthewgoodwintherapy.com?subject=Inquiry%20via%20Website&body=First%20Name%3A%0A%0ALast%20Name%3A%0A%0AMessage%3A`,
      emailDisplay: `info@matthewgoodwintherapy.com`,
      phoneHref: `tel:2066079466`,
      phoneDisplay: '206.607.9466'
   };
   function bindContactInfo() {
      $('#email')
         .attr('href', ContactData.emailHref)
         .text(ContactData.emailDisplay);
      $('#phone')
         .attr('href', ContactData.phoneHref)
         .text(ContactData.phoneDisplay);
   }
   bindContactInfo();
   // $('#show-contact-info button').click(function () {
   //    var btn = $(this);

   //    btn.fadeOut(300, function () {
   //       $('#contact-spinner').fadeIn();
   //    });
   //    bindContactInfo();
   //    setTimeout(function () {
   //       $('#contact-spinner').fadeOut('fast', function () {
   //          $('#actual-contact-info').removeClass('invisible');
   //       });
   //    }, 2000);
   // });
});
function createMap() {
   var opts = {
      center: {
         lat: 47.650485,
         lng: -122.350391
      },
      zoom: 14,
      mapTypeControl: false,
      streetViewControl: false,
      styles: [
         {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [{ color: '#ebe3cd' }]
         },
         {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#523735' }]
         },
         {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#f5f1e6' }]
         },
         {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#c9b2a6' }]
         },
         {
            featureType: 'administrative',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
         },
         {
            featureType: 'administrative.locality',
            elementType: 'labels.text',
            stylers: [{ visibility: 'on' }]
         },
         {
            featureType: 'administrative.neighborhood',
            elementType: 'labels.text',
            stylers: [{ visibility: 'on' }]
         },
         {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#dcd2be' }]
         },
         {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ae9e90' }]
         },
         {
            featureType: 'landscape',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
         },
         {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
         },
         {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
         },
         {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
         },
         {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#93817c' }]
         },
         {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{ color: '#a5b076' }]
         },
         {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#447530' }]
         },
         {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#f5f1e6' }]
         },
         {
            featureType: 'road',
            elementType: 'labels',
            stylers: [{ visibility: 'simplified' }]
         },
         {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#f8c967' }]
         },
         {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#e9bc62' }]
         },
         {
            featureType: 'road.highway',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
         },
         {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{ color: '#e98d58' }]
         },
         {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#db8555' }]
         },
         {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#fdfcf8' }]
         },
         {
            featureType: 'road.arterial',
            elementType: 'geometry.fill',
            stylers: [{ hue: '#ff6300' }, { lightness: '-25' }]
         },
         {
            featureType: 'road.arterial',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }]
         },
         {
            featureType: 'road.arterial',
            elementType: 'labels.text',
            stylers: [{ visibility: 'on' }]
         },
         {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
         },
         {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{ hue: '#ff9c00' }, { gamma: '.9' }, { lightness: '-24' }]
         },
         {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#806b63' }]
         },
         {
            featureType: 'transit',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
         },
         {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
         },
         {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#8f7d77' }]
         },
         {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#ebe3cd' }]
         },
         {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
         },
         {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{ color: '#b9d3c2' }]
         },
         {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#92998d' }]
         }
      ],
      maxZoom: 20,
      minZoom: 0,
      mapTypeId: 'roadmap'
   };

   opts.clickableIcons = true;
   opts.disableDoubleClickZoom = false;
   opts.draggable = true;
   opts.keyboardShortcuts = true;
   opts.scrollwheel = true;

   var map = new google.maps.Map(document.getElementById('map'), opts);

   (function () {
      var markerOptions = {
         map: map,
         position: {
            lat: 47.650485,
            lng: -122.350391
         },
         title: 'Matthew Goodwin Psychotherapy',
         animation: google.maps.Animation.DROP
      };

      markerOptions.icon = {
         path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z',
         scale: 1.6363636363636363636363636364,
         anchor: new google.maps.Point(11, 22),
         fillOpacity: 1,
         fillColor: '#218dff',
         strokeOpacity: 0
      };

      var marker = new google.maps.Marker(markerOptions);
   })();
}
