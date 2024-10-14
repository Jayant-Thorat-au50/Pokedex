import React from "react";
import PokemonTobeListed from "../PokemonToBeListed/PokemonTobeListed";

import "./PokemonList.css";
import usePokemonList from "../../hooks/usePokemonList";
import Paginations from "../pagination/Paginations";
import Loader from "../Loader";

function PokemonList() {
  const { pokemonListState, setPokemonListState } = usePokemonList();

  return (
    <>
      <section className="d-flex flex-column align-items-center justify-content-center">
        {
          <div className="d-flex flex-wrap fs-2   justify-content-center pokemons-wrapper my-4  container p-0">
            {pokemonListState.isLoading ? (
              <Loader />
            ) : (
              pokemonListState.pokemon.map((ele) => (
                <PokemonTobeListed
                  name={ele.name}
                  image={ele.image}
                  key={ele.id}
                  id={ele.id}
                  type={ele.type}
                />
              ))
            )}
          </div>
        }
        {/* pagination starts from here */}
        <div className="my-2 d-flex">
          <Paginations
            navtype="Prev"
            disabled={pokemonListState.prevUrl == null}
            onclick={() =>
              setPokemonListState({
                ...pokemonListState,
                pokedoxUrl: pokemonListState.prevUrl,
              })
            }
          />

          <Paginations
            navtype="Next"
            disabled={pokemonListState.nextUrl == null ? true : false}
            onclick={() =>
              setPokemonListState({
                ...pokemonListState,
                pokedoxUrl: pokemonListState.nextUrl,
              })
            }
          />
        </div>
      </section>
    </>
  );
}

export default PokemonList;
