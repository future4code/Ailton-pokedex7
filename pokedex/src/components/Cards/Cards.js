import { goToDetailPage } from "../../routes/coordinator";
import Eevee from "../../assets/img/eevee.png";
import { useGetPokeList } from "../../services/request";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  CardContainer,
  PokemonsImg,
  PokeInfo,
  ButtonsContainer,
} from "./Styled";
import axios from "axios";

function Cards() {
  const navigate = useNavigate();
  let pokeName = [""];
  const [dataType, setDataType] = useState([])
  const [data, isLoading, error] = useGetPokeList(
    `https://labe-pokedex.herokuapp.com/pokemon/list?limit=20&offset=0`
  );
  const AddToPokedex = () => {
    console.log("Capturado!!!");
  };

  const pokemonList = dataType?.map((poke) => {
    return `<span>tipo: ${poke}</span>`;
  });
  
   const pokemonType = () => {
     axios
     .get(`https://pokeapi.co/api/v2/pokemon/${data.name}`)
     .then((response) => {
       setDataType(response.data.types)
      //  console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    };
    
    // {pokemonType()}
  

  return (
    <>
      {data?.map((poke) => {
        return (
          <CardContainer>
            <span>133</span>
            <PokemonsImg
              src={`https://professorlotus.com/Sprites/${poke.name}.gif`}
              alt="Eevee"
              onClick={() => goToDetailPage(navigate)}
            />
            <PokeInfo>
              <h2>{poke.name}</h2>
              <p>Tipo: {pokemonList}</p>
            </PokeInfo>
            <ButtonsContainer>
              <button onClick={() => goToDetailPage(navigate)}>Detalhes</button>
              <button onClick={() => AddToPokedex}>Capturar</button>
            </ButtonsContainer>
          </CardContainer>
        );
      })}
    </>
  );
}
export default Cards;
