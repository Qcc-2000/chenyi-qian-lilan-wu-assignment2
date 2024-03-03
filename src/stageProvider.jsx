/* eslint-disable react/prop-types */
import { createContext, useState, useMemo } from "react";

export const StageContext = createContext();

export default function StageProvider(props) {
  const [cols, setCols] = useState(20);
  const [rows, setRows] = useState(20);
  const context = useMemo(
    () => ({ cols, setCols, rows, setRows }),
    [cols, setCols, rows, setRows]
  );
  return (
    <StageContext.Provider value={context}>
      {props.children}
    </StageContext.Provider>
  );
}
