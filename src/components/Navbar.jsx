/**
 * Compinents:
 * are functions
 * start with cpital letters
 * should always return something
 *
 * are usually exported
 */

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Brucker's</h1>
      <div className="links">
        <a href="">Some link</a>
        <a href="">Some link</a>
        <a href="">Some link</a>
      </div>
    </div>
  );
}

export default Navbar;
