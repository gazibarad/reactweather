import { useSelector } from "react-redux";
import Landing from "./components/Landing";
import Query from "./components/Query";
import DisplayingData from "./components/DisplayingData";

const App = () => {
  const currState = useSelector((state) => state.weather.value);
  if (currState === "") return <Landing />;
  if (currState === "PULLED") return <DisplayingData />;
  if (currState === "WAITING") return <Query />;
};

export default App;
