import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  align-items: center;
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
  @media screen and (max-width: 480px) {
    img {
      height: 250px;
    }
  }
`;
export const Battle = styled.img`
  cursor: pointer;
  width: 80px;
  position: fixed;
  margin-top: -65px;
  margin-left: 20px;

  @media screen and (max-width: 660px) {
    margin-top: 2px;
    margin-left: 0;
  }
`;
