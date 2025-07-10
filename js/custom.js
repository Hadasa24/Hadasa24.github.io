jQuery(document).ready( function() {

/* ==============================================
	Cube Portfolio For Index.html
=============================================== */
         jQuery('#grid-container').cubeportfolio({
            gapHorizontal: 1,
			gapVertical: 1,
			caption: 'overlayBottomAlong',
			gridAdjustment: 'responsive'
         });
    

/* ==============================================
	3D Testimonial Slider
=============================================== */	
		$('#dg-container').gallery({
			current     : 0,   
			// index of current item
			autoplay    : true,
			// slideshow on / off
			interval    : 3000 
			// time between transitions
		});
	
/* ==============================================
	BX Slider Slider
=============================================== */		
	  $('.bxslider').bxSlider();
	
/* ==============================================
	Pie Charts
=============================================== */		
	
			jQuery('#pie-charts').waypoint(function(direction) {			
				jQuery('.chart').easyPieChart({
					barColor: "#4d9ae2",
					onStep: function(from, to, percent) {
						jQuery(this.el).find('.percent').text(Math.round(percent));
					}
				});
				}, {
				offset: function() {
					return jQuery.waypoints('viewportHeight') - jQuery(this).height() + 200;
				}
			});

	
	
/* ==============================================
	Revolution Slider
=============================================== */
		revapi = jQuery('.tp-banner').revolution(
		{
			delay:9000,
			startwidth:1170,
			startheight:545,
			hideThumbs:10,
			fullWidth:"on",

			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:4,
			onHoverStop:"off",
						
			navigationType:"none",
			navigationArrows:"solo",
			navigationStyle:"preview4",
			
			parallax:"mouse",
			parallaxBgFreeze:"on",
			parallaxLevels:[10,7,4,3,2,5,4,3,2,1],
		});


/* ==============================================
	TO TOP
=============================================== */
	jQuery().UItoTop({ easingType: 'easeOutQuart' });
	

/* ==============================================
	AUTO TYPE
=============================================== */


		$("#typed").typed({
			strings: ["Grow Your Business & Grow Your Income...", "Keep Updated With Orane", "We Care For Our Customers", "Try it out !!!"],
			typeSpeed: 30,
			backDelay: 700,
			loop: true,
			// defaults to false for infinite loop
			loopCount: false,
			callback: function(){ foo(); }
		});

		function foo(){ console.log("Callback"); }
			
//hiding horizontal bar
	javascript:void(document.body.style.setProperty('overflow-x','hidden',''));	

/* ==============================================
	Responsive Video
=============================================== */				
// Basic FitVids Test
        $(".container").fitVids();
        // Custom selector and No-Double-Wrapping Prevention Test
        $(".container").fitVids({ customSelector: "iframe[src^='']"});	
		  
});