import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../components";
import { DashboardScreen } from "../../views";

const UserDashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/*" element={<DashboardScreen />} />
          <Route path="/profile" element={"profile"} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
