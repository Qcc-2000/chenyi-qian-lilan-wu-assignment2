import "./App.css";
import Nav from "./components/nav";
import GameWrapper from "./gameWrapper";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <GameWrapper />
    </div>
  );
}

export default App;
