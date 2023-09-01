import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ pokemons }) => {
  return (
    <section className="grid  px-4 gap-2 bg justify-center items-center grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] mb-4">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};
