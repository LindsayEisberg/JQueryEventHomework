$(document).ready(function(){

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

});
