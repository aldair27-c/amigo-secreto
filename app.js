// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista donde guardaremos los nombre
let amigos = [];
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    console.log(nombre);
    if (nombre === ""){
        alert("Por favor, inserte un nombre");
        return;
    }
     //Actualizar la lista de amigos
    amigos.push(nombre);

    //Mostrar en la lista
    let lista = document.getElementById("listaAmigos");
    let item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);

    //Limpiar el input
    document.getElementById("amigo").value = "";
    
}  
