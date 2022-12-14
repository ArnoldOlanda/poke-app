import { createSlice } from '@reduxjs/toolkit';

export const pokemonInfoSlice = createSlice({
    name: 'pokemonInfo',
    initialState: {
        id:0,
        name: '',
        image:'',
        baseExperience:0,
        height:0,
        weight:0
    },
    reducers: {
        setPokemonInfo: (state, { payload } ) => {
            state.id = payload.id
            state.name = payload.name
            state.image = payload.image
            state.baseExperience = payload.baseExperience
            state.height = payload.height
            state.weight = payload.weight
        },
    }
});


// Action creators are generated for each case reducer function
export const { setPokemonInfo  } = pokemonInfoSlice.actions;