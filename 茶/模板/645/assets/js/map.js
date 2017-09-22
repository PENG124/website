jQuery(function($){
    "use strict";

    var PIX = window.PIX || {};


    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    PIX.mainFunction = function(){
        var beaches = [
            ['Bondi Beach', 40.736119, -74.001851, 1]
        ];

        function setMarkers(map) {
            var image = {
                url: 'assets/images/home/icons-address-map-2.jpg',
                size: new google.maps.Size(250, 66),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 32)
            };
            var shape = {
                coords: [1, 1, 1, 20, 18, 20, 18, 1],
                type: 'poly'
            };
            for (var i = 0; i < beaches.length; i++) {
                var beach = beaches[i];
                var marker = new google.maps.Marker({
                    position: {lat: beach[1], lng: beach[2]},
                    map: map,
                    icon: image,
                    shape: shape,
                    title: beach[0],
                    zIndex: beach[3]
                });
            }
        }

        function init() {
            // If document (your website) is wider than 767px, isDraggable = true, else isDraggable = false

            var isDraggable = $(document).width() > 1024 ? true : false;
            var styles = [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f9f9f9"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ];

            var styledMap = new google.maps.StyledMapType(styles,
                {name: "Styled Map"});

            var myOptions = {
                zoom: 13,
                //center: myMap,
                mapTypeControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                draggable: isDraggable,
                scrollwheel: false,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                }

            };
            setTimeout(function(){
                var map = new google.maps.Map(document.getElementById('map'), myOptions);

                setMarkers(map);

                map.setCenter({
                    lat: 40.7483821,
                    lng: -73.9876031
                });

                map.mapTypes.set('map_style', styledMap);

                map.setMapTypeId('map_style');
            }, 300);
        }

        google.maps.event.addDomListener(window, 'load', init);
    };

    /*=======================================
    =           END MAIN FUNCTION           =
    =======================================*/


    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function(){
        PIX.mainFunction();
    });

    $(window).on('load', function() {

    });


    /*======================================
    =          END INIT FUNCTIONS          =
    ======================================*/

});
