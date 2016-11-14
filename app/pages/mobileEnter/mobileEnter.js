'use strict';



function mobileEntertoEspanish() {
    $(".p__mobileEnter h2").text("Ingrese su Número de Móvil");
    $(".p__mobileEnter__subheader_copy").multiline("{Customer_Name}, se ha autenticado satisfactoriamente.\nPor favor, lea la divulgación a continuación y proporcione su número de móvil.");
    $(".p__mobileEnter__enterNum").html("<span class='bold'>Ingrese </span> su número de móvil a continuación: (Ej. (código de área) XXX - XXXX)")
    $(".checkbox-custom-label p").html("Al proporcionarnos un número de celular o un número que después se convierta en un número de celular, acepta que nosotros o nuestros proveedores de servicios puedan contactarle a ese número por medio de llamadas automatizadas, pregrabadas o de voz artificial, o por mensaje de texto. Podrían aplicarse los cargos de su plan telefónico.");
    $("#saveNumberBTN").html("Actualizar");
    $("#p__mobileEnter_cancelBTN").html("Cancelar");
    $("#p__mobileEnter__donotWish").html("No deseo ingresar un número en este momento");

}

function  mobileEntertoEnglish() {
    $(".p__mobileEnter h2").text("Enter Your Mobile Number");
    $(".p__mobileEnter__subheader_copy").text("{Customer_Name}, you have been successfully authenticated. Please read the disclosure below and provide your mobile number.");
    $(".p__mobileEnter__enterNum").html("Please <span class='bold'> enter</span> your mobile number below: (Ex. (area code) XXX - XXXX)");
    $(".checkbox-custom-label p").html("By giving us a cell number or a number later converted to a cell number, you agree that we or our service providers can contact you at that number by autodialer, recorded or artificial voice, or a text.  Your phone plan charges may apply.");
    $("#saveNumberBTN").html("Update");
    $("#p__mobileEnter_cancelBTN").html("Cancel");
    $("#p__mobileEnter__donotWish").html("I don’t wish to enter a number at this time");
}


var APP = window.APP = window.APP || {};
APP.mobileEnter = (function(){

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
              //  $('input[type="checkbox"]').removeAttr('checked');
              //  console.log("entrooo value" + inputValue1);
            }else {
                $('input[type="checkbox"]').prop('checked', 'false');
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


    var init = function() {
        var $element = $(arguments[0]);
        console.log('APP.mobileEnter');
        bindEventsToUI();
    };
    
    
    var initModal = function () {
        // Get the modal
        var saveNumberModal = document.getElementById("c__thankyoushort__modal");
        var saveNumberModalEs = document.getElementById("c__thankyoushort_es__modal");
        var cancelModal = document.getElementById('c__processcancelled__modal');
        var cancelModalES = document.getElementById('c__processcancelled_es__modal');
        var noCellModal = document.getElementById('c__nocell__modal');
        var noCellModalEs = document.getElementById('c__nocell_es__modal');


        var donotWishBtn = document.getElementById('p__mobileEnter__donotWish');

        var btn = document.getElementById("saveNumberBTN");
        var cancelBtn = document.getElementById("p__mobileEnter_cancelBTN");

        btn.onclick = function() {
            $( ".c-header__english").unbind("click");
            $( ".c-header__espanol").unbind("click");

            if (!isEspanol) {
                saveNumberModal.style.display = "block";
            }else {
                saveNumberModalEs.style.display = "block";
            }
        }

        cancelBtn.onclick = function() {
            $( ".c-header__english").unbind("click");
            $( ".c-header__espanol").unbind("click");
            if (!isEspanol) {
                cancelModal.style.display = "block";
            }else{cancelModalES.style.display = "block";}
        }

        donotWishBtn.onclick = function() {
            $( ".c-header__english").unbind("click");
            $( ".c-header__espanol").unbind("click");
            if (!isEspanol) {
                noCellModal.style.display = "block";
            }else {
                noCellModalEs.style.display = "block";
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
