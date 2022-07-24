import styled from "styled-components";

export const HeaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  @media screen and (max-height: 630px) {
    height: 28vh;
    
  }
`;

export const Logo = styled.img`
  width: 400px;
  display: flex;
  justify-content: end;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 280px;
  }
`;

export const Closed = styled.img`
  width: 120px;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    width: 80px;
  }
`;
export const Open = styled.img`
  width: 150px;

  @media screen and (max-width: 480px) {
    width: 90px;
  }
`;
