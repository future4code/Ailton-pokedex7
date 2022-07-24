import styled from "styled-components";
import { cards } from "../../components/PokeTypes/PokeTypesCards";
import { cards2 } from "../../components/PokeTypes/PokeTypesCards";
import { colors } from "../../components/PokeTypes/PokemonTypeIcons";

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  img {
    width: 500px;
    height: 331.42px;
  }
  @media screen and (max-width: 480px) {
    img{
      width: 300px;
      height: 150px;
    }
  }
`;
export const PokeImgFront = styled.img`
  width: 150px;
`;
export const PokeImgBack = styled.img`
  width: 150px;
  margin-left: 10px;
`;
export const CardLeft = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  width: 320px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  line-height: 20px;
  background-image: url(${(props) => cards2[props.type]});
  transform: perspective(300px) rotateY(15deg);
  transition: all 1s ease 0s;
  font-family: "comic sans ms";
  &:hover {
    transform: perspective(350px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }
  h3 {
    margin-top: 0;
  }
  li {
    list-style: none;
    margin: 6px;
    padding: 6px;
    background-color: white;
    border-radius: 8px;
    font-family: "Comic Sans ms";
    font-weight: 800;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  &:hover {
    transform: perspective(350px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }
  p {
    font-size: 20px;
  }
  h3 {
    font-size: 25px;
    margin-bottom: 8px;
  }
  @media screen and (max-width: 1000px) {
    transform: none;
    transition: none;
    :hover {
      transform: none;
      transition: none;
    }
  }
`;
export const CardCenter = styled.div`
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
export const CardRight = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  width: 320px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  line-height: 20px;
  background-image: url(${(props) => cards2[props.type]});
  transform: perspective(300px) rotateY(-15deg);
  transition: all 1s ease 0s;
  font-family: "comic sans ms";
  h3 {
    font-size: 25px;
    margin-bottom: 8px;
  }
  h2 {
    font-size: 18px;
  }
  h1 {
    font-size: 25px;
    margin-top: 18px;
  }
  &:hover {
    transform: perspective(350px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }
  @media screen and (max-width: 1000px) {
    transform: none;
    transition: none;
    :hover {
      transform: none;
      transition: none;
    }
  }
`;
export const Name = styled.h1`
  font-size: 48px;
  text-align: center;
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
export const ProgressBarOut = styled.div`
  display: flex;
  width: 240px;
  border-radius: 5px;
  height: 25px;
  line-height: 100%;
  background-color: #eee;
 
  font-family: "comic sans ms";
  margin: 7px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 40%);

  div {
  }
`;
export const ProgressBar0 = styled.div`
  height: 60%;
  margin-left: 2px;
  display: flex;
  justify-content: center;
  align-self: center;
  transition: 5s ease 0.1s;
  border-radius: 5px;
  font-size: 20px;
`;
export const Stats = styled.div`
  display: flex;
`;
export const ContainerImages = styled.div`
  display: flex;
`;
