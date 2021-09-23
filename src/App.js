import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <CurrentWeather />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
