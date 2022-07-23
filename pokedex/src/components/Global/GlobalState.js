import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalContext from "./GlobalContext";
import { BASE_URL } from "../../constants/url";

const GlobalState = (props) => {
  const [pokemon, setPokemon] = useState();
  const [pokedex, setPokedex] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState(0);
  const [limit, setLimit] = useState(30);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}pokemon?limit=${limit}offset=${pagination}`)
      .then((response) => {
        setIsLoading(false);
        pokemonList(response.data.results);
      })
      .catch((error) => {
        console.log(error.response.message);
        setIsLoading(false);
      });    
  }, [pokedex, pagination]);

  const pokemonList = async (data) => {
    setIsLoading(true);
    const pokeInfo = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await axios
          .get(pokemon.url) 
          .then((response) => {
            setIsLoading(false);
            return response.data;
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
        return {
          ...pokemonRecord,
          image,
        };
      })
    );
    setPokemon(pokeInfo);

    /* const verificaPokemons = localStorage.getItem("pokemons");
    if (!verificaPokemons) {
      setPokemon(pokeInfo);
      console.log(pokeInfo);
      localStorage.setItem("pokemons", JSON.stringify(pokeInfo));
    } */
  };

  return (
    <GlobalContext.Provider
      value={{
        pokemon,
        setPokemon,
        pokedex,
        setPokedex,
        pagination,
        setPagination,
        isLoading,
        setIsLoading,
        pokemonList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
