import Grid from "./components/gird";
import WarningText from "./components/warningText";
import MaxWidth from "./components/maxWidth";
import ControlPanel from "./components/controlPanel";
import { useContext, useEffect, useState } from "react";
import { initializeStage, NextStage } from "./utils/algo";
import { StageContext } from "./stageProvider";
export default function Game() {
  const { cols, rows, setCols, setRows } = useContext(StageContext);
  const [stage, setStage] = useState(() => initializeStage(rows, cols));
  const [generation, setGeneration] = useState(0); // setGeneration in getNextStage and resetStage
  // contain the lastAliveGen in the stage
  // stage: [
  //   `     [[false, -1], [false, -1], [false, -1]]
  //     `   [[false, -1], [false, -1], [false, -1]]
  //         ]
  // steps: 1. modify innitializeStage 2. modify useEffect, getNextStage, resetStage  3. modify grid  4. modify cell 5. modify NextStage
  useEffect(() => {
    setGeneration(0);
    setStage(initializeStage(rows, cols));
    
  }, [cols, rows]);

  // control function
  const getNextStage = () => {
    setGeneration(generation + 1);
    setStage((prev) => [...NextStage(prev, generation + 1)]);
    
  };

  const resetStage = () => {
    setGeneration(0);
    setStage(initializeStage(stage.length, stage[0].length));
    
  };

  const controlFunc = {
    getNextStage: getNextStage,
    resetStage: resetStage,
  };
  return (
    <MaxWidth className="flex flex-col h-screen">
      <div className="flex justify-center gap-2 py-2">
        <WarningText value={cols} setValue={setCols} label="Columns" />
        <WarningText value={rows} setValue={setRows} label="Rows" />
      </div>
      <div className="flex flex-grow">
        <Grid stage={stage} setStage={setStage} generation={generation}/>
      </div>
      <ControlPanel controlFunc={controlFunc} />
    </MaxWidth>
  );
}
