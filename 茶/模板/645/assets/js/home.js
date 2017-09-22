jQuery(function($){
    "use strict";

    var PIX = window.PIX || {};


    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    PIX.mainFunction = function(){

        /******** VIDEO ********/
        if ($(".video-embed").length) {
            var video = $(".video-embed")[0].src;
            $('.main-about-images-video .btn-play').on("click", function(event){
                $('.main-about-images-video').addClass("show-video");
                $('.main-about-images-video').find(".video-embed")[0].src += "?autoplay=1";
                event.preventDefault();
            });

            $('.main-about-images-video .btn-close').on("click", function(event){
                $('.main-about-images-video').removeClass("show-video");
                $(".video-embed")[0].src = video;
            });
        }

        /******** HOME SILDER BANNER WEEKEND ********/
        $('.block-banner-weekend').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        })
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
