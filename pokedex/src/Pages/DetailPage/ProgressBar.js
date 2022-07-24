import React, { useState } from "react";
import { ProgressBarOut, ProgressBar0 } from "./styled";

export const Progress = ({ bar }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${bar}%`,
    };
    setStyle(newStyle);
  }, 1000);

  const resultBar = parseInt(bar*(230/100))

  return (
    <ProgressBarOut>
      <ProgressBar0 style={style}>{String(resultBar)}</ProgressBar0>
    </ProgressBarOut>
  );
};