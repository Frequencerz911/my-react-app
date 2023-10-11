import React from "react";
import PokemonCard from "./components/PokemonCard.jsx"


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
      name : "mew",
     imgSrc: "",
  },
];

function App() {
  const pokemon = {
    name: "bulbasaur",
    imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  };
  
  return (
    <div>
      <PokemonCard pokemon={pokemon}/>
    </div>
  );
}

export default App
