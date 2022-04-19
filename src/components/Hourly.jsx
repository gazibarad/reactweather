import "./Hourly.css";

const Hourly = (props) => {
  return (
    <>
      {typeof props.forecastData != "undefined" ? (
        <div className="hourly-container">
          <div className="hour">
            1 | {`${Math.round(props.forecastData[0].temp) - 273}°C`}
          </div>
          <div className="hour">
            2 | {`${Math.round(props.forecastData[1].temp) - 273}°C`}
          </div>
          <div className="hour">
            3 | {`${Math.round(props.forecastData[2].temp) - 273}°C`}
          </div>
          <div className="hour">
            4 | {`${Math.round(props.forecastData[3].temp) - 273}°C`}
          </div>
          <div className="hour">
            5 | {`${Math.round(props.forecastData[4].temp) - 273}°C`}
          </div>
          <div className="hour">
            6 | {`${Math.round(props.forecastData[5].temp) - 273}°C`}
          </div>
          <div className="hour">
            7 | {`${Math.round(props.forecastData[6].temp) - 273}°C`}
          </div>
          <div className="hour">
            8 | {`${Math.round(props.forecastData[7].temp) - 273}°C`}
          </div>
          <div className="hour">
            9 | {`${Math.round(props.forecastData[8].temp) - 273}°C`}
          </div>
          <div className="hour">
            10 | {`${Math.round(props.forecastData[9].temp) - 273}°C`}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Hourly;
