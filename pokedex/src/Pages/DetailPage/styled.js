import styled from "styled-components";
// import CardImg from '../../assets/img/cardImg.png'
import CardImg from "../../assets/cards/blue.png";
import { cards } from "../../components/PokeTypes/PokeTypesCards";
import { cards2 } from "../../components/PokeTypes/PokeTypesCards";

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;

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
const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  img {
    width: 500px;
    height: 331.42px;
  }
`;
export const PokeImg = styled.img`
  width: 100px;
  padding: -100px;
`;
export const CardLeft = styled.div`
  background-size: 100%;
  width: 20%;
  height: 65vh;
  background-repeat: no-repeat;
  border-radius: 5px;
  background-image: url(${(props) => cards2[props.type]});
  background-position: center;
  transform: perspective(300px) rotateY(15deg);
  margin-top: 3.2%;
  transition: all 1s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: justify;

  &:hover {
    transform: perspective(350px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }

  p {
    font-size: 20px;
  }
  h3 {
    font-size: 25px;
    margin-top: 40px;
  }
`;
export const CardCenter = styled.div`
  width: 20%;
  margin-top: 3%;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 65vh;
  border-radius: 5px;
  background-image: url(${(props) => cards[props.type]});
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    font-family: Pokemon Hollow, serif;
    font-weight: 900;
    font-size: 50px;
  }
`;
export const CardRight = styled.div`
  width: 20%;
  height: 65vh;
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 5px;
  background-position: center;
  background-image: url(${(props) => cards2[props.type]});
  transform: perspective(300px) rotateY(-15deg);
  margin-top: 3.2%;
  transition: all 1s ease 0s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: perspective(350px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }
`;
export const ProgressBarOut = styled.div`
  width: 240px;
  height: 20px;
  background-color: #ccc;
`;
export const ProgressBar0 = styled.div`
  height: 18px;
  background-color: #ffcb04;
  width: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 5s ease 0.1s;
`;
export const ProgressBar1 = styled.div`
  position: absolute;
  height: 8px;
  background-color: gold;
  animation: progress-animation1 5s infinite;

  @keyframes progress-animation1 {
    0% {
      width: 0%;
    }
    100% {
      width: ${({ bar }) => bar}%;
    }
  }
`;
export const ProgressBar2 = styled.div`
  position: absolute;
  height: 8px;
  background-color: gold;
  animation: progress-animation2 5s infinite;

  @keyframes progress-animation2 {
    0% {
      width: 0%;
    }
    100% {
      width: ${({ bar }) => bar}%;
    }
  }
`;
export const ProgressBar3 = styled.div`
  position: absolute;
  height: 8px;
  background-color: gold;
  animation: progress-animation3 5s infinite;

  @keyframes progress-animation3 {
    0% {
      width: 0%;
    }
    100% {
      width: ${({ bar }) => bar}%;
    }
  }
`;
export const ProgressBar4 = styled.div`
  position: absolute;
  height: 8px;
  background-color: gold;
  animation: progress-animation4 5s infinite;

  @keyframes progress-animation4 {
    0% {
      width: 0%;
    }
    100% {
      width: ${({ bar }) => bar}%;
    }
  }
`;
export const ProgressBar5 = styled.div`
  position: absolute;
  height: 8px;
  background-color: gold;
  animation: progress-animation5 5s infinite;

  @keyframes progress-animation5 {
    0% {
      width: 0%;
    }
    100% {
      width: ${({ bar }) => bar}%;
    }
  }
`;
export const Stats = styled.div`
  display: flex;
`;
