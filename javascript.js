$(function()
{		
	var menuCss, displayBlock, srcPicture;
	var aboutUsOffset = $(".aboutUs").offset().top;
	var serviceOffset = $(".service").offset().top;
	var workOffset = $(".work").offset().top;
	var footerOffset = $("footer").offset().top;
	var windowWidth = $(window).width();
	var tableOffset = [aboutUsOffset, serviceOffset, workOffset, footerOffset];
	
	function fadeOutMenu(width)
	{	
		if(width < 961)
		{
			$(".menu").addClass("fadeOutRight animated");
		}
	}

	/* obsługa zdarzeń: wysuwania i chowania menu */
	
	$(window).resize(function()
	{	
		windowWidth = $(window).width();
		
		aboutUsOffset = $(".aboutUs").offset().top;
		serviceOffset = $(".service").offset().top;
	    workOffset = $(".work").offset().top;
		footerOffset = $("footer").offset().top;	
		
		if (windowWidth >= 961)
		{
			$(".menu").removeClass("fadeOutRight animated");				
		}
		
		if (windowWidth < 961)
		{
			$(".menu").removeClass("fadeInRight animated");
			$("nav").css("z-index", 0);
		}	
	});
	
	$(".openMenu").mousedown(function()
	{
		$(".menu").removeClass("fadeOutRight animated");		
		$(".menu").addClass("fadeInRight animated");
		$("nav").css("z-index", 3);
	});	
	
	$(window).click(function()
	{
		menuCss = $(".menu").filter(":not(:animated)").css("visibility");	
				
	    if((menuCss == "visible") && (windowWidth < 961))
		{		
			$(".menu").addClass("fadeOutRight animated");			
			$("nav").css("z-index", 0);
		}		
	});			
	

	/* obsługa zdarzeń: wysuwania i chowania menu */
	/* ------------------------------------------ */
	/* scroll do danej sekcji storny */
	
	$(".menuAbout").click(function()
	{
		$("html, body").filter(":not(:animated)").animate(
		{ 
			scrollTop: aboutUsOffset
		}, 2000, fadeOutMenu(windowWidth));
	});
		
	$(".menuService").click(function()
	{
		$("html, body").filter(":not(:animated)").animate(
		{ 
			scrollTop: serviceOffset
		}, 2000, fadeOutMenu(windowWidth));
	});
		
	$(".menuWork").click(function()
	{
		$("html, body").filter(":not(:animated)").animate(
		{ 
			scrollTop: workOffset
		}, 2000, fadeOutMenu(windowWidth));
	});
		
	$(".menuContact").click(function()
	{
		$("html, body").filter(":not(:animated)").animate(
		{ 
			scrollTop: footerOffset
		}, 2000, fadeOutMenu(windowWidth));
	});
	
	/* scroll do danej sekcji storny */	
	

	$(".accordion").on("click", ".accordionControl", function(e)
	{	
		e.preventDefault();
		
		displayBlock = $(this).next().css("display");	
		
		if (displayBlock == "block")
		{
			srcPicture = "pictures/downIcon.png";
		}
		else srcPicture = "pictures/upIcon.png";	
		
		$(".accordionPanel").each(function()
		{
			$(this).slideUp();	
			$(this).prev().attr("src", "pictures/downIcon.png");		
		});		
		
		$(this)
			.attr("src", srcPicture)
			.next(".accordionPanel")
			.not(":animated")
			.slideToggle();
	});
	

	
});