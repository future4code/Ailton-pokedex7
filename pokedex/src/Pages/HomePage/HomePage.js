import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
// import styled from "styled-components";
import GlobalContext from "../../components/Global/GlobalContext";
import { useContext, useState, useEffect } from "react";
import LoadingImg from "../../assets/img/loading.gif";
import { Container, Loading, Pagination, Button } from "./styled";

export default function HomePage() {
  const [pokemonsPerPage, setPokemonsPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(0);
  const [itens, setItens] = useState([]);
  const { pokemon, setPokemon, isLoading, setIsLoading } =
    useContext(GlobalContext);

  useEffect(() => {
    setItens(pokemon);
  }, []);

  const pages = Math.ceil(pokemon?.length / pokemonsPerPage);
  const startIndex = currentPage * pokemonsPerPage;
  const endIndex = startIndex + pokemonsPerPage;
  const currentPokemon = pokemon?.slice(startIndex, endIndex);

  // const range = (start, end) => {
  //   let length = end - start + 1;

  //   return Array.from({ length }, (_, idx) => idx + start);
  // };

  // const siblingCount = 1;
  // const totalPageNumbers = siblingCount + 5;

  // const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  // const rightSiblingIndex = Math.min(currentPage + siblingCount, pages);

  // const shouldShowLeftDots = leftSiblingIndex > 2;
  // const shouldShowRightDots = rightSiblingIndex < pages - 2;

  // const firstPageIndex = 1;
  // const lastPageIndex = pages;

  // if (!shouldShowLeftDots && shouldShowRightDots) {
  //   let leftItemCount = 3 + 2 * siblingCount;
  //   let leftRange = range(1, leftItemCount);

  //   return [...leftRange, "...", pages];
  // }

  return (
    <div>
      <Header page={"home"} />
      {pokemon && !isLoading ? (
        <>
          <Container>
            {currentPokemon?.map((pokemon) => {
              return <Cards key={pokemon?.id} card={pokemon} />;
            })}
          </Container>
          <Pagination>
            {Array.from(Array(pages), (pokemon, index) => {
              return (
                <Button
                  key={index}
                  value={index}
                  onClick={(e) => setCurrentPage(Number(e.target.value))}
                >
                  {index + 1}
                </Button>
              );
            })}
          </Pagination>
        </>
      ) : (
        <Loading>
          <img src={LoadingImg} alt="Loading" />
        </Loading>
      )}
    </div>
  );
}
