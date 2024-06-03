import LPSection1 from "../components/LPSection1";
import LPSection2 from "../components/LPSection2";
import LPSection3 from "./LPSection3";
import LPSection4 from "../components/LPSection4";
import LPSection4_1 from "../components/LPSection4_1";
import LPSection4_2_textPlugin from "../components/LPSection4_2_textPlugin";
import LPSection5 from "../components/LPSection5";
import Introduction from "../components/Introduction";

import React, { useState, useEffect } from "react";

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);

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
        <div>
          <Introduction/>
        </div>
      ) : (
        <div>
          <LPSection1/>
          <LPSection2/>
          <LPSection3 />
   {/* <LPSection4 />
          <LPSection4_1 /> */}
          <LPSection4_2_textPlugin />
          <LPSection5/>
        </div>
      )}
    </div>
  );
}
