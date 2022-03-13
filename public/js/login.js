const emailInput = document.getElementById('email-login');
const passwordInput = document.getElementById('password-login');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
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
      console.log(result);
    });
});
