import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Welcome from "./pages/Welcome"
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="mainBody">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      {/* <Welcome /> */}
    </BrowserRouter>
  );
}

export default App;
