import "./Contact.css";
import { FaPhone, FaEnvelope, FaRoute, FaTheaterMasks } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact page">
      <h1>Contact us</h1>
      <div className="info">
        <p>
          Brucker's Store <FaTheaterMasks />
        </p>
        <p>
          <FaPhone />
          555-555-5555
        </p>
        <p>
          <FaEnvelope />
          fer@fer.com
        </p>
        <p>
          <FaRoute />
          1234 Main St
        </p>
        <p>San Francisco, CA 94123</p>
      </div>
    </div>
  );
}

export default Contact;
