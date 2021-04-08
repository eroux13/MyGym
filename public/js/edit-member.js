async function editFormHandler(event) {
    event.preventDefault();
    let firstname = document.querySelector('input[name="first-name"]').value.trim();
    if(firstname.length) firstname = '"first name": "' + firstname + '"';
    let lastname = document.querySelector('input[name="last-name"]').value.trim();
    if(lastname.length) lastname = '"last name": "' + lastname + '"';
    let email = document.querySelector('input[name="email"]').value.trim();
    if(email.length) email = '"email": "' + email + '"';
    let password = document.querySelector('input[name="password"]').value.trim();
    if (!password.length) {
        alert('You must enter your current password to confirm changes or enter a new password.');
        return
    } else {
        password = '"password": "' + password + '"';
    }
    const id = document.querySelector('input[name="user-id"]').value;

    let memberUpdate = '{' + [firstname, lastname, email, password].filter(value => value).join(',') + '}';
    memberUpdate = JSON.parse(memberUpdate)

    const response = await fetch(`/api/member/${id}`, {
        method: 'PUT',
        body: JSON.stringify(memberUpdate),
        headers: {
          'Content-Type': 'application/json'
        }
      });

    if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert(response.statusText);
        }
  }
  

  
  document.querySelector('.edit-member-form').addEventListener('submit', editFormHandler);
