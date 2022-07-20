import Header from "../../components/Header";
import { goToDetailPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import Pichu from "../../assets/img/pichu.gif";
import Card from "../../components/Cards/Cards";
import PokeClose from "../../assets/img/pokeClose.png";
import GlobalContext from "../../components/Global/GlobalContext";
import { useContext, useEffect, useState } from "react";
import {
  CardContainer,
  Container,
  PokemonsImg,
  Name,
  Type,
  Msg,
  ButtonsContainer,
} from "./Styled";

export default function Pokedex() {
  const navigate = useNavigate();
  const { pokemon, setPokemon, pokedex, setPokedex } =
    useContext(GlobalContext);

  const removeFromPokedex = (RemovePoke) => {
    console.log("removido", pokemon.name);
    const newList = pokedex.filter((poke) => {
      return poke.name !== RemovePoke.name;
    });
    setPokedex(newList);
    localStorage.setItem("pokedex", JSON.stringify(newList));
    alert('Pokemen removido!')
  };

  useEffect(() => {
    const storagePokedex = JSON.parse(localStorage.getItem("pokedex") || "[]");
    storagePokedex && setPokedex(storagePokedex);
  }, []);

  const pokedexPage = pokedex?.map((item, index) => {
    return (
      <CardContainer key={index}>
        <span>
          {item.id < 10
            ? "00" + item.id
            : item.id >= 10 && item.id < 100
            ? "0" + item.id
            : item.id}
        </span>
        <PokemonsImg
          //  src={`https://professorlotus.com/Sprites/${item.name}.gif`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
          alt="Eevee"
          onClick={() => goToDetailPage(navigate)}
        />
        <Name>{item.name}</Name>
        <Type>
          <p>{item.types[0].type.name}</p>
          <p>{item.types[1]?.type.name}</p>
        </Type>
        <ButtonsContainer>
          <img
            onClick={() => removeFromPokedex(item)}
            src={PokeClose}
            alt={"Capiturar"}
          />
        </ButtonsContainer>
      </CardContainer>
    );
  });

  return (
    <div>
      <Header page={"pokedex"} />
      {pokedex.length === 0 ? (
        <Container>
          <img src={Pichu} alt="pichu" />
          <Msg>Sua Pokedex está vazia</Msg>
        </Container>
      ) : (
        <div>{pokedexPage}</div>
      )}
    </div>
  );
}
