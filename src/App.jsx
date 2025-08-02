import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout, UserDashboardLayout } from "./layout";
import { HomeScreen } from "./views";

const App = () => {
  const isAuthenticated = false; // Replace with actual authentication logic
  return (
    <Routes>
      <Route
        exact
        path="/*"
        element={
          isAuthenticated ? <Navigate to="/user" replace /> : <HomeScreen />
        }
      />
      <Route
        exact
        path="/auth/*"
        element={
          isAuthenticated ? <Navigate to="/user" replace /> : <AuthLayout />
        }
      />
      <Route
        exact
        path="/user/*"
        element={
          isAuthenticated ? (
            <UserDashboardLayout />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
    </Routes>
  );
};

export default App;
