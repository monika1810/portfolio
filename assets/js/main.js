/**
 * Template Name: iLanding
 * Template URL: https://bootstrapmade.com/ilanding-bootstrap-landing-page-template/
 * Updated: Nov 12 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  'use strict';

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (
      !selectHeader.classList.contains('scroll-up-sticky') &&
      !selectHeader.classList.contains('sticky-top') &&
      !selectHeader.classList.contains('fixed-top')
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add('scrolled')
      : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach((navmenu) => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach((navmenu) => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add('active')
        : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox',
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll('.init-swiper').forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector('.swiper-config').innerHTML.trim()
      );

      if (swiperElement.classList.contains('swiper-tab')) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener('load', initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll('.faq-item h3, .faq-item .faq-toggle')
    .forEach((faqItem) => {
      faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active');
      });
    });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll('.navmenu a.active')
          .forEach((link) => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * My Skills Section
   */

  // function mySkills() {
  //   var v1 = $(".i1").attr("data-pg");
  //   $(".i1").animate({
  //     width: v1
  //   }, 2000);
  //   var v2 = $(".i2").attr("data-pg");
  //   $(".i2").animate({
  //     width: v2
  //   }, 2000);
  //   var v3 = $(".i3").attr("data-pg");
  //   $(".i3").animate({
  //     width: v3
  //   }, 2000);
  // }

  // document.addEventListener('scroll', mySkills);
  //   window.addEventListener('load', mySkills);
})();

$(document).ready(function () {
  $(`.skill-per`).each(function () {
    var $this = $(this);
    var percentage = $this.attr('percentage');
    $this.css('width', percentage + '%');
    $({
      animatedValue: 0,
    }).animate(
      {
        animatedValue: percentage,
      },
      {
        duration: 1300,
        step: function () {
          $this.attr('percentage', Math.floor(this.animatedValue));
        },
      }
    );
  });
});

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: window.innerWidth > 1024 ? { invert: false } : false, // Enable mousewheel only on desktop
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  },
});


// form
// document.querySelector('.php-email-form').addEventListener('submit', function (e) {
//   e.preventDefault(); // Prevent default form submission
//   const form = e.target;

//   fetch(form.action, {
//     method: form.method,
//     body: new FormData(form),
//     headers: {
//       Accept: 'application/json',
//     },
//   })
//     .then((response) => {
//       if (response.ok) {
//         form.querySelector('.sent-message').style.display = 'block';
//         form.reset();
//       } else {
//         form.querySelector('.error-message').style.display = 'block';
//       }
//     })
//     .catch(() => {
//       form.querySelector('.error-message').style.display = 'block';
//     });
// });