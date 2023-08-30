import { Link } from "react-router-dom";
import React from "react";
// import "./RegistrationForm.css";

const Chatepage = () => {
  return (
    <>
      <div>
        <h1>walcome to user page</h1>

        <Link to="/">
          <button style={{ padding: "10px" }}>go to home page</button>
        </Link>
      </div>
    </>
  );
};

export default Chatepage;
