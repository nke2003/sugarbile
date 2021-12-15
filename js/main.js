$(document).ready(function(){
  $(".close").hide();

$(".open").click(function(){
  $(".nav_menu").css("right","0")
  $(".open").hide();
  $(".close").show();

});

$(".close").click(function(){
  $(".nav_menu").css("right","-350px")
  $(".close").hide();
  $(".open").show();
});


});
