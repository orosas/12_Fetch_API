document.getElementById('getText').addEventListener('click', getText);

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
        .then((data) => console.log(data));


}