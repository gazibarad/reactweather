import { NavLink } from "react-router-dom";
import "./Links.css";

const Links = () => {
  return (
    <div className="links-container">
      <NavLink className="link" to="/">
        Current
      </NavLink>
      <NavLink className="link" to="/hourly">
        Hourly
      </NavLink>
      <NavLink className="link" to="/daily">
        Daily
      </NavLink>
    </div>
  );
};

export default Links;
