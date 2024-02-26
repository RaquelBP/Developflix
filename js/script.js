import peliculas from './peliculas.js'

const id28= []
const id53= []
const id12= []
const poster28 = []
const poster53 = []
const poster12 = []

for (let i=0; i < peliculas.length; i++) {
    const ids = peliculas[i]["genre_ids"]

    
    const someIDs = ids.some(function (element) {
        let check28 = element===28
        let check53 = element===53
        let check12 = element===12

        if (check28===true){
            id28.push(peliculas[i]["title"])
            poster28.push(peliculas[i]["poster_path"])
        }
        if (check53===true){
            id53.push(peliculas[i]["title"])
            poster53.push(peliculas[i]["poster_path"])

        }
        if (check12===true){
            id12.push(peliculas[i]["title"])
            poster12.push(peliculas[i]["poster_path"])
    
        }


    })
}

const posterAccion = poster28.map((elemento) => "https://image.tmdb.org/t/p/w500" + elemento)
const posterThriller = poster53.map((elemento) => "https://image.tmdb.org/t/p/w500" + elemento)
const posterAventura = poster12.map((elemento) => "https://image.tmdb.org/t/p/w500" + elemento)

function organizaAccion (lista, elementos, poster) {
    for (let i=0; i<id28.length; i++){
        let lItem= document.createElement("li")
        let img= document.createElement("img")
        img.src = poster[i]
        lItem.appendChild(img)
        lItem.appendChild(document.createTextNode(elementos[i]))
        lista.appendChild(lItem)
        
        
    }
}
const peliculasAccion = document.getElementById("lista-accion")
organizaAccion(peliculasAccion, id28, posterAccion)


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
const peliculasThriller = document.getElementById("lista-thriller")
organizaThriller(peliculasThriller, id53, posterThriller)


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
const peliculasAventura = document.getElementById("lista-aventura")
organizaAventura(peliculasAventura, id12, posterAventura)