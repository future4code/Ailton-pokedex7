import React from "react";
import axios from "axios";
import { DetailContainer, CardLeft, CardCenter, CardRight } from "./styled";
import Header from "../../components/Header";
import styled from "styled-components";
import { BASE_URL } from "../../constants/url";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  CardContainer,
  PokemonsImg,
  Name,
  Type,
  ButtonsContainer,
} from "../../components/Cards/Styled";

const Container = styled.div``;

export default function DetailPage() {
  const params = useParams();
  const [details, setDetails] = useState();

  console.log(params);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios
      .get(`${BASE_URL}pokemon/${params.id}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(details);

  return (
    <Container>
      <Header />
      <DetailContainer>
        <CardLeft>
        <PokemonsImg
            //src={`https://professorlotus.com/Sprites/${pokemon.name}.gif`}
            src={details?.sprites?.front_shiny ? details?.sprites?.front_shiny : details?.sprites?.front_default}
            alt={details?.name}
            //   onClick={() => goToDetailPage(navigate, details?.id)}
          />

        <PokemonsImg
            //src={`https://professorlotus.com/Sprites/${pokemon.name}.gif`}
            src={details?.sprites?.back_shiny ? details?.sprites?.back_shiny : details?.sprites?.back_default}
            alt={details?.name}
            //   onClick={() => goToDetailPage(navigate, details?.id)}
          />
        </CardLeft>
        <CardCenter>
          <span>
            {details?.id < 10
              ? "00" + details?.id
              : details?.id >= 10 && details?.id < 100
              ? "0" + details?.id
              : details?.id}
          </span>
          <PokemonsImg
            //src={`https://professorlotus.com/Sprites/${pokemon.name}.gif`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details?.id}.png`}
            alt={details?.name}
            //   onClick={() => goToDetailPage(navigate, details?.id)}
          />
          <Name>{details?.name}</Name>
          <Type>
            <p>{details?.types[0].type.name}</p>
            <p>{details?.types[1]?.type.name}</p>
          </Type>
          <ButtonsContainer>
            {/* <img
            onClick={() => addToPokedex(details)}
            src={PokeOpen}
            alt={"Capiturar"}
          /> */}
          </ButtonsContainer>
        </CardCenter>
        <CardRight></CardRight>
      </DetailContainer>
    </Container>
  );
}
