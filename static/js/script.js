function populateTable(articles) {
    const tableBody = document.querySelector("#recordTable tbody");
    tableBody.innerHTML = ""; // Очищаем содержимое таблицы

    articles.forEach((article) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${article.id}</td>
            <td>${article.title_ru}</td>
            <td>${article.content_ru.substring(0, 50) + "..."}</td>
            <td>${article.title_en}</td>
            <td>${article.content_en}</td>
            <td>${article.img}</td>
            <td>${article.source}</td>
            <td>${article.date}</td>
            <td>
                <button onclick="editRecord(${article.id})">Редактировать</button>
                <button onclick="deleteRecord(${article.id})">Удалить</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Запрос к серверу для получения списка записей
 function fetchRecords() {
    fetch("/api/article") // Замените URL на свой реальный адрес API
    .then((response) => response.json())
    .then((data) => populateTable(data))
    .catch((error) => console.error("Ошибка при запросе:", error));
}

fetchRecords()

// Функции для редактирования и удаления записей аналогично предыдущему примеру
// ...


function editRecord(id) {
    // Получаем данные записи по ее ID с сервера
    fetch(`/api/article/${id}`)
        .then((response) => response.json())
        .then((record) => {
            document.getElementById('id').value = id;
            document.getElementById('title_ru_edit').value = record.title_ru;
            document.getElementById('content_ru_edit').value = record.content_ru;
            document.getElementById('title_en_edit').value = record.title_en;
            document.getElementById('content_en_edit').value = record.content_en;
            document.getElementById('source_edit').value = record.source;
            document.getElementById('date_edit').value = record.date;
            document.getElementById('editForm').style.display = 'block'; // Показываем форму редактирования
        })
        .catch((error) => console.error("Ошибка при запросе:", error));
}

document.getElementById('editForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    let formData = new FormData(event.target);

    await fetch(`/api/article/update`, {
        method: 'POST',
        body: formData
        
    })
    .then((response) => {
        if (response.ok) {
            setTimeout(fetchRecords, 1000); // Обновляем список записей после успешного редактирования
            cancelEdit(); // Отменяем редактирование
        } else {
            window.location.href = '/api/auth/login-page'
        }
    })
    .catch((error) => console.error("Ошибка при отправке данных:", error));
});

document.getElementById('createForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    let formData = new FormData(event.target);

    await fetch(`/api/article/post`, {
        method: 'POST',
        body: formData
        
    })
    .then((response) => {
        if (response.ok) {
            setTimeout(fetchRecords, 1000);; // Обновляем список записей после успешного редактирования
            cancelCreate(); // Отменяем редактирование
        } else {
            window.location.href = '/api/auth/login-page'
        }
    })
    .catch((error) => console.error("Ошибка при отправке данных:", error));
});


// Функция для отмены редактирования
function cancelEdit() {
    // Очистить поля формы редактирования
    document.getElementById('title_ru_edit').value = "";
    document.getElementById('content_ru_edit').value = "";
    document.getElementById('title_en_edit').value = "";
    document.getElementById('content_en_edit').value = "";
    document.getElementById('source_edit').value = "";
    document.getElementById('date_edit').value = "";
    

    // Скрыть форму редактирования
    document.getElementById('editForm').style.display = 'none';
}

function cancelCreate() {
    // Очистить поля формы редактирования
    document.getElementById('title_ru').value = "";
    document.getElementById('content_ru').value = "";
    document.getElementById('title_en').value = "";
    document.getElementById('content_en').value = "";
    document.getElementById('source').value = "";
    document.getElementById('date').value = "";
    
}

// Функция для удаления записи
function deleteRecord(id) {
    let formData = new FormData()
    formData.append("id", id)
    fetch(`/api/article/delete`, {
        method: 'POST',
        body: formData
        
    })
    .then((response) => {
        if (response.ok) {
            setTimeout(fetchRecords, 1000); // Обновляем список записей после успешного редактирования
        } else {
            window.location.href = '/api/auth/login-page'
        }
    })
    .catch((error) => console.error("Ошибка при отправке данных:", error));

    // Здесь можно отправить запрос на сервер для удаления записи по ее ID
    // Например, можно использовать fetch или jQuery для AJAX-запроса
    // После успешного удаления, обновить список записей на странице
    // чтобы отразить изменения
    
}

