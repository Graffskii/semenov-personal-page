document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    console.log(event.target.value)

    let formData = new FormData(event.target);

     await fetch('/api/auth', {
         method: 'POST',
         body: formData
        
     })
    .then((response) => {
        if (response.ok){
            window.location.href = '/api/admin'
        }
        console.log(response.body)
    })
     .catch((error) => console.error("Ошибка при отправке данных:", error)); 
});

document.getElementById('username').value = 'admintek'
document.getElementById('password').value = 'root'