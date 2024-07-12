import React from "react";
import Image from "next/image";
import bearRd1 from "../assets/rd-1.png"
import bearRd2 from "../assets/rd-2.png"
import bearRd3 from "../assets/rd-3.png"





const Roadmap = () => {

  return (


    <div className="bg-white px-4 py-0 fnt-solid">
      <div className="container items-center justify-center mx-auto">
        <div className="p-6 flex items-center justify-center">
          <h1 className="mt-[8rem] fnt-solid text-6xl font-bold">ROADMAP</h1>

        </div>

        <div className="flex flex-col lg:flex-row pb-[10rem]">

          <div className="relative flex-1 p-6 bg-ber-yellow m-2 rounded-[32px]">
            <Image src={bearRd1} className="h-[100px] w-[100px] absolute -top-10 right-4" />
            <h3 className="mt-12 mb-2 text-xl">Phase 1:</h3>
            <p className="fnt-sec text-sm">~ Conceptualization and Initial Development</p>
            <p className="fnt-sec text-sm">~ Develop the Bear Coin concept and character</p>
            <p className="fnt-sec text-sm">~ Build the initial website and community channels</p>
          </div>

          <div className="relative flex-1 p-6 bg-ber-gray m-2 rounded-[32px]">
            <Image src={bearRd2} className="h-[100px] w-[100px] absolute -bottom-10 right-4" />

            <h3 className="mt-12 mb-2 text-xl">Phase 2:</h3>

            <p className="fnt-sec text-sm">~ Launch and Community Building</p>
            <p className="fnt-sec text-sm">~ Launch Bear Coin on the Solana blockchain</p>
            <p className="fnt-sec text-sm">~ Grow and engage the community</p>


          </div>

          <div className="relative flex-1 p-6 bg-ber-gray m-2 rounded-[32px]">
          <Image src={bearRd3} className="h-[100px] w-[100px] absolute -top-10 right-4" />

          <h3 className="mt-12 mb-2 text-xl">Phase 3:</h3>

            <p className="fnt-sec text-sm">~ Market Integration and Major Pumps</p>
            <p className="fnt-sec text-sm">~ Coordinate major pumps during bearish markets with community members</p>
            <p className="fnt-sec text-sm">~ Integrate with key exchanges and platforms</p>
          </div>

          <div className="relative flex-1 p-6 bg-ber-gray m-2 rounded-[32px]">
          <h3 className="mt-12 mb-2 text-xl">Phase 4:</h3>

            <p className="fnt-sec text-sm">~ Continuous Growth and Expansion</p>
            <p className="fnt-sec text-sm">~ Expand Bear Coin’s use cases and partnerships</p>
            <p className="fnt-sec text-sm">~ Innovate and evolve based on community feedback</p>


          </div>
        </div>
      </div>
    </div>

  );


};

export default Roadmap;
