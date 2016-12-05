$(document).ready(function(){
	// Add Class to Parent Menu
	$('.nav-menu li').each(function(){
		if($(this).children('ul').length){
			$(this).addClass('has-children');
			$(this).prepend('<span class="sub-toggle"><i class="fa fa-plus"></i></span>');
		}
	});

	// Mobile Menu Toggle

	$('.toggle-menu').click(function(){
		$(this).find('.fa').toggleClass('fa-navicon fa-times')   
		$(this).parent().next().slideToggle();
	});

	// Mobile Menu Sub Menu Toggle
	$('body').on('click','.sub-toggle', function(){
		$(this).find('.fa').toggleClass('fa-plus fa-minus');
		$(this).siblings('ul').slideToggle();
	});

});