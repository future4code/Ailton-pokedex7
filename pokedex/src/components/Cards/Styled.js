import styled from 'styled-components';
import CardImg from '../../assets/img/cardImg.png'

export const PokemonsImg = styled.img`
width: 150px;
margin-top: -5px;
`
export const Container = styled.div`
display: flex;
flex-direction: column;
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
padding-top: 15px;
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

img{

    margin-top: 15px;
    width: 35px;
   
}
`;

export const Type = styled.div `
display: flex;
margin-top: 10px;
`

export const Name = styled.h1`
    margin-top: 25px;
display: flex;
flex-direction: column;
align-items: center;
font-family: Pokemon Hollow, serif;
    /* margin-top: 0px; */
`

export const ButtonsContainer = styled.div`
display: flex;
    justify-content: flex-end;
    width: 55%;
    img{
        width: 50px;
        cursor: pointer;
    }
`;
