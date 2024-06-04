import React from "react";
import Marquee from "react-fast-marquee";

const Introduction = () => {
  return (
    <>
      <Marquee className="absolute animate-marquee text-center bg-white p-2 inline-block transform rotate-12 whitespace-nowrap top-20 right-10 text-7xl mb-5 mx-52">
        Our website is a mobile-only party
      </Marquee>

      <div className="flex flex-col items-left justify-center h-full text-main-color">
        <div className="relative flex items-center justify-center w-full mb-4"></div>
        <div className="text-9xl font-bold leading-none text-left pl-4">
          Is it only me?<br></br>
          Is it only me?<br></br>
          Is it only me?<br></br>
          Is it only me?<br></br>
          Is it only me?
        </div>
        <div className="mt-2 text-4xl text-white">
          Explore the unspoken with your friends
        </div>
        <h1 className="text-9xl font-bold leading-none text-left">
          Is it only me?<br></br>
          Is it only me?
        </h1>
      </div>
      <div className="mt-10">
        <div className="text-white text-lg mb-2">Add our app to your phone</div>
        <div className="p-4 text-main-color rounded-lg">
          <div>QR</div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
