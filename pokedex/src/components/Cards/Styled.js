import styled from "styled-components";
import { cards } from "../PokeTypes/PokeTypesCards";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  background-image: url(${(props) => cards[props.type]});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 320px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  line-height: 20px;
  img {
    transition: transform 0.5s;
  }
  :hover > img {
    transform: scale(1.2);
  }
  :hover h1 {
    transition: text-shadow 0.5s;
  }
  span {
    font-family: Pokemon Hollow, serif;
    font-weight: 900;
    font-size: 50px;
  }
  @media screen and (max-width: 480px) {
    img {
      transition: none;
    }
    :hover > img {
      transform: none;
    }
    :hover h1 {
      transition: none;
    }
  }
`;
export const PokemonsImg = styled.img`
  width: 240px;
  cursor: pointer;
`;
export const Name = styled.h1`
  font-size: 48px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Pokemon Hollow, serif;
  margin-top: 10px;
  line-height: 10px;
`;
export const Type = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const TypeImg = styled.img`
  margin-top: 30px;
  height: 40px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
  flex: 1;
  align-items: flex-end;
  width: 85%;
  .pokeOpen {
    width: 65px;
    cursor: pointer;
  }
  .pokeClose {
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
  }
`;
