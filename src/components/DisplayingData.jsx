import { useSelector } from "react-redux";

const DisplayingData = () => {
  const getDate = (dt) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dt * 1000);
    const day = weekday[date.getUTCDay()];
    return day;
  };

  const getHour = (dt) => {
    const date = new Date(dt * 1000);
    const hour = date.getUTCHours().toString().padStart(2, 0);
    return hour;
  };

  const weatherData = useSelector((state) => state.weather.data);

  return (
    <div className="mx-auto container App bg-[url('./img/hero.jpg')] bg-center bg-no-repeat bg-cover bg-fixed min-w-full pb-16">
      <h1 className="font-bold text-center mb-16 pt-2 text-4xl tracking-widest">
        {weatherData.timezone}
      </h1>
      <div className="text-center mx-auto w-64 bg-cardSolidColor px-16 py-2 rounded-xl mb-16 md:w-1/3 md:text-xl">
        <h3 className="mb-8 font-light">Current</h3>
        <p className="my-8 underline underline-offset-4">
          Temperature:{" "}
          <span className="font-bold tracking-wider">
            {Math.round(weatherData.current.temp - 273.15)}°C
          </span>
        </p>
        <p className="my-8 underline underline-offset-4">
          Feels Like:{" "}
          <span className="font-bold tracking-wider">
            {Math.round(weatherData.current.feels_like - 273.15)}°C
          </span>
        </p>
        <p className="my-8 underline underline-offset-4">
          Wind Speed:{" "}
          <span className="font-bold tracking-wider">
            {Math.round(weatherData.current.wind_speed)}m/s
          </span>
        </p>
        <p className="my-8 underline underline-offset-4">
          Humidity:{" "}
          <span className="font-bold tracking-wider">
            {Math.round(weatherData.current.humidity)}%
          </span>
        </p>
        <p className="my-8 underline underline-offset-4">
          Desc:{" "}
          <span className="font-bold tracking-wider">
            {weatherData.current.weather[0].main}
          </span>
        </p>
      </div>
      <div className="snap-center text-center mx-auto w-3/4 bg-cardSolidColor px-16 py-2 rounded-xl mb-16 md:w-1/3 md:text-xl">
        <h3 className="mb-8 font-light">Daily</h3>
        {weatherData.daily.map((day) => (
          <p key={day.dt} className="font-thin my-8 capitalize tracking-wide">
            {getDate(day.dt)} ➡️
            <span className="font-bold">
              {Math.round((day.temp.max + day.temp.min) / 2) - 270} °C |{" "}
              {day.weather[0].description}
            </span>
          </p>
        ))}
      </div>
      <div className="text-center mx-auto w-64 bg-cardSolidColor px-16 py-2 rounded-xl md:w-1/3 md:text-xl">
        <h3 className="mb-8 font-light">Hourly</h3>
        {weatherData.hourly.map((hour) => (
          <p
            key={hour.dt}
            className="my-8 underline underline-offset-4 font-light"
          >
            {getHour(hour.dt)}:00h ➡️{" "}
            <span className="font-bold tracking-wide">
              {Math.round(hour.temp - 273.15)}°C
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default DisplayingData;
