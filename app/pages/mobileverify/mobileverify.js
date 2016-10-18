'use strict';

var APP = window.APP = window.APP || {};
APP.mobileverify = (function(){

    var  inputValue1,inputValue2,inputValue3 = "";

    var bindEventsToUI = function() {
        // ...

        $( ".numbersonly" ).keyup(function(e) {
            var key   = e.keyCode ? e.keyCode : e.which;

            if (!( [8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
                    (key == 65 && ( e.ctrlKey || e.metaKey  ) ) ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
                    (key >= 96 && key <= 105)
                )) e.preventDefault();
            else{

                getcheckboxValue();


            }
        });


        var container = document.getElementsByClassName("p__mobileverify__phoneNum")[0];
        container.onkeyup = function(e) {
            var target = e.srcElement;
            var maxLength = parseInt(target.attributes["maxlength"].value, 10);
            var myLength = target.value.length;
            if (myLength >= maxLength) {
                var next = target;
                while (next = next.nextElementSibling) {
                    if (next == null)
                        break;
                    if (next.tagName.toLowerCase() == "input") {
                        next.focus();
                        break;
                    }
                }
            }
        }


    };

    var init = function() {
        var $element = $(arguments[0]);
        console.log('APP.mobileverify');
        bindEventsToUI();
    };


    var getcheckboxValue = function () {

        inputValue1 = document.getElementById("phone-1").value;
        inputValue2 = document.getElementById("phone-2").value;
        inputValue3 = document.getElementById("phone-3").value;


        if(inputValue1 == "" && inputValue2 == "" && inputValue3 == ""){
            $('input[type="checkbox"]').removeAttr('checked');
        }else {
            $('input[type="checkbox"]').prop('checked', 'false');
        }
    };


    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
