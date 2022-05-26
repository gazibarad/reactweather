import { fetchingData } from "../reduxState";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Query = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(fetchingData(query));
      }}
      className="container grid content-center mx-auto App bg-[url('./img/hero.jpg')] h-screen w-screen bg-center  bg-no-repeat bg-cover bg-fixed min-w-full text-center"
    >
      <div className="container mx-auto bg-cardTransparentColor h-96 w-4/5 shadow-2xl rounded-3xl flex flex-col justify-center mb-20">
        <h1 className="text-xl mb-5 mx-1 md:text-4xl lg:text-6xl">
          Search for the wanted location
        </h1>
        <input
          placeholder="City name"
          onKeyDown={(e) => {
            setQuery(e.target.value);
          }}
          type="text"
          className="w-3/5 h-8 self-center border-4 text-center outline-none focus-within:bg-buttonColor focus-within:text-whiteColor placeholder:text-s placeholder:tracking-widest lg:mt-12 lg:h-16 lg:text-4xl "
        />
        <p className="font-light text-l mx-16  md:mx-8">
          We’ll pull weather data based on your query! ( press 'ENTER' or click
          '
          <button type="submit" className="underline tracking-wide">
            HERE
          </button>
          ' )
        </p>
      </div>
    </form>
  );
};

export default Query;
