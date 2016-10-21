'use strict';

var APP = window.APP = window.APP || {};
APP.mobileverify = (function(){

    var  inputValue1,inputValue2,inputValue3 = "";

    var bindEventsToUI = function() {
        // ...

        $( ".numbersonly" ).keydown(function(e) {
            var key   = e.keyCode ? e.keyCode : e.which;
            if (!( [8, 9, 13, 27, 46, 110].indexOf(key) !== -1 ||
                    (key == 65 && ( e.ctrlKey || e.metaKey  ) ) ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
                    (key >= 96 && key <= 105)
                )) e.preventDefault();
        });



        $( ".numbersonly" ).keyup(function(e) {
            inputValue1 = document.getElementById("phone-1").value;
            inputValue2 = document.getElementById("phone-2").value;
            inputValue3 = document.getElementById("phone-3").value;


            if(inputValue1 == "" && inputValue2 == "" && inputValue3 == ""){
               // $('input[type="checkbox"]').removeAttr('checked');
              //  console.log("entrooo value" + inputValue1);
            }else {
                $('input[type="checkbox"]').prop('checked', 'false');
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

        initModal();
    };

    var init = function() {
        var $element = $(arguments[0]);
        console.log('APP.mobileverify');
        bindEventsToUI();
    };


    var initModal = function () {
        var saveNumberModal = document.getElementById("c__thankyoushort__modal");
        var cancelModal = document.getElementById('c__processcancelled__modal');
        var attentionModal = document.getElementById('c__attention__modal');
        var noCellModal = document.getElementById('c__nocell__modal');

        var btn = document.getElementById("saveNumberBTN");
        var cancelBtn = document.getElementById("p__mobileverify_cancelBTN");
        var nomyNumberBtn = document.getElementById("p__mobileverify_nomyNumber");
        var noNumberBtn = document.getElementById("p__mobileverify__noNumber");

        btn.onclick = function() {
            saveNumberModal.style.display = "block";
        }

        cancelBtn.onclick = function() {
            cancelModal.style.display = "block";
        }


        nomyNumberBtn.onclick = function() {
            noCellModal.style.display = "block";
        }

        noNumberBtn.onclick = function() {
            noCellModal.style.display = "block";
        }


    };



    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
