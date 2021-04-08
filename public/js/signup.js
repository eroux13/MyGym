async function signupFormHandler(event) {
  event.preventDefault();
  const firstname = document.querySelector('first-name').value.trim();
  const lastname = document.querySelector('#last-name').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const tiersignup = document.querySelector('#tier-signup').value.trim();
  const classsignup = document.querySelector('#class-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (firstname && lastname && email && tiersignup && classsignup && password) {
    //Need member signup route 
    const response = await fetch('/member/signup', {
      method: 'post',
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        tiersignup,
        classsignup,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      console.log('success');
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

// document.querySelector('.signup-area').addEventListener('submit', signupFormHandler);