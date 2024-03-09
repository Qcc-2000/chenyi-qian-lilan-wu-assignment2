/* eslint-disable react/prop-types */
import Cell from "./cell";
import { GridOptions } from "../utils/constant";
import Toggle from "./toggle";
import { useState } from "react";

export default function Grid({ stage, setStage, generation }) {
  const [isToggled, setIsToggled] = useState(false);
  const totalLive = stage.reduce((acc, row) => {
    return acc + row.reduce((acc2, cell) => (cell[0] ? acc2 + 1 : acc2), 0);
  }, 0);
  const flipCell = (row, col, gen) => {
    const newStage = [...stage];
    newStage[row][col][0] = !stage[row][col][0];
    if (newStage[row][col][0]) {
      newStage[row][col][1] = gen;
    }
    setStage(newStage);
    console.log(newStage);
  };
  const createCells = (stage) => {
    return stage.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        return (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            alive={cell[0]}
            lastAliveGen={cell[1]}
            flipCell={flipCell}
            curGen={generation}
            colorMode={isToggled}
          />
        );
      })
    );
  };
  return (
    <div className="flex flex-col items-center w-full">
      <div className={`w-full h-full grid ${GridOptions[stage[0].length]}`}>
        {createCells(stage)}
      </div>
      <div className="relative border-b border-gray-200 w-full ">
        <div className="flex justify-evenly items-center w-full">
          <div className="text-center font-bold text-xl">
            Total live: {totalLive}
          </div>
          <div className="text-center font-bold text-xl">
            Generation: {generation}
          </div>
          <div className="absolute right-0">
            <Toggle isToggled={isToggled} setIsToggled={setIsToggled} />
          </div>
        </div>
      </div>
    </div>
  );
}
