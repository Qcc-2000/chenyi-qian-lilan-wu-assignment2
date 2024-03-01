/* eslint-disable react/prop-types */
import Cell from "./cell";
import { GridOptions } from "../utils/constant";
import { useContext } from "react";
import { StageContext } from "../stageProvider";
import Toggle from "./toggle";

export default function Grid({ stage, setStage }) {
  const { cols } = useContext(StageContext);
  const totalLive = stage.reduce((acc, row) => {
    return acc + row.reduce((acc2, cell) => (cell ? acc2 + 1 : acc2), 0);
  }, 0);
  return (
    <div className="flex flex-col items-center w-full">
      <div className={`w-full h-full grid ${GridOptions[cols]}`}>
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
      <div className="relative border-b border-gray-200 w-full ">
        <div className="flex justify-center items-center w-full">
          <div className="text-center font-bold text-xl">
            Total live: {totalLive}
          </div>
          <div className="absolute right-0">
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  );
}
