import { BrowserRouter as Router} from "react-router-dom";
import Header from './component/Header';
import Navbar from './component/Navbar';
function App() {
  return (
    <Router>
    <Header />
    <Navbar />
  </Router>
  );
}

export default App;
