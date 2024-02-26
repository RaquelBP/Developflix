import peliculas from './peliculas.js'

//Declara los arrays que contendrán las películas que tengan ese id
const id28= []
const id53= []
const id12= []
const poster28 = []
const poster53 = []
const poster12 = []

//Separa las películas por ID
for (let i=0; i < peliculas.length; i++) {
    console.log("Esta es la película " + i)
    //Accede a todos los genre_ids de cada peli
    const ids = peliculas[i]["genre_ids"]

    //Haz el "filtro" de ids, si una película tiene ese id devuelve true y añade la película al array que le corresponda. Añade también la ruta a otro array
    const someIDs = ids.some(function (element) {
        let check28 = element===28
        let check53 = element===53
        let check12 = element===12

        if (check28===true){
            id28.push(peliculas[i]["title"])
            poster28.push(peliculas[i]["poster_path"])
            console.log(id28)
        }
        if (check53===true){
            id53.push(peliculas[i]["title"])
            poster53.push(peliculas[i]["poster_path"])
            console.log(id53)
        }
        if (check12===true){
            id12.push(peliculas[i]["title"])
            poster12.push(peliculas[i]["poster_path"])
            console.log(id12)
        }

        console.log("Película " + i)
    })
}

//Corrige las rutas de los poster en un array
const posterAccion = poster28.map((elemento) => "https://image.tmdb.org/t/p/w500" + elemento)
const posterThriller = poster53.map((elemento) => "https://image.tmdb.org/t/p/w500" + elemento)
const posterAventura = poster12.map((elemento) => "https://image.tmdb.org/t/p/w500" + elemento)




//Organiza cada título y poster de película separada por género en un li para género de acción
function organizaAccion (lista, elementos, poster) {
    for (let i=0; i<id28.length; i++){
        let lItem= document.createElement("li")
        let img= document.createElement("img")
        //Pon la ruta del poster en el scr de la imagen
        img.src = poster[i]
        lItem.appendChild(img)
        lItem.appendChild(document.createTextNode(elementos[i]))
        lista.appendChild(lItem)
        
        
    }
}
//Define la posición del elemento que tendrán los li como padre
const peliculasAccion = document.getElementById("lista-accion")
//Llama a la función para integrar todos los elementos
organizaAccion(peliculasAccion, id28, posterAccion)





//Organiza cada título y poster de película separada por género en un li para género de thriller
function organizaThriller (lista, elementos, poster) {
    for (let i=0; i<id53.length; i++){
        let lItem= document.createElement("li")
        let img= document.createElement("img")
        img.src = poster[i]
        lItem.appendChild(img)
        lItem.appendChild(document.createTextNode(elementos[i]))
        lista.appendChild(lItem)
        
    }
}
//Define la posición del elemento que tendrán los li como padre
const peliculasThriller = document.getElementById("lista-thriller")
//Llama a la función para integrar todos los elementos
organizaThriller(peliculasThriller, id53, posterThriller)





//Organiza cada título y poster de película separada por género en un li para género de aventura
function organizaAventura (lista, elementos, poster) {
    for (let i=0; i<id12.length; i++){
        let lItem= document.createElement("li")
        let img= document.createElement("img")
        img.src = poster[i]
        lItem.appendChild(img)
        lItem.appendChild(document.createTextNode(elementos[i]))
        lista.appendChild(lItem)
        
    }
}
//Define la posición del elemento que tendrán los li como padre
const peliculasAventura = document.getElementById("lista-aventura")
//Llama a la función para integrar todos los elementos
organizaAventura(peliculasAventura, id12, posterAventura)