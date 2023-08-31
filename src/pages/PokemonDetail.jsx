import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EvolutionPokemon from "../components/pokemonDetail/EvolutionPokemon";
import { StatBarList } from "../components/pokemonDetail/StatBarList";
import { getPokemonsById } from "../services/pokemons";
import { bgStylePokemonType, nameStylePokemon } from "../shared/pokemon";

export const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);
  
  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonsById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className=" grid gap-8   max-w-[1190px] mx-auto p-2 py-28 dark:text-white px-10">
      <article className="">
        
        <header
          className={` relative h-[105px] rounded-2xl ${
            bgStylePokemonType[pokemonData?.types[0]]
          }`}
        >
          <Link to='/pokedex/' className="absolute -top-[100%] z-10 text-white bg-zinc-700 font-bold text-sm rounded-full  inline-block py-1 px-5 shadow-lg shadow-slate-800/60 dark:bg-white dark:text-black transition-all ease-in-out " >Go Back</Link>
          <img
            className="h-[200%] absolute left-1/2 -translate-x-1/2 bottom-0 hover:scale-110"
            src={pokemonData?.image}
            alt=""
          />
        </header>

        <section className="sm:px-24">
          <section className="text-center mb-16 ">
            {/*  seccion del Id y el nombre */}
            <div className=" grid gap-4 mt-4">
              <span className={`text-3xl font-bold ${nameStylePokemon[pokemonData?.types[0]]} `}>#{pokemonData?.id}</span>
              <h2 className={`capitalize text-5xl font-bold  ${nameStylePokemon[pokemonData?.types[0]]}`}>{pokemonData?.name}</h2>
            </div>

            {/*  seccion del peso y la altura*/}
            <div className="flex justify-center gap-8 my-5">
              <div>
                <h4 className="text-xl font-semibold">Weight</h4>
                <span className="text-xl font-bold">{pokemonData?.weight}</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Height</h4>
                <span className="text-xl font-bold">{pokemonData?.height}</span>
              </div>
            </div>

            {/*  seccion de los tipos y habilidades*/}
            <div className="grid sm:grid-cols-2 gap-4 justify-center">
              {/*  seccion de los tipos*/}
              <div className="grid grid-cols-2 gap-3 ">
                <h2 className="text-3xl font-bold col-span-2 p-5 py-3">Type</h2>
                {
                  
                pokemonData?.types.map((type) => (
                  <span key={type} className={` flex items-center justify-center px-5 py-1 text-white text-md font-semibold border-solid border-2 border-gray-200 rounded ${bgStylePokemonType[type]} shadow-lg shadow-slate-700/20 `}>
                    {type}
                  </span>
                ))}
              </div>

              {/*  seccion de las habilidades*/}
              <div>
                <div className="grid grid-cols-2 gap-3">
                  <h2 className=" text-3xl font-bold te col-span-2  p-5 py-3">
                  Abilities
                  </h2>
                  {pokemonData?.abilities.map((abilitie) => (
                    <span key={abilitie} className="px-5 py-1 text-md font-semibold border-solid border-2 border-gray-200 rounded shadow-lg shadow-slate-700/20" >
                      {abilitie}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <StatBarList stats={pokemonData?.stats} type={pokemonData?.types[0]} />
          {/* seccion donde agregare las evoluciones */}
        </section>
      </article>
      <EvolutionPokemon pokemonId={pokemonId} pokemonData={pokemonData}/>
    </main>
  );
};
