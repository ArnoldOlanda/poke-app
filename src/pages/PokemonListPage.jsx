import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { PokemonCard } from '../components/pokemonPage/PokemonCard'
import { getPokemons } from '../store/slices/pokemon/thunks'


export const PokemonListPage = () => {

    const { isLoading, pokemons, page } = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [])


    return (
        <Container>
            <div style={{ width:'95%' }} className="row rows-cols-1 row-cols-md-2">
                {
                    pokemons.map(({ id, name, img }) => (
                        <PokemonCard 
                        key={id} 
                        id={id} 
                        name={name} 
                        img={img} 
                        />
                    ))
                }
            </div>

            {/* Prev next buttons */}
            <div style={{ display:'flex', gap:'20px', marginTop:'50px' }}>
                <button
                    className='btn btn-info btn-lg'
                    disabled={isLoading || page - 1 < 0}
                    onClick={() => dispatch(getPokemons(page - 1 < 0 ? 0 : page - 1))}
                >
                    Prev page
                </button>
                <button
                    className='btn btn-info btn-lg'
                    disabled={isLoading}
                    onClick={() => dispatch(getPokemons(page + 1))}
                >
                    Next page
                </button>
            </div>
            <PokebolaImage src='../../assets/pokebola.png' alt="" />
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
`
const PokebolaImage = styled.img`
    position: absolute;
    right: -100px;
    top: -200px;
    opacity:0.3;
    z-index: -1;
    width: 40%;
`