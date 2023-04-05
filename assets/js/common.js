// JavaScript Document
$(function(){
    $("#js-btn").on("click", function(){
        var leftVal = 0;
        if($(this).hasClass("open")) {
            leftVal = -1040;
            $(this).removeClass("open");
        } else {
            $(this).addClass("open");
        } 
        $("#js-menu").stop().animate({
            left: leftVal
        }, 350);
    });
});
$('#js-items a[href]').on('click',        function(event) {
    $('#js-btn').trigger('click');
});
$('.pop-up1').hide();
$('.pop-image1').on('click',function(){
$('.pop-up1').fadeIn();
})
$('.pop-close1_js').on('click',function(){
$('.pop-up1').fadeOut();
})
$('.pop-up2').hide();
$('.pop-image2').on('click',function(){
$('.pop-up2').fadeIn();
})
$('.pop-close2_js').on('click',function(){
$('.pop-up2').fadeOut();
})
if (window.matchMedia( "(min-width: 1040px)" ).matches) {
$(function(){
  var menub = $(".menu-b_pc");
$(window).scroll(function () {
    if ($(this).scrollTop() >= 1000) {
      menub.fadeIn(500);
    }else{
     menub.hide();
    } 
  });
});
} else {
  $(".menu_pc").hide();
  $("menu-b_pc").hide();
}
$(window).on('load', function(){
  $('#loading').delay(5000).fadeOut(500);
});

$(function(){
  setTimeout('stopload()', 10000);
})
function stopload(){
  $('#loading').delay(1000).fadeOut(800);
}