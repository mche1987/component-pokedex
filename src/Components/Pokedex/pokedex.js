import "./pokedex.css";
import modal from "./pokedex.html";

class Pokedex{
    constructor(object) {
        this.el = document.createRange().createContextualFragment(modal);
        this.setData(object)
        this.closeButton();
        return this.el;
    }
    setData(content) {
        var first = content.types[0].type.name;
        this.el.getElementById("pokeContent").innerHTML = `${content.name}
                                                            Height: ${content.height}
                                                            Weight: ${content.weight}
                                                            Types: ${first}`;
    }
    closeButton() {
        this.el.getElementById("closesModal").addEventListener("click", e => {
            let modal = document.getElementById("myModal");
            document.body.removeChild(modal);
        })
    }
}

export default function (data) {
    return new Pokedex(data);
}