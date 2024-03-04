/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
export default function ControlPanel({ controlFunc }) {
  const { getNextStage, resetStage } = controlFunc;
  const [autoRun, setAutoRun] = useState(false);
  useEffect(() => {
    let intervalId;
    if (autoRun) {
      intervalId = setInterval(getNextStage, 100);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [autoRun, getNextStage]);
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
