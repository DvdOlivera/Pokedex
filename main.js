document.querySelector("#search").addEventListener("click",tomarinputpokemon);
document.querySelector("#botoncerrar").addEventListener("click",cerrarfilminaPokemon);

function tomarinputpokemon(){
    let nombre = document.querySelector("#nombrepokemon").value
    nombre= nombre.toLowerCase()
    buscarPokemon(nombre);
}
function buscarPokemon(nombre){
    
    console.log(nombre)
    fetch(` https://pokeapi.co/api/v2/pokemon/${nombre}`)
    
.then(respuesta => respuesta.json())

.then( respuestaJSON => {
    console.log(respuestaJSON)
    const img = respuestaJSON.sprites.other["official-artwork"].front_default;

    const habilidades = respuestaJSON.abilities

    const nombre= respuestaJSON.species.name

    const tipo= respuestaJSON.types[0].type.name

    const stats= respuestaJSON.stats

    



    document.querySelector("#foto").src = img;

    habilidadesdelpokemon(habilidades);

    nombredelpokemon(nombre);

    tipodelpokemon(tipo);

    statsdelpokemon(stats);

    aparecerfilmina();

 



})}

function aparecerfilmina(){
    
    document.querySelector("#filmina").classList.remove("invisible");
    document.querySelector("#filmina").classList.add("visible")
}

function statsdelpokemon(stats){
    document.querySelector("#stats").innerHTML=""

    console.log(stats)
    stats.forEach( function (parametro){

    const valor = parametro.base_stat


  

    let p= document.createElement("p")

    document.querySelector("#stats").appendChild(p)
    p.id=`${parametro.stat.name}`
    p.className= "datospokemon"

    document.querySelector(`#${p.id}`).innerHTML= `${p.id} : <span>${valor}</span> `;

}
    )
  }
function nombredelpokemon(nombre){
    document.querySelector("#nombredelpokemon").innerHTML=nombre;

}
function tipodelpokemon(tipo){
    document.querySelector("#tipodelpokemon").innerHTML=`${tipo} type`;

}

function cerrarfilminaPokemon(){
    document.querySelector("#nombrepokemon").value=""
    document.querySelector("#filmina").classList.remove("visible");
    document.querySelector("#filmina").classList.add("invisible")
}

function habilidadesdelpokemon(habilidades){

    document.querySelector("#habilidades").innerHTML=""
    habilidades.forEach( function (parametro){


    console.log(parametro.ability.name)

    let p= document.createElement("p")

    document.querySelector("#habilidades").appendChild(p)
    p.id=`${parametro.ability.name}`
    p.className= "datospokemon"

    document.querySelector(`#${p.id}`).innerHTML= p.id

}
    )}

/*
- modulo de inicializacion: un modulo que unicamente ejecuta la primera funcion del sitio,
esta primera funcion no esta en ESTE modulo, sino que esta en el modulo de enlace.Este modulo seria
unicamente la importacion de esa funcion de inicializacion y su ejecucion. No se declara funcion alguna.
- modulo de enlace: modulo donde se encuentra la funcion INICIALIZAR. Dentro de ella, se ejecuta cualquier funcion que sea necesario
ejecutar al iniciar la pagina. Dichas funciones estan importadas de otros modulos
- modulos especificos de cada sitio (segun las funciones del sitio) - pokedex en este caso
            a) modulo con las acciones que deben realizarse cuando se carga la pagina. Incluye todo event listener anudado a cualquier elemento que sea visible
en la pagina al entrar            
            b) modulo de recibimiento de input / busqueda: toma el nombre del pokemon desde el buscador
            c) modulo de servicio: controla la informacion que entra a la api, y la que sale de la api,
            dandole un determinado formato si fuera necesario
            c) modulo de conexion con api: simplemente la conexion con la api
            d) modulo de visualizacion de datos: toma los datos del json y los muestra en el sitio

*/







