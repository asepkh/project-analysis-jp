jQuery(document).ready(function(){


/* = News Tab
-------------------------------------------------------------- */ 

$(function () {
  /*初期表示*/
  $('.tab-cnt').hide();
  $('.tab-cnt').eq(0).show();
  $('.tab-btn').eq(0).addClass('tab-active');
  /*クリックイベント*/
  $('.tab-btn').each(function () {
    $(this).on('click', function () {
      var index = $('.tab-btn').index(this);
      $('.tab-btn').removeClass('tab-active');
      $(this).addClass('tab-active');
      $('.tab-cnt').hide();
      $('.tab-cnt').eq(index).show();
    });
  });
});


/* = SearchBox
-------------------------------------------------------------- */ 

$('#site-search-btn').click(function () {
  $('.subnav .site-search').slideToggle('fast');
  $(this).toggleClass('on');
});


/* = Pulldown menu
-------------------------------------------------------------- */ 

$('.gn-home,#gnpc-pd-home').hover(
	function () { $('#gnpc-pd-home').addClass('on');},
	function () { $('#gnpc-pd-home').removeClass('on');}
);

$('.gn-corp,#gnpc-pd-corp').hover(
	function () { $('#gnpc-pd-corp').addClass('on');},
	function () { $('#gnpc-pd-corp').removeClass('on');}
);

$('.gn-product,#gnpc-pd-product').hover(
	function () { $('#gnpc-pd-product').addClass('on');},
	function () { $('#gnpc-pd-product').removeClass('on');}
);

$('.gn-rd,#gnpc-pd-rd').hover(
	function () { $('#gnpc-pd-rd').addClass('on');},
	function () { $('#gnpc-pd-rd').removeClass('on');}
);

$('.gn-ir,#gnpc-pd-ir').hover(
	function () { $('#gnpc-pd-ir').addClass('on');},
	function () { $('#gnpc-pd-ir').removeClass('on');}
);


/* end */	

});
