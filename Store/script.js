window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
$(document).ready(function(){
		  $(window).scroll(function(){
		    if($(this).scrollTop() > 40){
		      $('#topBtn').fadeIn();
		    } else{
		      $('#topBtn').fadeOut();
		    }
		  });

		  $("#topBtn").click(function(){
		    $('html ,body').animate({scrollTop : 0},800);
		  });
});
// SMOOTH SCROLLING SECTIONS
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});