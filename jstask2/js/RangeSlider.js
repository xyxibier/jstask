$.fn.RangeSlider = function(el) {
	this.sliderel = {
		min: el && !isNaN(parseFloat(el.min)) ? Number(el.min) : null,
		max: el && !isNaN(parseFloat(el.max)) ? Number(el.max) : null,
		step: el && Number(el.step) ? el.step : 1,
		callback: el && el.callback ? el.callback : null
	};

	var $input = $(this);
	var min = this.sliderel.min;
	var max = this.sliderel.max;
	var step = this.sliderel.step;
	var callback = this.sliderel.callback;

	$input.attr('min', min).attr('max', max).attr('step', step);

	$input.bind("input", function(e) {
		$input.attr('value', this.value);
		$input.css('background-size', (this.value-min)/(max-min)*100 + '% 100%');

		if($.isFunction(callback)) {
			callback(this);
		}
	});
};

var change = function($input) {}

$('#voicebar').RangeSlider({
	min: 0,
	max: 100,
	step: 0.1,
	callback: change
});

$('#playerbar').RangeSlider({
	min: 6,
	max: 18,
	step: 1,
	callback: change
});