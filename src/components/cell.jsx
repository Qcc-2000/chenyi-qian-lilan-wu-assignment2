// eslint-disable-next-line react/prop-types
export default function Cell({ row, col, stage, setStage, clicked }) {
  const handleClick = () => {
    const newStage = [...stage];
    newStage[row][col] = !stage[row][col];
    setStage(newStage);
  };

  return (
    <div
      className={`border border-gray-200 ${clicked ? "bg-black" : "bg-white"}`}
      onClick={() => handleClick()}
    />
  );
}
