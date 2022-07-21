import styled from "styled-components";

export const HeaderCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

export const Logo = styled.img`
  width: 500px;
  display: flex;
  justify-content: end;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 290px;
    margin-left: 50px;
    
  }
`;

export const Closed = styled.img`
  width: 120px;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    width: 90px;
    margin-right: 40px;
    
  }
`;

export const Open = styled.img`
  width: 150px;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    width: 100px;
    margin-right: 50px;
    
  }
`;
