import { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  // contactVisible
  const [contactVisible, setContactVisible] = useState(false);

  function showBox() {
    setContactVisible(!contactVisible);
  }

  return (
    <div className="about page">
      <h3>Fernanda Ugalde</h3>

      {contactVisible ? (
        <div className="box">
          <p>
            To get in touch please write to <b>fer@fer.com</b>
          </p>
          <Link
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            to="/contact"
          >
            More contact info
          </Link>
        </div>
      ) : null}
      <button className="btn btn-success" onClick={showBox}>
        View Contact Info
      </button>
    </div>
  );
}

export default About;
