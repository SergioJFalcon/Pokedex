import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

export const PokemonList = () => {
    const { pokemons, capture } = useContext(PokemonContext);

    return (
        <div className="pokemon-list">
            <h2>Pokemon List</h2>

            {pokemons.map((pokemon) =>
                <div key={`${pokemon.id}-${pokemon.name}`}>
                    <span>{pokemon.name}</span>
                    <button onClick={capture(pokemon)}>+</button>
                </div>
            )}
        </div>
    )
}

export default PokemonList;