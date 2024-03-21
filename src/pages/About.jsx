import { useState } from "react";
import "./About.css";

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
        </div>
      ) : null}
      <button className="btn btn-outline-success" onClick={showBox}>
        View Contact Info
      </button>
    </div>
  );
}

export default About;
