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
