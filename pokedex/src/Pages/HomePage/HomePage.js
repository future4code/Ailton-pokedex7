import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import { GlobalContext } from "../../components/Global/GlobalContext";
import { useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { goToBattlePage } from "../../routes/coordinator";
import { Container, Loading } from "./styled";
import LoadingImg from "../../assets/img/loading.gif";
import Pagination from "../../components/Pagination/Pagination";

export default function HomePage() {
  const { pokemon, isLoading } =
    useContext(GlobalContext);
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);

  const currentPokemons = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return pokemon?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pokemon, itemsPerPage]);

  const navigate = useNavigate();

  return (
    <div>
      <Header page={"home"} />
      <button onClick={() => goToBattlePage(navigate)}>
        Batalha
      </button>
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
