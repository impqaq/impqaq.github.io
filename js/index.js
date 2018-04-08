jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});


$('.nav li').each(function(){
	$(this).click(function(){
		$('.nav .current').removeClass('current');
		$(this).addClass("current");
	});
});


$(window).on('scroll', function() {

	var h = $('header').height();
	var y = $(window).scrollTop();
  var header = $('#main-header');

   if ((y > h + 30 ) && ($(window).outerWidth() > 768 ) ) {
	  header.addClass('opaque');
   }
  else {
	 if (y < h + 30) {
		header.removeClass('opaque');
	 }
	 else {
		header.addClass('opaque');
	 }
  }
})

$(function(){		
	//设计案例切换
	$('.title-list li').mouseover(function(){
		var liindex = $('.title-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('div.thumbnails').eq(liindex).fadeIn(150).siblings('div.thumbnails').hide();
		var liWidth = $('.title-list li').width();
		$('.works-box .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	});
	
	//设计案例hover效果
	$('.thumbnails').hover(function(){
		$(this).css("border-color","#ff6600");
		$(this).find('p > a').css('color','#ff6600');
	},function(){
		$(this).css("border-color","#fafafa");
		$(this).find('p > a').css('color','#666666');
	});
	});
