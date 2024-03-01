import StageProvider from "./stageProvider";
import Game from "./game";

export default function GameWrapper() {
  return (
    <StageProvider>
      <Game />
    </StageProvider>
  );
}
