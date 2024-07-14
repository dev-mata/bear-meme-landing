'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import bearCenter from "../assets/gif-meme.png"
import bearCenterMobile from "../assets/gif-meme-mob.png"

import gif1 from "../assets/gifs/g1.gif"
import gif2 from "../assets/gifs/g2.gif"
import gif3 from "../assets/gifs/g3.gif"
import gif4 from "../assets/gifs/g4.gif"
import gif5 from "../assets/gifs/g5.gif"
import gif6 from "../assets/gifs/g6.gif"
import gif7 from "../assets/gifs/g7.gif"
import bpaw1 from "../assets/bpaw1.svg"
import bpaw2 from "../assets/bpaw2.svg"
import bpaw3 from "../assets/bpaw3.svg"
import bpaw4 from "../assets/bpaw4.svg"





// import bearCenter from "../assets/gifs/g1.gif"



const Gif = () => {


    return (
        <>
            <div className="inset-0 flex bg-ber-blue">
                <div className="relative w-full p-10 mt-2 md:mt-[5rem] h-auto md:h-screen bg-ber-blue overflow-hidden flex items-center justify-center">
                    {/* Centered Bear */}
 


                    <Image src={bearCenter} className="relative z-10 h-[517px] w-[895px] hidden md:block " />
                    <Image src={bearCenterMobile} className="relative z-10 w-full block md:hidden animate-bounce" />


                    {/* GIFs positioned around the centered bear */}

                    {/* bear torotot */}

                    <Image src={bpaw1} className="absolute top-[5%] right-[17%] w-[300px] hidden md:block" />

                    <Image src={bpaw2} className="absolute bottom-[5%] left-[17%] w-[300px] hidden md:block " />
                    <Image src={bpaw3} className="absolute top-[5%] left-[25%] w-[70px] hidden md:block" />
                    <Image src={bpaw4} className="absolute bottom-[15%] right-[25%] w-[70px] hidden md:block" />



                    <Image src={gif1} className="absolute bottom-[30%] right-[27%] w-[300px] hidden md:block " />

                    {/*dancing bear */}

                    <Image src={gif2} className="absolute bottom-[10%] right-[30%] w-[300px] hidden md:block" />

                    {/* slding bear */}

                    <Image src={gif3} className="absolute top-[2%] left-[32%] hidden md:block " />

                    {/* bull bear */}

                    <Image src={gif4} className="absolute top-3 right-[30%] w-[300px] hidden md:block" />

                    {/* bear vibe */}

                    <Image src={gif5} className="absolute top-[20%] left-1/4 w-[250px] hidden md:block" />

                    {/* this is fine */}

                    <Image src={gif6} className="absolute -top-[2%] md:top-[1%] md:left-[90] w-[300px] hidden md:block  " />

                    {/* coming for gains */}

                    <Image src={gif7} className="absolute left-[30%] top-[60%] hidden md:block" />
                </div>
            </div>

        </>
    )

}

export default Gif