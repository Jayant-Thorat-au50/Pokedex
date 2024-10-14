import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PokemonList from '../components/pokemonList/PokemonList'
import PokemonsDetails from '../components/singlePokemons/pokemonsDetails'
import PageNotFound from '../components/pageNotFound'


function CustomRuotes() {
    return (
        <>
        
        <Routes>
          <Route path="/" element={<PokemonList/>}/>
          <Route path="/pokemon/:name" element={<PokemonsDetails/>}/>
          <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
        
        
        </>
    )
}

export default CustomRuotes
