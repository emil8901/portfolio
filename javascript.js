$(function()
{	
	var navOffset = $("nav").offset().top;
	var skillsOffset = $(".skills").offset().top - 400;	
	var descriptionOffset = $(".descriptionOfMe").offset().top - 400;	
	var quotationOffset = $(".quotation").offset().top - 400;
	var windowWidth = $(window).width();
	var menuCss;
	
	$(".icon-cancel").hide();
	$("h1").slideDown(1600);		

	$(".imgFace").mouseover(function()
	{
		$(this).attr("src", "pictures/faceColor.jpg");
	});

	$(".imgFace").mouseout(function()
	{
		$(this).attr("src", "pictures/faceDesaturation.jpg");
	});
	
	$("#logo").click(function()
	{
		$("html, body").filter(":not(:animated)").animate(
		{ 
			scrollTop: 0 
		}, 2000);
	});
	
	function changeIconOrNot(width)
	{
		if (width < 641) 
		{
			$(".icon-cancel").filter(":not(:animated)").toggle(function()
			{
				$(".icon-menu").toggle();
				$(".menu").slideUp();
			});		
		}
	}
	
	/* Schowanie menu, jeśli użytkownik naciśnie na miejsce poza nim */
	
	$(window).click(function()
	{
		menuCss = $(".menu").filter(":not(:animated)").css("display");		
		
	    if(menuCss == "block")
		{
			changeIconOrNot(windowWidth);
		}
	});
	
	/* Schowanie menu, jeśli użytkownik naciśnie na miejsce poza nim */	
	/* ---------------------------------------------------------- */	
	/* Obsługa menu w postaci scrollowania do danej sekcji strony */
	
	$(window).resize(function()
	{	
		windowWidth = $(window).width();
		skillsOffset = $(".skills").offset().top - 400;	
		descriptionOffset = $(".descriptionOfMe").offset().top - 400;	
		quotationOffset = $(".quotation").offset().top - 400;		
	});	
			
	$(".scrollToCv").click(function()
	{
		$("html, body").filter(":not(:animated)").animate(
		{ 
			scrollTop: $(".CV-introduction").offset().top - 41
		}, 2000, changeIconOrNot(windowWidth));
	});

	$(".scrollToAboutMe").click(function()
	{
		$("html, body").filter(":not(:animated)").animate(
		{ 
			scrollTop: $(".aboutMeIntroduction").offset().top - 41
		}, 2000, changeIconOrNot(windowWidth));
	});

	$(".scrollToContact").click(function()
	{
		$("html, body").filter(":not(:animated)").animate(
		{
			scrollTop: $(".contactIntroduction").offset().top - 41
		}, 2000, changeIconOrNot(windowWidth));
	});  

	
	/* Obsługa menu w postaci scrollowania do danej sekcji strony */	
	/* ---------------------------------------------------------- */
	/* Osługa zdarzeń związanych ze scrollowaniem strony przez usera */

	$(window).scroll(function()
	{		
		var scrollWindow = $(window).scrollTop();
		
		if (scrollWindow >= navOffset)
		{
			$("nav").addClass("fixed");
		}
		else
		{
			$("nav").removeClass("fixed");
		}	
		
		if (scrollWindow >= skillsOffset)
		{
			$(".skills").addClass("fadeInUp animated");
			$(".skillsDescription").addClass("fadeInUp animated");
		}				
		if (scrollWindow >= quotationOffset)
		{
			$(".quotation").addClass("bounceInLeft animated");
			$(".author").addClass("bounceInLeft animated");
		}		
		if (scrollWindow >= descriptionOffset)
		{
			$(".descriptionOfMe").addClass("bounceInRight animated");
			$(".imgFace").addClass("bounceInRight animated");
		}		
	});
		
	/* Osługa zdarzeń związanych ze scrollowaniem strony przez usera */
	/* ------------------------------------------------------------ */	
	/* Obsluga zdarzenia zmiany wygladu przycisku menu */
	
		$(".icon-menu").mousedown(function()
		{
			$(this).filter(":not(:animated)").toggle(function()
			{
				$(".icon-cancel").toggle();
				$(".menu").slideDown();
			});
		});
		
		$(".icon-cancel").mousedown(function() 
		{
			$(this).filter(":not(:animated)").toggle(function()
			{
				$(".icon-menu").toggle();
				$(".menu").slideUp();			
			});
		});		
});
