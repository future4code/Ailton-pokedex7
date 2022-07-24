import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalContext from "./GlobalContext";
import { BASE_URL } from "../../constants/url";
import Swal from "sweetalert2";

const GlobalState = (props) => {
  const [pokemon, setPokemon] = useState();
  const [pokedex, setPokedex] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getAllPokemons = async () => {
      await axios
        .get(`${BASE_URL}pokemon?limit=1154&offset=0`)
        .then((response) => {
          setIsLoading(false);
          pokemonList(response.data.results);
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado. Tente novamente mais tarde",
            footer: `Código do erro ${error.response.status}`,
          });;
        });
    };
    getAllPokemons();
    setIsLoading(false);
  }, []);

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
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Algo deu errado. Tente novamente mais tarde",
              footer: `Código do erro ${error.response.status}`,
            });;
          });
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonRecord?.id}.png`;
        return {
          ...pokemonRecord,
          image,
        };
      })
    );
    setPokemon(pokeInfo);
  };
  return (
    <GlobalContext.Provider
      value={{
        pokemon,
        setPokemon,
        pokedex,
        setPokedex,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
