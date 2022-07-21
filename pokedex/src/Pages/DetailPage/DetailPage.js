import React from "react";
import axios from "axios";
import { DetailContainer, CardLeft, CardCenter, CardRight } from "./styled";
import Header from "../../components/Header";
import styled from "styled-components";
import { BASE_URL } from "../../constants/url";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { typesIcons } from "../../components/PokeTypes/PokemonTypeIcons"
import LoadingImg from "../../assets/img/loading.gif"
import PokeOpen from "../../assets/img/pokeOpen.png"
import PokeClose from "../../assets/img/pokeClose.png"
import GlobalContext from "../../components/Global/GlobalContext";
import { 
  Stats,
  ProgressBar0, 
  ProgressBar1, 
  ProgressBar2, 
  ProgressBar3, 
  ProgressBar4, 
  ProgressBar5, 
  ProgressBarOut 
} from "./styled";
import {
  PokemonsImg,
  Name,
  Type,
  TipeImg,
  ButtonsContainer,
} from "../../components/Cards/Styled";

const Container = styled.div``;

export default function DetailPage() {
  const params = useParams();
  const [details, setDetails] = useState();
  const [isAdded, setIsAdded] = useState(false);
  const { pokemon, setPokemon, pokedex, setPokedex, isLoading, setIsLoading } =
    useContext(GlobalContext);

  console.log(params);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios
      .get(`${BASE_URL}pokemon/${params.id}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToPokedex = (newToPokedex) => {
    window.alert("PokeName, eu escolho você!");
    // window.location.reload()

    const pokedexLocal = localStorage.getItem("pokedex");
    if (pokedexLocal) {
      const updatedPokedex = [...JSON.parse(pokedexLocal), newToPokedex];
      localStorage.setItem("pokedex", JSON.stringify(updatedPokedex));
    } else {
      localStorage.setItem("pokedex", JSON.stringify([newToPokedex]));
    }
    status()
  };
    
      const status = () => {
        const index = pokedex?.findIndex((item) => {
          return item.name === details.name;
          
        });
        setIsAdded(index);
      };
      
     

  return (
    <Container>
      <Header />
      <DetailContainer>
        <CardLeft>
        <PokemonsImg
            //src={`https://professorlotus.com/Sprites/${pokemon.name}.gif`}
            src={details?.sprites?.front_shiny ? details?.sprites?.front_shiny : details?.sprites?.front_default}
            alt={details?.name}
            //   onClick={() => goToDetailPage(navigate, details?.id)}
          />

        <PokemonsImg
            //src={`https://professorlotus.com/Sprites/${pokemon.name}.gif`}
            src={details?.sprites?.back_shiny ? details?.sprites?.back_shiny : details?.sprites?.back_default}
            alt={details?.name}
            //   onClick={() => goToDetailPage(navigate, details?.id)}
          />
        </CardLeft>
        <CardCenter>
      <span>
        {details?.id < 10
          ? "00" + details?.id
          : details?.id >= 10 && details?.id < 100
          ? "0" + details?.id
          : details?.id}
      </span>
      <PokemonsImg
        //src={`https://professorlotus.com/Sprites/${pokemon.name}.gif`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details?.id}.png`}
        alt={details?.name}
        //   onClick={() => goToDetailPage(navigate, details?.id)}
      />
      <Name>{details?.name}</Name>
      <Type>
      <TipeImg src={typesIcons[details?.types[0].type?.name]} />
      <TipeImg src={typesIcons[details?.types[1]?.type?.name]} />
      </Type>
      <ButtonsContainer>
      {isAdded ? (
        <img className="pokeClose"
          src={PokeClose}
          alt={"Capiturar"}
          onClick={() => alert("Já está na pokedex!")}
        />
      ) : (
        <img className="pokeOpen"
          onClick={() => (addToPokedex(details))}
          src={PokeOpen}
          alt={"Capiturar"}
        />
      )}
      </ButtonsContainer>
      </CardCenter>
        <CardRight>
        <h3>Altura:</h3>
<p>{(details?.height * 0.1).toFixed(2)} M</p>
<h3>Peso:</h3>
<span>{details?.weight - 0.1} Kg</span>
<h3>Moves:</h3>
<span>{details?.moves[0].move.name}</span>
<span>{details?.moves[1].move.name}</span>
<span>{details?.moves[2].move.name}</span>
<span>{details?.moves[3].move.name}</span>
<span>{details?.moves[4].move.name}</span>
<h3>Base stats:</h3>
<Stats>
<p>{details?.stats[0].stat.name}:</p>
<p>{details?.stats[0].base_stat}</p>
<ProgressBarOut>
<ProgressBar0></ProgressBar0>
</ProgressBarOut>
</Stats>
<Stats>
<span>{details?.stats[1].stat.name}: {details?.stats[1].base_stat}</span>
<ProgressBarOut>
<ProgressBar1></ProgressBar1>
</ProgressBarOut>
</Stats>
<span>
{details?.stats[2].stat.name}: {details?.stats[2].base_stat}
</span>
<ProgressBarOut>
<ProgressBar2></ProgressBar2>
</ProgressBarOut>
<span>
{details?.stats[3].stat.name}: {details?.stats[3].base_stat}
</span>
<ProgressBarOut>
<ProgressBar3></ProgressBar3>
</ProgressBarOut>
<span>
{details?.stats[4].stat.name}: {details?.stats[4].base_stat}
</span>
<ProgressBarOut>
<ProgressBar4></ProgressBar4>
</ProgressBarOut>
<span>
{details?.stats[5].stat.name}: {details?.stats[5].base_stat}
</span>
<ProgressBarOut>
<ProgressBar5></ProgressBar5>
</ProgressBarOut>
        </CardRight>
      </DetailContainer>
    </Container>
  );
}
