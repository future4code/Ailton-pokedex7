import styled from "styled-components";
import { cards } from "../../components/PokeTypes/PokeTypesCards";

export const BattleArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    margin-top: -130px;
  }
`;
export const BattleArena = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Rounds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  h2 {
    font-family: "comic sans ms";
  }
`;

export const Scores = styled.div`
  display: flex;
  justify-content: space-around;
  width: 96vw;

  h2 {
    font-family: "Pokemon solid";
  }

  @media only screen and (max-width: 480px) {
    margin-top: 95px;
  }
`;

export const Score = styled.div``;
export const ButtonRound = styled.button``;

export const CardContainer = styled.div`
  cursor: pointer;
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
  span {
    font-family: Pokemon Hollow, serif;
    font-weight: 900;
    font-size: 50px;
  }
  @media screen and (max-width: 480px) {
    span {
      margin-top: 15px;
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
  span {
    font-family: Pokemon Hollow, serif;
    font-weight: 900;
    font-size: 50px;
  }
  @media screen and (max-width: 480px) {
    span {
      margin-top: 15px;
    }
  }
`;
export const PokemonsImg = styled.img`
  width: 240px;
`;
export const Name = styled.h1`
  font-size: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Pokemon Hollow";

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const NameMobile = styled.h1`
  display: none;
  @media screen and (max-width: 1000px) {
    font-size: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Pokemon Hollow";
  }
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
export const ProgressBarOut = styled.div`
  display: flex;
  width: 240px;
  border-radius: 6px;
  height: 30px;
  line-height: 100%;
  background-color: #eee;
  font-family: "comic sans ms";
  margin: 7px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 40%);
  cursor: pointer;
`;
export const BarOut = styled.button`
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: relative;
  border: none;
  margin: 3px;
  overflow: hidden;
`;
export const ProgressBar0 = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  transition: 5s ease 0.1s;
  border-radius: 5px;
  font-size: 18px;
  font-family: "pokemon solid";
`;
export const Type = styled.div`
  display: flex;
`;
export const TypeImg = styled.img`
  margin-top: 30px;
  height: 40px;
  margin-bottom: 20px;
`;

export const Center = styled.div`
  text-align: center;
  width: 250px;

  h1 {
    font-family: "Pokemon Hollow";
  }
  button {
    width: 150px;
    height: 35px;
    margin: 20px 0;
    box-shadow: 8px 8px 8px darkgrey;
    border: 1px solid black;

    font-size: 18px;
    text-shadow: 1px 1px black;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const Rules = styled.img`
  cursor: pointer;
  width: 80px;
  margin-top: -65px;
  margin-left: 20px;

  @media screen and (max-width: 660px) {
    margin-top: 2px;
    margin-left: 5px;
  }
`;
