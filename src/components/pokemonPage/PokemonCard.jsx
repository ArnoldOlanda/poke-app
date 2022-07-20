import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    
    width: 220px;
    height: 280px;
    margin: 15px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    background-color: #fff;
    transition: .3s all ease-in-out;
    &:hover{
        transform: translateY(-5px);
        box-shadow: 3px 10px 28px 0px #0000009e;
    }
`
const StyledImg = styled.img`
    width: 100%;
    height: 70%;
`

export const PokemonCard = () => {
  return (
    <Container className='col'>
        <StyledImg src="/assets/pikachu.png" alt="" />
        <div className='row' style={{
            padding: '5px',
            fontSize:'20px'
        }}>
            <span className='row-2 d-flex justify-content-center'>Pikachu</span>
            <button className='row-2 btn btn-outline-primary'>
                Ver info
            </button>
        </div>
    </Container>
  )
}
