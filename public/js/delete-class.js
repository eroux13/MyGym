async function deleteFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
        ];

    const id = document.querySelector('input[name="class-id"]').value;

    const response = await fetch(`/api/member/${id}`, {
        method: 'DELETE'
      });
    if (response.ok) {
        document.location.replace('/partials/class-info');
      } else {
        alert(response.statusText);
      }
  }