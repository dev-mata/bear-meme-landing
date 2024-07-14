import React from "react";
import Image from 'next/image'
import heroBear from '../assets/hero-bear.jpg'
import bearPawBg from '../assets/hero-cont-bg.svg'
import BearDivider from "./BearDivider";

const Hero = () => {
    return (
        <>

            <main className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-0 fnt-solid">
                <div className="flex-2">
                    <h1 className="text-6xl font-bold mb-2 fnt-solid">$BEAR</h1>
                    <h1 className="font-semibold mb-4 fnt-shadow text-4xl" >Powered by TON Network</h1>
                    {/* <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    </div> */}
                </div>
                <div className="flex-1 lg:flex lg:items-center lg:justify-center">
                    <Image
                        src={heroBear}
                        alt="hero bear image"
                        width={900}
                        height={900} />
                </div>

                <div className="flex-1 ">
                    <div className=" rounded-lg text-center md:text-left">
                        <div className="bear-bg p-8 mt-[-12rem] md:mt-2 flex flex-col justify-center">
                            <h2 className="text-4xl mb-4 pl-4">Meet $BEAR Coin: The Solana Memecoin Defying Market Trends!</h2>
                            <p className="mb-4 pl-4">Contract Address: 0xf99090ad2e8a3dca0df28180f12828e67c326</p>

                            <div className="pl-4">
                                <button className="bg-black text-white py-2 px-8 rounded-full">Copy</button>
                            </div>
                        </div>
                        <p className="mb-4 -mt-[2rem] md:mt-2 pl-4 text-xl">The only memecoin that pumps in both bullish and bearish markets.
                        </p>

                    </div>

                </div>

            </main>

            <BearDivider />

        </>
    )
}

export default Hero