import Header from "../../components/Header";
import Cards from "../../components/Cards/Cards";
import styled from "styled-components";
import GlobalContext from "../../components/Global/GlobalContext";
import { useContext } from "react";
import LoadingImg from "../../assets/img/loading.gif";

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* display: flex; */
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: center; */

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }

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
  const { pokemon, setPokemon, isLoading, setIsLoading } =
    useContext(GlobalContext);
  const pokemonsNew = localStorage.getItem("pokemons");
  const newPokers = JSON.parse(pokemonsNew);

  let pokemonsMapped;
  if (pokemonsNew !== null) {
    pokemonsMapped = newPokers?.map((pokemon) => {
      return <Cards key={pokemon.id} page={"home"} pokemon={pokemon} />;
    });
  } else {
    pokemonsMapped = pokemon?.map((pokemon) => {
      return <Cards key={pokemon.id} page={"home"} pokemon={pokemon} />;
    });
  }
  return (
    <div>
      <Header page={"home"} />

        <Loading>
          <img src={LoadingImg} alt="loading" />
        </Loading>
     {/*  {pokemon && isLoading  */} <Container>{pokemonsMapped}</Container>
    </div>
  );
}
