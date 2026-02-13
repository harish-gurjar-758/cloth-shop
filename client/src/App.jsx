import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Public Pages
import Home from "./pages/Home";
import Drawer from "./pages/Drawer";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import Auth from "./pages/Auth";

// Profile Pages
import Profile from "./pages/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import ChangePassword from "./pages/Profile/account/ChangePassword";
import ManageAddress from "./pages/Profile/account/ManageAddress";
import PaymentMethods from "./pages/Profile/account/PaymentMethods";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= MAIN LAYOUT ================= */}
        <Route path="/" element={<MainLayout />}>

          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="drawer" element={<Drawer />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="orders" element={<Orders />} />
          <Route path="auth" element={<Auth />} />

          {/* Protected User Routes */}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="profile/edit"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path="profile/change-password"
            element={
              <ProtectedRoute>
                <ChangePassword />
              </ProtectedRoute>
            }
          />

          <Route
            path="profile/address"
            element={
              <ProtectedRoute>
                <ManageAddress />
              </ProtectedRoute>
            }
          />

          <Route
            path="profile/payment"
            element={
              <ProtectedRoute>
                <PaymentMethods />
              </ProtectedRoute>
            }
          />

        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
