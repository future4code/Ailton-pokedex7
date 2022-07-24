import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 500px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 20px;
    font-size: 24px;
    width: 170px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export const Error = styled.h1`
  margin-top: -150px;
  font-size: 42px;
  text-align: center;
  text-shadow: 2px 2px black;
`;
