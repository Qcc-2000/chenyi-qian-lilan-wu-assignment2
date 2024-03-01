/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { NextStage, initializeStage } from "../utils/algo";
export default function ControlPanel({ stage, setStage }) {
  const [intervalId, setIntervalId] = useState(null);
  const [autoRun, setAutoRun] = useState(false);
  useEffect(() => {
    if (autoRun) {
      const id = setInterval(getNextStage, 100);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => clearInterval(intervalId);
  }, [autoRun]);
  const getNextStage = () => {
    setStage((prev) => [...NextStage(prev)]);
  };
  const resetStage = () => {
    setStage(initializeStage(stage.length, stage[0].length));
  };
  const handleAutoRun = () => {
    setAutoRun(!autoRun);
  };
  return (
    <div className="flex justify-center gap-4 pt-2">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={autoRun}
        onClick={resetStage}
      >
        Reset
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-28"
        onClick={handleAutoRun}
      >
        {autoRun ? "Stop" : "Auto Run"}
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-30 disabled:cursor-not-allowed"
        onClick={getNextStage}
        disabled={autoRun}
      >
        Next
      </button>
    </div>
  );
}
