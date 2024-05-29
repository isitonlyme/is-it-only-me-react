// import React from 'react'

// export default function LandingPage() {
//   return (
//     <div>

//     </div>
//   )
// }

import React, { useState, useEffect } from 'react';

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is the typical breakpoint for tablets
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!isMobile ? (
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">This is a mobile game</h1>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">IS IT ONLY ME?</h1>
          <p className="text-2xl mb-4">You’ve probably wondered that at some point.</p>
          <p className="text-lg mb-4">Let’s explore the unspoken together</p>
          <p className="text-2xl font-bold mb-4">Sorry to tell you, you’re not so special</p>
          <p className="text-lg mb-4">It’s a common human experience to question our own uniqueness.</p>
          <p className="text-lg mb-4">
            On "Is it Only Me?", you can browse through a variety of statements that reflect all kinds of thoughts—some you might have never said out loud.
          </p>
          <p className="text-lg mb-8">
            Browse through a variety of statements that reflect all kinds of thoughts—some you might have never said out loud.
          </p>
          <div className="border border-gray-300 rounded-lg p-4 mb-8">
            <p className="text-lg">IS IT ONLY ME... or is peeing outside the best</p>
          </div>
          <button className="bg-gray-200 hover:bg-gray-300 text-lg py-2 px-4 rounded mb-4">Play game</button>
          <div className="text-2xl mt-8">▼</div>
        </div>
      )}
    </div>
  );
}
