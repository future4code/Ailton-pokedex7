import { goToDetailPage } from "../../routes/coordinator";
import Eevee from "../../assets/img/eevee.png";
import { GetPokeList } from "../../services/request";
import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  PokemonsImg,
  PokeInfo,
  ButtonsContainer,
} from "./Styled";

function Cards() {
  const navigate = useNavigate();
  const [data, isLoading, error] = GetPokeList(
    `https://labe-pokedex.herokuapp.com/pokemon/list?limit=20&offset=0`
  );
  let pokeName = [];
  const AddToPokedex = () => {
    console.log("Capturado!!!");
  };

  const pokemonList = data?.map((poke) => {
    return poke;
  });

  const [datat, isLoadingt, errort] = GetPokeList(
    `https://pokeapi.co/api/v2/pokemon/${pokeName}`
  );

  const pokemonType = datat?.types?.map((poke) => {
    return poke.type.name;
  });

  return (
    <>
      {data?.map((poke) => {
        return (
          <CardContainer>
            {console.log(poke.name)}
            <PokemonsImg
              src={`https://professorlotus.com/Sprites/${poke.name}.gif`}
              alt="Eevee"
              onClick={() => goToDetailPage(navigate)}
            />
            <PokeInfo>
              <span>Name: {poke.name}</span>
              <span>Number: 0133</span>
              <span>Tipo: {pokemonType}</span>
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
