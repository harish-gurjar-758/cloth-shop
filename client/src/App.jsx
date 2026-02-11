import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Welcome from "./pages/Welcome"
import NavBar from "./components/NavBar";
import Drawer from "./pages/Drawer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="mainBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drawer" element={<Drawer />} />
        </Routes>
      </div>

      {/* <Welcome /> */}
    </BrowserRouter>
  );
}

export default App;
