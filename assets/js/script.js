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

    function createSlick(){
        $('.variable').not('.slick-initialized').slick({
            lazyLoad: 'progressive',
            dots: false,
            // infinite: false,
            variableWidth: true,
            adaptiveHeight: true,
            focusOnSelect: true,
            // swipeToSlide: true ,
            focusOnSelect: false,
            slideToShow:10,
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


    // $('img').on('click', function(e) {
    //   $('#imgViewer').html('').append( $(e.currentTarget).clone().removeClass('img-responsive').removeClass('img-thumbnail') )
    //   $('#viewImg').modal('show')
    // })

    // $('img').each(function(i,e) {
    //   $(e).wrap('<div class="img-wrapper"></div>')
    // })

});


