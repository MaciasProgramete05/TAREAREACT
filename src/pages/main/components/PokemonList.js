import React, { useEffect, useState } from 'react';
import { fetchPokemonList } from '../../../services/pokeApi';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const loadPokemonList = async () => {
      try {
        const data = await fetchPokemonList();
        setPokemonList(data);
      } catch (error) {
        console.error('Error loading Pokémon list:', error);
      }
    };

    loadPokemonList();
  }, []);

  return (
    <div>
      <h2>Pokémon List</h2>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
