import styled from "styled-components";
import { cards } from "../../components/PokeTypes/PokeTypesCards";

export const BattleArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* @media only screen and (max-width: 480px) {
    flex-direction: column-reverse;
  } */
`;
export const BattleArena = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
export const Rounds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 10%;
`;

export const Scores = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
`;

export const Score = styled.h1`
  display: flex;
`;
export const ButtonRound = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px darkgrey;
  border: 1px solid black;
  margin: 0 auto;
`;

//Card
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
  transform: perspective(300px) rotateY(10deg);
  transition: all 1s ease 0s;
  font-family: "comic sans ms";
  img {
    transition: transform 0.5s;
  }
/*    &:hover {
    transform: perspective(350px) rotateY(180deg);
    transition: all 0.8s ease 0s;
  } */
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
export const CardContainerRight = styled.div`
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
  transform: perspective(300px) rotateY(-10deg);
  transition: all 1s ease 0s;
  font-family: "comic sans ms";
  img {
    transition: transform 0.5s;
  }
  /*  &:hover {
    transform: perspective(350px) rotateY(180deg);
    transition: all 0.8s ease 0s;
  } */
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
  width: 180px;
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
export const StatsSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media only screen and (max-width: 480px) {
    height: 20px;
    align-items: flex-end;
    margin-bottom: 0;
  }
`;
//Barra q é botão
export const ProgressBarOut = styled.button`
  display: flex;
  width: 240px;
  border-radius: 5px;
  height: 30px;
  line-height: 100%;
  background-color: #eee;

  font-family: "comic sans ms";
  margin: 7px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 40%);
  cursor: pointer;

  div {
  }
`;
export const BarOut = styled.button`
  width: 230px;
  height: 25px;
  border: none;
  cursor: pointer;
`;
export const ProgressBar0 = styled.div`
  height: 90%;
  margin-left: 2px;
  display: flex;
  justify-content: center;
  align-self: center;
  transition: 5s ease 0.1s;
  border-radius: 5px;
  font-size: 12px;
  overflow: visible;
  font-family: "comic sans ms";
`;
