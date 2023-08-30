import "./style/home.css";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-main-div">
        <div>
          <h1
            style={{ color: "white", marginBottom: "20px", marginTop: "20px" }}
          >
            welcome to Home whith r-r-d
          </h1>
        </div>
        <Link to="/user">
          <button style={{ padding: "10px" }}>chatepage</button>
        </Link>
      </div>
    </>
  );
};

export default Home;

// "proxy": "http://localhost:5000",
