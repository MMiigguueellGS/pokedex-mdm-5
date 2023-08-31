import { useState } from "react";
import { PokemonList } from "../components/pokedex/PokemonList";
import { usePokedex } from "../Hooks/usePokedex";
import { paginateData } from "../utils/pagination";
import { Pagination } from "../components/pokedex/Pagination";

export const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    handleChange,
    name,
    pokemonByName,
    pokemonName,
    pokemonType,
    setPokemonName,
    setPokemonType,
    types,
  } = usePokedex();

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonByName,
    currentPage
  );

  return (
    <main>
      <section>
        <p>
          <span>Welcome {name}</span>
        </p>
        <form>
          <input
            value={pokemonName}
            onChange={handleChange(setPokemonName)}
            placeholder="Search pokemon..."
            type="text"
          />

          <select value={pokemonType} onChange={handleChange(setPokemonType)}>
            <option value="">All pokemons</option>
            {types.map((type) => (
              <option key={type.name} value={type.name} className="capitalize">
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>
      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage ={currentPage}
      />
      <PokemonList pokemons={itemsInCurrentPage} />
    </main>
  );
};
