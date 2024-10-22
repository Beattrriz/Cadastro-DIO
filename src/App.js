import {Cadastro} from "./Pages/Cadastro";
import { Feed } from "./Pages/Feed";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
