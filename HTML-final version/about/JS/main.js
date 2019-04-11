
$(document).ready(function () {
  $('.a1').click(function() {
           window.location.href = 'https://ludwighohlweinportfolio.com';
 });
  $('.title').click(function() {
           window.location.href = 'https://ludwighohlweinportfolio.com';
 });
   $('.a2').click(function() {
           window.location.href = 'https://ludwighohlweinportfolio.com/store/store.html';
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

$(".b5").click(function()  // When arrow is clicked
    {
        $("body,html").animate(
        {
            scrollTop : 1500                       // Scroll 500px from top of body
        }, 800);  //how fast the scrolling animation will be in miliseconds
    });

$(".b4").click(function()  // When arrow is clicked
    {
        $("body,html").animate(
        {
            scrollTop : 0                       // Scroll 500px from top of body
        }, 800);  //how fast the scrolling animation will be in miliseconds
    });


function example() {
  var tempScrollTop = $(window).scrollTop();
  console.log("Scroll from Top: " + tempScrollTop.toString());
};

});