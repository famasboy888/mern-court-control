import { NavLink, Outlet } from "react-router-dom";

const EventLayout = () => {
  return (
    <div className="layout">
      EventLayout
      <div className="nav-links">
        <NavLink to="edit" end>
          EditEvent
        </NavLink>
        <NavLink to="" end>
          EventQueue
        </NavLink>
        <NavLink to="stats" end>
          EventStats
        </NavLink>
        <NavLink to="admin" end>
          EventAdmin
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default EventLayout;
