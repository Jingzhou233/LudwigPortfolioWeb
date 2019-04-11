
$(document).ready(function () {
  $('.a1').click(function() {
           window.location.href = 'https://ludwighohlweinportfolio.com';

        });
 $('.a3').click(function() {
           window.location.href = 'https://ludwighohlweinportfolio.com/about/about.html';
 });
$(window).bind('scroll',function(e){
    parallaxScroll();
    example();
});

function parallaxScroll(){
var scrolled = $(window).scrollTop();
 
$(".backgroundimg").css('top',(0-(scrolled*.3))+'px');
  $(".shapes").css('top',(0-(scrolled*1.7))+'px');
  

  
$(".b4").css('color','#4784FF');
  $(".b5").css('color','black');
  if(scrolled>1000){
    $(".line").css('top',(0-(scrolled*.15))+'px');
    $(".b4").css('color','black');
    $(".b5").css('color','#4784FF');
  }

}




function example() {
  var tempScrollTop = $(window).scrollTop();
  console.log("Scroll from Top: " + tempScrollTop.toString());
};

});