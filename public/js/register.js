const nameInput = document.getElementById('name-register');
const emailInput = document.getElementById('email-register');
const passwordInput = document.getElementById('password-register');
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (
    nameInput.value.length >= 2 &&
    emailInput.value.length >= 8 &&
    passwordInput.value.length >= 4
  ) {
    const data = {
      username: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    fetch('/register', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      method: 'POST',
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.username) {
          window.location.href = '/home';
        }
        else{
          swal('error', result.message, 'error');
        }
      });
  }
});
