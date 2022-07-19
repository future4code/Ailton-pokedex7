import styled from "styled-components";
import CardImg from '../../assets/img/cardImg.png'

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`

export const CardLeft = styled.div`
  width: 20%;
  height: 65vh;
  background-repeat: no-repeat;
  border-radius: 5px;
  background-image: url(${CardImg});
  background-position: center;
  transform: perspective(300px) rotateY(15deg);
  margin-top: 3.2%;
  transition: all 1s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    transform: perspective(350px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }
`;

export const CardCenter = styled.div`
  width: 20%;
  margin-top: 3.2%;
  height: 65vh;
  border-radius: 5px;
  background-image: url(${CardImg});
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CardRight = styled.div`
  width: 20%;
  height: 65vh;
  border-radius: 5px;
  background-image: url(${CardImg});
  background-position: center;
  transform: perspective(300px) rotateY(-15deg);
  margin-top: 3.2%;
  transition: all 1s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    transform: perspective(350px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }
`;
