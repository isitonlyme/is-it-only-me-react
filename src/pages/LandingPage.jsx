import LPSection1 from "../components/LPSection1";
import LPSection2 from "../components/LPSection2";
import LPSection3 from "../components/LPSection3";
import LPSection4 from "../components/LPSection4";
import LPSection5 from "../components/LPSection5";
import Introduction from "../components/Introduction";
import PageTransitionLayout from "../PageTransitionLayout"; // Correct import statement
import { PwaPrompt } from "react-ios-pwa-prompt-ts";

import React, { useState, useEffect, useRef } from "react";

function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);
  const arrowRef = useRef();
  const section5Ref = useRef(null);

  const scrollToSection5 = () => {
    section5Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425); // is the typical breakpoint for tablets
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
            <PwaPrompt
              permanentlyHideOnDismiss={false}
              promptOnVisit={1}
              timesToShow={5}
              className="font"
            />
            <LPSection1
              arrowRef={arrowRef}
              scrollToSection5={scrollToSection5}
            />
            <LPSection2 />
            <LPSection3 />
            <LPSection4 />
            <LPSection5 ref={section5Ref} />
          </div>
        )}
      </div>
    </PageTransitionLayout>
  );
}

export default LandingPage;
