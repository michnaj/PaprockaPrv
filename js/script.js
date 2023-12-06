$(function() {
  //CHANGING LIST OF CLASS WHEN MENU TOGGLE BUTTON CLICKED
  let menuElement = document.getElementById('mainmenu-ScrollSpy');
  let toggler = document.getElementById('menu-toggler-button');
  let logo = document.getElementById('logo');
  $(toggler).click(function(event) {
    var togglerState = toggler.getAttribute('aria-expanded');
    if (togglerState == 'true') {
      menuElement.classList.add('expanded-Menu');
      logo.classList.add('expanded-Logo');
    } else {
      menuElement.classList.remove('expanded-Menu');
      logo.classList.remove('expanded-Logo');
    }
  });
  $('button.navbar-toggler.collapsed').click(function(event) {
    menuElement.classList.add('collapsed-Menu');
  });

  // Smooth scrolling
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

  // TO-TOP SHOW AND HIDE WHEN SCROLL
  // LOGO AND MENU LIST OF CLASS MODIFY WHEN SCROLL
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      menuElement.classList.add('fixed-Menu');
      logo.classList.add('fixed-Logo');
    } else {
      menuElement.classList.remove('fixed-Menu');
      logo.classList.remove('fixed-Logo');
    }
		if ($(this).scrollTop() > 250) {
			$('#totop').fadeIn('slow');
		} else {
			$('#totop').fadeOut('slow');
		}
  });

  // Copyrights year fill
  $(window).ready(function() {
    let year = new Date().getFullYear();
    $('#this-year').html(`${year}`);
    return;
  });

  //Bootstrap Scrollspy refresh when filtr option change
  $('input.opcja-Filtr').click(function() {
    const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]');
    dataSpyList.forEach(dataSpyEl => {
      bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh();
    });
  });

  // TEMP ZMIENIACZ TLA
  $('a.tlo-select').click(function(event) {
    let Karuzela = document.getElementById('karuzela-Naglowek');
    let PoleTxt = document.getElementById('Wybrane-Tlo');
    let Wstep = document.getElementById('Wstep');

    for(i=1; i<26; i++) {
      Karuzela.classList.remove('tlo-'+i);
    }
    let number = $(this).attr('data-tlo');
    Karuzela.classList.add('tlo-' + number);
    $(PoleTxt).html(number);
    if ((number > 1) && (number <= 5)) Wstep.classList.remove('tempBlack');
    if (number >= 6) Wstep.classList.add('tempBlack');
  });
});