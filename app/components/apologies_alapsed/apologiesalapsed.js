'use strict';

var APP = window.APP = window.APP || {};

APP.apologiesalapsed = (function(){

    var bindEventsToUI = function() {
        // ...
        initModal();
    };

    var init = function() {
        console.log('APP.apologiesalapsed');
        bindEventsToUI();
    };




    var initModal = function () {
        // Get the modal
        var modal = document.getElementById('c__apologiesalapsed__modal');

        var closeBTN = document.getElementsByClassName("c__apologiesalapsed_closeBTN")[0];


        closeBTN.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
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
