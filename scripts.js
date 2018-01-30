function scrollNav() {
  $(document).ready(function(){
    $('.nav a').click(function(){  
      //Toggle Class
      $(".active").removeClass("active");
      $(this).closest('li>a').addClass("active");
      var theClass = $(this).attr("class");
      $('.'+theClass).parent('li').addClass('active');
      //Animate
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 40
      }, 400);
      return false;
    });
    $('.scrollTop a').scrollTop();
  });
}
scrollNav();

(function($) {
    var $window = $(window),
        $frame = $('.col-lg-6');
        
    $window.resize(function resize() {
        if ($window.width() < 1200) {
          $('#proj-div').css("height","900px");
          $frame.removeClass('col-lg-6');
          return $frame.addClass('resized');
        }
        $('#proj-div').css("height","100%");
        $frame.addClass('col-lg-6');
        $frame.removeClass('resized');
    }).trigger('resize');
})(jQuery);
