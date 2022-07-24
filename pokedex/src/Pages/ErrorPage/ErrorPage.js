import React from "react";
import { useNavigate } from "react-router-dom";
import Charmander from "../../assets/img/charmander.gif";
import { Container, DivButton, Error } from "./styled";

export default function ErrorPage() {
  const goToHomePage = () => navigate("/");
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <img src={Charmander} alt="charmander error" />
        <Error>Sorry. Page not found!</Error>
        <DivButton>
          <button onClick={goToHomePage}>Pagina Inicial</button>
        </DivButton>
      </Container>
    </>
  );
}
