import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}

export default App;
