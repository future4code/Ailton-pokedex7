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
  PokemonsImg,
  Name,
  Type,
  TypeImg,
  ButtonsContainer,
} from "./Styled";

function Card({card}) {
  const navigate = useNavigate();
  const pokedexLocal = localStorage.getItem("pokedex");

  const { pokemon, setPokemon, pokedex, setPokedex } =
    useContext(GlobalContext);

  useEffect(() => {
    setPokedex(JSON.parse(pokedexLocal));
  }, []);

  const addToPokedex = (newToPokedex) => {
    window.alert(`${newToPokedex.name}, eu escolho você!`);

    const pokedexLocal = localStorage.getItem("pokedex");
    if (!!pokedexLocal) {
      const newToPokedexLocal = JSON.parse(pokedexLocal);
      const hasPokemon = newToPokedexLocal.find((pokemon) => {
        return pokemon.id === newToPokedex.id;
      });
      if (hasPokemon) {
        return;
      }
      const updatedPokedex = [...JSON.parse(pokedexLocal), newToPokedex];
      localStorage.setItem("pokedex", JSON.stringify(updatedPokedex));
      setPokedex(updatedPokedex);
    } else {
      localStorage.setItem("pokedex", JSON.stringify([newToPokedex]));
      setPokedex([newToPokedex]);
    }
  };

  const ListPokedex = pokedex?.map((item) => {
    return item?.name;
  });


  
    return (
      <CardContainer key={card?.id} type={card?.types[0]?.type?.name}>
      <span>
        {card?.id < 10
          ? "00" + card?.id
          : card?.id >= 10 && card?.id < 100
          ? "0" + card?.id
          : card?.id}
      </span>
      <PokemonsImg
        //src={`https://professorlotus.com/Sprites/${pokemon.name}.gif`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${card?.id}.png`}
        alt={card?.name}
        onClick={() => goToDetailPage(navigate, card?.id)}
      />
      <Name>{card?.name}</Name>
      <Type>
        <TypeImg src={typesIcons[card?.types[0]?.type?.name]} />
        <TypeImg src={typesIcons[card?.types[1]?.type?.name]} />
      </Type>
      <ButtonsContainer>
        {ListPokedex?.includes(card?.name) && (
          <img
            className="pokeClose"
            src={PokeClose}
            alt={"Capiturar"}
            onClick={() => alert("Já está na pokedex!")}
          />
        )}
        {!ListPokedex?.includes(card?.name) && (
          <img
            className="pokeOpen"
            onClick={() => addToPokedex(card)}
            src={PokeOpen}
            alt={"Capiturar"}
          />
        )}
      </ButtonsContainer>
    </CardContainer>
    );
}
export default Card;
