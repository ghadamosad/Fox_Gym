$(document).ready(function(){
    
   var head=$('header');
    
    head.height($(window).height());
    
    $(window).resize(function(){
       
       head.height($(window).height()); 
    }); 
    
    
    $('.navbar li a').click(function(){        
       $('body,html').animate({
          
           scrollTop :$($(this).attr('href')).offset().top 
       }); 
    });
    // scroll to top
    $(window).scroll(function(){
       if ($(this).scrollTop() >100){
           $('.scrollTop').fadeIn()
       } else{
           $('.scrollTop').fadeOut();
       }
    });
    $('.scrollTop').click(function(){
       
        $('body,html').animate({
            scrollTop :0
        },500)
    });
    
});