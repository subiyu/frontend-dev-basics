var TabBox = {
	_onTabClicked: function() {
		$('.tab-box li.selected').removeClass('selected');
		$(this).addClass('selected');
	},
	
	_init: function() {
		$(".tab-box li").click(TabBox._onTabClicked);
	},
	
	init: function() {
		/*$(function() {
				$(".tab-box li").click(TabBox.__onTabClicked);
		});*/
		$(this._init);
	}
};