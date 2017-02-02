$(document).ready(function() {
	    // Generate a simple captcha
	    function randomNumber(min, max) {
	        return Math.floor(Math.random() * (max - min + 1) + min);
	    }
	    $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));

});
$("form :input").blur(function(){
	var $parent = $(this).parent();
	var items = $('#captchaOperation').html().split(' ');
	var sum = parseInt(items[0]) + parseInt(items[2]);
	$parent.find(".glyphicon").remove();

	if ($(this).is("#username")) {
		if (this.value === "") {
			$parent.append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
		} else{
			$parent.append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
		}
	}

	if ($(this).is("#password")) {
		if (this.value === "") {
			$parent.append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
		} else{
			$parent.append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
		}
	}

	if ($(this).is("#captcha")) {
		if (this.value === "" || this.value != sum) {
			$parent.append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
		} else{
			$parent.append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
		}
	}
});
