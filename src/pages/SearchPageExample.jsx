import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { PokemonCard } from '../components/pokemonPage/PokemonCard';
import { getPokemosFull } from '../store/slices/pokemon';

export const SearchPageExample = () => {

  const dispatch = useDispatch();
  const { pokemonsFull } = useSelector(state => state.pokemons)

  const [inputValue, setInputValue] = useState('')
  const [pokemonsFiltered, setPokemonsFiltered] = useState([])

  useEffect(() => {

    dispatch(getPokemosFull())

  }, [])

  useEffect(() => {

    const debouncer = setTimeout(() => {
      console.log(inputValue);
      if (inputValue.length < 1) return;
      setPokemonsFiltered(pokemonsFull.filter(pokemon => pokemon.name.includes(inputValue)))
    }, 500);

    return () => {
      clearTimeout(debouncer)
    }

  }, [inputValue])



  return (
    <Container>
      <SearchContainer>
        <h3>Busca un pokemon</h3>

        <input
          type="text"
          placeholder='Ingresa un nombre o id'
          onChange={({ target }) => setInputValue(target.value)}
        />
      </SearchContainer>

      <div style={{ width:'95%' }} className='row rows-cols-1 row-cols-md-2 ai-center'>
        {
          pokemonsFiltered.map(({ id, name, img }) => (
            <PokemonCard
              key={id}
              id={id}
              name={name}
              img={img}
            />
          ))
        }
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SearchContainer = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 20px;
  input{
    background-color: #f3f3f3;
    border: 2px solid transparent;
    border-radius: 50px;
    padding-left: 20px;
    width: 20%;
    height: 40%;
    animation: border-color 1s ease-in-out;
    outline: none;
    &:focus{
      border-color: #0dcaf081;
    }
  }
`