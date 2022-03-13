const emailInput = document.getElementById('email-login');
const passwordInput = document.getElementById('password-login');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailInput.value.length >= 8 && passwordInput.value.length >= 4) {
    const data = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    fetch('/login', {
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
        } else {
          swal('error', result.message, 'error');
        }
      })
      .catch((err) => {
        window.location.href = '/login';
      });
  }
});
