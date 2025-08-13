import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout, UserDashboardLayout } from "./layout";
import { HomeScreen } from "./views";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
  const { isAuthenticated, splashLoading } = useAuthContext();

  return splashLoading ? (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* App Name / Logo */}
      <h1 className="text-4xl font-bold text-red-500 mb-6 animate-pulse">
        MyApp
      </h1>

      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-white border-t-red-500 rounded-full animate-spin"></div>

      {/* Tagline */}
      <p className="mt-4 text-gray-400 text-sm tracking-wide">
        Preparing your experience...
      </p>
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
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
