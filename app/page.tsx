"use client";
import Navbar from "./parts/Navbar";
import Revenue from "./parts/Revenue";
import Analytics from "./parts/Analytics";
import { useState } from "react";
import Sidebar from "../components/sidebar";

const Page = () => {
  const [showComponent, setShowComponent] = useState("revenue");

  const renderContent = (component: any) => (
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

      {/* Rendering the selected component here */}
      {component}
    </div>
  );

  return renderContent(
    showComponent === "home" ||
      showComponent === "analytics" ||
      showComponent === "crm" ? (
      <Analytics />
    ) : (
      <Revenue />
    )
  );
};

export default Page;
