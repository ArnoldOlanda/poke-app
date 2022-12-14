import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

import pokebola from '../../assets/pokebola.png'

export const PokemonPage = () => {

  
  const { name } = useParams();

  const { currentPokemonDetail, isLoading } = useSelector(state => state.pokemons)
  const { image, height, weight, baseExperience, sprites, moves } = currentPokemonDetail


  return (
    <div style={{
      width: '100%',
      height: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position:'relative',
      overflow:'hidden'
    }}>
      {
        isLoading 
          ? (<div>Cargando...</div>)
          : <div className="card" style={{ width: '48rem', height: '500px' }}>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-5">
                  <img src={image} className="card-img-top" alt={name} />
                </div>
                <div className="col-sm-7">
                  <h4>{name.toUpperCase()}</h4>
                  <ul style={{ listStyle: 'none', padding:'0px' }}>
                    <li><b>Experiencia base: </b>{baseExperience}</li>
                    <li><b>Altura: </b>{height}</li>
                    <li><b>Peso: </b>{weight}</li>
                  </ul>
                  <MovesContainer>
                    {
                      moves.map(({ move })=> (
                        <span key={move.name}>{ move.name }</span>
                      ))
                    }
                  </MovesContainer>
                  <div>
                    <img src={sprites.back_default} alt="img" />
                    <img src={sprites.back_shiny} alt="img" />
                    <img src={sprites.front_default} alt="img" />
                    <img src={sprites.front_shiny} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
      <PokebolaImage src={pokebola} alt="" />
    </div>
  )
}

const MovesContainer = styled.div`
  overflow:auto; 
  max-height:35%;
  &::-webkit-scrollbar{
    width: 5px;
    background-color: #dddddd;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #0dcaf081;
    border-radius: 10px;
  }
`

const PokebolaImage = styled.img`
    position: absolute;
    right: -100px;
    top: -200px;
    opacity:0.3;
    z-index: -1;
    width: 40%;
`