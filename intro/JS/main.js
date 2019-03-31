
$(document).ready(function () {

$(window).bind('scroll',function(e){
    parallaxScroll();
    example();
});

function parallaxScroll(){
var scrolled = $(window).scrollTop();
 if(scrolled<1000){
   $(".text").css('top',(400-(scrolled*.4))+'px');
$(".layer1 img").css('top',(-200+(scrolled*.2))+'px');
  $(".layer1 img").css('left',(400-(scrolled*.4))+'px');
   $(".layer2 img").css('left',(-400+(scrolled*.4))+'px');
 $(".layer2 img").css('top',(100-(scrolled*.1))+'px');
   $(".layer3 img").css('top',(200-(scrolled*.2))+'px');
   $(".layer4 img").css('top',(300-(scrolled*.3))+'px');
   $(".layer4 img").css('left',(200-(scrolled*.2))+'px');
 
 
 } else if(1000<scrolled<1200){
   $(".text").css('animation-duration','2s'); 
$(".text").css('animation-name','showout');  
 }
  if(scrolled>1200){
 
   $(".layer img").css('top',(1200-(scrolled*1))+'px');
 } if(scrolled>2000){
   $(".layerb img").css('animation-name','showup');
 
 }
if(scrolled>2000){
 
   $(".layerb2 img").css('animation-name','b2');
   $(".layerb3 img").css('animation-name','b3');
   $(".layerb4 img").css('animation-name','b4');
   $(".layerb5 img").css('animation-name','b5');
 
}
if(scrolled>4000){
  $(".layerb img").css('animation-name','showout');
  $(".lastline").css('animation-name','lastshowup');
   $(".end img").css('animation-name','showup');
$(".background img").css('position','fixed');
   $(".background img").css('top','0px');
    $(".intro").css('opacity','0');
 
}

}
function example() {
  var tempScrollTop = $(window).scrollTop();
  console.log("Scroll from Top: " + tempScrollTop.toString());
};


$('.end img').click(function() {
           window.location.href = 'https://ludwighohlweinportfolio.com';

        });



});