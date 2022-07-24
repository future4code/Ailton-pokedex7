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
    img{
      width: 300px;
      height: 150px;
    }
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
  :hover {
    background-color: lightcoral;
    box-shadow: 4px 3px 6px 2px lightcoral;
  }
`;
