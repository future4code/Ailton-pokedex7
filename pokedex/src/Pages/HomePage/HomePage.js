import Header from "../../components/Header";
import Cards from "../../components/Cards/Cards";
import styled from "styled-components";
import GlobalContext from "../../components/Global/GlobalContext";
import { useContext } from "react";
import LoadingImg from "../../assets/img/loading.gif";

const Container = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  img {
    width: 500px;
    height: 331.42px;
  }
`;

export default function HomePage() {
  const { pokemon, setPokemon, isLoading, setIsLoading } = useContext(GlobalContext);

  const showPokelist = pokemon && !isLoading ? (
    <Container> 
      <Cards page="home"/> 
      </Container>
  ) : ( 
  <Loading>
    <img src={LoadingImg} alt="Loading" />
  </Loading>
  )

  return (
    <div>
      <Header page="home" />
        {showPokelist}
    </div>
  );
}
