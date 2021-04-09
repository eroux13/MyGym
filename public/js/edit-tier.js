async function editFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];


    const id = document.querySelector('input[name="tier-id"]').value;

    const response = await fetch(`/api/member/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            tier: id
          }),
          headers: { 
              'Content-Type': 'application/json'
             }
      });

    if (response.ok) {
        document.location.replace('/edit-tier');
        } else {
        alert(response.statusText);
        }
  }
  

  
  document.querySelector('.edit-tier-form').addEventListener('submit', editFormHandler);