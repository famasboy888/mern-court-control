import { NavLink, Outlet } from "react-router-dom";

const GroupLayout = () => {
  return (
    <div className="layout">
      GroupLayout
      <div className="nav-links">
        <NavLink to="edit" end>
          EditGroup
        </NavLink>
        <NavLink to="info" end>
          GroupInfo
        </NavLink>
        <NavLink to="" end>
          AllEvents
        </NavLink>
        <NavLink to="add-event" end>
          AddEvent
        </NavLink>
        <NavLink to="e/1" end>
          Open Event
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default GroupLayout;
