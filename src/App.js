import "./App.css";
import Home from "./components/screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/screens/Login";
import Footer from "./components/Footer";
import Signup from "./components/screens/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={< Signup/>} />
          {/* <Home /> */}
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
