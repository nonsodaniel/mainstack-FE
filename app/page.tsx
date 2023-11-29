"use client";
import Navbar from "./parts/Navbar";
import Revenue from "./parts/Revenue";
import Analytics from "./parts/Analytics";
import { useState } from "react";
import Sidebar from "../components/sidebar";

const Page = () => {
  const [showComponent, setShowComponent] = useState("revenue");

  return (
    <div className="w-full overflow-hidden">
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

export default Page;
