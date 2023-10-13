import React from "react";

function NavBar(props) {
    return (
    <div>  
    {props.pokemonIndex > 0 &&
    <button onClick={props.previous}>previous</button>
    }

    {props.pokemonIndex < props.pokemonList.length -1 &&
    <button onClick= {props.next}>next</button>
    }
    </div>
    );  
}

export default NavBar;