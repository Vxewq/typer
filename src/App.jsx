import { Typography, Card } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import Typer from "./pages/game";
import Navbar from "./components/navbar";
import About from "./pages/about";

export default function App() {
  return <div className="App">
    <Navbar />
  <Routes>
    <Route path="/" element={<Typer></Typer>}/>
    <Route path="/about" element={<About />}/>
  </Routes>
  </div>;
}
