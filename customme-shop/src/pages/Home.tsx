import Navbar from '../component/Navbar';
import Header from '../component/Header';
import "../styles/Home.css"

const Home = () => {
    return (
    <div className="home-container">
      {/* Header section */}
        <Header />

      {/* Navbar section */}
        <Navbar />

      {/* Main content */}
    </div>
);
};

export default Home;
