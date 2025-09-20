import './App.css';
import Home from "./pages/Home.jsx"
import Register from "./pages/Register.jsx"
import Header from "../src/components/Home/Header.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
