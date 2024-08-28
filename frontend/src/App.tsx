import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  About,
  AddEvent,
  AddGroup,
  AllEvents,
  AllGroups,
  DashboardFeed,
  DashboardLayout,
  EditEvent,
  EditGroup,
  Error,
  EventAdmin,
  EventLayout,
  EventQueue,
  EventStats,
  GroupInfo,
  GroupLayout,
  Landing,
  Login,
  Profile,
  Register,
} from "./pages";

function App() {
  const user = {
    auth: false,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route
            path="dashboard"
            element={user.auth ? <DashboardLayout /> : <Navigate to="/login" />}
          >
            <Route index element={<DashboardFeed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="all-group" element={<AllGroups />} />
            <Route path="add-group" element={<AddGroup />} />
            <Route path="g/:id" element={<GroupLayout />}>
              <Route path="edit" element={<EditGroup />} />
              <Route path="delete-group" />
              <Route path="info" element={<GroupInfo />} />
              <Route index element={<AllEvents />} />
              <Route path="add-event" element={<AddEvent />} />
              <Route path="e/:id" element={<EventLayout />}>
                <Route path="edit" element={<EditEvent />} />
                <Route path="delete-event" />
                <Route index element={<EventQueue />} />
                <Route path="stats" element={<EventStats />} />
                <Route path="admin" element={<EventAdmin />} />
              </Route>
            </Route>
          </Route>
          <Route
            path="login"
            element={user.auth ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="register"
            element={user.auth ? <Navigate to="/dashboard" /> : <Register />}
          />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
