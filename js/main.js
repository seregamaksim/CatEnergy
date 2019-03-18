$('.main-navigation__button').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('main-navigation__button-active');
  $('.site-list').toggleClass('site-list_active');
  $('.main-navigation').toggleClass('main-navigation_active');
});