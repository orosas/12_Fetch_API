document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);


function getText() {
    // ************** Versión 1
    // fetch('sample.txt')
        // .then(function(res) {
            
            // Nota: res.text() regresa una promesa
            //     Para accesar al texto se requiere hacer un return
            //      console.log(res.text()) mostrará la Promesa
            // return res.text();
        // })
        // .then(function (data) {
            // Nota: Al hacer console.log(data) se muestra el contenido
            //     del archivo  de texto
            // console.log(data);
        // })
    // ************* termina Versión 1

    // Versión 2
    fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));
}

// Nota: Función para leer archivo json
function getUsers() {
    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Users</h2>';
            data.forEach(function (user) {
                output += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                </ul>
                `;
            });
            document.getElementById('output').innerHTML = output;
            console.log(data);
        });
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="mb-4">Posts</h2>';
            data.forEach(function (post) {
                output += `
                <div class="card card-body mb-3">
                    <h3>${post.id} ${post.title}</h3>
                    <p>${post.body}</p>
                </div>
                `;
            });
            document.getElementById('output').innerHTML = output;
        });
}

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

