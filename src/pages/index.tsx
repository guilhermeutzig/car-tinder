import { getOptionsForVote } from "@/utils/getRandomCar";
import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import Image from "next/image";
import { useMemo, useState } from "react";

const btnClasses =
  "block items-center w-fit mt-4 text-center px-3 py-1.5 border border-gray-300 shadow-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

const Home: NextPage = () => {
  const [ids, setIds] = useState(getOptionsForVote());
  const [first, second] = ids;

  const firstPokemon = trpc.useQuery(["get-pokemon-by-id", { id: first }]);
  const secondPokemon = trpc.useQuery(["get-pokemon-by-id", { id: second }]);

  if (firstPokemon.isLoading || secondPokemon.isLoading)
    return <div>Loading...</div>;

  const voteForRoundest = (selected: number) => {
    // todo: fire mutation to persist changes

    setIds(getOptionsForVote());
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which pokemon is the roundest?</div>
      <div className="p-4"></div>
      <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
        <div className="w-64 flex flex-col items-center">
          <img
            className="w-full"
            src={firstPokemon.data?.sprites.front_default || ""}
            alt={firstPokemon.data?.name}
          />
          <div className="text-xl capitalize text-center">
            {firstPokemon.data?.name}
          </div>
          <button className={btnClasses} onClick={() => voteForRoundest(first)}>
            Rounder
          </button>
        </div>
        <div className="p-8">Vs.</div>
        <div className="w-64 flex flex-col items-center">
          <img
            className="w-full"
            src={secondPokemon.data?.sprites.front_default || ""}
            alt={secondPokemon.data?.name}
          />
          <div className="text-xl capitalize text-center">
            {secondPokemon.data?.name}
          </div>
          <button
            className={btnClasses}
            onClick={() => voteForRoundest(second)}
          >
            Rounder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
