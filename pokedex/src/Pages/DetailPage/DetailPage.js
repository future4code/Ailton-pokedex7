import React from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { typesIcons } from "../../components/PokeTypes/PokemonTypeIcons";
import PokeOpen from "../../assets/img/pokeOpen.png";
import PokeClose from "../../assets/img/pokeClose.png";
import GlobalContext from "../../components/Global/GlobalContext";
import { Progress } from "./ProgressBar";
import { goBack } from "../../routes/coordinator";
import {
  DetailContainer,
  CardLeft,
  CardCenter,
  CardRight,
  ContainerImages,
  PokeImg,
} from "./styled";
import {
  PokemonsImg,
  Name,
  Type,
  TypeImg,
  ButtonsContainer,
} from "../../components/Cards/Styled";


export default function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const pokedexLocal = localStorage.getItem("pokedex");
  const [details, setDetails] = useState();
  const { pokedex, setPokedex, isLoading, setIsLoading } =
    useContext(GlobalContext);

  useEffect(() => {
    setPokedex(JSON.parse(pokedexLocal));
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
    console.log(newToPokedex)
    window.alert(`${newToPokedex.name}, eu escolho você!`);

    const pokedexLocal = localStorage.getItem("pokedex");
    if (!!pokedexLocal) {
      const newToPokedexLocal = JSON.parse(pokedexLocal);
      const hasPokemon = newToPokedexLocal.find((pokemon) => {
        return pokemon.id === newToPokedex.id;
      });
      if (hasPokemon) {
        return;
      }
      const updatedPokedex = [...JSON.parse(pokedexLocal), newToPokedex];
      localStorage.setItem("pokedex", JSON.stringify(updatedPokedex));
      setPokedex(updatedPokedex);
    } else {
      localStorage.setItem("pokedex", JSON.stringify([newToPokedex]));
      setPokedex([newToPokedex]);
    }
  };

  const ListPokedex = pokedex?.map((item) => {
    return item.name;
  });


  return (
    <>
      <Header />
      <DetailContainer>
        <CardLeft type={details?.types[0]?.type?.name}>
          <h3>Moves:</h3>
          <ul>
            <li>{details?.moves[0]?.move?.name}</li>
            <li>{details?.moves[1]?.move?.name}</li>
            <li>{details?.moves[2]?.move?.name}</li>
            <li>{details?.moves[3]?.move?.name}</li>
            <li>{details?.moves[4]?.move?.name}</li>
            <li>{details?.moves[5]?.move?.name}</li>
          </ul>
          <br />
          
            <strong>Altura: </strong>
            {(details?.height * 0.1).toFixed(2)}M
  
          
            <p><strong>Peso:</strong> {details?.weight - 0.1}Kg
          </p>

          <ContainerImages>
            <PokeImg
              //src={`https://professorlotus.com/Sprites/${pokemon.name}.gif`}
              src={
                !details?.sprites?.front_shiny
                  ? details?.sprites?.front_default
                  : details?.sprites?.front_shiny
              }
              alt={details?.name}
              //   onClick={() => goToDetailPage(navigate, details?.id)}
            />

            <PokeImg
              //src={`https://professorlotus.com/Sprites/${pokemon.name}.gif`}
              src={
                details?.sprites?.back_shiny
                  ? details?.sprites?.back_shiny
                  : details?.sprites?.back_default
              }
              alt={details?.name}
              //   onClick={() => goToDetailPage(navigate, details?.id)}
            />
          </ContainerImages>
        </CardLeft>
        <CardCenter type={details?.types[0]?.type?.name}>
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
            <TypeImg src={typesIcons[details?.types[0].type?.name]} />
            <TypeImg src={typesIcons[details?.types[1]?.type?.name]} />
          </Type>
          <ButtonsContainer>
          {ListPokedex?.includes(details?.name) && (
          <img
            className="pokeClose"
            src={PokeClose}
            alt={"Remover da Pokedex"}
            onClick={() => alert("Já está na pokedex!")}
          />
        )}
        {!ListPokedex?.includes(details?.name) && (
          <img
            className="pokeOpen"
            onClick={() => addToPokedex(details)}
            src={PokeOpen}
            alt={"Capiturar"}
          />
        )}
          </ButtonsContainer>
        </CardCenter>
        <CardRight type={details?.types[0]?.type?.name}>
          <button
          onClick={() => goBack(navigate(-1))}> teste
          </button>
          <h3>Base stats:</h3>
          <div>
            HP: {<Progress bar={details?.stats[0].base_stat * (100 / 230)}/>}
          </div>
          <div>
          Attack:{<Progress bar={details?.stats[1].base_stat * (100 / 230)} />}
          </div>
          <div>
          Defense:{<Progress bar={details?.stats[2].base_stat * (100 / 230)} />}
          </div>
          <div>
          SP Attack: {<Progress bar={details?.stats[3].base_stat * (100 / 230)} />}
          </div>
          <div>
          SP Defense: {<Progress bar={details?.stats[4].base_stat * (100 / 230)} />}
          </div>
          <div>
          Speed:{<Progress bar={details?.stats[5].base_stat * (100 / 230)} />}
          </div>
          <div>
            <strong>Total stats:</strong>
            {details?.stats[0].base_stat +
              details?.stats[1].base_stat +
              details?.stats[2].base_stat +
              details?.stats[3].base_stat +
              details?.stats[4].base_stat +
              details?.stats[5].base_stat}
          </div>
        </CardRight>
      </DetailContainer>
    </>
  );
}
