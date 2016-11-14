'use strict';
var currentPath;
currentPath = $(location).attr('href');
function bindeventTranslate(){
    $( ".c-header__espanol").click(function() {
        isEspanol = true;
        $( ".c-header__espanol").hide();
        $( ".c-header__english").show();
        if (currentPath.indexOf("") !== -1) {
            updateEspanish();
        }

        if(currentPath.indexOf("mobileenter") !== -1) {
            mobileEntertoEspanish();

        }

    });



    $( ".c-header__english").click(function() {
        isEspanol = false;
        $( ".c-header__espanol").show();
        $( ".c-header__english").hide();
        currentPath = $(location).attr('href');

        if(currentPath.indexOf("mobileenter") !== -1) {
            mobileEntertoEnglish();
        }else if (currentPath.indexOf("") !== -1) {

            updatetoEnglish();
        }



    });
}

var APP = window.APP = window.APP || {};

APP.header = (function(){



    var bindEventsToUI = function() {
        // ...
        bindeventTranslate();


    };

    var init = function() {
        var $element = $(arguments[0]);
        $element.find('h1').html('Updated');
       // console.log('APP.header');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
