import Login from "./Components/Login";
import Header from "./Components/Header";
import Home from "./Components/Home"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>

  );
}

export default App;
