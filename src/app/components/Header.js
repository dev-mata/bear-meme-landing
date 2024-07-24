"use client";
import React, {useState} from "react";
import Image from "next/image";
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";
import telegram from "../assets/telegram.svg";
import candleStick from "../assets/candlestick.svg";
import ComingSoonPopup from "./ComingSoon";

const Header = ({ onMenuClick, refs }) => {

    const [showPopup, setShowPopup] = useState(false);

  return (
    <>
    <header className="bg-ber-yellow py-4">
      <div className="container mx-auto flex justify-between items-center px-4 mb-[4rem] md:mb-4">
        <nav className="hidden md:block">
          <ul className="flex space-x-4 fnt-solid">
            <li>
              <a
                onClick={() => onMenuClick(refs.heroRef)}
                className="bg-ber-gray p-2 rounded-xl border-2 border-black hover:bg-ber-blue hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => onMenuClick(refs.roadmapRef)}
                className="bg-ber-gray p-2 rounded-xl border-2 border-black hover:bg-ber-blue hover:text-white"
              >
                Roadmap
              </a>
            </li>
            
            <li>
              <a
                onClick={() => onMenuClick(refs.tokenonmicsRef)}
                className="bg-ber-gray p-2 rounded-xl border-2 border-black hover:bg-ber-blue hover:text-white"
              >
                Tokenomics
              </a>
            </li>
            <li>
              <a
                onClick={() => onMenuClick(refs.aboutRef)}
                className="bg-ber-gray p-2 rounded-xl border-2 border-black hover:bg-ber-blue hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowPopup(true)}
                className="bg-ber-gray p-2 rounded-xl border-2 border-black hover:bg-ber-blue hover:text-white"
              >
                Alpha Bears
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowPopup(true)}
                className="flex items-center -mt-2 bg-ber-gray p-2 rounded-xl border-2 border-black hover:bg-ber-blue hover:text-white"
              >
                Pump itt{" "}
                <span className="ml-1">
                  <Image src={candleStick} />{" "}
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center">
          <a className="m-2" href="https://x.com/pumpingbearcoin" target="_blank">
            <Image src={twitter} />
          </a>
          <a className="m-2" href="https://t.me/PumpingBear" target="_blank">
            <Image src={telegram} />
          </a>
          {/* <a className="m-2">
            <Image src={discord} />
          </a> */}
          <button  onClick={() => setShowPopup(true)} className="bg-ber-blue text-white py-2 px-6 rounded-xl border-2 border-black fnt-solid hover:bg-black hover:text-white">
            Buy $PBR
          </button> 
        </div>
      </div>
    </header>

<ComingSoonPopup show={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Header;
