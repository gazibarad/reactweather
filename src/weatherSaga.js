import { call, put, takeEvery } from "redux-saga/effects";
import { dataFetchedSuccess } from "./reduxState";

function* getWeatherCoords(payload) {
  let data;
  let lat;
  let long;
  const key = process.env.REACT_APP__API_KEY;
  if (typeof payload.payload === "string") {
    const geocodeFetch = yield call(() =>
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${payload.payload}&limit=5&appid=${key}`
      )
    );
    let geoData = yield geocodeFetch.json();
    lat = geoData[0].lat;
    long = geoData[0].lon;

    data = yield call(() =>
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={minutely}&appid=${key}`
      )
    );
  } else if (typeof payload.payload === "object") {
    data = yield call(() =>
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${payload.payload.latitude}&lon=${payload.payload.longitude}&exclude={minutely}&appid=${key}`
      )
    );
  }

  const formattedData = yield data.json();
  yield put(dataFetchedSuccess(formattedData));
}

function* weatherSaga() {
  yield takeEvery("weather/fetchingData", getWeatherCoords);
}

export default weatherSaga;
