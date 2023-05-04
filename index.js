// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

//   document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Your code here

//     const form = document.querySelector('.needs-validation');
// const firstNameInput = form.querySelector('#validationCustom01');
// const lastNameInput = form.querySelector('#validationCustom02');
// const cityInput = form.querySelector('#validationCustom03');
// const townInput = form.querySelector('#validationCustom05');

// form.addEventListener('submit', function(event) {
//   if (form.checkValidity() === false) {
//     event.preventDefault();
//     event.stopPropagation();
//   }

//   if (firstNameInput.value.length < 2) {
//     firstNameInput.classList.add('is-invalid');
//     event.preventDefault();
//     event.stopPropagation();
//   } else {
//     firstNameInput.classList.remove('is-invalid');
//   }

//   if (lastNameInput.value.length < 2) {
//     lastNameInput.classList.add('is-invalid');
//     event.preventDefault();
//     event.stopPropagation();
//   } else {
//     lastNameInput.classList.remove('is-invalid');
//   }

//   if (cityInput.value.length < 3) {
//     cityInput.classList.add('is-invalid');
//     event.preventDefault();
//     event.stopPropagation();
//   } else {
//     cityInput.classList.remove('is-invalid');
//   }

//   if (townInput.value.length < 3) {
//     townInput.classList.add('is-invalid');
//     event.preventDefault();
//     event.stopPropagation();
//   } else {
//     townInput.classList.remove('is-invalid');
//   }

//   form.classList.add('was-validated');
// }, false);

//   });
  