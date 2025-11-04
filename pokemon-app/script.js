const { createElement } = require("react")

async function getPokemonInfo() {
    let pokemonName = document.getElementById("pokemon-choice").value

    if (typeof pokemonName !== string) {
        let h1 = createElement("h1")
        h1.innerText = "Please choose the write type"
        document.body.appendChild(h1)
    }
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    let pokemonData = await response.json()

    

    let id = pokemonData['id'] // pokedex number

    let output = document.getElementById('pokemon-number')

    output.innerText = id

}

let button = document.getElementById('submit-pokemon')
button.addEventListener('click', getPokemonInfo)