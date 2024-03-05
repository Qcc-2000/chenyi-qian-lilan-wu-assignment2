/* eslint-disable react/prop-types */
import Cell from "./cell";
import { GridOptions } from "../utils/constant";
import Toggle from "./toggle";

export default function Grid({ stage, setStage }) {
  const totalLive = stage.reduce((acc, row) => {
    return acc + row.reduce((acc2, cell) => (cell ? acc2 + 1 : acc2), 0);
  }, 0);
  const flipCell = (row, col) => {
    const newStage = [...stage];
    newStage[row][col] = !stage[row][col];
    setStage(newStage);
  };
  const createCells = (stage) => {
    return stage.map((row, rowIndex) =>
      row.map((cell, colIndex) => {
        return (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            clicked={cell}
            flipCell={flipCell}
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
