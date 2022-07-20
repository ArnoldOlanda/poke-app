import React from 'react'
import styled from 'styled-components'
import { PokemonCard } from '../components/pokemonPage/PokemonCard'

const Container = styled.div`
    background-color: #c00000fd;
    padding-top: 30px;
    width: 100%;
    height: 100vh;
`


export const PokemonListPage = () => {
  return (
    <Container>
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                [1,2,3,4,5,6,7,8,9,0].map(e=>(
                    <PokemonCard key={e} />
                ))
            }
        </div>
    </Container>
  )
}


