'use strict';

var APP = window.APP = window.APP || {};
APP.authentication = (function(){

    var bindEventsToUI = function() {
        // ...

        $( "#zipBTN" ).click(function() {
           validateZipCode();
        });

        $( "#zipcode" ).keydown(function(e) {


            var key   = e.keyCode ? e.keyCode : e.which;
            if (!( [8, 9, 13, 27, 46, 110].indexOf(key) !== -1 ||
                    (key == 65 && ( e.ctrlKey || e.metaKey  ) ) ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
                    (key >= 96 && key <= 105)
                )) e.preventDefault();
        });


        initModal();

    };

    var init = function() {
        var $element = $(arguments[0]);
        console.log('APP.authentication');
        bindEventsToUI();
    };
    
    var validateZipCode = function () {
      var inputValue = document.getElementById("zipcode").value;
        //console.log((inputValue== ""));
        if(inputValue == ""){
            $( ".p__authentication__error" ).show();
        }
    };


    var initModal = function () {
        var cancelModal = document.getElementById('c__processcancelled__modal');


        var cancelBtn = document.getElementById("p__authentication__cancel");

        cancelBtn.onclick = function() {
            cancelModal.style.display = "block";
        }

    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
