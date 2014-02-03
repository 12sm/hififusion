// Modified http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
// Only fires on body class (working off strictly WordPress body_class)

var ExampleSite = {
  // All pages
  common: {
    init: function() {
	    $(".video").fitVids();
    },
    finalize: function() { }
  },
  // Home page
  home: {
    init: function() {

var vimeoPlayers = $('.flexslider').find('iframe'), player; 		
	
	for (var i = 0, length = vimeoPlayers.length; i < length; i++) { 		    
			player = vimeoPlayers[i]; 		    
			$f(player).addEvent('ready', ready); 		
	} 		
	
	function addEvent(element, eventName, callback) { 	    	
		if (element.addEventListener) { 		    	
			element.addEventListener(eventName, callback, false) 		    
		} else { 	      		
			element.attachEvent(eventName, callback, false); 	      	
		} 	    
	} 	    
	
	function ready(player_id) { 	    	
		var froogaloop = $f(player_id); 	    	
		froogaloop.addEvent('play', function(data) { 		    	
			jQuery('.flexslider').flexslider("pause"); 		    
		}); 		    
		froogaloop.addEvent('pause', function(data) { 			    
			jQuery('.flexslider').flexslider("play"); 		    
		}); 		
	}  
	
	$(".flexslider")     
	.flexslider({       
		animation: "slide",
		useCSS: false,       
		animationLoop: false,       
		smoothHeight: false,       
		before: function(slider){         
			if (slider.slides.eq(slider.currentSlide).find('iframe').length !== 0)
			      $f( slider.slides.eq(slider.currentSlide).find('iframe').attr('id') ).api('pause');       
		}   
	});
    
    
    
	    $(window).load(function() {
			$( '.mi-slider' ).catslider();
		 });    
    
	    $(window).scroll(function(e){
		    parallax();
		 });
		 function parallax(){
		    var scrolled = $(window).scrollTop();
		    $('.welcome').css('background-position-y',-(scrolled*0.6)+'px');
	    }    
	    	    
	    
    }
  },
  // About page
  about: {
    init: function() {
      // JS here
    }
  },
  // Our Work page
  work: {
    init: function() {
      // cache container
      $(window).load(function(){

				$( ".width2" ).each(function( i ) {
		    		var $box = $(this);
		    		var $width = $(this).width();
		    		var $curr_width =parseInt($width); // removes the "px" at the end
		    		var $height = $curr_width*0.27185328185328 + "px";
		    		$(".width2").css("height",$height);
		    	});      

		    	$(".width1").each(function( i ){
		    		var $box = $(this);
		    		var $width = $(this).width();
		    		var $curr_width =parseInt($width); // removes the "px" at the end
		    		var $height = $curr_width*0.5605095541401274 + "px";
		    		$(".width1 > div > a > img, .width1 > div > img").css("height",$height);
		    	});
      
      
      	var $container = $('#projects');
      	// initialize isotope
      	$container.isotope({
	      	resizable: false, // disable normal resizing
	      	// set columnWidth to a percentage of container width
	      	masonry: { 
	      	columnWidth: $container.width() / 4,
	      	gutterWidth: 0 }
	      });
	      // filter items when filter link is clicked
	   $('#filters a').click(function(){
		      var selector = $(this).attr('data-filter');
		      	$container.isotope({ filter: selector });
		      return false;
		});
		
		$(".item").css("opacity", "1");
				
		$(window).smartresize(function(){
				$( ".width2" ).each(function( i ) {
		    		var $box = $(this);
		    		var $width = $(this).width();
		    		var $curr_width =parseInt($width); // removes the "px" at the end
		    		var $height = $curr_width*0.27185328185328 + "px";
		    		$(".width2").css("height",$height);
		    	});
		    	
		    	//$( ".mi-slider nav" ).css("top", "60%");		
		
		   $container.isotope({
			   // update columnWidth to a percentage of container width
			   masonry: { columnWidth: $container.width() / 4 }
			});
			
		});	      
	   // END window.load   
	   });
	   
	   // END Init
	   }

// END Our Work page      
	}
// END FUNCTION
};

var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = ExampleSite;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {

    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });

    UTIL.fire('common', 'finalize');
  }
};

$(document).ready(UTIL.loadEvents);

//Set up width and height for width 2
		
		 
		 

	/*var width2=getElementsByClass("width2")
	('div.width2').each(function(){
    var w=$(this).width();
    var w2=parseInt(w);
    var h=w2*0.8888;*/
