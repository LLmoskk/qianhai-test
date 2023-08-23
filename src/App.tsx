import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loto from "./loto";
import FormCompoent from "./form";

function App() {
  return (
    <Routes>
      <Route path="/qianhai-test/" element={<Loto />} />
      <Route path="/qianhai-test/form" element={<FormCompoent />} />
    </Routes>
  );
}

export default App;
