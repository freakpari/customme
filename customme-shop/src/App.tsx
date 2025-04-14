import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Signup from "./pages/signup";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import "./global.css";
import ShoppingCard from "./pages/shoppingcard";
import Selectedproduct from "./pages/SelectedProduct";
import OtherProduct from "./pages/OtherProduct";
import OrderHistory from "./pages/OrderHistory";
import AccountInfo from "./pages/AccountInfo";
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShoppingCard />} />
        <Route path="/signUp" element={<Signup/>} />
        <Route path="/userprofile" element={<UserProfile/>} />
        <Route path="/selectedproduct" element={<Selectedproduct />} />
        <Route path="/otherproduct" element={<OtherProduct />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/accountinfo" element={<AccountInfo />} />

      </Routes>
  </Router>
  );
}

export default App;
