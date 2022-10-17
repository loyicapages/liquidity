$(window).scroll(function() {
    var nav = $('.navbar');
    var top = 200;
    if ($(window).scrollTop() >= top) {
  
        nav.addClass('scrolled');
  
    } else {
        nav.removeClass('scrolled');
    }
  });
  $('.navbar-toggler').on('click', function(){
  $('#navbarSupportedContent').toggleClass('d-block');
  
  })

  
  $(document).ready(function() {
    // get video source from data-src button
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
        console.log($videoSrc);
    });
    
    // autoplay video on modal load  
    $('#liquidityVideo').on('shown.bs.modal', function (e) {
    // youtube iframe configuration and settings
    $("#video").attr('src',$videoSrc + "?autoplay=1&rel=0&controls=0&loop=1&modestbranding=0"); 
    })
    // stop playing the youtube video when modal closed
    $('#liquidityVideo').on('hide.bs.modal', function (e) {
        // stop video
        $("#video").attr('src',$videoSrc); 
    }) 
    });
    