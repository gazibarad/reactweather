import "./Daily.css";
import AnimatedContent from "./AnimatedContent";

const Daily = (props) => {
  return (
    <AnimatedContent>
      {typeof props.forecastData != "undefined" ? (
        <div className="daily-container">
          <div className="day">
            {`${Math.round(props.forecastData[0].temp.day) - 273}°C | ${
              props.forecastData[0].weather[0].description
            }`}
          </div>
          <div className="day">
            {`${Math.round(props.forecastData[1].temp.day) - 273}°C | ${
              props.forecastData[0].weather[0].description
            }`}
          </div>
          <div className="day">{`${
            Math.round(props.forecastData[2].temp.day) - 273
          }°C | ${props.forecastData[0].weather[0].description}`}</div>
          <div className="day">{`${
            Math.round(props.forecastData[3].temp.day) - 273
          }°C | ${props.forecastData[0].weather[0].description}`}</div>
          <div className="day">{`${
            Math.round(props.forecastData[4].temp.day) - 273
          }°C | ${props.forecastData[0].weather[0].description}`}</div>
        </div>
      ) : (
        ""
      )}
    </AnimatedContent>
  );
};

export default Daily;
