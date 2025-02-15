import { Typography, Card } from "@material-tailwind/react";
import { Route, Routes, useLocation } from "react-router-dom";
import Typer from "./pages/game";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Result from "./pages/result";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
 
  return (
    <div className="App">
      <AOSInitializer />

      <Navbar />
      <Routes>
        <Route path="/" element={<Typer></Typer>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

function AOSInitializer() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on route change
  }, [location]);

  return null;
}
