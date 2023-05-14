import "./App.css";
import Home from "./components/screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/screens/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Home /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
