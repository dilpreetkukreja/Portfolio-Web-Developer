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
    	}, 500); //1 sec duration of scroll
    })
});