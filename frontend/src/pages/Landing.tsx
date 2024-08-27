import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="nav-links">
      <NavLink to="login" end>
        Login
      </NavLink>
      <NavLink to="register">Register</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="dashboard">Open Dashboard</NavLink>
    </div>
  );
};

export default Landing;
