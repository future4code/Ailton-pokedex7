import Header from "../../components/Header";
import { goToDetailPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import Pichu from "../../assets/img/pichu.gif";
import PokeClose from "../../assets/img/pokeClose.png";
import GlobalContext from "../../components/Global/GlobalContext";
import { typesIcons } from "../../components/PokeTypes/PokemonTypeIcons"
import { useContext, useEffect, useState } from "react";
import {
  CardContainer,
  Container,
  PokemonsImg,
  Name,
  Type,
  TypeImg,
  PichuContainer,
  Msg,
  ButtonsContainer,
} from "./Styled";

export default function Pokedex() {
  const navigate = useNavigate();
  const { pokemon, setPokemon, pokedex, setPokedex } =
    useContext(GlobalContext);

  const removeFromPokedex = (RemovePoke) => {
    const newList = pokedex.filter((poke) => {
      return poke?.name !== RemovePoke?.name;
    });
    setPokedex(newList);
    localStorage.setItem("pokedex", JSON.stringify(newList));
    alert('Pokemen removido!')
  };

  useEffect(() => {
    const storagePokedex = JSON.parse(localStorage.getItem("pokedex") || "[]");
    storagePokedex && setPokedex(storagePokedex);
    console.log(storagePokedex)
  }, [setPokedex]);

  const pokedexPage = pokedex?.map((item) => {
    return (
      <Container key={item.id}>
      <CardContainer type={item?.types[0]?.type?.name}>
        <span>
          {item?.id < 10
            ? "00" + item?.id
            : item?.id >= 10 && item?.id < 100
            ? "0" + item?.id
            : item?.id}
        </span>
        <PokemonsImg
          //  src={`https://professorlotus.com/Sprites/${item.name}.gif`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item?.id}.png`}
          alt={item?.id}
          onClick={() => goToDetailPage(navigate, item?.id)}
        />
        <Name>{item?.name}</Name>
        <Type>
        <TypeImg src={typesIcons[item?.types[0].type.name]} />
        <TypeImg src={typesIcons[item?.types[1]?.type.name]} />
        </Type>
        <ButtonsContainer>
          <img
            onClick={() => removeFromPokedex(item)}
            src={PokeClose}
            alt={"Capiturar"}
          />
        </ButtonsContainer>
      </CardContainer>
      </Container>
    );
  });

  return (
    <div>
      <Header page={"pokedex"} />
      {console.log(pokedex)}
      {!pokedexPage ? (
        <PichuContainer>
          <img src={Pichu} alt="pichu" />
          <Msg>Sua Pokedex está vazia</Msg>
        </PichuContainer>
      ) : (
        <div>{pokedexPage}</div>
      )}
    </div>
  );
}
