import React from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { typesIcons, colors } from "../../components/PokeTypes/PokemonTypeIcons";
import PokeOpen from "../../assets/img/pokeOpen.png";
import PokeClose from "../../assets/img/pokeClose.png";
import {GlobalContext} from "../../components/Global/GlobalContext";
import { Progress } from "./ProgressBar";
import LoadingImg from "../../assets/img/loading.gif";
import { AiFillHeart } from "react-icons/ai";
import Swal from "sweetalert2";
import {
  GiBroadsword,
  GiSlashedShield,
  GiShieldBounces,
  GiPointySword,
  GiFootPlaster,
} from "react-icons/gi";
import {
  DetailContainer,
  CardLeft,
  CardCenter,
  CardRight,
  ContainerImages,
  PokeImgFront,
  PokeImgBack,
  Loading,
  Name,
  Type,
  TypeImg,
  ButtonsContainer,
  PokemonsImg,
} from "./styled";

export default function DetailPage() {
  const params = useParams();
  const pokedexLocal = localStorage.getItem("pokedex");
  const [details, setDetails] = useState();
  const { pokedex, setPokedex, isLoading } = useContext(GlobalContext);

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
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado. Tente novamente mais tarde",
          footer: `Código do erro ${err.response.status}`,
        });
      });
  };

  const addToPokedex = (newToPokedex) => {
    Swal.fire(`Gotcha!!<br/>${(newToPokedex.name).toUpperCase()}, eu escolho você!`,"", "success");

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
      {details && !isLoading ? (
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
            {/* <>
          <p><strong>Altura: </strong>
          {(details?.height * 0.1).toFixed(2)}M</p>
          <p>
            <strong>Peso:</strong> {details?.weight - 0.1}Kg
          </p>
          </> */}
            <h2>Shiny</h2>
            <ContainerImages>
              <PokeImgFront
                src={
                  !details?.sprites?.front_shiny
                    ? details?.sprites?.front_default
                    : details?.sprites?.front_shiny
                }
                alt={details?.name}
              />

              <PokeImgBack
                src={
                  details?.sprites?.back_shiny
                    ? details?.sprites?.back_shiny
                    : details?.sprites?.back_default
                }
                alt={details?.name}
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
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details?.id}.png`}
              alt={details?.name}
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
                  onClick={() => Swal.fire(`${(details?.name).toUpperCase()} já está na sua pokedex!`,"", "success")}
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
            <h3>Base stats:</h3>
            <div>
              <h2>
                <AiFillHeart color="red" /> HP:{" "}
              </h2>
              {<Progress color="red" bar={details?.stats[0].base_stat * (100 / 230)} />}
            </div>
            <div>
              <h2>
                <GiBroadsword color="orange" /> Attack:
              </h2>
              {<Progress color="orange" bar={details?.stats[1].base_stat * (100 / 230)} />}
            </div>
            <div>
              <h2>
                <GiSlashedShield color="blue" /> Defense:
              </h2>
              {<Progress color="blue" bar={details?.stats[2].base_stat * (100 / 230)} />}
            </div>
            <div>
              <h2>
                <GiPointySword color="yellow" /> SP Attack:{" "}
              </h2>
              {<Progress color="yellow" bar={details?.stats[3].base_stat * (100 / 230)} />}
            </div>
            <div>
              <h2>
                <GiShieldBounces color="green" />
                SP Defense:{" "}
              </h2>
              {<Progress color="green"bar={details?.stats[4].base_stat * (100 / 230)} />}
            </div>
            <div>
              <h2>
                <GiFootPlaster color="pink" />
                Speed:
              </h2>
              {<Progress color="pink" bar={details?.stats[5].base_stat * (100 / 230)} />}
            </div>
            <h1>
              <strong>Total stats:</strong>
              {details?.stats[0].base_stat +
                details?.stats[1].base_stat +
                details?.stats[2].base_stat +
                details?.stats[3].base_stat +
                details?.stats[4].base_stat +
                details?.stats[5].base_stat}
            </h1>
          </CardRight>
        </DetailContainer>
      ) : (
        <Loading>
          <img src={LoadingImg} alt="Loading" />
        </Loading>
      )}
    </>
  );
}
