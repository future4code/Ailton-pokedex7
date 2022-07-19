import Header from "../../components/Header";
import Cards from '../../components/Cards/Cards'
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
`


export default function HomePage() {
  return (
    <div>
      <Header page={"home"} />
    <Container>
      <Cards />
    </Container>
    </div>
  );
}
