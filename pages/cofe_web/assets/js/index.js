let myIndex = 0;

const carousel = () => {
    let i;
    const images = document.getElementsByClassName('mySlides');
    for(i=0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    myIndex++;
    if(myIndex > images.length) {myIndex = 1}
    images[myIndex-1].style.display = 'block'
    setTimeout(carousel, 2000);
};

$(document).ready(function() {

  $(".btn-more").click(() =>{
    $(".learn-more-content").toggle('250');
    
    if($('.btn-more').children().attr('name')==='arrow-up-circle-outline') {
      $('.btn-more').children().attr('name', 'arrow-down-circle-outline');
      $('span').text('Learn More');
    } else {
      $('.btn-more').children().attr('name', 'arrow-up-circle-outline');
      $('span').text('Collapse');
    }
    
  });

  // For the sticky navigation
  $('.js--desc-section').waypoint(function(direction) {
      if(direction == 'down') {
          $('nav').addClass('sticky');
          $('.menu-a').addClass('btn-nav-sticky');
          $('.menu-a').removeClass('btn-nav');
      } else {
          $('nav').removeClass('sticky');
          $('.menu-a').addClass('btn-nav');
          $('.menu-a').removeClass('btn-nav-sticky');
      }
  }, {
      offset: '60px'
  });

  // Animation on scroll 
  $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated flash');
  }, {
      offset: '50%'
  });
  $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated slideInUp');
  }, {
      offset: '90%'
  });
  $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animated fadeIn');
  }, {
      offset: '70%'
  });
  $('.js--wp-4').waypoint(function(direction) {
      $('.js--wp-4').addClass('animated pulse');
  }, {
      offset: '70%'
  });

});

// Mobile navigation

$('.js--nav-icon').click(function() {
  var nav = $('.js--main-nav');
  nav.slideToggle(200);
  if(document.querySelector('#menu-bar').getAttribute('name') === 'menu') {
      document.querySelector('#menu-bar').setAttribute("name","close");
  } else {
      document.querySelector('#menu-bar').setAttribute("name","menu");
  } 
});

carousel();
