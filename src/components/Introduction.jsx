import React from "react";
import Marquee from "react-fast-marquee";
import qrCard from "/src/assets/qrCard.svg";

export default function Introduction() {
  return (
    <>
      <Marquee
        style={{
          transform: "rotate(-14deg)",
          position: "fixed",
          left: "calc(-70px + 2vw)",
          top: "calc(60px + 2vw)",
          width: "calc(100% + 120px)"
        }}
        className="fixed text-center bg-white p-[0.3vw]"
      >
        <p className="text-[3vw]">
          Our website is a mobile-only party  •  Our website is a mobile-only party  •  Our website is a mobile-only party  •  Our website is a mobile-only party  •
        </p>
      </Marquee>
      <section className="h-screen w-screen flex flex-col md:flex-row overflow-clip p-4 md:p-0">
        <div className="flex flex-col justify-center items-start md:ml-10">
          <h1 className="text-[8vw] font-bold leading-none text-left text-main-color m-0">
            Is it only me?<br />
            Is it only me?<br />
            Is it only me?<br />
            Is it only me?<br />
          </h1>
          <p className="text-[3vw] text-white text-left my-4">
            Explore the unspoken with your friends
          </p>
          <h1 className="text-[8vw] font-bold leading-none text-left text-main-color">
            Is it only me?<br />
            Is it only me?<br />
            Is it only me?
          </h1>
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center md:ml-20 mt-10 md:mt-0">
          <p className="text-[2vw] text-white text-center mb-5 px-4 ">
            Add our app to your phone
          </p>
          <img src={qrCard} className="w-2/3 md:w-1/2" alt="QR Code" />
        </div>
      </section>
    </>
  );
}
