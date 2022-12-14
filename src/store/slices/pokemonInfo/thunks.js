import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemonInfo } from "./pokemonInfoSlice";



export const getPokemonInfo = (id = 1) => {
    return async (dispatch, getState) => {

        try {
            const { data } = await pokemonApi.get(`/pokemon/${id}`)
            const { sprites, base_experience: baseExperience, height, weight } = data

            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

            console.log(JSON.stringify(data, null, 4));

            dispatch(setPokemonInfo({
                id,
                image,
                baseExperience,
                height,
                weight
            }))
        } catch (error) {
            console.log(error);
        }
    }
}


