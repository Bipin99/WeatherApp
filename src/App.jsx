import DisplayWeather from "./components/DisplayWeather";
import SelectCity from "./components/SelectCity";
import "./App.css";

export default function App() {
  const onCitySelect = () => {};
  return (
    <div className="App">
      <SelectCity onCitySelect={onCitySelect} />
      <DisplayWeather />
    </div>
  );
}
