import axios from "axios";

import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemonDetails, setPokemons, setPokemonsFull, startLoadingPokemons } from "./pokemonSlice"

// url para las imagenes 
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png

export const getPokemons = ( page = 0 ) => {
    return async ( dispatch, getState ) => {
        
        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get(`/pokemon?offset=${ page * 14 }&limit=14`)

        const pokemons = data.results.map(pokemon => {

            const arrUrl = pokemon.url.split('/')
            const id = arrUrl[arrUrl.length-2]

            return {
                id,
                name:pokemon.name,
                url:pokemon.url,
                img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            }
        })

       

        dispatch( setPokemons({ pokemons, page: page }) )
    }
}

export const getPokemosFull = () => {
    return async (dispatch,gestState) => {
        try {
            const { data } = await pokemonApi.get(`/pokemon/?limit=1500`)

            const pokemons = data.results.map(pokemon => {

                const arrUrl = pokemon.url.split('/')
                const id = arrUrl[arrUrl.length-2]
    
                return {
                    id,
                    name:pokemon.name,
                    url:pokemon.url,
                    img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                }
            })

            dispatch(setPokemonsFull(pokemons))
            
        } catch (error) {
            console.log(error);
        }
    }
}

export const getPokemonDetails = (id = '') => {
    return async (dispatch, getState) => {

        try {
            dispatch( startLoadingPokemons() )

            const { data } = await pokemonApi.get(`/pokemon/${id}`)
            const { sprites, base_experience: baseExperience, height, weight, moves } = data

            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

            dispatch(setPokemonDetails({
                id,
                image,
                baseExperience,
                height,
                weight,
                sprites,
                moves
            }))
        } catch (error) {
            console.log(error);
        }
    }
}
