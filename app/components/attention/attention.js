'use strict';

var APP = window.APP = window.APP || {};

APP.attention = (function(){

    var bindEventsToUI = function() {
        // ...
        initModal();
    };

    var init = function() {
        console.log('APP.attention');
        bindEventsToUI();
    };




    var initModal = function () {
        // Get the modal
        var modal = document.getElementById('c__attention__modal');
        var btn = document.getElementsByClassName("cancel__BTN")[0];
        var closeBTN = document.getElementsByClassName("c__attention_closeBTN")[0];

        btn.onclick = function() {
            modal.style.display = "block";
        }

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
