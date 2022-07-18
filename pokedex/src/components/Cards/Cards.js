import { goToDetailPage } from "../../routes/coordinator";
import Eevee from "../../assets/img/eevee.png";
import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  PokemonsImg,
  PokeInfo,
  ButtonsContainer,
} from "./Styled";

function Cards() {
  const navigate = useNavigate();

  const AddToPokedex = () => {
    console.log("Capturado!!!");
  };

  return (
    <CardContainer>
      <PokemonsImg
        src={Eevee}
        alt="Eevee"
        onClick={() => goToDetailPage(navigate)}
      />
      <PokeInfo>
        <span>Name: Eevee</span>
        <span>Number: 0133</span>
        <span>Tipo: Normal</span>
      </PokeInfo>
      <ButtonsContainer>
        <button onClick={() => goToDetailPage(navigate)}>Detalhes</button>
        <button onClick={() => AddToPokedex}>Capturar</button>
      </ButtonsContainer>
    </CardContainer>
  );
}
export default Cards;
