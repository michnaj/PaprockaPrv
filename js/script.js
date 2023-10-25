$(function() {
  // Smooth scrolling main menu
  $('a.smoothScroll').click(function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      event.preventDefault();
      // Store hash
      hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  // TO-TOP SHOW AND HIDE
  $(window).scroll(function() {
		if ($(this).scrollTop() > 250) {
			$('#totop').fadeIn('slow');
		} else {
			$('#totop').fadeOut('slow');
		}
  });

  // Copyrights year fill
  $(window).ready(function() {
    let year = new Date().getFullYear();
    let start = $('#start-year').html();
    if (parseInt(year) > parseInt(start))
      $('#this-year').html(` - ${year}`);
    return;
  });

});