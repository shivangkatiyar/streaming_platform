import Login from "./Components/Login";
import Header from "./Components/Header";
import Home from "./Components/Home"
import Detail from "./Components/Detail";
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
            <Route path ="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>

  );
}

export default App;
