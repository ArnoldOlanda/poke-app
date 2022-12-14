import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
// import { setCurrentIdPokemon } from '../../store/slices/pokemon/pokemonSlice'
import { getPokemonDetails } from '../../store/slices/pokemon'


export const PokemonCard = ({ id, name, img }) => {

    const dispatch = useDispatch()

    const { isLoadingImg } = useSelector( state => state.pokemons );
        
    return (
        <Container className='col'>
            { isLoadingImg ? 'Cargando...' : <StyledImg src={ img } alt="" /> }
            <div className='row' style={{
                padding: '10px',
                fontSize: '20px'
            }}>
                <span className='row-2 d-flex justify-content-center'>{name.substring(0,17)} </span>
                <Link 
                className='row-2 btn btn-danger'
                to={`/pokemon/${ name }`}
                onClick={()=> {
                    dispatch(getPokemonDetails(id))
                }}
                >
                    Ver info
                </Link>
            </div>
        </Container>
    )
}

const Container = styled.div`
    
    width: 220px;
    height: 280px;
    margin: 15px;
    border-radius: 10px;
    padding: 10px;
    background-color: #e8f1f7;
    transition: .2s all ease-in-out;
    &:hover{
        transform: translateY(-5px);
        box-shadow: 3px 10px 28px 0px #0000006e;
    }
`
const StyledImg = styled.img`
    width: 100%;
    height: 70%;
`