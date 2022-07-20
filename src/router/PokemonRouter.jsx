import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { PokemonListPage } from '../pages/PokemonListPage'
import { SearchPageExample } from '../pages/SearchPageExample'

export const PokemonRouter = () => {
  return (
    <Routes>
        <Route path='pokemons' element={<PokemonListPage />}/>
        <Route path='search' element={ <SearchPageExample /> } />
        <Route path='/' element={ <Navigate to={'/pokemons'} /> } />
    </Routes>
  )
}
