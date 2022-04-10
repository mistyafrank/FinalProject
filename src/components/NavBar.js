import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

//create navbar
export default function NavBar() {
  return (
    <Nav>
      <div className="navbar">
        <ul>
          <li>
            <Link className="link" to="/" exact>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/NasaPhoto" exact>
              See Daily Image
            </Link>
          </li>
          <li>
            <Link className="link" to="/ImageSearch" exact>
              Search For Image
            </Link>
          </li>
          <li>
            <Link className="link" to="/AllComment" exact>
              Comments
            </Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
}
