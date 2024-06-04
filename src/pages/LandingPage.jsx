import LPSection1 from "../components/LPSection1";
import LPSection2 from "../components/LPSection2";
import LPSection3 from "../components/LPSection3";
import LPSection4 from "../components/LPSection4";
import LPSection5 from "../components/LPSection5";
import Introduction from "../components/Introduction";
import PageTransitionLayout from "../PageTransitionLayout"; // Correct import statement
import { PwaPrompt } from "react-ios-pwa-prompt-ts";

import React, { useState, useEffect } from "react";

function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 844); // 768px is the typical breakpoint for tablets
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PageTransitionLayout>
    <div>
      {!isMobile ? (
        <div>
          <Introduction />
        </div>
      ) : (
        <div>
          <PwaPrompt permanentlyHideOnDismiss={false} promptOnVisit={1} timesToShow={5} className="font"/>
          <LPSection1 />
          <LPSection2 />
          <LPSection3 />
          <LPSection4 />
          <LPSection5 />
        </div>
      )}
    </div>
  </PageTransitionLayout>
  );
}

export default LandingPage;
