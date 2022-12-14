import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        isLoading: false,
        pokemons: [],
        pokemonsFull:[],
        isLoadingImg: false,
        currentIdPokemon: '1',
        currentPokemonDetail:{},
        page: 0
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.pokemons = action.payload.pokemons;
            state.page = action.payload.page;
        },
        setPokemonsFull:(state,{payload})=> {
            state.pokemonsFull = payload
        },
        setCurrentIdPokemon: (state,{ payload }) => {
            state.currentIdPokemon = payload
        },
        setPokemonDetails:( state,{ payload })=>{
            state.isLoading = false
            state.currentPokemonDetail = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons, setCurrentIdPokemon,setPokemonDetails,setPokemonsFull } = pokemonSlice.actions;