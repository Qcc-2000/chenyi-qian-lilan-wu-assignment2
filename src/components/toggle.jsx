import { useState } from "react";
function Toggle() {
  // State variable to track the toggle state
  const [isToggled, setIsToggled] = useState(false);

  // Function to handle toggle
  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleToggle}
        className={`relative h-6 w-10  ${
          isToggled ? "bg-blue-500" : "bg-gray-300"
        } text-white font-bold rounded-full transition-colors duration-300 ease-in-out`}
      >
        <span
          className={`absolute left-0 top-0 flex items-center ${
            isToggled ? "translate-x-4" : "translate-x-0"
          } transform transition-transform duration-300 ease-in-out inline-block w-6 h-6  rounded-full bg-gray-200`}
        ></span>
      </button>
    </div>
  );
}

export default Toggle;
