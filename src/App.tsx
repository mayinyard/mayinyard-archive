import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LostMetalSouls from "./pages/LostMetalSouls/LostMetalSouls";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/projects/lost-metal-souls"
        element={<LostMetalSouls />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />
    </Routes>
  );
}

export default App;