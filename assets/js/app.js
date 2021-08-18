const headerHeight = $('#header').innerHeight();

// Nav menu
$('#nav-toggle').on('click', function(){
    $(this).toggleClass("active");
    $('#nav').toggleClass('active');
});

// Fixed header
$(window).on('scroll', function(){
    const scrollTop = $(window).scrollTop(),
          introH = $('#intro').innerHeight();
    
    if (scrollTop >= (introH - headerHeight)) {
        $('#header').addClass('fixed');
    } else {
        $('#header').removeClass('fixed');
    }

    // console.log(scrollTop);
});    

// Nav menu scroll
$('[data-scroll]').on('click', function(event){
    event.preventDefault();

    const blockId = $(this).data('scroll');
    const blockOffset = $(blockId).offset().top - headerHeight;
          
    $("#nav a").removeClass("active");
    $(this).addClass("active");
    $('#nav-toggle').removeClass("active");
    $('#nav').removeClass('active');

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);          

});

// Collapse
$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    const blockId = $(this).data("collapse");

    $(this).toggleClass("active");
    
});

// Slider
$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

