$(function(){
  var _html     = $('html'); 
  var _window   = $(window);
  var _menu     = $('.non_content_wrap');
  var canCheck  = true;
      
  _menu.bind('mouseover', showMenu);
  _window.bind('scroll', fadeMenu);

  function showMenu() {
    _menu.stop();
    _menu.animate({'opacity':1},'fast');
  }

  function fadeMenu(e) {
    if (canCheck) {
      canCheck = false;
      if (!_menu.is(':animated')) {
          _menu.animate({'opacity':0.2});
      }
      setTimeout(function(){canCheck=true},100);
    }
  }  
});