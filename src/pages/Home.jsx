import { useDispatch, useSelector } from "react-redux";
import { FooterPokeball } from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";
import {
  getPokemonsById,
  joinPokemonTypes,
  randomIdPokemons,
} from "../services/pokemons";
import { useEffect, useState } from "react";
import { StatList } from "../components/pokedex/StatList";
import {
  bgStylePokemonType,
  borderStylePokemonType,
  nameStylePokemon,
} from "../shared/pokemon";

export const Home = () => {
  const [homeIdPokemons, setHomeIdPokemons] = useState(null);
  const dispach = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispach(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  useEffect(() => {
    getPokemonsById(randomIdPokemons())
      .then((data) => setHomeIdPokemons(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="min-h-screen grid grid-rows-[1fr_1fr_auto] ">
      {/* Card home */}
      <article
        className={`m-auto  w-[220px]  text-center capitalize border-[5px] rounded-[1.1rem] ${
          borderStylePokemonType[homeIdPokemons?.types[0]]
        }`}
      >
        <header
          className={`h-[80px] relative mb-8 ${
            bgStylePokemonType[homeIdPokemons?.types[0]]
          }`}
        >
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[65px] aspect-square">
            <img
              className="h-full w-full object-contain"
              src={homeIdPokemons?.image}
              alt=""
            />
          </div>
        </header>
        <section>
          <h3
            className={`text-lg font-bold ${
              nameStylePokemon[homeIdPokemons?.types[0]]
            }`}
          >
            {homeIdPokemons?.name}
          </h3>
          <h4>{joinPokemonTypes(homeIdPokemons?.types)}</h4>
          <h5 className="text-sm mb-2">Types</h5>
          <hr />
          <StatList stats={homeIdPokemons?.stats} />
        </section>
      </article>

      <section className="flex flex-col  items-center mx-2">
        <article className="grid gap-3">
          {/* seccion superior */}
          <div className="text-center">
            <img src="/images/banner.png" alt="" />
          </div>
          <h2 className="text-red-500 text-center text-2xl">!Hello trainer!</h2>
          <p className="text-center text-lg font-semibold">
            To start give your name
          </p>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              className=" shadow-xl sha text-center  outline-none py-2"
              placeholder="your name..."
              id="nameTrainer"
              type="text"
              required
            />
            <button className="px-3 rounded bg-red-500 hover:bg-red-600 text-white border-black">
              Start!
            </button>
          </form>
        </article>
      </section>

      {/* parte principal inferior*/}
      <FooterPokeball />
    </main>
  );
};
