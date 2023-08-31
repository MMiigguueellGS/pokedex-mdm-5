import React, { useEffect, useState } from "react";
import {
  evolutionsArr,
  getAllPokemons,
  getEvolutionById,
  getEvolutionURLById,
} from "../../services/pokemons";
import EvolutionCard from "./EvolutionCard";
import { bgStylePokemonType } from "../../shared/pokemon";

const EvolutionPokemon = ({ pokemonId,pokemonData }) => {
  const [urlEvolution, setUrlEvolution] = useState(null); //Estado que guarda la URL que nos lleva a las evoluciones
  const [pokeNameEvolution, setPokeNameEvolution] = useState(null);
  //pokemos tiene solo el nombre y un endpoint con toda la informacion del pokemon
  const [pokemons, setPokemons] = useState([]);
  //evolutions tiene los nombres y un endpoint con toda la informacion de las evaoluciones
  const [evolutions, setEvolutions] = useState([]);

  // Aqui se trae la URL que nos lleva a las evoluciones
  useEffect(() => {
    getEvolutionURLById(pokemonId)
      .then(({ urlEvolution }) => setUrlEvolution(urlEvolution))
      .catch((err) => console.log(err));

    getAllPokemons()
      .then((data) => setPokemons(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (urlEvolution) {
      getEvolutionById(urlEvolution)
        .then((data) => setPokeNameEvolution(data))
        .catch((err) => console.log(err));
    }
  }, [urlEvolution]);

  useEffect(() => {
    if (pokeNameEvolution) {
      const pokeNameEvolutionArr=[]
      for(const numEvolution in pokeNameEvolution ){
        pokeNameEvolutionArr.push(pokeNameEvolution[numEvolution])
      }
      
      const nameUrlEvolution = evolutionsArr(pokeNameEvolutionArr,pokemons)
      setEvolutions(nameUrlEvolution)
      
    }
  }, [pokeNameEvolution]);
  return (
    <section className= {`grid sm:flex sm:justify-around justify-center mb-8 text-center gap-4 p-2 rounded-2xl ${
      bgStylePokemonType[pokemonData?.types[0]]
    }`}>
      <h2 className="text-4xl font-bold flex items-center justify-center">Evolution</h2>
      {evolutions?.map((evolution) => (
        <EvolutionCard key={evolution.name} evolution={evolution} />
      ))}
    </section>
  );
};

export default EvolutionPokemon;
