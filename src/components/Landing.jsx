import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchingData, expectingInput } from "../reduxState";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      dispatch(fetchingData(coords));
    });
  }, []);

  return (
    <div className="container grid content-center mx-auto App bg-[url('./img/hero.jpg')] h-screen w-screen bg-center  bg-no-repeat bg-cover bg-fixed min-w-full text-center">
      <div className="container mx-auto bg-cardTransparentColor h-80 w-4/5 shadow-2xl rounded-3xl flex flex-col justify-center mb-20">
        <h1 className="text-xl mb-5 mx-1 md:text-4xl lg:text-6xl">
          We're trying to pull your location
        </h1>
        <p className="font-light text-l mx-6 md:mx-8">
          Your location will only be used to get weather data only with your
          permission
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(expectingInput());
        }}
        className="text-whiteColor text-xl font-bold tracking-wide w-72 bg-buttonColor px-8 justify-self-center py-4 rounded-md hover:bg-buttonColorHover md:w-2/3 md:text-4xl md:px-16 md:py-8"
        type="button"
      >
        OR SEARCH MANUALLY
      </button>
    </div>
  );
};

export default Landing;
