import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home page">
      <div className="start">
        <div className="img">
          <img src="/images/init.jpg" alt="init" />
        </div>
        <div className="init-text">
          <h1>Welcome to Brucker's Store</h1>

          <Link className="btn btn-success" to="/catalog">
            Check our amazing catalog
          </Link>
        </div>
      </div>

      <div className="find">
        <div className="text">
          <p>Find all the</p>
          <p>
            <span>Best quality products</span>
          </p>
          <p>Used by our company</p>
        </div>
        <img src="/images/find.png" alt="find" />
      </div>

      <div className="sections">
        <div className="img">
          <img src="/images/dance.jpg" alt="dance" />
          <h2>Dance</h2>
        </div>
        <div className="img">
          <img src="/images/aerial.jpg" alt="aerial" />
          <h2>Aerial</h2>
        </div>
        <div className="img">
          <img src="/images/circus.jpg" alt="circus" />
          <h2>Circus</h2>
        </div>
        <div className="img">
          <img src="/images/acrobat.jpg" alt="acrobat" />
          <h2>Acrobat</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
