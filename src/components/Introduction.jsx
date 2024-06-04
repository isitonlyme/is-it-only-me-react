import React from "react";
import Marquee from "react-fast-marquee";
import qr from "/src/assets/qr.png";
import qrCard from "/src/assets/qrCard.svg";

export default function Introduction() {
  return (
    <>
      <Marquee
        style={{ transform: "rotate(-14deg)", position: "fixed", left: "-60px", top:"90px"}}
        className="fixed text-center text-4xl bg-white p-5"
      >
        Our website is a mobile-only party  •  Our website is a mobile-only party  •  Our website is a mobile-only party  •  Our website is a mobile-only party  •  
      </Marquee>
      <section className="h-screen w-screen flex overflow-clip">
        <div className=" flex flex-col justify-center items-start ml-10">
          <h1 className="text-9xl font-bold leading-none text-left text-main-color m-0">
            Is it only me?<br></br>
            Is it only me?<br></br>
            Is it only me?<br></br>
            Is it only me?<br></br>
          </h1>
          <p className="text-white text-4xl text-left my-4 ">
            Explore the unspoken with your friends
          </p>
          <h1 className="text-9xl font-bold leading-none text-left text-main-color">
            Is it only me?<br></br>
            Is it only me?<br></br>
            Is it only me?
          </h1>
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center ml-20">
          <p className="text-white text-4xl px-32 text-center mb-5 mt-32">
            Add our app to your phone
          </p>
          <img src={qrCard} width={300} height={400} />
        </div>
      </section>
    </>
  );
}
