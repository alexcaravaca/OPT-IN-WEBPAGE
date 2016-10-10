'use strict';

var APP = window.APP = window.APP || {};
APP.enteryourmobile = (function(){

    var bindEventsToUI = function() {
        // ...

        $( "#zipBTN" ).click(function() {
           validateZipCode();
        });

    };

    var init = function() {
        var $element = $(arguments[0]);
        console.log('APP.enteryourmobile');
        bindEventsToUI();
    };
    
    var validateZipCode = function () {
      var inputValue = document.getElementById("zipcode").value;
        //console.log((inputValue== ""));
        if(inputValue == ""){
            $( ".p__authentication__error" ).show();
        }
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
