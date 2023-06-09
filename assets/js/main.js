/**
* Template Name: BizLand
* Updated: May 30 2023 with Bootstrap v5.3.0
* Template URL: https://bootstrapmade.com/bizland-bootstrap-business-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/



(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }



  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Porfolio isotope and filter
   */



  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });


  /**
   * Initiate Pure Counter 
   */



document.getElementById('openDialog').addEventListener('click', function() {
  document.getElementById('dialogOverlay').style.display = 'flex';
  
});

document.getElementById('dialogOverlay').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});

document.getElementById('close-login-dialog').addEventListener('click', function(e) {
  document.getElementById('dialogOverlay').style.display = 'none';
});
/*
Mostrar la cotnraseña al aplastar el botón
*/
document.getElementById('hide-login-password').addEventListener('click', function(e) {
  document.getElementById('password').type = 'text';
});

/*
Abrir el dialog de forgot password
*/
document.getElementById('forgot-password-button').addEventListener('click', function() {
  document.getElementById('dialogForgotPassword').style.display = 'flex';
  document.getElementById('dialogOverlay').style.display = 'none';
});

document.getElementById('close-forgot-dialog').addEventListener('click', function(e) {
  document.getElementById('dialogForgotPassword').style.display = 'none';
});

/*
document.getElementById('signup-button').addEventListener('click', function() {
  document.getElementById('dialogResetPassword').style.display = 'flex';
});
*/

/*
Close reset password dialog
*/
document.getElementById('close-reset-dialog').addEventListener('click', function(e) {
  document.getElementById('dialogResetPassword').style.display = 'none';
});





/*
function deleteBook(bookId) {
  var confirmDelete = confirm("¿Realmente quieres eliminar este libro?");

  if (confirmDelete) {
    // Delete
    var bookElement = document.querySelector('[data-book-id="' + bookId + '"]');
    if (bookElement) {
      bookElement.parentNode.parentNode.remove();
      console.log("Libro eliminado: " + bookId);
    }
  }
}
*/


})()

// Habilitar/deshabilitar el botón Publicar según el estado del checkbox

// Obtener los elementos de los campos requeridos
const titleField = document.getElementById('title');
const descriptionField = document.getElementById('description');
const brandField = document.getElementById('brand');
const institutionField = document.getElementById('institution');
const unitCostField = document.getElementById('unitCost');
const quantityField = document.getElementById('quantity');
const contactField = document.getElementById('contact');

// Obtener el checkbox de aceptación
const acceptCheckbox = document.getElementById('accept-checkbox');

// Obtener el botón Publicar
const publishButton = document.getElementById('publish-button');

// Agregar eventos de escucha a los campos requeridos
[titleField, descriptionField, brandField, institutionField, unitCostField, quantityField, contactField].forEach(function(field) {
  field.addEventListener('input', checkFields);
});

// Agregar evento de escucha al checkbox de aceptación
acceptCheckbox.addEventListener('change', checkFields);

// Función para verificar los campos y habilitar/deshabilitar el botón Publicar
function checkFields() {
  const allFieldsFilled = [titleField, descriptionField, brandField, institutionField, unitCostField, quantityField, contactField].every(function(field) {
    return field.value.trim() !== '';
  });

  publishButton.disabled = !allFieldsFilled || !acceptCheckbox.checked;
}
    


