import { goToDetailPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PokeOpen from "../../assets/img/pokeOpen.png";
import PokeClose from "../../assets/img/pokeClose.png";
import React, { useEffect } from "react";
import GlobalContext from "../Global/GlobalContext";
import { typesIcons } from "../PokeTypes/PokemonTypeIcons";
import Swal from "sweetalert2";
import {
  CardContainer,
  PokemonsImg,
  Name,
  Type,
  TypeImg,
  ButtonsContainer,
} from "./Styled";

function Card({ card }) {
  const navigate = useNavigate();
  const pokedexLocal = localStorage.getItem("pokedex");

  const { pokedex, setPokedex } = useContext(GlobalContext);

  useEffect(() => {
    setPokedex(JSON.parse(pokedexLocal));
  }, [pokedexLocal, setPokedex]);

  const addToPokedex = (newToPokedex) => {
    Swal.fire(
      `Gotcha!!<br/>${newToPokedex.name.toUpperCase()}, eu escolho você!`,
      "",
      "success"
    );

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
            alt={"Pokemon Capiturado"}
            onClick={() =>
              Swal.fire(
                `${card.name.toUpperCase()} já está na sua pokedex!`,
                "",
                "success"
              )
            }
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
