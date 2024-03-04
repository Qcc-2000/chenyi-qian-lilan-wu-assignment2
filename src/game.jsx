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
  useEffect(() => {
    setStage(initializeStage(rows, cols));
  }, [cols, rows]);

  // control function
  const getNextStage = () => {
    setStage((prev) => [...NextStage(prev)]);
  };

  const resetStage = () => {
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
        <Grid stage={stage} setStage={setStage} />
      </div>
      <ControlPanel controlFunc={controlFunc} />
    </MaxWidth>
  );
}
