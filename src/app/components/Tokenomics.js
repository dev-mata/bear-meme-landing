import React from "react";
import Image from "next/image";
import tokenomics from "../assets/tokenomics.svg"
import tokenomicsMob from "../assets/tokenomics-mob.svg"

const Tokenomics = () => {


    return (


        <div className="bg-gray-100 px-4 py-0 fnt-solid pb-[100px]">
            <div className="container flex items-center justify-center mx-auto">
                <div className="md:p-6 flex flex-col items-center justify-center">
                    <h1 className="mt-[6rem] fnt-solid text-6xl font-bold text-center">TOKENOMICS</h1>
                    <Image src={tokenomics} className="hidden md:block mt-4" quality={50}  />
                    <Image src={tokenomicsMob} className="block md:hidden mt-4" quality={50} />
                </div>
            </div>
        </div>

    )
}


export default Tokenomics