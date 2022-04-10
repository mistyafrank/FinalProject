import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    //create space background
    <div className="home">
      <div className="background">
        <div className="stars"></div>
        <div class="twinkling"></div>
        <div class="clouds"></div>
      </div>
      <div className="title">
        <p>Welcome to Outerspace!</p>
      </div>

      <div className="container mt-3">
        <ul className="home_ul">
          <li>
            <Link to="/NasaPhoto">Nasa Image of the Day</Link>
          </li>
          <br></br>
          <li>
            <Link to="/ImageSearch">Search Daily Images</Link>
          </li>
          <br></br>
          <li>
            <Link to="/AllComment">Comments</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
