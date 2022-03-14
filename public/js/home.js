const userProfile = document.getElementById('profile');
window.addEventListener('load', (e) => {
  e.preventDefault();

  fetch('/home', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then((response) => response.json())
    .then((result) => {
      userProfile.textContent = result.user_data.username;
      userProfile.href = `profile?id=${result.user_data.id}`
    })
    .catch((err) => {
      window.location.href = '/home';
    });
});
