import { useEffect, useState } from "react";
import { getPokemonByUrl, joinPokemonTypes } from "../../services/pokemons";
import { StatList } from "./StatList";
import {
  bgStylePokemonType,
  borderStylePokemonType,
  nameStylePokemon,
} from "../../shared/pokemon";
import { Link } from "react-router-dom";

export const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [pokeballTransition, setPokeballTransition] = useState(true);
  const [squareTransition, setSquareTransition] = useState(false);
  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => {
        setPokemonInfo(data);
        setPokeballTransition(false);
        setSquareTransition(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className={`hover:-translate-y-2 h-[260px] w-[230px] relative border-[4px] top-0 right-0 z-10 overflow-hidden ${
        squareTransition
          ? borderStylePokemonType[pokemonInfo?.types[0]] + " rounded-3xl"
          : "border-black rounded-full"
      } transition-all duration-500 bg-white mx-auto `}
    >
      <div
        className={`w-full h-1/2 relative ${
          pokeballTransition ? "top-[140px] bg-green-700" : "-top-10"
        } transition-all duration-700`}
      >
        <div className="bg-red-500 z-20 h-full w-full border-b-4 absolute bottom-[140px]"></div>
        <div className="absolute h-[80px] aspect-square rounded-full bg-white z-20 left-[100px] bottom-[100px] border-8 after:block after:content-[''] after:h-8 after:aspect-square after:bg-white after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black"></div>
      </div>
      <div
        className={`bg-white h-1/2 w-full absolute z-10 border-t-4 ${
          pokeballTransition ? "bottom-0 " : "-bottom-[140px]"
        } transition-all duration-700`}
      ></div>

      <Link
        to={"/pokedex/" + pokemonInfo?.id}
        className={`h-[260px] w-[230px] absolute text-center capitalize font-Montse -mt-[140px] rounded-3xl mx-auto
        `}
      >
        <header
          className={`h-[100px] relative ${
            bgStylePokemonType[pokemonInfo?.types[0]]
          }`}
        >
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[90px] aspect-square">
            <img
              className="h-full w-full object-contain"
              src={pokemonInfo?.image}
              alt=""
            />
          </div>
        </header>
        <section className="font-Inter">
          <h3
            className={`text-lg font-bold ${
              nameStylePokemon[pokemonInfo?.types[0]]
            }`}
          >
            {pokemonInfo?.name}
          </h3>
          <h4>{joinPokemonTypes(pokemonInfo?.types)}</h4>
          <h5 className="text-sm mb-2">Types</h5>
          <hr />
          <StatList stats={pokemonInfo?.stats} type={pokemonInfo?.types[0]} />
        </section>
      </Link>
    </div>
  );
};
