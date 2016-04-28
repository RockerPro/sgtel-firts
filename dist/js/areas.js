	 $(document).ready(function() {

		/*comunicaciones*/
		$(".hidee").hide();
		$("#i1").show();	
		$(".itemm").click(function() {
			var lol  =  $(this).data("cont");
			$(".hidee").hide();		
			$("#"+lol).show();
			$(".itemm").css("color","black");
			$(".itemm").css("list-style","none");	
			$(this).css("list-style","url(dist/img/punto.png)");		
			$(this).css("color","#004375");		
		});
		/*energia*/
		$(".hidee2").hide();
		$("#e1").show();	
		$(".itemm2").click(function() {
			var lol2  =  $(this).data("cont");
			$(".hidee2").hide();		
			$("#"+lol2).show();
			$(".itemm2").css("color","black");
			$(".itemm2").css("list-style","none");	
			$(this).css("list-style","url(dist/img/punto.png)");		
			$(this).css("color","#004375");		
		});
		/*SOLUCIONES MOVILES*/
		$(".hidee3").hide();
		$("#s1").show();	
		$(".itemm3").click(function() {
			var lol3  =  $(this).data("cont");
			$(".hidee3").hide();		
			$("#"+lol3).show();
			$(".itemm3").css("color","black");
			$(".itemm3").css("list-style","none");	
			$(this).css("list-style","url(dist/img/punto.png)");		
			$(this).css("color","#004375");		
		});
		/*consultoria y emprendimiento*/
		$(".hidee4").hide();
		$("#ce2").show();	
		$(".itemm4").click(function() {
			var lol4  =  $(this).data("cont");
			$(".hidee4").hide();		
			$("#"+lol4).show();
			$(".itemm4").css("color","black");
			$(".itemm4").css("list-style","none");	
			$(this).css("list-style","url(dist/img/punto.png)");		
			$(this).css("color","#004375");		
		});

		/*slider clientes*/
		 $("#owl-demo").owlCarousel({
          items : 4,
          itemsDesktop : [1000,4], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,4], // betweem 900px and 668px
          itemsTablet: [668,3], //2 items between 668 and 0
          itemsMobile : [540,2], // 2 items between 540 and 0
          lazyLoad : true,
          loop:true,
          autoplayTimeout:2000,
          autoPlay : true,
          margin:10,
          slideSpeed: 2000, 
          autoPlay: 2000,
          stopOnHover : true,
          pagination : true,
          responsive: true,
          responsiveRefreshRate: 200,

        }); 

 
	
	});
