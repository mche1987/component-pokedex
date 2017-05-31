import "./index.css";
import PokeCards from "./Components/PokemonList/pokemon.js";

let cardContainer = document.getElementById("cards");
for (var i = 1; i <= 151; i++){
    fetch(`http://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(res => res.json())    
        .then(data => {
            // console.log(data);
            var relevantContent = {
                name: data.name,
                height: data.height,
                weight: data.weight,
                types: data.types
            }
            cardContainer.appendChild(PokeCards(data.id, data.name, relevantContent));
        })
        .catch(e => {
            console.log("error'd", e)
        })
}