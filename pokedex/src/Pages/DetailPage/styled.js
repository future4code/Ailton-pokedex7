import styled from "styled-components";
// import CardImg from '../../assets/img/cardImg.png'
import CardImg from "../../assets/cards/blue.png";

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 820px) {
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

export const PokeImg = styled.img``;
export const CardLeft = styled.div`
  background-size: 100%;
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

  &:hover {
    transform: perspective(350px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }
`;

export const CardCenter = styled.div`
  width: 20%;
  margin-top: 3%;
  background-size: 100%;
  background-repeat: no-repeat;
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
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 5px;
  background-image: url(${CardImg});
  background-position: center;
  transform: perspective(300px) rotateY(-15deg);
  margin-top: 3.2%;
  transition: all 1s ease 0s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: perspective(350px) rotateY(0deg);
    transition: all 0.8s ease 0s;
  }
`;

export const ProgressBarOut = styled.div`
  width: 90%;
  height: 12px;
  background-color: #ccc;
  display: flex;
  align-items: center;
`;

export const ProgressBar0 = styled.div`
  position: absolute;
  height: 8px;
  background-color: gold;
  animation: progress-animation 5s infinite;

  @keyframes progress-animation {
    0% {
      width: 0%;
    }
    100% {
      width: 45%;
      /* {details?.stats[0].base_stat} */
    }
  }
`;

export const ProgressBar1 = styled.div`
  position: absolute;
  height: 8px;
  background-color: gold;
  animation: progress-animation 5s infinite;

  @keyframes progress-animation {
    0% {
      width: 0%;
    }
    100% {
      width: 49%;
      /* {details?.stats[0].base_stat} */
    }
  }
`;

export const ProgressBar2 = styled.div`
  position: absolute;
  height: 8px;
  background-color: gold;
  animation: progress-animation 5s infinite;

  @keyframes progress-animation {
    0% {
      width: 0%;
    }
    100% {
      width: 49%;
      /* {details?.stats[0].base_stat} */
    }
  }
`;

export const ProgressBar3 = styled.div`
  position: absolute;
  height: 8px;
  background-color: gold;
  animation: progress-animation 5s infinite;

  @keyframes progress-animation {
    0% {
      width: 0%;
    }
    100% {
      width: 65%;
      /* {details?.stats[0].base_stat} */
    }
  }
`;

export const ProgressBar4 = styled.div`
  position: absolute;
  height: 8px;
  background-color: gold;
  animation: progress-animation 5s infinite;

  @keyframes progress-animation {
    0% {
      width: 0%;
    }
    100% {
      width: 65%;
      /* {details?.stats[0].base_stat} */
    }
  }
`;

export const ProgressBar5 = styled.div`
  position: absolute;
  height: 8px;
  background-color: gold;
  animation: progress-animation 5s infinite;

  @keyframes progress-animation {
    0% {
      width: 0%;
    }
    100% {
      width: 45%;
      /* {details?.stats[0].base_stat} */
    }
  }
`;

export const Stats = styled.div`
  display: flex;
`
