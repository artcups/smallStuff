function renderErrorArea(errorObj, message) {
  $('<div/>', {class: "error-area"}).text(message).insertAfter(errorObj.closest('.area').find('.area-heading'));
}
function isValid(form, event){
		$('button:submit').attr('disabled','disabled');
		$('.error-area').remove();
		var valid = true;
    var errorMessageInput = "This field is required";
    var errorMessageSelect = "You have to choose from the list";
    
    
		$(form).find('input').each(function() {
			if ($(this).prop('required') == true && $(this).val() == ""){
				$(this).addClass("has-error");
				renderErrorArea($(this), errorMessage);
				event.preventDefault();
				valid = false;
			}else
				$(this).removeClass("feed-has-error");
		});

		$(form).find('textarea').each(function() {
			if ($(this).prop('required') == true && $(this).val() == ""){
				$(this).addClass("has-error");
				renderErrorArea($(this), errorMessage);
				
				valid = false;
			}else
				$(this).removeClass("has-error");
		});

		$(form).find('select').each(function() {
			if ($(this).val() == 0){
				$(this).addClass("has-error");
				renderErrorArea($(this), errorMessageSelect);
				event.preventDefault();
				valid = false;
			}else
				$(this).removeClass("has-error");
		});

		if (!valid) {
			$('button:submit').removeAttr('disabled');
		}
    
		return valid;
	}
  
