import React, {createContext, useReducer} from 'react';
import { pokemonReducer, CAPTURE, RELEASE } from './usePokemonReducer';

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {

    const defaultState = {
        pokemons: [
            {id: 1, name: 'Bulbasaur'},
            {id: 2, name: 'Charmander'},
            {id: 3, name: 'Squirtle'}
        ],
        capturedPokemons: []
    };

    const [state, dispatch] = useReducer(pokemonReducer, defaultState);

    const capture = (pokemon) => () => {
        dispatch({ type: CAPTURE, pokemon });
    };

    const release = (pokemon) => () => {
        dispatch({ type: RELEASE, pokemon });
    };

    const { pokemons, capturedPokemons } = state;
    
    const providerValue = {
        pokemons,
        capturedPokemons,
        release, 
        capture
    };

    return (
        <PokemonContext.Provider value={providerValue}>
            {props.children}
        </PokemonContext.Provider>
    )
};