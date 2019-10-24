jQuery(document).ready(function(){

    // ----- Ripple effect ----- //
    "use strict"
        $(".slider").ripples({
            dropRadius: 15,
            perturbance: 0.01,
            // other options 
        });
    // ----- Ripple effect ends ----- //
    
    // ----- Counter effect ----- //
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // ----- Counter effect ----- //
});



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



// -------------------- Section "Works" MagnificPopUp --------------------//
// -------- Source https://dimsemenov.com/pluggins/magnific-popup/ --------//
$('.work').magnificPopup({
    
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery:{enabled:true}
  });
// ----------------- Section "Works" MagnificPopUp ends ----------------//



//   ------------------- Section "Team" owl carousel ---------------------//
$(document).ready(function(){
    $("#team-members").owlCarousel({
        items: 3,
        autoplay:true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0:{items:1},
            480:{items:2},
            768:{items:3}
        }
    
    });
    
});
//   ---------------- Section "Team" owl carousel ends -------------------//



//   -------------------- Smooth scroll down effect ----------------------//
//   Create a js file and paste content from: 
//   https://raw.githubusercontent.com/kswedberg/jquery-smooth-scroll/master/jquery.smooth-scroll.js
//   Create <script> </script> in html file and link it with the js file created.
//   add   $('a').smoothScroll();   inside   $(document).ready(function(){  });

$(document).ready(function(){  // I just duplicated this line for future reference
    
    $('a').smoothScroll();
    
    new WOW().init(); // This was added in order to make animation work only when scroll down
    
});
//   ----------------- Smooth scroll down effect ends --------------------//
