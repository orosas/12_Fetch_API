document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);


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
            let output = '<h2>Users</h2>';
            data.forEach(function (user) {
                output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>
                `;
            });
            document.getElementById('output').innerHTML = output;
            console.log(data);
        });
}

