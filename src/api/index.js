import axios from "axios"

export const getPokemons = async () => {

    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        return data.results;
    } catch (e) {
        console.error(e);
    }
}

export const getPokemonDetails = async (pokemon) => {
    try {
        const { data } = await axios.get(pokemon.url);
        return data
    } catch(e) {
        console.error(e);
    }
}