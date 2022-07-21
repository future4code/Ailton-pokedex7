import { goToDetailPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import PokeOpen from "../../assets/img/pokeOpen.png";
import PokeClose from "../../assets/img/pokeClose.png";
import React, { useEffect } from "react";
import { typesIcons } from "../PokeTypes/PokemonTypeIcons"
import GlobalContext from "../Global/GlobalContext";
import LoadingImg from "../../assets/img/loading.gif";
import {
  CardContainer,
  Container,
  PokemonsImg,
  Name,
  Loading,
  Type,
  TipeImg,
  ButtonsContainer,
} from "./Styled";

function Card(props) {
  const navigate = useNavigate();
  const pokedexLocal = localStorage.getItem("pokedex");

  const { pokemon, setPokemon, pokedex, setPokedex, isLoading, setIsLoading } =
    useContext(GlobalContext);

  useEffect(() => {
    setPokedex(JSON.parse(pokedexLocal));
  }, []);

  const addToPokedex = (newToPokedex) => {
    const pokedexList = [...pokedex, newToPokedex];
    window.alert("PokeName, eu escolho você!");
    window.location.reload()

    const pokedexLocal = localStorage.getItem("pokedex");
    if (pokedexLocal) {
      const updatedPokedex = [...JSON.parse(pokedexLocal), newToPokedex];
      localStorage.setItem("pokedex", JSON.stringify(updatedPokedex));
    } else {
      localStorage.setItem("pokedex", JSON.stringify([newToPokedex]));
    }
  };

  const pokemons = pokemon?.map((pokemon, index) => {
    const status = () => {
      const index = pokedex?.findIndex((item) => {
        return item.name === pokemon.name;
        
      });
      return index > -1;
    };

    return (
      
      <CardContainer key={index}>
       
        <span>
          {pokemon.id < 10
            ? "00" + pokemon.id
            : pokemon.id >= 10 && pokemon.id < 100
            ? "0" + pokemon.id
            : pokemon.id}
        </span>
        <PokemonsImg
          //src={`https://professorlotus.com/Sprites/${pokemon.name}.gif`}
          src={pokemon.image}
          alt={pokemon.name}
          onClick={() => goToDetailPage(navigate, pokemon.id)}
        />
        <Name>{pokemon.name}</Name>
        <Type >
          <TipeImg src={typesIcons[pokemon.types[0].type.name]} />
          <TipeImg src={typesIcons[pokemon.types[1]?.type.name]} />
        </Type >
        
        <ButtonsContainer>
          {status() ? (
            <img className="pokeClose"
              src={PokeClose}
              alt={"Capiturar"}
              onClick={() => alert("Já está na pokedex!")}
            />
          ) : (
            <img className="pokeOpen"
              onClick={() => (addToPokedex(pokemon))}
              src={PokeOpen}
              alt={"Capiturar"}
            />
          )}
        </ButtonsContainer>
      
      </CardContainer>
      );
    });
    
    return <Container>{pokemons}</Container>;
  }
  

export default Card;
