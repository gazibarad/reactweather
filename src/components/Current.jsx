import "./Current.css";

const Current = (props) => {
  return (
    <div className="current">
      <h1 id="current-timezone">{props.weatherData.name}</h1>
      <h1 id="current-temperature">{`${Math.round(
        props.weatherData.main.temp
      )}°C`}</h1>
      <h1 id="current-desc">{props.weatherData.weather[0].description}</h1>
    </div>
  );
};

export default Current;
