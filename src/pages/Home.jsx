import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home page">
      <h1>Welcome to Brucker's Store</h1>

      <Link className="btn btn-success" to="/catalog">
        Check our amazing catalog
      </Link>
    </div>
  );
}

export default Home;
