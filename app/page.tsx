"use client";
import Navbar from "./parts/Navbar";
import Revenue from "./parts/Revenue";
import Analytics from "./parts/Analytics";
import { useState } from "react";
import Sidebar from "../components/sidebar";

const Home = () => {
  const [showComponent, setShowComponent] = useState("revenue");

  return (
    <div className="w-full overflow-hidden" data-testid="Home">
      <div className={` w-full overflow-x-auto`}>
        <div className=" navbar overflow-x-auto mx-auto  ">
          <Navbar
            showComponent={showComponent}
            setShowComponent={setShowComponent}
          />
        </div>
        <Sidebar />
      </div>
      <Revenue />
    </div>
  );
};

export default Home;
