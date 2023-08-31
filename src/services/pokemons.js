import axios from "axios";

export const getAllPokemons = async () => {
  //Por ahora la vamos a dejar así, solo trae 20 pokemons
  // const URL = "https://pokeapi.co/api/v2/pokemon?limit=1281";
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=1281";
  const { data } = await axios.get(URL);
  return data.results;
};

export const getAllTypes = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/type");
  return data.results;
};

export const getPokemonsByType = async (pokemonType) => {
  const url = `https://pokeapi.co/api/v2/type/${pokemonType}/`;

  const { data } = await axios.get(url);
  const formatPokemons = data.pokemon.map(({ pokemon }) => pokemon);
  return formatPokemons;
};

export const getPokemonsById = async (pokemonId) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  const { data } = await axios.get(url);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image: data.sprites.other["official-artwork"].front_default,
    weight: data.weight,
    height: data.height,
    abilities: formatHabilities(data.abilities),
    moves: data.moves,
  };
  return pokemon;
};

//Funcion para traer la URL donde encontramos las evoluciones
export const getEvolutionURLById = async (pokemonId) => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`;
  const { data } = await axios.get(url);
  const pokemonEvoltion = {
    urlEvolution: data.evolution_chain.url,
  };
  return pokemonEvoltion;
};

//Funcion donde se elegira las evoluciones
export const getEvolutionById = async (evolutionURL) => {
  const { data } = await axios.get(evolutionURL);

  const pokemon = valitadionEvolution(data);

  return pokemon;
};

const valitadionEvolution = (data) => {
  if (data.chain.evolves_to[0].evolves_to[0]) {
    const pokemon = {
      firstEvolution: data.chain.species.name,
      secondEvolution: data.chain.evolves_to[0].species.name,
      thirdEvolution: data.chain.evolves_to[0].evolves_to[0].species.name,
    };
    return pokemon;
  }
  if (data.chain.evolves_to[0]) {
    const pokemon = {
      firstEvolution: data.chain.species.name,
      secondEvolution: data.chain.evolves_to[0].species.name,
    };
    return pokemon;
  }
  if (data.chain.species.name) {
    const pokemon = {
      firstEvolution: data.chain.species.name,
    };
    return pokemon;
  }
};
export const evolutionsArr = (pokeNameEvolution = [], pokemons = []) => {
  const evolutions = pokemons.filter((pokemon) =>
    pokeNameEvolution.includes(pokemon.name)
  );
  return evolutions;
};
export const getPokemonByUrl = async (pokemonUrl) => {
  const { data } = await axios.get(pokemonUrl);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    image_secundary: data.sprites.other["official-artwork"].front_default,
  };
  return pokemon;
};

const formatHabilities = (abilities) => {
  return abilities.map((abilitie) => abilitie.ability.name);
};

const formatStats = (stats) => {
  return stats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat }));
};

const formatTypes = (types) => {
  return types.map((type) => type.type.name);
};

export const joinPokemonTypes = (types = []) => {
  return types.slice(0, 2).join(" / ");
};

export const randomIdPokemons = () => {
  return Math.floor(Math.random() * 1280);
};
