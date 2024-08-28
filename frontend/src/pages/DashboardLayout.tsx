import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="layout">
      DashboardLayout
      <div className="nav-links">
        <NavLink to="profile" end>
          Profile
        </NavLink>
        <NavLink to="all-group" end>
          AllGroups
        </NavLink>
        <NavLink to="add-group" end>
          AddGroup
        </NavLink>
        <NavLink to="g/1" end>
          Open Group
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
