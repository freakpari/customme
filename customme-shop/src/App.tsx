import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Signup from "./pages/signup";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import "./global.css";
import ShoppingCard from "./pages/shoppingcard";
import Selectedproduct from "./pages/SelectedProduct";
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/cart" element={<ShoppingCard />} />
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<Signup/>} />
        <Route path="/userprofile" element={<UserProfile/>} />
        <Route path="/selectedproduct" element={<Selectedproduct />} />

      </Routes>
  </Router>
  );
}

export default App;
