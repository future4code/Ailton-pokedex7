import styled from "styled-components";
import CardImg from "../../assets/cards/blue.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
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
`;

export const CardContainer = styled.div`
  background-image: url(${CardImg});
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
`;
export const PokemonsImg = styled.img`
  width: 240px;
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
export const TipeImg = styled.img`
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
