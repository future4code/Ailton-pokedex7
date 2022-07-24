import React, { useState } from "react";
import { ProgressBarOut, ProgressBar0 } from "./styled";
import { colors } from "../../components/PokeTypes/PokemonTypeIcons";

export const Progress = ({ bar, color }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      background: `${color}`,
      opacity: 1,
      width: `${bar}%`,
    };
    setStyle(newStyle);
  }, 1000);

  return (
    <ProgressBarOut>
      <ProgressBar0 style={style}>{parseInt(bar*(230/100))}</ProgressBar0>
    </ProgressBarOut>
  );
};