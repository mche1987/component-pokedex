import "./pokemon.css";
import Card from "./pokemon.html";
import Pokedex from "./../Pokedex/pokedex.js"

class PokeCard {
    constructor(pokeId, pokeName, pokeData) {
        this.id = pokeId;
        this.name = pokeName;
        this.data = pokeData;
        this.el = document.createRange().createContextualFragment(Card);
        this.setImageUrl();
        this.setName();
        this.clickEvent();
        return this.el;
    }
    setImageUrl() {
        this.el.getElementById("pokeImage").innerHTML = `<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png'>`;
    }
    setName() {
        this.el.getElementById("pokeName").innerText = this.name;
    }
    clickEvent() {
        this.el.getElementById("mainCard").addEventListener("click", e => {
            document.body.appendChild(Pokedex(this.data))
        })
    }
}

export default function (id, name, data) {
    return new PokeCard(id, name, data);
}