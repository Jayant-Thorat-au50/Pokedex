import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function usePokemonList() {
  const [pokemonListState, setPokemonListState] = useState({
    isLoading: true,
    pokemon: [],
    pokedoxUrl: "https://pokeapi.co/api/v2/pokemon/",
    nextUrl: " ",
    prevUrl: " ",
  });
  async function PokemonDownload() {
    //before the render the data is loading

    setPokemonListState({
      ...pokemonListState,
      isLoading: true,
    });

    // get req to the api
    const response = await axios.get(pokemonListState.pokedoxUrl);

    // here is the list of first 20 pokemons
    const firstUrl = response.data.results;
    

    //after the first render response has two keys as previous and next
    //for the next set of pokemons
    setPokemonListState((state) => ({
      ...state,
      nextUrl: response.data.next,
      prevUrl: response.data.previous,
    }));

    // iterating on the firstList array to get the urls of all 20 pokemons
    const urlList = firstUrl.map((pokeUrls) => axios.get(pokeUrls.url));

    //calling all these promises with help of axios.all()
    const listOfTwenty = await axios.all(urlList);

  
    
    // let's grab the data of evry individual pokemon
    //so that the output array can be rendered further

    const pokemons = listOfTwenty.map((pokeDetails) => {
      
      return {
        id: pokeDetails.data.id,
        name: pokeDetails.data.name,
        image: pokeDetails.data.sprites.other.dream_world.front_default,
        type:pokeDetails.data.types
      };
    });

    // lets assign the array of data of the pokemons to the 'pokemon' array in  the useState
    setPokemonListState((state) => ({
      ...state,
      pokemon: pokemons,
      isLoading: false,
    }));

    //loading finishes here
  }

  useEffect(() => {
    PokemonDownload();
  }, [pokemonListState.pokedoxUrl]);

  return { pokemonListState, setPokemonListState };
}

export default usePokemonList;
