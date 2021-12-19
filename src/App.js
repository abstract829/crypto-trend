import Chart from "./components/Chart";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  document.body.classList.add(
    "bg-gradient-to-r",
    "from-teal-700",
    "to-teal-800"
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart/:id" element={<Chart />} />
        <Route path='/*' element={<Navigate to='/' replace/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
