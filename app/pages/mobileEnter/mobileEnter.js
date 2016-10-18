'use strict';

var APP = window.APP = window.APP || {};
APP.mobileEnter = (function(){

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


        var container = document.getElementsByClassName("p__mobileEnter__phoneNum")[0];
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


        initModal();


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

    var init = function() {
        var $element = $(arguments[0]);
        console.log('APP.mobileEnter');
        bindEventsToUI();
    };
    
    
    var initModal = function () {
        // Get the modal
        var modal = document.getElementById('p__mobileEnter__modal');
        var btn = document.getElementById("saveNumberBTN");
        var span = document.getElementsByClassName("p__mobileEnter_closeBTN")[0];

        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
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
