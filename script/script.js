$(function () {
    $(window).scroll(function () {
        const wScroll = $(window).scrollTop();
            $("header").each(function () {
            if (wScroll > 50) {
                $(this).addClass("fadeIn");
            }
        });
    });
});


window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
  $('.bg1').addClass('bg1act');
  $('.bg2').addClass('bg2act');
}

$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $('.cover').toggleClass('active');
    $('nav.menu').toggleClass('active');
    $('.line').toggleClass('active');
    $('.line2').toggleClass('active');
    $('.title').toggleClass('active');
});

$(".cover3").click(function () {
  $('.openbtn').toggleClass('invisible');
  $("#zoom1").addClass('active');
  $(".flyer1").addClass('active');
  $(".close").addClass('active');
});
$(".cover4").click(function () {
  $('.openbtn').toggleClass('invisible');
  $("#zoom2").addClass('active');
  $(".flyer2").addClass('active');
  $(".close").addClass('active');
});
$(".close").click(function () {
  $('.openbtn').toggleClass('invisible');
  $("#zoom1").removeClass('active');
  $(".flyer1").removeClass('active');
  $("#zoom2").removeClass('active');
  $(".flyer2").removeClass('active');
  $(".close").removeClass('active');
});

$(window).on('scroll',function(){

    $(".underline").each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight){
        $(this).addClass('active');
      }
      else {
        $(this).removeClass('active');
      }
    });
    
   });

   /*-----https://tech.mychma.com/javascript-scroll/1938/--------*/
$("nav.menu li:nth-child(1)").click(function () {
    var position = $('section#mainvisual').offset().top;
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      $('.openbtn').toggleClass('active');
      $('.cover').toggleClass('active');
      $('nav.menu').toggleClass('active');
      $('.line').toggleClass('active');
      $('.line2').toggleClass('active');
      $('.title').toggleClass('active');
});

$("nav.menu li:nth-child(2)").click(function () {
    var position = $('#news').offset().top;
    window.scrollTo({
        top: position - 150,
        left: 0,
        behavior: 'smooth'
      });
      $('.openbtn').toggleClass('active');
      $('.cover').toggleClass('active');
      $('nav.menu').toggleClass('active');
      $('.line').toggleClass('active');
      $('.line2').toggleClass('active');
      $('.title').toggleClass('active');
});

$("nav.menu li:nth-child(3)").click(function () {
    var position = $('#story').offset().top;
    window.scrollTo({
        top: position - 150,
        left: 0,
        behavior: 'smooth'
      });
      $('.openbtn').toggleClass('active');
      $('.cover').toggleClass('active');
      $('nav.menu').toggleClass('active');
      $('.line').toggleClass('active');
      $('.line2').toggleClass('active');
      $('.title').toggleClass('active');
});

$("nav.menu li:nth-child(4)").click(function () {
    var position = $('#cast').offset().top;
    window.scrollTo({
        top: position - 150,
        left: 0,
        behavior: 'smooth'
      });
      $('.openbtn').toggleClass('active');
      $('.cover').toggleClass('active');
      $('nav.menu').toggleClass('active');
      $('.line').toggleClass('active');
      $('.line2').toggleClass('active');
      $('.title').toggleClass('active');
});

$("nav.menu li:nth-child(5)").click(function () {
    var position = $('#staff').offset().top;
    window.scrollTo({
        top: position - 150,
        left: 0,
        behavior: 'smooth'
      });
      $('.openbtn').toggleClass('active');
      $('.cover').toggleClass('active');
      $('nav.menu').toggleClass('active');
      $('.line').toggleClass('active');
      $('.line2').toggleClass('active');
      $('.title').toggleClass('active');
});


$("nav.menu li:nth-child(6)").click(function () {
    var position = $('#information').offset().top;
    window.scrollTo({
        top: position - 150 ,
        left: 0,
        behavior: 'smooth'
      });
      $('.openbtn').toggleClass('active');
      $('.cover').toggleClass('active');
      $('nav.menu').toggleClass('active');
      $('.line').toggleClass('active');
      $('.line2').toggleClass('active');
      $('.title').toggleClass('active');
});

$("nav.menu li:nth-child(7)").click(function () {
  var position = $('#movie').offset().top;
  window.scrollTo({
      top: position - 150 ,
      left: 0,
      behavior: 'smooth'
    });
    $('.openbtn').toggleClass('active');
    $('.cover').toggleClass('active');
    $('nav.menu').toggleClass('active');
    $('.line').toggleClass('active');
    $('.line2').toggleClass('active');
    $('.title').toggleClass('active');
});

$("nav.menu li:nth-child(8)").click(function () {
    var position = $('#special').offset().top;
    window.scrollTo({
        top: position - 150 ,
        left: 0,
        behavior: 'smooth'
      });
      $('.openbtn').toggleClass('active');
      $('.cover').toggleClass('active');
      $('nav.menu').toggleClass('active');
      $('.line').toggleClass('active');
      $('.line2').toggleClass('active');
      $('.title').toggleClass('active');
});

$("nav.menu li:nth-child(9)").click(function () {
  var position = $('#guide').offset().top;
  window.scrollTo({
      top: position - 150 ,
      left: 0,
      behavior: 'smooth'
    });
    $('.openbtn').toggleClass('active');
    $('.cover').toggleClass('active');
    $('nav.menu').toggleClass('active');
    $('.line').toggleClass('active');
    $('.line2').toggleClass('active');
    $('.title').toggleClass('active');
});


/**-------------------------- */
$("nav.menu2 li:nth-child(1)").click(function () {
    var position = $('section#mainvisual').offset().top;
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
});

$("nav.menu2 li:nth-child(2)").click(function () {
    var position = $('#news').offset().top;
    window.scrollTo({
        top: position - 150,
        left: 0,
        behavior: 'smooth'
      });
});

$("nav.menu2 li:nth-child(3)").click(function () {
    var position = $('#story').offset().top;
    window.scrollTo({
        top: position - 150,
        left: 0,
        behavior: 'smooth'
      });
});

$("nav.menu2 li:nth-child(4)").click(function () {
    var position = $('#cast').offset().top;
    window.scrollTo({
        top: position - 150,
        left: 0,
        behavior: 'smooth'
      });
});

$("nav.menu2 li:nth-child(5)").click(function () {
    var position = $('#staff').offset().top;
    window.scrollTo({
        top: position - 150,
        left: 0,
        behavior: 'smooth'
      });
});


$("nav.menu2 li:nth-child(6)").click(function () {
    var position = $('#information').offset().top;
    window.scrollTo({
        top: position - 150 ,
        left: 0,
        behavior: 'smooth'
      });
});

$("nav.menu2 li:nth-child(7)").click(function () {
  var position = $('#movie').offset().top;
  window.scrollTo({
      top: position - 150 ,
      left: 0,
      behavior: 'smooth'
    });
});

$("nav.menu2 li:nth-child(8)").click(function () {
    var position = $('#special').offset().top;
    window.scrollTo({
        top: position - 150 ,
        left: 0,
        behavior: 'smooth'
      });
});

$("nav.menu2 li:nth-child(9)").click(function () {
  var position = $('#guide').offset().top;
  window.scrollTo({
      top: position - 150 ,
      left: 0,
      behavior: 'smooth'
    });
});

/**-------------------ニュースのスクリプト--------------------*/

$("div#news a:nth-child(1)").click(function () {
  var position = $('#special').offset().top;
  window.scrollTo({
      top: position - 150 ,
      left: 0,
      behavior: 'smooth'
    });
});

/**--------------------動画スクリプと------------------------- */
