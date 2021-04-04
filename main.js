document.querySelector("#buscar").addEventListener("click",buscarPokemon);
function buscarPokemon(){
    let nombre = document.querySelector("#nombrepokemon").value
    console.log(nombre)
    fetch(` https://pokeapi.co/api/v2/pokemon/${nombre}`)
    
.then(respuesta => respuesta.json())

.then( respuestaJSON =>{

document.querySelector("#foto").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${respuestaJSON.id}.png`;

}
