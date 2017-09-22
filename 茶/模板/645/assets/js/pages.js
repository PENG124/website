jQuery(function($){
    "use strict";

    var PIX = window.PIX || {};


    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    PIX.mainFunction = function(){
        /******** HOME SILDER BANNER WEEKEND ********/
        $('.block-slider-team').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            focusOnSelect: true,
            centerMode: true,
            centerPadding: "0",
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        $(".tile-links-faq").on('click', function(){
            $('.tile-links-faq').removeClass('active');
            $(this).addClass('active');
        });

        /******** LIST GIRD ********/

        $('.wrapper-gird-list .links-list').on('click', function(){
            $('.wrapper-gird-list .links-gird').removeClass('active');
            $(this).addClass('active');
            $('.main-shop').addClass('show-list');
        });
        $('.wrapper-gird-list .links-gird').on('click', function(){
            $('.wrapper-gird-list .links-list').removeClass('active');
            $(this).addClass('active');
            $('.main-shop').removeClass('show-list');
        });

        /******** SHOP DETAIL ********/
        $('.list-btn-shop .links-add-btn').on('click', function(){
            $('.list-btn-shop .links-add-btn').removeClass('active');
            $(this).addClass('active');
        });

        $('.list-btn-shop .links-add-card').on('click', function(){
            $('.list-btn-shop .links-add-card').removeClass('active');
            $(this).addClass('active');
        })


        /****** COMBO MENU ********/

        $(".main-combo-menu").slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
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
