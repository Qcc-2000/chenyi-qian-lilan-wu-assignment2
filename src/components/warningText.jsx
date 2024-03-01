import PropTypes from "prop-types"; // Add this import
import { useState } from "react";

export default function WarningText({ label, value, setValue }) {
  const [showWarning, setShowWarning] = useState(false);
  const [editValue, setEditValue] = useState(value);
  return (
    <div>
      <div className="w-full">
        <div className="font-bold pb-2 ">{label}</div>
        <input
          className="border-slate-300 border rounded-md px-2"
          onBlur={(e) => {
            const newValue = parseInt(e.target.value);
            if (newValue < 3 || newValue > 40) {
              setShowWarning(true);
              return;
            }
            setShowWarning(false);
            setValue(parseInt(e.target.value));
          }}
          value={editValue}
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
          placeholder={"Enter " + label}
          type="number"
        />
      </div>
      {showWarning && (
        <div className="text-red-500 text-sm">
          {"Enter a value between 3 and 40"}
        </div>
      )}
    </div>
  );
}

WarningText.propTypes = {
  label: PropTypes.string.isRequired, // Add this prop validation
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};
