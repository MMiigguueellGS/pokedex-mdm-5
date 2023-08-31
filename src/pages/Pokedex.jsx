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
    <main className="dark:bg-neutral-700 ">
      <section >
        <p className="text-center text-2xl font-bold pt-4">
          <span className="dark:text-white">Welcome <span className="text-red-500">{name}</span></span>
        </p>
        <form className="text-center mt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            className="border-4 border-red-200 border-b-red-400  text-center outline-none py-1"
            value={pokemonName}
            onChange={handleChange(setPokemonName)}
            placeholder="Search pokemon..."
            type="text"
          />

          <select className="border-4 border-red-200 border-b-red-400 px-9 outline-none py-1" value={pokemonType} onChange={handleChange(setPokemonType)}>
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
