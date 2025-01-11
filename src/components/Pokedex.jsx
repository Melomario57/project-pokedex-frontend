import React from "react";
import fondoPokedex from "../images/pokeList.jpg";
import Pokemon from "./Pokemon";

function Pokedex({ pokemons, onPokemonClick }) {
  return (
    <>
      <div className="welcome">
        <img
          src={fondoPokedex}
          alt="fondo de bievenida"
          className="welcome_img"
        />
        <div className="pokedex">
          {pokemons.map((pokemon, index) => (
            <Pokemon
              key={index}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              sound={pokemon.sound}
              stats={pokemon.stats}
              onClick={() => onPokemonClick(pokemon)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Pokedex;
