
    $(document).ready(function () {
        // Handler for .ready() called.
       
        if ($.cookie("DetecMobileQTM") != "1") {
        
            $("#mobilereturn").hide();
        } else {

            $("#mobilereturn").show();

        }

    });

