import Pokeheader from "../components/pokedox/pokeheader";
import Search from "../components/search/Search";
import { Route, Routes } from "react-router-dom";
import PokemonsDetails from "../components/singlePokemons/pokemonsDetails";
import PageNotFound from "../components/pageNotFound";
import Header from "../components/Header/Header";
import "./App.css";

import PokemonList from "../components/pokemonList/PokemonList";
import CustomRuotes from "../Routes/CustomRuotes";

function App() {
  return (
    <section className="container-fluid ">
      <section className="row ">
      
      <Header/>
       <CustomRuotes/>
      </section>
    </section>
  );
}

export default App;
