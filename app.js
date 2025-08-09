let listaAmigos = [];

function agregarAmigo(){
    // Acceder al elemento input a través de su ID
    let elementoHTML = document.getElementById('amigo');

    // Obtener el valor del input eliminando los espacios vacios (por si los hay)
    let nombreAmigo = elementoHTML.value.trim();

    if (nombreAmigo === ''){
        alert('Por favor, escriba un nombre.');
        return; //detiene la función si el input está vacío
    }

    //Almacenando los nombres en la lista
    listaAmigos.push(nombreAmigo);

    //Mostrando los nombres en la lista
    mostrarNombresEnLista();

    //limpiar el input para el siguiente nombre
    elementoHTML.value = "";
    //esto es para que el cursor se quede en el input
    elementoHTML.focus();
}

function mostrarNombresEnLista(){
    //Acceder al elemento en la lista que muestra el nombre de los amigos
    let listaAmigosDOM = document.getElementById("listaAmigos");
    console.log(listaAmigos);

    //limpiar lista antes de mostrar los nuevos elementos, evitando que se dupliquen los nombres cada vez que se llama a la función
    listaAmigosDOM.innerHTML = '';
    
    //recorrer el array de nombres
    listaAmigos.forEach(nombre => {
        let nuevoNombreLista = document.createElement('li');
        nuevoNombreLista.textContent = nombre;
        listaAmigosDOM.appendChild(nuevoNombreLista);
    });
}

function sortearAmigo(){
        //Verifica si hay suficientes amigos para realizar el sorteo
        if(listaAmigos.length < 2){
            alert('Para realizar el sorteo, debes agregar al menos dos amigos.');
            return; //detiene la función si no hay suficientes amigos
        }

        //Obtener el número total de la lista de amigos
        let totalAmigos = listaAmigos.length;

        //Generar un índice aleatorio que esté dentro del rango de la lista
        let indiceAleatorio = Math.floor(Math.random() * totalAmigos);

        //Usar el índice aleatorio para seleccionar un amigo del array
        let amigoSorteado = listaAmigos[indiceAleatorio];

        //Mostrar el nombre del amigo sorteado en la pantalla
        mostrarResultado(amigoSorteado);

        function mostrarResultado(){
            //accede al elemento en el HTML
            let elementoResultado = document.getElementById('resultado');
        
            //actualiza el texto para mostrar el nombre del amigo secreto
            elementoResultado.textContent = `Tu Amigo Secreto es: ${amigoSorteado}`;
        }

}
