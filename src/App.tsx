import "./App.css";
import SWContainer from "./NewStarWarsbox/SWContainer/SWContainer";
import { StarWarsBox } from "./SW/StarWarsBox";

function App() {
  return (
    <>
      {/* <StarWarsBox choosenCaracter={3} /> */}
      <SWContainer oneCaracter={3} />
    </>
  );
}

export default App;
