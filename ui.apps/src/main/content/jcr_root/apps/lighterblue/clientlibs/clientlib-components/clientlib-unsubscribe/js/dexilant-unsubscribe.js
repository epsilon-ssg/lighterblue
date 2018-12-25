$(document).ready(function () {


    $(document).on('click', '#unsubscribe .checkbox label', function(){

        if($('.checkValid').is(':checked')){
			$(this).addClass('checked');
        }else{
			$(this).removeClass('checked');
        }

    })

 	if($('.checkValid').is(':checked')){
		$('.checkValid').closest('label').addClass('checked');
    }



	$.validator.addMethod('onecheck', function (value, ele) {
		return $("input:checked").length >= 1;
	}, $('.checkValid').data('error'));


	$.validator.addMethod("emailValidation", function (value, element) {
		if (!/^([0-9a-zA-Z]+[-._'+&])*[_0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/.test(value)) {
			return false; // FAIL validation when REGEX matches
		} else {
			return true; // PASS validation otherwise
		};
	}, "");

	$('#unsubscribe').validate({
		onkeyup: function (element) {
			$(element).valid();
		},
		rules: {
			checkbox: {
				onecheck: true
			},
			email: {
				required: true,
				emailValidation: true
			}
		},
		errorPlacement: function (error, element) {
			error.insertAfter($(element).parents('.form-group'));
		},
		messages: {
			email: {
				required: $('.emailValid').data('pattern'),
				emailValidation: $('.emailValid').data('error')
			}
		},
		submitHandler: function (form) {

			//Get the user-defined values
			var emailVal = $('#email').val();

			$.ajax({
				url: $("#unsubscribeUserResourcePath").val(),
				method: "POST",
				data: 'emailID=' + emailVal,
				success: function (result) {


					if (result['confirmationStatus']) {

						window.location.href = $(".redirectPage").val();
					} else {

						window.location.href = $(".errorunsubscribe").val();
					}
				},
				error: function (result) {

					window.location.href = $(".errorunsubscribe").val();
				}
			});
		}
	});

});