import { Route, Routes } from "react-router-dom";

const UserDashboardLayout = () => {
  return (
    <Routes>
      <Route path="/*" element={"user dashboard"} />
      <Route path="/profile" element={"profile"} />
    </Routes>
  );
};

export default UserDashboardLayout;
