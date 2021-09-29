$(function(){
	$('.nav').css('display','none');
	$('.menuBtn').click(function(){
		$('.nav').stop().slideToggle()
    });
	var menu_offset = $('.nav').offset();
   		$(window).scroll(function() {
			   if ($(document).scrollTop() > menu_offset.top) {
       				$('.nav').addClass('menu-fixed');
				}else {
       				$('.nav').removeClass('menu-fixed');
     		}
   		});

		$('.gnb > ul > li > span').click(function(){
			$('.sub_menu').slideToggle()
		});
		   
		$('#footer dt').click(function(){
            $(this).next().toggleClass('on');
            $(this).next().siblings('dd').removeClass('on');
        });
});