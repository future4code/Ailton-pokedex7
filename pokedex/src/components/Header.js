import { useNavigate } from "react-router-dom";
import LogoImg from "../assets/img/logo.png";
import ClosedImg from "../assets/img/pokedexClosed.png";
import OpenImg from "../assets/img/pokedexOpen.png";
import { goToHomePage, goToPokedex, goBack } from "../routes/coordinator";
import { Logo, HeaderCont, Open, Closed } from "./Styled";

function Header({ page }) {
  const navigate = useNavigate();

  return (
    <HeaderCont>
      <Logo src={LogoImg} alt="Logo" onClick={() => goToHomePage(navigate)} />
      {page === "home" ? (
        <Closed src={ClosedImg} alt= 'pokedex fechada' onClick={() => goToPokedex(navigate)}/>
      ) : (
        <Open src={OpenImg} alt= 'pokedex aberta' onClick={() => goBack(navigate)}/>
      )}
    </HeaderCont>
  );
}
export default Header;
