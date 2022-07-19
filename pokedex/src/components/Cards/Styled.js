import styled from 'styled-components';
import CardImg from '../../assets/img/cardImg.png'

export const PokemonsImg = styled.img`
width: 180px;
`
export const CardContainer = styled.div`
background-image: url(${CardImg});
background-repeat: no-repeat;
background-size: 100%;
width: 350px;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 10px;
line-height: 20px;

span{
    font-family: Pokemon Hollow, serif;
    font-weight: 900;
    font-size: 40px;
}
` 
export const PokeInfo = styled.div`
margin-top: 25px;
display: flex;
flex-direction: column;
align-items: center;
font-family: Pokemon Hollow, serif;


`;
export const ButtonsContainer = styled.div`
margin-top: 25px;
display: flex;
align-items: center;
`;
