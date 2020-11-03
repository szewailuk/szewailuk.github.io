// $(document).ready(function() {
//     $('.slider').each(function(index) {
//         $(this).append('<div class="slideroverlay"></div>')
//     });




//     $(".btn-simple").each(function(index) {

//         $(this).addClass('off');

//         $(this).find('.clickarea').on("mousedown", function() {
//             $(this).parent().toggleClass('pressed');
//         });
//         $(this).find('.clickarea').on("mouseup", function() {
//             $(this).parent().toggleClass('pressed');
//         });





//     });

//     $('.slideshow').cycle({
//         fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
//     });


// });

jQuery(function($) {
    if($('#mainpageslider').length) {
        
        $('#mainpageslider').cycle({ 
            fx:     'fade', 
            speed:  500, 
            next:   '#mainpageslider', 
            timeout: 5000 
        });
    }

    var $hamburger = $(".hamburger");
      // $hamburger.on("click", function(e) {
      //   if (!$("#navbarToggleExternalContent").hasClass('show')) {
      //       $hamburger.toggleClass("is-active");
      //   }
      //   // Do something else, like open/close menu
      // });

    $('#navbarToggleExternalContent').on('shown.bs.collapse', function() {
    }).on('show.bs.collapse', function() {
        $hamburger.toggleClass("is-active");
        if ( $( "#myNav" ).length ) {
            $( "#myNav" ).css("height","100%");
        }
    }).on('hide.bs.collapse', function() {
        $hamburger.toggleClass("is-active");
        if ( $( "#myNav" ).length ) {
            $( "#myNav" ).css("height","0%");
        }
    });


    // $.fatNav();

    // $( ".navbar-toggler" ).on('click', function() {
    //     var testHeight = $(".header").height();
    //     $( ".cycle-slideshow" ).css("top",testHeight);
    // });

    // $( ".navbar-toggler" ).on('click', function() {
    //     if ($("#navbarToggleExternalContent").hasClass('show')) {
    //         var testHeight = $(".header").height();
    //         $( ".cycle-slideshow" ).css("top",testHeight);
    //     }
    // });

    // $('#navbarToggleExternalContent').on('shown.bs.collapse', function() {
    //     var testHeight = $(".header").height();
    //     $( ".cycle-slideshow" ).css("top",testHeight);
    // }).on('show.bs.collapse', function() {
    //     console.log("show");
    // });

    // $(".variable").slick({
    //     lazyLoad: 'ondemand',
    //     dots: false,
    //     infinite: false,
    //     variableWidth: true,
    //     adaptiveHeight: true,
    //     focusOnSelect: true,
    //     responsive: [
    //             {
    //                 breakpoint: 500,
    //                 settings: "unslick"
    //             }
    //         ]
    // });

    function createSlick(){
        $('.variable').not('.slick-initialized').slick({
            lazyLoad: 'ondemand',
            dots: false,
            // infinite: false,
            variableWidth: true,
            adaptiveHeight: true,
            focusOnSelect: true,
            swipeToSlide: true ,
            responsive: [
                {
                    breakpoint: 500,
                    settings: "unslick"
                }
            ]
        });
    }
    createSlick();
    $(window).on( 'resize', createSlick );




    // if($('.slider-iv').length) {
        
    //     $('.slider-iv').each(function() {
    //         var $this = $(this);
    //         $this.cycle({
    //             fx:     'fade', 
    //             speed:  500, 
    //             timeout:  0,
                
    //             // use slideshow as the transition trigger
    //             next:     $this,
                
    //             // update caption div after transition
    //             after:    function(curr,next,opts) {
    //                 var s = 'Image ' + (opts.currSlide + 1) + ' / ' + opts.slideCount;
    //                 $(opts.caption).html(s);
    //             },
                
    //             // capture the caption div in the options object
    //             caption:  $this.closest('.item-image-set').find('p.cycle-caption')
    //         });
    //     });
    // }   

});


