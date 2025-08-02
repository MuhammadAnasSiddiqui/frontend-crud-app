import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../components";

const UserDashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/*" element={"user dashboard"} />
        <Route path="/profile" element={"profile"} />
      </Routes>
    </div>
  );
};

export default UserDashboardLayout;
