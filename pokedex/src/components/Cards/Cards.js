import { goToDetailPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import PokeOpen from "../../assets/img/pokeOpen.png";
import PokeClose from "../../assets/img/pokeClose.png";
import React, { useEffect } from "react";
import GlobalContext from "../Global/GlobalContext";
import { typesIcons } from "../PokeTypes/PokemonTypeIcons";
import {
  CardContainer,
  Container,
  PokemonsImg,
  Name,
  Type,
  TypeImg,
  ButtonsContainer,
} from "./Styled";

function Card({pokemon}) {
  const navigate = useNavigate();
  const pokedexLocal = localStorage.getItem("pokedex");

  const { pokedex, setPokedex } =
    useContext(GlobalContext);

  useEffect(() => {
    setPokedex(JSON.parse(pokedexLocal));
  }, []);

  const addToPokedex = (newToPokedex) => {
    // newToPokedex.onPokedex = true;
    window.alert("PokeName, eu escolho você!");

    const pokedexLocal = localStorage.getItem("pokedex");
    if (!!pokedexLocal) {
      const newToPokedexLocal = JSON.parse(pokedexLocal) 
      console.log(newToPokedexLocal)
      const hasPokemon = newToPokedexLocal.find((pokemon) => {
        console.log(pokemon)
        return pokemon.id === newToPokedex.id
      })
      if(hasPokemon) {return}

      const updatedPokedex = [...JSON.parse(pokedexLocal), newToPokedex];
      localStorage.setItem("pokedex", JSON.stringify(updatedPokedex));
    } else {
      localStorage.setItem("pokedex", JSON.stringify([newToPokedex]));
    }
  };
    return (
      <CardContainer type={pokemon?.types[0]?.type?.name}>
        <span>
          {pokemon?.id < 10
            ? "00" + pokemon?.id
            : pokemon?.id >= 10 && pokemon?.id < 100
            ? "0" + pokemon?.id
            : pokemon?.id}
        </span>
        <PokemonsImg
          //src={`https://professorlotus.com/Sprites/${pokemon.name}.gif`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
          onClick={() => goToDetailPage(navigate, pokemon.id)}
        />
        <Name>{pokemon.name}</Name>
        <Type>
          <TypeImg src={typesIcons[pokemon?.types[0]?.type?.name]} />
          <TypeImg src={typesIcons[pokemon?.types[1]?.type?.name]} />
        </Type>
        <ButtonsContainer>
          {pokemon.onPokedex ? (
            <img
              className="pokeClose"
              src={PokeClose}
              alt={"Capiturar"}
              onClick={() => alert("Já está na pokedex!")}
            />
          ) : (
            <img
              className="pokeOpen"
              onClick={() => addToPokedex(pokemon)}
              src={PokeOpen}
              alt={"Capiturar"}
            />
          )}
        </ButtonsContainer>
      </CardContainer>
    );
  }

export default Card;
