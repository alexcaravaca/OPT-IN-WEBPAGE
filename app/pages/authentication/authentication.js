'use strict';

$.fn.multiline = function(text){
    this.text(text);
    this.html(this.html().replace(/\n/g,'<br/>'));
    return this;
}

function updateEspanish(){
    $(".p__authentication h2").text("Página de Autenticación");
    $(".p__authentication__copy").text("Para completar la actualización de la cuenta, por favor verifique su identidad ingresando los cinco dígitos de su código postal de facturación asociado con su cuenta {Partner}.");
    $(".p__authentication__zipform label").text("Código Postal de Facturación");
    $("#zipBTN").text("Proceder");
    $("#p__authentication__cancel_EN").text("Cancelar");
    $(".p__authentication__error p").text("La información que ha ingresado no coincide con nuestros archivos. Ingrese el número nuevamente.");



};

function updatetoEnglish(){
    $(".p__authentication h2").text("Authentication Page");
    $(".p__authentication__copy").multiline("In order to complete the account update, please verify your identity by entering \nyour five digit billing zip code associated with your {Partner} account.");
    $(".p__authentication__zipform label").text("Billing Zip Code");
    $("#zipBTN").text("Proceed");
    $("#p__authentication__cancel_EN").text("Cancelar");
    $(".p__authentication__error p").text("The number you entered does not match our records. Please enter the number again.");

};
var APP = window.APP = window.APP || {};
APP.authentication = (function(){




    var bindEventsToUI = function() {
        // ...

        $( "#wrapper_EN #zipBTN" ).click(function() {
           validateZipCode();
        });

        $( "#wrapper_EN #zipcode" ).keydown(function(e) {


            var key   = e.keyCode ? e.keyCode : e.which;
            if (!( [8, 9, 13, 27, 46, 110].indexOf(key) !== -1 ||
                    (key == 65 && ( e.ctrlKey || e.metaKey  ) ) ||
                    (key >= 35 && key <= 40) ||
                    (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
                    (key >= 96 && key <= 105)
                )) e.preventDefault();
        });



        $( "#wrapper_ES #zipBTN" ).click(function() {
            validateZipCode();
        });

        $( "#wrapper_ES #zipcode" ).keydown(function(e) {


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
       // console.log((inputValue== ""));
        if(inputValue == ""){
            $( ".p__authentication__error" ).show();
        }
    };




    var initModal = function () {
        var cancelModal = document.getElementById('c__processcancelled__modal');
        var cancelModalES = document.getElementById('c__processcancelled_es__modal');

        var cancelBtn = document.getElementById("p__authentication__cancel_EN");

        var cancelBtnES = document.getElementById("p__authentication__cancel_ES");

        console.log("initiing modal" +cancelModal);

        cancelBtn.onclick = function() {
            $( ".c-header__english").unbind("click");
            $( ".c-header__espanol").unbind("click");
            if (!isEspanol) {
                cancelModal.style.display = "block";
            }else{cancelModalES.style.display = "block";}
        }



    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
