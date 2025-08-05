import { Navigate, Route, Routes } from "react-router-dom";
import { LoginScreen, RegisterScreen } from "../../views";

const AuthLayout = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<RegisterScreen />} />
    </Routes>
  );
};

export default AuthLayout;
