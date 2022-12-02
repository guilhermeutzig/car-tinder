import { FC } from "react";

import Image from "next/image";

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
      <Image
        className="w-full"
        src={pokemon.sprites.front_default || ""}
        alt={pokemon.name}
        height={256}
        width={256}
        layout="fixed"
      />
      <div className="text-xl capitalize text-center">{pokemon.name}</div>
      <Button onClick={vote} />
    </div>
  );
};

export default PokemonListing;
