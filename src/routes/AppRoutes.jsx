import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "../components/ProtectedRoutes";

import Dashboard from "../pages/Dashboard";
import SendMoney from "../pages/SendMoney";
import Wallet from "../pages/Wallet";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AppRoutes = () => {
  return (
    <Routes>

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* PROTECTED APP */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/send" element={<SendMoney />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </MainLayout>
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default AppRoutes;