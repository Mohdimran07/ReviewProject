import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Dashboard from "./components/dashbord/Dashboard";

function App() {
  return <div className="App">
    <Router>
      <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  </div>;

}

export default App;
