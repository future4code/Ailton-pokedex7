import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../constants/url";
import { GlobalStateBattle } from "./GlobalContext"

const GlobalBattle = (props) => {
  const [pokeUser, setPokeUser] = useState([{}]);
  const [opponent, setOpponent] = useState([{}]);
  const [opponentPoints, setOpponentPoints] = useState(0);
  const [userPoints, setUserPoints] = useState(0);
  const [rounds, setRounds] = useState(1);
  const [choiceStats, setChoiceStats] = useState({});
  const [choiceMade, setChoiceMade] = useState(false);
  const [whoWon, setWhoWon] = useState("");

  useEffect(() => {
    setChoiceStats([]);
    setChoiceMade(false);
    setWhoWon("");

    const pokeUserId = Math.floor(Math.random() * 904) + 1;
    getPokeUser(pokeUserId);
    getOpponent();
    endGame();
  }, [rounds]);

  const getPokeUser = (idRaffled) => {
    axios
      .get(`${BASE_URL}pokemon/${idRaffled}`)
      .then((res) => {
        setPokeUser(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const getOpponent = () => {
    const pokeOpponentId = Math.floor(Math.random() * 904) + 1;

    axios
      .get(`${BASE_URL}pokemon/${pokeOpponentId}`)
      .then((res) => {
        setOpponent(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const userStats =
    pokeUser.stats &&
    pokeUser.stats.map((stat) => {
      let stat = [];
      stat.push(stat.base_stat);
      return stat;
    });

  const opponentStats =
    opponent.stats &&
    opponent.stats.map((stat) => {
      let stat = [];
      stat.push(stat.base_stat);
      return stat;
    });

  const verifyWhoWon = (index, chosenStat) => {

    setChoiceStats([chosenStat, opponentStats[index]]);
    setChoiceMade(true);

    const opponent = parseInt(opponentStats[index]);
    const user = parseInt(userStats[index]);

    if (opponent > user) {
      setWhoWon("Oh, no! Você perdeu a rodada!");
      return setOpponentPoints(opponentPoints + 1);
    } else if (user > opponent) {
      setWhoWon("Good job! Você venceu a rodada!");
      return setUserPoints(userPoints + 1);
    } else if (user === opponent) {
      return setWhoWon("Rodada Empatada... Vamos para a próxima!");
    }
  };

  const changeRound = () => {
    return setRounds(rounds + 1);
  };

  const endGame = () => {
    if (rounds > 5) {
      setUserPoints(0);
      setOpponentPoints(0);
      setRounds(0);

      if (userPoints > opponentPoints) {
        Swal.fire(`Você é o campeão! Dentre as 5 rodadas você venceu mais vezes!`,"", "success");
      } else {
        Swal.fire("Oh, no!!! Dentre as 5 rodadas seu oponente venceu mais vezes!", "");
      }
    }
  };


  return (
    <GlobalStateBattle.Provider
      value={{
        userPoints,
        whoWon,
        choiceMade,
        opponentPoints,
        rounds,
        pokeUser,
        opponent,
        userStats,
        choiceStats,
        verifyWhoWon,
        changeRound,
      }}
    >
      {props.children}
    </GlobalStateBattle.Provider>
  );
};

export default GlobalBattle;
