import React from "react";
import PokemonCard from "./components/PokemonCard.jsx"
import NavBar from "./components/NavBar.jsx";
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
      name : "mew",
     imgSrc: "",
  },
];

function App() {
const [pokemonIndex, setPokemonIndex] = useState(0);

const previous = () => {
setPokemonIndex (pokemonIndex - 1);
}

const next = () => {
setPokemonIndex (pokemonIndex + 1)
}
  const pokemon = pokemonList[pokemonIndex];

  return (
    <div>
      <PokemonCard 
      pokemon={pokemon}/>

      <NavBar
      pokemonIndex={pokemonIndex}
      previous={previous}
      next={next}
      pokemonList={pokemonList}/>
    </div>
  );
}

export default App
