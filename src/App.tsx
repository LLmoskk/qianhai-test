import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loto from "./loto";
import FormCompoent from "./form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loto />} />
      <Route path="/form" element={<FormCompoent />} />
    </Routes>
  );
}

export default App;
