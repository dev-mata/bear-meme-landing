import React from "react";
import Image from "next/image";
import whatBear from "../assets/what-bear.png"
import whyBear from "../assets/why-bear.png"


const About = () => {
    return (

        <div className="bg-white pt-20">

            <main className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-0 fnt-solid">
                <div className="flex-1">
                    <h1 className="text-6xl font-bold mb-2 fnt-solid">What is $BEAR Coin?</h1>
                    <h1 className="font-semibold mb-4 mt-8 fnt-shadow text-4xl tracking-wider " >Bear Coin is a revolutionary memecoin built on the TON blockchain, designed to bring humor and excitement to the crypto space. Our unique bear character symbolizes resilience and strength, pumping during both bullish and bearish markets. Whether the market is up or down, Bear Coin thrives, making it the ultimate choice for true degens.</h1>

                </div>


                <div className="flex-1 ">
                    <Image src={whatBear} className="w-[550px]" />

                </div>

            </main>


            <main className="container mt-16 mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-0 fnt-solid">



                <div className="flex-1 hidden md:block">
                    <Image src={whyBear} className="w-[650px]" />

                </div>

                <div className="flex-1">
                    <h1 className="text-6xl font-bold mb-2 fnt-solid">Why Choose $BEAR Coin?</h1>
                    <h3 className="font-semibold mb-4 mt-8 fnt-shadow text-4xl tracking-wider " >
                        <span className="fnt-solid">Pumps in All Markets: </span>   Bear Coin is designed to pump in both bullish and bearish markets, ensuring continuous excitement and growth.
                    </h3>

                    <h3 className="font-semibold mb-4 mt-8 fnt-shadow text-4xl tracking-wider " >
                        <span className="fnt-solid">Community-Driven Pumps: </span>
                        During bearish markets, we coordinate major pumps with our community members, leveraging collective strength and strategy.
                    </h3>

                    <h3 className="font-semibold mb-4 mt-8 fnt-shadow text-4xl tracking-wider " >
                        <span className="fnt-solid">TON Blockchain: </span>
                        Built on the TON blockchain, Bear Coin offers fast, secure, and low-cost transactions.
                    </h3>

                    <h3 className="font-semibold mb-4 mt-8 fnt-shadow text-4xl tracking-wider " >
                        <span className="fnt-solid">Meme Power:</span>
                        Embrace the meme culture with our unique bear character, making Bear Coin not just a cryptocurrency but a movement.                    </h3>

                </div>

            </main>
        </div>

    )
}

export default About