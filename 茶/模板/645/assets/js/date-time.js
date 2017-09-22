jQuery(function($){
    "use strict";

    var PIX = window.PIX || {};


    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    PIX.mainFunction = function(){
        var dayOfWeek, dayOfMonth, jsDate;
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        function getOrdinal(val){

            var mod = val % 10;
            if (mod === 1 && val !== 11) {
                return 'st';
            } else if (mod === 2 && val !== 12) {
                return 'nd';
            } else if (mod === 3 && val !== 13) {
                return 'rd';
            } else {
                return 'th';
            }
        }
        if($('.calendar-board').length) {
            var numCalendar = $('.calendar-board').length;
            $('.calendar-board').each(function() {
                var $this = $(this);
                var flag = false;
                $(this).datepicker({
                    todayHighlight: true,
                    beforeShowDay: function(e) {
                        if (flag == false) {
                            jsDate = new Date();
                            dayOfWeek = days[jsDate.getDay()];
                            dayOfMonth = jsDate.getDate() + getOrdinal(jsDate.getDate());
                            $this.find('.datepicker .datepicker-switch').append('<span class="date-label">'+ dayOfWeek + ' ' + dayOfMonth +'</span>');
                            flag = true;
                        }
                    }
                });
            });
            $('.calendar-board').on('changeDate', function() {
                var getDateLabel = $(this).datepicker('getDate');
                dayOfWeek = days[getDateLabel.getDay()];
                dayOfMonth = getDateLabel.getDate() + getOrdinal(getDateLabel.getDate());
                $(this).find('.datepicker table tr td.today').removeClass('today');
                $(this).find('.datepicker-switch').append('<span class="date-label">'+ dayOfWeek + ' ' + dayOfMonth +'</span>');
            });
        }
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
