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
  width: 110px;
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
  flex-direction: column;
  align-items: center;
  padding: 2% 5%;
  justify-content: space-around;

  li{
    list-style: none;
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
  padding: 2% 5%;
  justify-content: space-around;

  &:hover {
    transform: perspective(350px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }
`;
export const ProgressBarOut = styled.div`
  width: 240px;
  height: 80%;
  background-color: #ccc;
  display: flex;
  align-content: center;
  border-radius: 5px;
`;
export const ProgressBar0 = styled.div`
  height: 60%;
  background-color: #ffcb04;
  width: 0px;
  display: flex;
  justify-content: center;
  align-self: center;
  transition: 5s ease 0.1s;
  border-radius: 5px;
`;
export const Stats = styled.div`
  display: flex;
`;
export const ContainerImages = styled.div`
display: flex;
`
