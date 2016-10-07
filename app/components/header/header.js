'use strict';

var APP = window.APP = window.APP || {};

APP.header = (function(){

    var bindEventsToUI = function() {
        // ...
    };

    var init = function() {
        var $element = $(arguments[0]);
        $element.find('h1').html('Updated');
        console.log('APP.header');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
