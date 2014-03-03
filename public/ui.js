



$(document).ready(function () {

  
  $('.chat-container').css({ 'height': $(window).height() });

});


var UI = (function ($) {

  
  function setTitle(title) {
    $("#chat-title").text(title);
  }

  return {
    setTitle: setTitle
  };

})(jQuery);