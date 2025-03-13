import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Signup from "./pages/signup";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import "./global.css";
function App() {
  return (
    <Router>
    <Routes>
        {/* <Route path="/cart" element={<h1>سبد خرید</h1>} /> */}
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/signUp" element={<Signup/>} />
        <Route path="/userprofile" element={<UserProfile/>} />

      </Routes>
  </Router>
  );
}

export default App;
