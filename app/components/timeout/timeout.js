'use strict';

var APP = window.APP = window.APP || {};

APP.timeout = (function(){

    var bindEventsToUI = function() {
        // ...
        initModal();
    };

    var init = function() {
        console.log('APP.timeout');
        bindEventsToUI();
    };




    var initModal = function () {
        // Get the modal
        var modal = document.getElementById('c__timeout__modal');
        var closeBTN = document.getElementsByClassName("c__timeout_closeBTN")[0];

        closeBTN.onclick = function() {
            modal.style.display = "none";
            bindeventTranslate();
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                bindeventTranslate();
            }
        }
    };




    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
