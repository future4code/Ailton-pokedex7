import React, { useContext } from "react";
import { GlobalContext } from "../../components/Global/GlobalContext";
import Header from "../../components/Header/Header";
import { ProgressButton } from "./ProgressButton";
import { AiFillHeart } from "react-icons/ai";
import {
  GiBroadsword,
  GiSlashedShield,
  GiShieldBounces,
  GiPointySword,
  GiFootPlaster,
} from "react-icons/gi";
import {
  CardContainer,
  CardContainerRight,
  PokemonsImg,
  Name,
  ButtonRound,
  BattleArena,
  Rounds,
  Board,
  Scores,
  Score,
  BattleArea,
  ProgressBarOut,
  StatsSpace,
} from "./styled";

function BattlePage() {
  const {
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
    endGame
  } = useContext(GlobalContext);

  return (
    <div>
      <Header page={"home"} />
      <BattleArea>
          <Rounds>
            <p>
              Escolha uma característica do seu Pokémon. Se for maior que a do
              seu oponente, você vence!!
            </p>
            <p>Rodada: {rounds}ª</p>
          </Rounds>
          <Board>
            <Scores>
              <Score>
                Usuário: <Name>{userPoints}</Name>
              </Score>
              {whoWon !== "" && <h2>{whoWon}</h2>}
              <Score>
                Oponente: <Name>{opponentPoints}</Name>
              </Score>
            </Scores>
            {choiceMade && (
              <ButtonRound onClick={() => changeRound()}>Novo Round</ButtonRound>
            )}
          </Board>

        <BattleArena>
          <CardContainer type={pokeUser?.types[0]?.type?.name}>
            <Name>{pokeUser?.name}</Name>

            <PokemonsImg
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeUser?.id}.png`}
            />

            <StatsSpace>
              <div>
                <ProgressBarOut
                  disabled={choiceMade}
                  onClick={() => verifyWhoWon(0, "HP")}
                >
                  {
                    <ProgressButton
                      icon={<AiFillHeart />}
                      color="red"
                      statItem="HP"
                      bar={pokeUser?.stats[0].base_stat * (100 / 230)}
                    />
                  }
                </ProgressBarOut>
              </div>
              <div>
                <ProgressBarOut
                  disabled={choiceMade}
                  onClick={() => verifyWhoWon(1, "Attack")}
                >
                  {
                    <ProgressButton
                      icon={<GiBroadsword />}
                      color="orange"
                      statItem="Attack"
                      bar={pokeUser?.stats[1].base_stat * (100 / 230)}
                    />
                  }
                </ProgressBarOut>
              </div>
              <div>
                <ProgressBarOut
                  disabled={choiceMade}
                  onClick={() => verifyWhoWon(2, "Defense")}
                >
                  {
                    <ProgressButton
                      icon={<GiSlashedShield />}
                      color="blue"
                      statItem="Defense"
                      bar={pokeUser?.stats[2].base_stat * (100 / 230)}
                    />
                  }
                </ProgressBarOut>
              </div>
              <div>
                <ProgressBarOut
                  disabled={choiceMade}
                  onClick={() => verifyWhoWon(3, "Special Attack")}
                >
                  {
                    <ProgressButton
                      icon={<GiPointySword />}
                      color="yellow"
                      statItem="Special Attack"
                      bar={pokeUser?.stats[3].base_stat * (100 / 230)}
                    />
                  }
                </ProgressBarOut>
              </div>
              <div>
                <ProgressBarOut
                  disabled={choiceMade}
                  onClick={() => verifyWhoWon(4, "Special Defense")}
                >
                  {
                    <ProgressButton
                      icon={<GiShieldBounces />}
                      color="green"
                      statItem="Special Defense"
                      bar={pokeUser?.stats[4].base_stat * (100 / 230)}
                    />
                  }
                </ProgressBarOut>
              </div>
              <div>
                <ProgressBarOut
                  disabled={choiceMade}
                  onClick={() => verifyWhoWon(4, "Speed")}
                >
                  {
                    <ProgressButton
                      icon={<GiFootPlaster />}
                      color="pink"
                      statItem="Speed"
                      bar={pokeUser?.stats[4].base_stat * (100 / 230)}
                    />
                  }
                </ProgressBarOut>
              </div>
            </StatsSpace>
          </CardContainer>

          <Name>Vs</Name>
          <CardContainerRight type={opponent?.types[0]?.type?.name}>
            <Name>{opponent?.name}</Name>

            <PokemonsImg
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${opponent?.id}.png`}
              alt={opponent?.name}
            />

            {choiceStats?.length > 0 && (
              <StatsSpace>
                <ProgressBarOut
                >
                  {
                    <ProgressButton
                      icon={<AiFillHeart />}
                      color="lightgrey"
                      statItem={choiceStats[0]}
                      bar={choiceStats[1] * (100 / 230)}
                    />
                  }
                </ProgressBarOut>
              </StatsSpace>
            )}
          </CardContainerRight>
        </BattleArena>
      </BattleArea>
    </div>
  );
}

export default BattlePage;
