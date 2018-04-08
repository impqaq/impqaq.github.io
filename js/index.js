$(document).ready(function(){
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});
});


$('.nav li').on('click', function(){
	$(this). addClass('current').siblings().removeClass('current');
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

	$('.title-list li').mouseover(function(){
		var liindex = $('.title-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('div.thumbnails').eq(liindex).fadeIn(150).siblings('div.thumbnails').hide();
		var liWidth = $('.title-list li').width();
		$('.works-box .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	});

	$('.thumbnails').hover(function(){
		$(this).css("border-color","#ff6600");
		$(this).find('p > a').css('color','#ff6600');
	},function(){
		$(this).css("border-color","#fafafa");
		$(this).find('p > a').css('color','#666666');
	});
	});
