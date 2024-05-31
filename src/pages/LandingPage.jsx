import LPSection1 from "../components/LPSection1";
import LPSection2 from "../components/LPSection2";
import LPSection3 from "./LPSection3";
import LPSection5 from "../components/LPSection5";
import React, { useState, useEffect } from "react";

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is the typical breakpoint for tablets
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {!isMobile ? (
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            This is a mobile game
          </h1>
        </div>
      ) : (
        <div>
          <LPSection1/>
          <LPSection2/>
          <LPSection3 />
          <LPSection5/>
        </div>
      )}
    </div>
  );
}
