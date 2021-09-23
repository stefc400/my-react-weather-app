import "./CurrentWeather.css";
export default function CurrentWeather() {
  return (
    <div className="row current-weather">
      <div className="col montreal-sunny">
        <div className="row">
          <div className="col mtl-21">
            <h1>
              21°C <br />
              Montreal
            </h1>
          </div>
          <div className="col sun-icon">
            <div className="sun">☀️</div>
          </div>
        </div>
      </div>
      <div className="col current-info">
        <ul>
          <li>Precipitation: 11%</li>
          <li>Humidity: 45%</li>
          <li>Wind: 5km/h</li>
        </ul>
      </div>
    </div>
  );
}
