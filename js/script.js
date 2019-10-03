$(function() {
    $('nav .nav-link').on('click', function(){ 
        if($('.navbar-toggler').css('display') !='none'){
            $('.navbar-toggler').trigger( "click" );
        }
    });
    /* adding smooth scrolling through the website*/
    $('nav .nav-link').click(function(e){
    	e.preventDefault();
    	console.log($(this.hash));//section which clicked element referening to
    	//animate function require jquery-3.4.1.min.js. It will not work using jquery-3.3.1.slim.min.js
    	$('body, html').animate({	
    		//set scrollbar position from top = section distance from top
    		scrollTop: $(this.hash).offset().top
    	}, 1000); //1 sec duration of scroll
    })
    $('#home-desc').fadeIn(2000);
    $('#view-port').fadeIn(2000);
    //$('#home-desc').slideUp();
    $('#home-name').css({'display':'block'}).animate({bottom:'0'})

    ///sending email feature
    var mailString;
	function updateMailString() {
	    mailString = '?subject=' + encodeURIComponent($('#subject').val())
	        + '&body=' + encodeURIComponent($('#message').val());
	    $('#mail-link').attr('href',  'mailto:dilpreet.kukreja@gmail.com' + mailString);
	}
	$( "#subject" ).focusout(function() { updateMailString(); });
	$( "#message" ).focusout(function() { updateMailString(); });
	updateMailString();
});

