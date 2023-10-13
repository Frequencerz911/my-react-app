import React from "react";

function NavBar({pokemonList, setPokemon}) {
    return(
    <div>  
        {pokemonList.map((pokemon, i) => (
            <button key = {i} onClick={() => setPokemon(i)}>{pokemon.name}
            </button>
        ))}
    </div>
    )
}

export default NavBar;