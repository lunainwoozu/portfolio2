'use strict';

$(function(){

// scroll header fixed
const header = document.querySelector('#header');
function scrollFunc(){
  if (pageYOffset >= 1) {
    header.classList.add('on');
  } else {
    header.classList.remove('on');
  }
}
window.addEventListener('scroll', scrollFunc);

// hamburger action
let overlay_navigation = $('.overlay-navigation'),
top_bar = $('.bar-top'),
middle_bar = $('.bar-middle'),
bottom_bar = $('.bar-bottom'),
m_nav_li_a = $('.m_nav li a');

  $('.open-overlay').click(function() {
     overlay_navigation.toggleClass('overlay-active');
     if (overlay_navigation.hasClass('overlay-active')) {
       top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
       middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
       bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
       overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down');
     } else {
       top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
       middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
       bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
       overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up');
     }
  });

  $(m_nav_li_a).click(function(){
    overlay_navigation.toggleClass('overlay-active');
     if (overlay_navigation.hasClass('overlay-active')) {
       top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
       middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
       bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
       overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down');
     } else {
       top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
       middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
       bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
       overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up');
     }
  });

 


// toggle
    $(".f_list_title").click(function() {
      $(this).next(".accordion-toggle").stop().toggleClass("must");
      $(this).toggleClass("anime");
    });
    $(".i_list_title").click(function() {
      $(this).next(".accordion-toggle").stop().toggleClass("must");
      $(this).toggleClass("anime");
    });
    $(".q_list_title").click(function() {
      $(this).stop().toggleClass("line");
      $(this).next(".accordion-toggle").stop().toggleClass("must");
      $(this).next(".accordion-toggle").stop().toggleClass("line");
      $(this).toggleClass("anime");
    });
  
  
   $(".slide").bxSlider({
    mode: 'fade'
  });
});
