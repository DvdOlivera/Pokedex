document.querySelector("#buscar").addEventListener("click",buscarPokemon);
function buscarPokemon(){
    const nombre = document.querySelector("#nombrepokemon").value
    console.log(nombre)
    fetch(` https://pokeapi.co/api/v2/pokemon/${nombre}`)
    
.then(respuesta => respuesta.json())

.then( respuestaJSON => {

    console.log(respuestaJSON);
    console.log()
const img = respuestaJSON.sprites.other["official-artwork"].front_default;


document.querySelector("#foto").src = img;

})}

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
