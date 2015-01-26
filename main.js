$(document).ready(function(){

  var offset = $( ".sticky-header" ).offset();
  var sticky = document.getElementById("sticky-header")

  $(window).scroll(function(event) {
    event.preventDefault();
    if ( $(this).scrollTop() > offset.top){
      $('.sticky-header').addClass('fixed');
    } else {
      $('.sticky-header').removeClass('fixed');
    }

  });

  $('li').hover(function() {

    $( this ).addClass( "hoverNav" );
  }, function() {
    $( this ).removeClass( "hoverNav" );
  });


  $('nav a').on('click', function(event){
    event.preventDefault();
    var relatedClass = "." + $(this).attr('rel');    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest('li').addClass("activeNav");
    $(relatedClass).siblings().removeClass('active');
    $(relatedClass).addClass('active');
  });

  $(".mainBody").on("dblclick", "button", function(event) {
    event.preventDefault();
    $(".images").slideToggle();
  });


  $(".images").on("mouseenter", "li", function() {
    $(this).removeClass('hoverNav');
    $(this).find("span").slideToggle();
  });
  $(".images").on("mouseleave", "li", function() {
    $(this).find("span").slideToggle();
  });


$( "input" ).focus(function() {
  // $(this).siblings().removeClass('activeInput');
  $( this ).addClass('activeInput');
});

$("textarea").on("focus", function(){
  // $(this).siblings().removeClass("activeInput");
  $(this).addClass("activeInput");

});

$("input").blur(function(){
  if ($(this) !== $('.activeInput')) {
    // $(this).css("border", "none");
    $(this).removeClass('activeInput')
  }
});

$("textarea").blur(function(){
  if ($(this) !== $('.activeInput')) {
    $(this).removeClass("activeInput");
  }
});

$( "form" ).submit(function( event ) {
  event.preventDefault();
    $( "h4" ).text( "Thank You! Your message has been submitted" ).show();
    return;
  });
});
