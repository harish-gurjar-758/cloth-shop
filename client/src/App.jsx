import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
// import Welcome from "./pages/Welcome"
import NavBar from "./components/NavBar";

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes className="mainBody">
        {/* <Welcome /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
