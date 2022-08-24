import { FC } from "react";

import { inferQueryResponse } from "@/pages/api/trpc/[trpc]";
import Button from "@/components/Button";

type PokemonFromServer = inferQueryResponse<"get-pokemon-by-id">;

const PokemonListing: FC<{ pokemon?: PokemonFromServer; vote: () => void }> = ({
  pokemon,
  vote,
}) => {
  if (!pokemon) return <></>;

  return (
    <div className="w-64 flex flex-col items-center">
      <img
        className="w-full"
        src={pokemon.sprites.front_default || ""}
        alt={pokemon.name}
      />
      <div className="text-xl capitalize text-center">{pokemon.name}</div>
      <Button onClick={vote} />
    </div>
  );
};

export default PokemonListing;
