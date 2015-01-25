$(document).ready(function(){

  $('nav a').on('click', function(event){
    event.preventDefault();
    $(this).closest("li").siblings().removeClass('activeNav');
    $(this).closest('li').addClass("activeNav");
  });


});
