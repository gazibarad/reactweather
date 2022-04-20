import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Current from "./components/Current";
import Hourly from "./components/Hourly";
import Daily from "./components/Daily";
import Search from "./components/Search";
import Links from "./components/Links";
import ErrorAlert from "./components/ErrorAlert";

const api = {
  key: process.env.REACT_APP_API_KEY,
  baseurl: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [coords, setCoords] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const pressingSearch = async (e) => {
    e.preventDefault();

    fetch(`${api.baseurl}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(checkFetch)
      .then((res) => res.json())
      .then((obj) => {
        setWeatherData(obj);
        setShowAlert(false);
      })
      .catch(() => {
        setShowAlert(true);
      });

    fetch(`${api.baseurl}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(checkFetch)
      .then((res) => res.json())
      .then((obj) => {
        setCoords(obj.coord);
        setShowAlert(false);
      })
      .catch(() => {
        setShowAlert(true);
      });
  };

  const fetchingForecast = () => {
    if (typeof coords.lat !== "undefined") {
      fetch(
        `${api.baseurl}onecall?lat=${coords.lat}&lon=${coords.lon}&exclude={minutely}&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((obj) => setForecastData(obj));
    }
  };

  const checkFetch = (res) => {
    if (!res.ok) {
      console.clear();
      throw Error(res.statusText);
    }
    return res;
  };

  useEffect(() => {
    fetchingForecast();
  }, [coords]);

  return (
    <>
      <div className="App">
        <Search
          search={search}
          setSearch={setSearch}
          pressingSearch={pressingSearch}
        />

        {typeof weatherData.main != "undefined" ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Current weatherData={weatherData} />} />
              <Route
                path="daily"
                element={<Daily forecastData={forecastData.daily} />}
              />
              <Route
                path="hourly"
                element={<Hourly forecastData={forecastData.hourly} />}
              />
            </Routes>
            <Links />
          </BrowserRouter>
        ) : (
          ""
        )}
      </div>
      {showAlert ? <ErrorAlert /> : null}
    </>
  );
}

export default App;
