jQuery(document).ready(function(){

   
/* = Navigation switch
-------------------------------------------------------------- */

	jQuery(".menu-switch .menu-switch-btn").click(function () {
	  jQuery("#site-navigation").slideToggle('');
	  jQuery(this).toggleClass("on");
	});
 
	jQuery(".subnav-switch-btn").click(function () {
	  jQuery(".page-subnav").slideToggle('fast');
	  jQuery(this).toggleClass("on");
	});   
    
/* = Go to page top Button Animation
-------------------------------------------------------------- */

	var showFlag = false;
	var gotopBtn = jQuery('#page-top');	
	gotopBtn.css('bottom', '-250px');
	var showFlag = false;
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 100) {
			if (showFlag == false) {
				showFlag = true;
				var w = jQuery(window).width();
				var x = 768;
				if (w > x){
				gotopBtn.stop().animate({'bottom' : '0'}, 500); 
				}
				else
				{
				gotopBtn.stop().animate({'bottom' : '0'}, 500); 					
				}
			}
		} else {
			if (showFlag) {
				showFlag = false;
				gotopBtn.stop().animate({'bottom' : '-250px'}, 500); 
			}
		}
	});
	

/* end */	

});
