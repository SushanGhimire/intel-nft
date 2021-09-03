import React from "react";
import Home from "./components/web/home/Home";
import RoadMap from "./components/web/home/RoadMap";
import NavBar from "./components/web/static/NavBar";

function App() {
  return (
    <div className=" w-full flex flex-col  font-bal">
      <NavBar />
      <Home />
      <RoadMap />
    </div>
  );
}

export default App;
