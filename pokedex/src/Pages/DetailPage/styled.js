import styled from "styled-components";
import { cards } from "../../components/PokeTypes/PokeTypesCards";
import { cards2 } from "../../components/PokeTypes/PokeTypesCards";

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1000px) {
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
  /* padding: -100px; */
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

  &:hover {
    transform: perspective(350px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }

  li {
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
`;
