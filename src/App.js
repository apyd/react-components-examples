import Counter from "./components/Counter/Counter";
import DisplayName from "./components/DisplayName/DisplayName";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Counter />
      <DisplayName name="Artur" />
      <DigitalClock />
      <SearchBar />
    </div>
  );
}

export default App;