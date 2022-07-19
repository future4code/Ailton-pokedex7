import Header from "../../components/Header"
import Pichu from "../../assets/img/pichu.gif"
import styled from "styled-components";


const Container = styled.div`
  margin: auto;
  width: 400px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const Msg = styled.h1`
  margin-top: -20px;
  font-size: 37px;
  text-align: center;
  text-shadow: 1px 1px black;
  `

export default function Pokedex() {
    return(
        <div>
            <Header page = {'pokedex'}/>
            <Container>
                <img src={Pichu} alt="charmander error" />
            <Msg>Sua Pokedex está vazia</Msg>
             </Container>
        </div>
    )
    }