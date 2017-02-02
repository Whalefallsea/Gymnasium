$("form :input").blur(function(){
	var $parent = $(this).parent();
	var items = $('#captchaOperation').html().split(' ');
	var sum = parseInt(items[0]) + parseInt(items[2]);
	$parent.find(".glyphicon").remove();
	
	if ($(this).is("#username")) {
		if (this.value == "") {
			$parent.append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>')
		} else{
			$parent.append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>')
		}		
	}
	
	if ($(this).is("#password")) {
		if (this.value == "") {
			$parent.append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>')
		} else{
			$parent.append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>')
		}		
	}
	
})