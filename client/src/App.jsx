import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Welcome from "./pages/Welcome"
import NavBar from "./components/NavBar";
import Drawer from "./pages/Drawer";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import ChangePassword from "./pages/Profile/account/ChangePassword";
import ManageAddress from "./pages/Profile/account/ManageAddress";
import PaymentMethods from "./pages/Profile/account/PaymentMethods";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="mainBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drawer" element={<Drawer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/change-password" element={<ChangePassword />} />
          <Route path="/profile/address" element={<ManageAddress />} />
          <Route path="/profile/payment" element={<PaymentMethods />} />
        </Routes>
      </div>

      {/* <Welcome /> */}
    </BrowserRouter>
  );
}

export default App;
