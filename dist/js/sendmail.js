jQuery(document).ready(function() {

    $('#contact-form').submit(function(e) {
    	e.preventDefault();

    	var form = $(this);
    	var nameLabel = form.find('label[for="contact-name"]');
    	var telfLabel = form.find('label[for="contact-telf"]');
    	var emailLabel = form.find('label[for="contact-email"]');
    	var messageLabel = form.find('label[for="contact-message"]');
    	
    	nameLabel.html('');
    	telfLabel.html('');
    	emailLabel.html('');
    	messageLabel.html('');
        
        var postdata = form.serialize();
        $.ajax({
            type: 'POST',
            url: 'http://www.deitaweb.com/sendmailsgtel/correo.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.nameMessage != '') {
                	nameLabel.append('  <span class="white error-label"> ' + json.nameMessage + '</span>');
                }
                if(json.telfMessage != '') {
                	telfLabel.append('  <span class="white error-label"> ' + json.telfMessage + '</span>');
                }
                if(json.emailMessage != '') {
                	emailLabel.append('  <span class="white error-label"> ' + json.emailMessage + '</span>');
                }
                if(json.messageMessage != '') {
                	messageLabel.append('    <span class="white error-label"> ' + json.messageMessage + '</span>');
                }
                if(json.nameMessage == '' && json.telfMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
                 $(".contacinput").val("");                
                 $('.success-message').fadeIn();
                 setTimeout(function() {
                    $(".success-message").fadeOut(1200);
                   },3000);
                }
            }                   
        });         
    });
});