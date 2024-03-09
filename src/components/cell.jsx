// eslint-disable-next-line react/prop-types
export default function Cell({ row, col, alive, lastAliveGen, flipCell, curGen, colorMode }) {
  const handleClick = () => {
    flipCell(row, col, curGen);
  };

  // set the color based on the toggle and the state of the cell
  let color = "bg-white"; 
  if (colorMode === true) {
    const genDiff = curGen - lastAliveGen;
    if (alive === true) {
      color = "bg-red-600";
    } else {
      if (lastAliveGen != -1) {
        if (genDiff >= 1 && genDiff <= 3) {
          color = "bg-yellow-400";
        }else if (genDiff >= 4 && genDiff <= 6) {
          color = "bg-sky-300";
        }else if (genDiff >= 7 && genDiff <= 9) {
          color = "bg-purple-400";
        }else if (genDiff >= 10) {
          color = "bg-slate-400";
        }
      }
    }
  } else {
    if (alive === true) {
      color = "bg-black";
    }
  }
  

  return (
    <div
      className={`border border-gray-200 ${color}`}
      onClick={() => handleClick()}
    />
  );
}
