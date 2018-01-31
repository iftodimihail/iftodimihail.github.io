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
        $frame = $('.before');
        
    $window.resize(function resize() {
        if($window.width() < 1200){
          $frame.removeClass('before');
          return $frame.addClass('after');
        }
        $frame.addClass('before');
        $frame.removeClass('after');
    }).trigger('resize');
})(jQuery);
