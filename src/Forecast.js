import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="row five-days">
      <div className="col">
        <p className="day-of-week">Thursday</p>
        <div className="weather-icon thursday">
          <div>☀️</div>
        </div>
        <p className="average-weather">
          <strong>23°C</strong>
        </p>
      </div>
      <div className="col">
        <p className="day-of-week">Friday</p>
        <div className="weather-icon friday">
          <div>☀️</div>
        </div>
        <p className="average-weather">
          <strong>25°C</strong>
        </p>
      </div>
      <div className="col">
        <p className="day-of-week">Saturday</p>
        <div className="weather-icon saturday">
          <div>☀️</div>
        </div>
        <p className="average-weather">
          <strong>21°C</strong>
        </p>
      </div>
      <div className="col">
        <p className="day-of-week">Sunday</p>
        <div className="weather-icon sunday">
          <div>☀️</div>
        </div>
        <p className="average-weather">
          <strong>19°C</strong>
        </p>
      </div>
      <div className="col">
        <p className="day-of-week">Monday</p>
        <div className="weather-icon monday">
          <div>☀️</div>
        </div>
        <p className="average-weather">
          <strong>22°C</strong>
        </p>
      </div>
    </div>
  );
}
