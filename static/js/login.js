document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    console.log(event.target.value)

    let formData = new FormData(event.target);

     await fetch(`http://localhost:5000/api/auth`, {
         method: 'POST',
         body: formData
        
     })
    .then((response) => {
        if (response.ok){
            window.location.href = 'http://localhost:5000/api/admin'
        }
        console.log(response.body)
    })
     .catch((error) => console.error("Ошибка при отправке данных:", error)); 
});

document.getElementById('username').value = 'admintek'
document.getElementById('password').value = 'root'