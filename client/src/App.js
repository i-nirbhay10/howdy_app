import "./App.css";
import Chatepage from "./components/Chatepage";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <h1>hello world! this is staring of howdy making</h1> */}

      {/* <Home /> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<Chatepage />} />
      </Routes>
    </div>
  );
}

export default App;
