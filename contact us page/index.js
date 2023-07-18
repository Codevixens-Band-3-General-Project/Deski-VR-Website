


const form = document.getElementById('myForm');
const myBtn = document.getElementById("submit")
const myImg = document.getElementById('myImg')

    myBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
      
        const nameInput = document.querySelector('#inputName');
        const emailInput = document.querySelector('#inputEmail');
        const messageInput = document.querySelector('#message');
        
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.querySelector('#messageError')
        const messageSuccess = document.querySelector('#messageSuccess')
      
        if (!nameInput.value) {
          nameError.textContent = 'Name is required';
          nameError.style.display = 'block';
          nameError.style.margin = '0px 39px';
        } else {
          nameError.style.display = 'none';
        }
      
        if (!emailInput.value) {
          emailError.textContent = 'Email is required';
          emailError.style.display = 'block';
          emailError.style.margin = '0px 39px';
        } else {
          emailError.style.display = 'none';
        }

        if (!messageInput.value) {
            messageError.textContent = 'message is required';
            messageError.style.display = 'block';
            messageError.style.margin = '0px 39px';
        }else {
            messageError.style.display = 'none'
        }
        if (nameInput.value && emailInput.value && messageInput.value) {
            form.addEventListener('submit', )
          // Perform form submission or other actions
          // ...
        //   form.submit(); // Submit the form if all fields are filled
        //   messageSuccess.textContent = 'Form Sumitted Succcessfully. Thank you';

          messageSuccess.style.display = 'block';
          messageSuccess.style.margin = '0px 39px';
        //   nameInput.placeholder = 'Your Name'
        //   emailInput.value = ''
        //   messageInput.value = ''

        }
      });

      myImg.addEventListener('mouseover', function() {
        myImg.style.cursor = 'pointer'
        myImg.addEventListener('cl')
      })



// inputElement.addEventListener('onclick', function() {
//   this.placeholder = '';
// });

// inputElement.addEventListener('onblur', function() {
//   this.placeholder = 'Your Name';
// });
