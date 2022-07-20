import { goToDetailPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import PokeOpen from "../../assets/img/pokeOpen.png"
import React, { useEffect } from 'react'
import { BASE_URL } from '../../constants/url'
import PokemonTypes from "../PokeTypes/PokeTypes";
import  GlobalContext  from "../Global/GlobalContext";
import {
  CardContainer,
  Container,
  PokemonsImg,
  Name,
  Type,
  ButtonsContainer,
} from "./Styled";

    function Card() {
      const navigate = useNavigate()

      const {pokemon, setPokemon, pokedex, setPokedex} = useContext(GlobalContext)
   
      const addToPokedex = (newToPokedex) => {
         const pokedexList = [...pokedex, newToPokedex];
         setPokedex(pokedexList);
         window.alert("Sucesso!, Pokemon adicionado na sua Pokedex");
       };
      
      const pokemons = pokemon?.map((pokemon, index) => {
         return (
            <CardContainer key={index}>
            <span>00{pokemon.id}</span>
            <PokemonsImg
              src={`https://professorlotus.com/Sprites/${pokemon.name}.gif`}
              alt="Eevee"
              onClick={() => goToDetailPage(navigate)}
            />
              <Name>{pokemon.name}</Name>
              <Type>
               <p>{pokemon.types[0].type.name}</p>
             <p>{pokemon.types[1]?.type.name}</p>
             </Type>
            <ButtonsContainer>
              <img onClick={() => addToPokedex(pokemon)} src={PokeOpen} alt={"Capiturar"}/>
            </ButtonsContainer>
          </CardContainer>
         )
       })

       
  
  return (
      <Container>
        {pokemons}
      </Container>
  );
    };

export default Card