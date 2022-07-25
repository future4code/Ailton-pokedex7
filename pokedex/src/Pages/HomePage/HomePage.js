import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import GlobalContext from "../../components/Global/GlobalContext";
import { useContext, useState, useMemo } from "react";
import LoadingImg from "../../assets/img/loading.gif";
import { Container, Loading } from "./styled";
import Pagination from "../../components/Pagination/Pagination";

export default function HomePage() {
  const { pokemon, setPokemon, isLoading, setIsLoading } =
    useContext(GlobalContext);
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);

  const currentPokemons = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return pokemon?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pokemon, itemsPerPage]);

  return (
    <div>
      <Header page={"home"} />
      {pokemon && !isLoading ? (
        <>
          <Container>
            {currentPokemons?.map((pokemon) => {
              return <Cards key={pokemon?.id} card={pokemon} />;
            })}
          </Container>

          <Pagination
            currentPage={currentPage}
            totalCount={pokemon?.length}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      ) : (
        <Loading>
          <img src={LoadingImg} alt="Loading" />
        </Loading>
      )}
    </div>
  );
}
