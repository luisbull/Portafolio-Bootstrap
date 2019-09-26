// ----- Ripple effect ----- //
jQuery(document).ready(function(){

    "use strict"
        $(".slider").ripples({
            dropRadius: 15,
            perturbance: 0.01,
            
        });


});
// ----- Ripple effect ends ----- //


// ----- Typed effect ----- //
var typed = new Typed(".type", {
    strings: [
        "web developer",
        "drafter", 
        "web designer"
    ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});
// ----- Typed effect ends ----- //


// ----- Fixed Navigation and Color transition -----  //
$(window).scroll(function () {
    
    var top = $(window).scrollTop();
    if (top >= 60){
        $("nav").addClass("secondary");
    } else if ($("nav").hasClass("secondary")){
        $("nav").removeClass("secondary");
    }
});
// --- Fixed Navigation and Color transition ends ---  //
