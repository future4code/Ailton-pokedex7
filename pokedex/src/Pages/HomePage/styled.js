import styled from "styled-components";
import Font2 from "../../assets/fonts/Pokemon-Solid.ttf";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;

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

export const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
  gap: 10px;
  
`;
export const Button = styled.button`
  cursor: pointer;
  display: flex;
  font-family: "Pokemon Solid";
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  align-items: center;
  font-size: 20px;
  :hover{
    background-color: lightgrey;
    box-shadow: 4px 4px 5px 3px grey;
  }
`;
