
$(document).ready(function () {
  
 $('.a2').click(function() {
           window.location.href = 'https://ludwighohlweinportfolio.com/store/store.html';
 });
$('.title').click(function() {
           window.location.href = 'https://ludwighohlweinportfolio.com';
 });
$('.a3' ).click(function() {
           window.location.href = 'about/about.html';

        });

$('.a3').click(function() {
           window.location.href = 'about/about.html';

        });




var imgnumber= 100;

$('.columnb .img1 img').click(function() {
          imgnumber=1;
     });
$('.columnb .img2 img').click(function() {
          imgnumber=2;
     });
$('.columnb .img3 img').click(function() {
          imgnumber=3;
     });
$('.columnb .img4 img').click(function() {
          imgnumber=4;
     });
$('.columnb .img5 img').click(function() {
          imgnumber=5;
     });
$('.columnb .img6 img').click(function() {
          imgnumber=6;
     });
$('.columnb .img7 img').click(function() {
          imgnumber=7;
     });
$('.columnb .img8 img').click(function() {
          imgnumber=8;
     });
$('.columnc .img1 img').click(function() {imgnumber=9;});
$('.columnc .img2 img').click(function() {imgnumber=10;});
$('.columnc .img3 img').click(function() {imgnumber=11;});
$('.columnc .img4 img').click(function() {imgnumber=12;});
$('.columnc .img5 img').click(function() {imgnumber=13;});
$('.columnc .img6 img').click(function() {imgnumber=14;});
$('.columnd .img1 img').click(function() {imgnumber=15;});
$('.columnd .img2 img').click(function() {imgnumber=16;});
$('.columnd .img3 img').click(function() {imgnumber=17;});
$('.columnd .img4 img').click(function() {imgnumber=18;});
$('.columnd .img5 img').click(function() {imgnumber=19;});
$('.columnd .img6 img').click(function() {imgnumber=20;});
$('.columnd .img7 img').click(function() {imgnumber=21;});






$('.columnd img').click(function() {
            
          $(".grey").css({'z-index':'100', 'animation-name':'greychange'});
          $(".shapes").css({'z-index':'200'});
          $(".texture").css({'z-index':'199'});
          $(".bigimg").css({'z-index':'201','animation-name':'cb1move'});
          $(".cb"+ imgnumber).css({'display':'initial'});
           $(".cb"+imgnumber).css({'animation-name':'slidein'});

     });

$('.columnc img').click(function() {
            
          $(".grey").css({'z-index':'100', 'animation-name':'greychange'});
          $(".shapes").css({'z-index':'200'});
          $(".texture").css({'z-index':'199'});
          $(".bigimg").css({'z-index':'201','animation-name':'cb1move'});
          $(".cb"+ imgnumber).css({'display':'initial'});
           $(".cb"+imgnumber).css({'animation-name':'slidein'});
     });


$('.columnb img').click(function() {
           
          $(".grey").css({'z-index':'100', 'animation-name':'greychange'});
          $(".shapes").css({'z-index':'200'});
          $(".texture").css({'z-index':'199'});
          $(".bigimg").css({'z-index':'201','animation-name':'cb1move'});
          $(".cb"+ imgnumber).css({'display':'initial',});
          $(".cb"+imgnumber).css({'animation-name':'slidein'});
     });


$('.arrowright img').click(function() {
         $(".cb"+imgnumber).css({'animation-name':'slideout'});
         

         imgnumber +=1;
           if(imgnumber===22){$(".cb21").css({'display':'none'});
          $(".grey").css({'z-index':'-100','animation-name':'greychangeback'});
          $(".shapes").css({'z-index':'-3'});
          $(".texture").css({'z-index':'-1'});
          $(".bigimg").css({'z-index':'-5','animation-name':'cb1moveback'});}else{
         $(".cb"+imgnumber).css({'display':'initial'});
          $(".cb"+imgnumber).css({'animation-name':'slidein'});}
});
$('.arrowleft img').click(function() {
         
          $(".cb"+imgnumber).css({'animation-name':'slideoutout'});
         imgnumber -=1;
         if(imgnumber===0){$(".cb1").css({'display':'none'});
          $(".grey").css({'z-index':'-100','animation-name':'greychangeback'});
          $(".shapes").css({'z-index':'-3'});
          $(".texture").css({'z-index':'-1'});
          $(".bigimg").css({'z-index':'-5','animation-name':'cb1moveback'});}else{
         $(".cb"+imgnumber).css({'display':'initial'});
         $(".cb"+imgnumber).css({'animation-name':'slideoutin'});}
});

$('.xmark img').click(function() {
          $(".cb"+ imgnumber).css({'display':'none'});
          $(".grey").css({'z-index':'-100','animation-name':'greychangeback'});
          $(".shapes").css({'z-index':'-3'});
          $(".texture").css({'z-index':'-1'});
          $(".bigimg").css({'z-index':'-5','animation-name':'cb1moveback'});
          
   

        });



















$('.column img').hover(function() {
  var color=Math.floor(Math.random()*360);
  console.log(color);
$(this).css('filter','drop-shadow(10px 10px hsl('+color+',30%,50%))');
}, function(){
  $(this).css('filter','drop-shadow(10px 10px hsl(100,35%,40%,0%))');
});







$(window).bind('scroll',function(e){
    parallaxScroll();
    example();
});

function parallaxScroll(){
var scrolled = $(window).scrollTop();
 
$(".backgroundimg").css('top',(0-(scrolled*.3))+'px');

  
$(".b1").css('color','#eb2f2f');
  $(".b2").css('color','black');
  if(scrolled>2800){
    $(".line").css('top',(0-(scrolled*.15))+'px');
    $(".b1").css('color','black');
    $(".b2").css('color','#eb2f2f');
  }

}




function example() {
  var tempScrollTop = $(window).scrollTop();

  console.log("Scroll from Top: " + tempScrollTop.toString());
};

});