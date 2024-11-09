import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemonList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?limit=20`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    throw error;
  }
};
