const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        //Need member login route 
        const response = await fetch('/member/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/member');
        } else {
            alert('Cannot log in');
        }
    }
};

// document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);