(function ($) {
  Drupal.behaviors.genScripts = {
    attach: function (context, settings) {   
        
        $('#search-glass').click(function(){
            $('.region-header').slideToggle();
        });
    }
  }
})(jQuery);