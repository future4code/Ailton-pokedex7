import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GlobalContext from "./GlobalContext"
import { BASE_URL } from '../../constants/url'


const GlobalState = (props) => {
    const [pokemon, setPokemon] = useState()
    const [pokedex, setPokedex] = useState([])

      useEffect(() => {
         Pokemonlist()
      }, [])
   
      const Pokemonlist = () => {
         axios.get(`${BASE_URL}pokemon?limit=30&offset=0`)
            .then((response) => {
               const pokeInfo = response.data.results.map (({ url }) =>
               axios.get(url).then((res) => {
                  return res.data;
               })
               );
               Promise.all(pokeInfo).then((res) => setPokemon(res))
              
            })
         };
         
         return (
             <GlobalContext.Provider value={{pokemon, setPokemon, pokedex, setPokedex}}>
                {props.children}
            </GlobalContext.Provider>
        )
    }

        export default GlobalState