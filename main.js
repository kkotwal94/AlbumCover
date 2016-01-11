jQuery(document).ready(function($){
	var gallery = $('.openable'),
		foldingPanel = $('.cd-folding-panel'),
		mainContent = $('.cd-main'),
		gallery2 = $('.op2'),
		gallery3 = $('.op3'),
		gallery4 = $('.op4'),
		gallery5 = $('.op5'),
		gallery6 = $('.op6'),
		gallery7 = $('.op7'),
		myElement = $(".fold-left"),
		myRightElement = $(".fold-right");

	/* open folding content */
	gallery.on('click', function(event){
		event.preventDefault(); //dont do whatever it does
		rightLeftCheck();
		openItemInfo($(this).attr('href')); //call openiteminfo
		//var myElement = document.querySelector(".fold-left");
			//myElement.style.backgroundImage = 'url("http://ime.ulximg.com/image/138/cover/1413338609_a82a511833773d95195be83d2a721e48.jpg/65d82aec9f9fa7f7e68a36d0b54210a0/1413338609_lil_b_the_basedgod_ultimate_bitch_mixtape_front_large_29.jpg")';
		

		//alert("opened");
	});
	
	
	gallery2.on('click', function(event){
		event.preventDefault(); //dont do whatever it does
		rightLeftCheck();
		myElement.addClass('changed');
		myRightElement.addClass('changed');
		openItemInfo($(this).attr('href')); //call openiteminfo
		//alert("opensd");
		
		//myElement.toggleClass('changed');
		//myElement.style.backgroundImage = 'url("http://imd.ulximg.com/image/138/cover/1438798528_18d841f77a3ec52f84260a29f71e19ed.jpg/3b91f95bff809cabf27d034b8c8f9027/1438798528_0f5c1df0c0d753e69c99b3d9c2b3be19.jpg")';
	});


	gallery3.on('click', function(event){
		event.preventDefault(); //dont do whatever it does
		rightLeftCheck();
		myElement.addClass('changed2');
		myRightElement.addClass('changed2');
		openItemInfo($(this).attr('href')); //call openiteminfo
		//alert("opensd");
		
		//myElement.toggleClass('changed');
		//myElement.style.backgroundImage = 'url("http://imd.ulximg.com/image/138/cover/1438798528_18d841f77a3ec52f84260a29f71e19ed.jpg/3b91f95bff809cabf27d034b8c8f9027/1438798528_0f5c1df0c0d753e69c99b3d9c2b3be19.jpg")';
	});


	gallery4.on('click', function(event){
		event.preventDefault(); //dont do whatever it does
		rightLeftCheck();
		myElement.addClass('changed3');
		myRightElement.addClass('changed3');
		openItemInfo($(this).attr('href')); //call openiteminfo
		//alert("opensd");
		
		//myElement.toggleClass('changed');
		//myElement.style.backgroundImage = 'url("http://imd.ulximg.com/image/138/cover/1438798528_18d841f77a3ec52f84260a29f71e19ed.jpg/3b91f95bff809cabf27d034b8c8f9027/1438798528_0f5c1df0c0d753e69c99b3d9c2b3be19.jpg")';
	});
	
	gallery5.on('click', function(event){
		event.preventDefault(); //dont do whatever it does
		rightLeftCheck();
		myElement.addClass('changed4');
		myRightElement.addClass('changed4');
		openItemInfo($(this).attr('href')); //call openiteminfo
		//alert("opensd");
		
		//myElement.toggleClass('changed');
		//myElement.style.backgroundImage = 'url("http://imd.ulximg.com/image/138/cover/1438798528_18d841f77a3ec52f84260a29f71e19ed.jpg/3b91f95bff809cabf27d034b8c8f9027/1438798528_0f5c1df0c0d753e69c99b3d9c2b3be19.jpg")';
	});
	
	gallery6.on('click', function(event){
		event.preventDefault(); //dont do whatever it does
		rightLeftCheck();
		myElement.addClass('changed5');
		myRightElement.addClass('changed5');
		openItemInfo($(this).attr('href')); //call openiteminfo
		//alert("opensd");
		
		//myElement.toggleClass('changed');
		//myElement.style.backgroundImage = 'url("http://imd.ulximg.com/image/138/cover/1438798528_18d841f77a3ec52f84260a29f71e19ed.jpg/3b91f95bff809cabf27d034b8c8f9027/1438798528_0f5c1df0c0d753e69c99b3d9c2b3be19.jpg")';
	});


	gallery7.on('click', function(event){
		event.preventDefault(); //dont do whatever it does
		rightLeftCheck();
		myElement.addClass('changed6');
		myRightElement.addClass('changed6');
		openItemInfo($(this).attr('href')); //call openiteminfo
		//alert("opensd");
		
		//myElement.toggleClass('changed');
		//myElement.style.backgroundImage = 'url("http://imd.ulximg.com/image/138/cover/1438798528_18d841f77a3ec52f84260a29f71e19ed.jpg/3b91f95bff809cabf27d034b8c8f9027/1438798528_0f5c1df0c0d753e69c99b3d9c2b3be19.jpg")';
	});

	/* close folding content */
	foldingPanel.on('click', '.cd-close', function(event){
		event.preventDefault(); //stop doing whatever
		toggleContent('', false); //untoggle whatever
	});
	
	gallery.on('click', function(event){
		/* detect click on .cd-gallery::before when the .cd-folding-panel is open */
		if($(event.target).is('.cd-gallery') && $('.fold-is-open').length > 0 ) toggleContent('', false);
	})
	


	function openItemInfo(url) {
		var mq = viewportSize();
		if( gallery.offset().top > $(window).scrollTop() && mq != 'mobile') {
			/* if content is visible above the .cd-gallery - scroll before opening the folding panel */
			$('body,html').animate({
				'scrollTop': gallery.offset().top
			}, 100, function(){ 
	           	toggleContent(url, true);
	        }); 
	    } else if( gallery.offset().top + gallery.height() < $(window).scrollTop() + $(window).height()  && mq != 'mobile' ) {
			/* if content is visible below the .cd-gallery - scroll before opening the folding panel */
			$('body,html').animate({
				'scrollTop': gallery.offset().top + gallery.height() - $(window).height()
			}, 100, function(){ 
	           	toggleContent(url, true);
	        });
		} else {
			toggleContent(url, true);
		}
	}

	function toggleContent(url, bool) {
		if( bool ) {
			/* load and show new content */
			var foldingContent = foldingPanel.find('.cd-fold-content');
			foldingContent.load(url+' .cd-fold-content > *', function(event){
				setTimeout(function(){
					$('body').addClass('overflow-hidden');
					foldingPanel.addClass('is-open');
					mainContent.addClass('fold-is-open');
				}, 100);
				
			});
		} else {
			/* close the folding panel */
			var mq = viewportSize();
			$('body').removeClass('overflow-hidden');
			foldingPanel.removeClass('is-open');
			mainContent.removeClass('fold-is-open');
			

			(mq == 'mobile' || $('.no-csstransitions').length > 0 ) 
				/* according to the mq, immediately remove the .overflow-hidden or wait for the end of the animation */
				? $('body').removeClass('overflow-hidden')
				
				: mainContent.find('.cd-item').eq(0).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					$('body').removeClass('overflow-hidden');
					mainContent.find('.cd-item').eq(0).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				});

			/*
			var myElement = $(".fold-left");
			
			if(myElement.hasClass("changed")) {
				myElement.toggleClass('changed');
			}
			*/
		}
		
	}

	function rightLeftCheck() {
				if(myElement.hasClass('changed')) {
			myElement.removeClass('changed');
		}
		if(myElement.hasClass('changed2')) {
			myElement.removeClass('changed2');
		}
		if(myElement.hasClass('changed3')) {
			myElement.removeClass('changed3');
		}
		if(myElement.hasClass('changed4')) {
			myElement.removeClass('changed4');
		}
		if(myElement.hasClass('changed5')) {
			myElement.removeClass('changed5');
		}
		if(myElement.hasClass('changed6')) {
			myElement.removeClass('changed6');
		}

		if(myRightElement.hasClass('changed')) {
			myRightElement.removeClass('changed');
		}

		if(myRightElement.hasClass('changed2')) {
			myRightElement.removeClass('changed');
		}
		if(myRightElement.hasClass('changed3')) {
			myRightElement.removeClass('changed');
		}
		if(myRightElement.hasClass('changed4')) {
			myRightElement.removeClass('changed');
		}
		if(myRightElement.hasClass('changed5')) {
			myRightElement.removeClass('changed');
		}
		if(myRightElement.hasClass('changed6')) {
			myRightElement.removeClass('changed');
		}
	}

	function viewportSize() {
		/* retrieve the content value of .cd-main::before to check the actua mq */
		return window.getComputedStyle(document.querySelector('.content'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
	}
});