// eslint-disable-next-line react/prop-types
export default function Cell({ row, col, clicked, flipCell }) {
  const handleClick = () => {
    flipCell(row, col);
  };

  return (
    <div
      className={`border border-gray-200 ${clicked ? "bg-black" : "bg-white"}`}
      onClick={() => handleClick()}
    />
  );
}
