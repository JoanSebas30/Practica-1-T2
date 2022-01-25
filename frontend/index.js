window.onload = function(){

    var id = document.querySelector("#user");
    id.setAttribute("onclick","VerUsu()");

}

function ListaUsu(){

    var verUsuario = document.getElementById("idusuario");
    var valor = verUsuario.value;
    var url = "http://localhost:4000/usuario";

    fetch(url, {

        method: 'GET',
        mode: 'cors',
        headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
        }
    })

    .then(response => response.json())
    .then(data => console.log(data));

}

function VerUsu(){

    var verUsuario = document.getElementById("idusuario");
    var valor = verUsuario.value;
    var url = "http://localhost:4000/usuarioInfo?id_user="+"'"+valor+"'";

    fetch(url, {

        method: 'GET',
        mode: 'cors',
        headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
        }
    })

    .then(response => response.json())
    .then(data => console.log(data));

}