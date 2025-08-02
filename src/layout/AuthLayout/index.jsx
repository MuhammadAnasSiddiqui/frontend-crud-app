import { Route, Routes } from "react-router-dom";
import { LoginScreen } from "../../views";

const AuthLayout = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      {/* <Route path="/signup" element={<SignUpScreen />} /> */}
    </Routes>
  );
};

export default AuthLayout;
