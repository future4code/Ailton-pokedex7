import styled from "styled-components";
import { cards } from "../../components/PokeTypes/PokeTypesCards"; 

export const PokemonsImg = styled.img`
  width: 240px;
`;

export const PichuContainer = styled.div`
margin: 0 auto;
  width: 400px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`
export const Container = styled.div`
   width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

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

export const Name = styled.h1`
  font-size: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Pokemon Hollow, serif;
  margin-top: 10px;
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
  margin-top: 10px;
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
export const Msg = styled.h1`
  margin-top: -20px;
  font-size: 37px;
  text-align: center;
  text-shadow: 1px 1px black;
`;
