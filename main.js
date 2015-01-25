$(document).ready(function(){

  $('li').hover(function() {
    $( this ).addClass( "hoverNav" );
  }, function() {
    $( this ).removeClass( "hoverNav" );
  });


  $('nav a').on('click', function(event){
    event.preventDefault();
    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest('li').addClass("activeNav");
  });


});
