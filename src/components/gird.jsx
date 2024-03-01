/* eslint-disable react/prop-types */
import Cell from "./cell";
import { GridOptions } from "../utils/constant";
import { useContext } from "react";
import { StageContext } from "../stageProvider";

export default function Grid({ stage, setStage }) {
  const { cols } = useContext(StageContext);
  return (
    <div className={`min-w-full min-h-full grid ${GridOptions[cols]}`}>
      {Array(stage.length * stage[0].length)
        .fill(0)
        .map((_, i) => {
          const row = Math.floor(i / cols);
          const col = parseInt(i % parseInt(cols));
          return (
            <Cell
              key={i}
              row={row}
              col={col}
              clicked={stage[row][col]}
              stage={stage}
              setStage={setStage}
            />
          );
        })}
    </div>
  );
}
