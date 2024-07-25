import React from "react";
import Image from "next/image";
import heroBear from "../assets/hero-bear.jpg";
import bearPawBg from "../assets/hero-cont-bg.svg";
import BearDivider from "./BearDivider";
import Typical from "react-typical";

const Hero = () => {
  const contractAddress = "EQB6dtlVpFT3DEGJtfg0rDtMtmNj-ZPfFHQ9bXwoR79G72zD";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(contractAddress)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <main className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-0 fnt-solid">
        <div className="flex-2">
          <h1 className="text-6xl font-bold mb-2 fnt-solid">Pumping Bear</h1>
          <h1 className="font-semibold mb-4 fnt-shadow text-4xl">
            Powered by TON Network
          </h1>

          <div className="flex items-center">
            <div className="w-[100px] h-[100px] bg-blue-500 rounded-full border-4 border-black flex items-center justify-center text-white text-4xl animate-spin-slow">
              $PBR
            </div>
          </div>
        </div>
        <div className="flex-1 lg:flex lg:items-center lg:justify-center">
          <Image
            src={heroBear}
            alt="hero bear image"
            width={900}
            height={900}
          />
        </div>

        <div className="flex-1 ">
          <div className=" rounded-lg text-center md:text-left">
            <div className="bear-bg p-8 mt-[-12rem] md:mt-2 flex flex-col justify-center">
              <Typical
                steps={[
                  "Meet the Pumping Bear: The TON Memecoin Defying Market Trends!",
                  1000,
                ]}
                wrapper="h2"
                className="text-4xl mb-4 pl-4"
              />

              <a
                href="https://tonviewer.com/EQB6dtlVpFT3DEGJtfg0rDtMtmNj-ZPfFHQ9bXwoR79G72zD?section=transactions"
                target="_blank"
                className="flex"
              >
                <p className="mb-4 pl-4">
                  Contract Address:
                  {contractAddress}
                </p>
                <span className="ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    color="#000000"
                    fill="none"
                  >
                    <path
                      d="M11.1004 3.00208C7.4515 3.00864 5.54073 3.09822 4.31962 4.31931C3.00183 5.63706 3.00183 7.75796 3.00183 11.9997C3.00183 16.2415 3.00183 18.3624 4.31962 19.6801C5.6374 20.9979 7.75836 20.9979 12.0003 20.9979C16.2421 20.9979 18.3631 20.9979 19.6809 19.6801C20.902 18.4591 20.9916 16.5484 20.9982 12.8996"
                      stroke="currentColor"
                      stroke-width="3.0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.4803 3.51751L14.931 9.0515M20.4803 3.51751C19.9863 3.023 16.6587 3.0691 15.9552 3.0791M20.4803 3.51751C20.9742 4.01202 20.9282 7.34329 20.9182 8.04754"
                      stroke="currentColor"
                      stroke-width="3.0"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </a>

              <div className="pl-4">
                <button
                  className="bg-black text-white py-2 px-8 rounded-full hover:bg-ber-blue"
                  onClick={handleCopy}
                >
                  Copy
                </button>
              </div>
            </div>
            <p className="mb-4 -mt-[2rem] md:mt-2 pl-4 text-xl">
              The only memecoin that pumps in both bullish and bearish markets.
            </p>
          </div>
        </div>
      </main>

      <BearDivider />
    </>
  );
};

export default Hero;
