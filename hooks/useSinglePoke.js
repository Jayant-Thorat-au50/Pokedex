import { useState, useEffect } from "react";
import axios from "axios";

function UseSinglePoke(name) {
  const [singlePoke, setSinglePOke] = useState({
    pokemon: {},
    isLoading: true,
    doNotExists: false,
  });

  async function downloadPokemon() {
    setSinglePOke({ ...singlePoke, isLoading: true });

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      console.log(response.data.types.map((e) => e.type.name));

      const similarTypePokemons = await axios.get(
        `https://pokeapi.co/api/v2/type/${response.data.types[0].type.name}`
      );

      const pokemonDeatils = response.data;

      setSinglePOke((state) => ({ ...state, isLoading: false }));
      setSinglePOke((state) => ({
        ...state,
        pokemon: {
          name: pokemonDeatils.name,
          height: pokemonDeatils.height,
          weight: pokemonDeatils.weight,
          img: pokemonDeatils.sprites.other.dream_world.front_default,
          type: response.data.types.map((e) => e.type.name),
          similarTypePokemons: similarTypePokemons.data.pokemon,
        },
      }));
    } catch (error) {
      return setSinglePOke((state) => ({
        ...state,
        doNotExists: true,
      }));
    }
  }

  useEffect(() => {
    downloadPokemon();
  }, [name]);
  return [singlePoke.pokemon, singlePoke.isLoading, singlePoke.doNotExists];
}

export default UseSinglePoke;
