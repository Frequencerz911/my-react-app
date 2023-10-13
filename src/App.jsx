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
const [pokemonIndex, setPokemon] = useState(0);

  return (
    <div>
      <PokemonCard 
      pokemon={pokemonList[pokemonIndex]}/>

      <NavBar
      pokemonList={pokemonList}
      setPokemon={setPokemon}/>
      
    </div>
  );
}

export default App
