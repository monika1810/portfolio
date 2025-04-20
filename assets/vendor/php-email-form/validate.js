// filepath: /Users/apple/Downloads/Monika_Singh_Portfolio/assets/vendor/php-email-form/validate.js
/**
 * Form Validation and Submission for EmailJS
 */
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      let thisForm = this;

      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      // Collect form data
      let formData = new FormData(thisForm);
      let formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      // Send form data using EmailJS
      emailjs
        .send("service_y5e7gob", "template_ul14ps8", formObject, 'DqaebJtxX1ndtIqPr')
        .then(
          function () {
            thisForm.querySelector('.loading').classList.remove('d-block');
            thisForm.querySelector('.sent-message').classList.add('d-block');
            thisForm.reset();
          },
          function (error) {
            thisForm.querySelector('.loading').classList.remove('d-block');
            displayError(thisForm, error.text || 'Form submission failed!');
          }
        );
    });
  });

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }
})();