import React from 'react';
import './App.css';

import PokemonList from './pokemon/PokemonList';
import Pokedex from './pokemon/Pokedex';
import { PokemonProvider } from './pokemon/PokemonContext';

const App = () => (
  <PokemonProvider>
    <div className="App">
      <PokemonList />
      <Pokedex />
    </div>
  </PokemonProvider>
);

export default App;
