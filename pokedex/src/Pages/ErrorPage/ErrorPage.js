import React from "react";
import { useNavigate } from "react-router-dom";
import Charmander from "../../assets/img/tsts.gif"
import styled from "styled-components";

const Container = styled.div `
  margin: auto;
  width: 500px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const DivButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 20px;
    font-size: 24px;
    width: 170px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const Error = styled.h1`
  margin-top: -30px;
  font-size: 42px;
  text-align: center;
  text-shadow: 2px 2px black;
  `


export default function ErrorPage () {
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
