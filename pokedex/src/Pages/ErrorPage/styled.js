import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 500px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    width: 350px;
  }
`;
export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  button {
    font-size: 24px;
    font-weight: bold;
    width: 170px;
    height: 40px;
    text-shadow: 1px 1px black;
    box-shadow: 0px 0px 1px 1px white, 0 0 0 3px black;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export const Error = styled.h1`
  margin-top: -40px;
  font-size: 42px;
  text-align: center;
  text-shadow: 1px black;
  font-family: "Pokemon Solid";
  @media screen and (max-width: 480px) {
    font-size: 30px;
    margin-top: 0;
  }
`;
