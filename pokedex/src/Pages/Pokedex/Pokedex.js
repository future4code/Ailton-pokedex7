import Header from "../../components/Header"
import Pichu from "../../assets/img/pichu.gif"
import styled from "styled-components";
import GlobalContext from "../../components/Global/GlobalContext";
import { useContext, useState } from "react";
import Card from "../../components/Cards/Cards";

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
  const {pokemon, setPokemon, pokedex, setPokedex} = useContext(GlobalContext)

    return(
        <div>
            <Header page = {'pokedex'}/>
            <Card/>
            <Container>
                <img src={Pichu} alt="pichu" />
            <Msg>Sua Pokedex está vazia</Msg>
             </Container>
        </div>
    )
    }