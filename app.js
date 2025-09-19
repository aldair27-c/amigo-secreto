// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista donde guardaremos los nombre
let amigos = [];
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    
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

//  Nueva función para recorrer y mostrar la lista completa
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de volver a mostrar
    lista.innerHTML = "";

    // Recorrer el array amigos y crear un <li> por cada elemento
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// sortear un amigo aleatorio
function sortearAmigo(){
    //validar amigos en la lista
    if (amigos.length === 0){
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    //Generar nombre aleatorio
    let nombreAleatorio = Math.floor(Math.random()*amigos.length);
    //Obtener el nombre sorteado
    let amigoSorteado = amigos[nombreAleatorio];

    //Mostrar el resultado en la lista de resultados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML =`<li> Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    
}

     
