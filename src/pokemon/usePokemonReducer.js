export const CAPTURE = 'CAPTURE';
export const RELEASE = 'RELEASE';

const getCapturedPokemons = (capturedPokemons, releasedPokemon) =>
  capturedPokemons.filter(pokemon => pokemon !== releasedPokemon)

const releasePokemon = (releasedPokemon, state) => ({
  pokemons: [...state.pokemons, releasedPokemon],
  capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasedPokemon)
});

const getPokemonsList = (pokemons, capturedPokemon) =>
  pokemons.filter(pokemon => pokemon !== capturedPokemon)

const capturePokemon = (pokemon, state) => ({
  pokemons: getPokemonsList(state.pokemons, pokemon),
  capturedPokemons: [...state.capturedPokemons, pokemon]
});

export const pokemonReducer = (state, action) => {
    switch (action.type) {
        case 'CAPTURE':
          // handle capture and return new state
          return capturePokemon(action.pokemon, state);
        case 'RELEASE':
          // handles release and return new state
          return releasePokemon(action.pokemon, state);
        default: 
          return state;
    }
};