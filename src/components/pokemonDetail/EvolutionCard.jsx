import React, { useEffect, useState } from "react";
import { getPokemonByUrl } from "../../services/pokemons";

const EvolutionCard = ({ evolution }) => {
  const [evolutionInfo, setEvolutionInfo] = useState(null);

  useEffect(() => {
    getPokemonByUrl(evolution.url)
      .then((data) => setEvolutionInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article   className="  mb-4 text-center">
      
      
     
        <h2 className="text-2xl font-semibold capitalize mb-2">{evolutionInfo?.name}</h2>
        <div className="  h-[200px] aspect-square rounded-full border-solid border-8 border-white flex justify-center items-center ">
          <img
            className="h-[80%] w-full object-contain hover:scale-125 hover:translate-x-2"
            src={evolutionInfo?.image_secundary}
            alt=""
          />
        </div>
     
      
    </article>
  );
};

export default EvolutionCard;
