import { PokemonClient } from "pokenode-ts";

import { prisma } from "../src/backend/utils/prisma";

const doBackfill = async () => {
  const pokeApi = new PokemonClient();

  const allPokemon = (await pokeApi.listPokemons(0, 493)).results;

  const formattedPokemon = allPokemon.map((p, index) => ({
    id: index + 1,
    name: p.name,
    spriteUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }));

  // @ts-ignore
  const creation = prisma.pokemon.createMany({
    data: formattedPokemon,
  });

  console.log("creation?", creation);
};

doBackfill();
