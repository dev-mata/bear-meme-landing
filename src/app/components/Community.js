import React from "react";
import Image from "next/image";
import twitter from '../assets/twitter.svg'
import discord from '../assets/discord.svg'
import telegram from '../assets/telegram.svg'
import bears from '../assets/three-bears.png'
import threeBears from '../assets/three-bears-mob.png'



const Community = () => {
    return (
<>
        <div className="p-2 bg-white">
            <Image
            src={threeBears}
            layout="intrinsic"
            objectFit="cover"
            className="block md:hidden bg-white"
          />
        </div>
        <div className="bg-white flex items-center justify-center py-20">



            <div className="custom-shape px-3 md:px-[10rem] md:py-[7rem] max-w-6xl mx-auto flex flex-col md:flex-row items-center -mt-[10rem] md:mt-2" >
                <div className="flex-shrink-0 mb-4 md:mb-0">
                    {/* <img src="path/to/your/image.png" alt="Bear Coin Community" className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover"> */}
                </div>
                <div className="md:ml-[20rem] text-center md:text-left">
                    <h2 className="text-6xl font-bold fnt-solid ">SLIDE INTO OUR $COMMUNITY</h2>
                    <p className="mb-6 fnt-sec text-xl font-bold mt-6">Join our vibrant community of degens who believe in the power of Bear Coin. Participate in discussions, pump events, and much more!</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" className="bg-ber-gray p-2 rounded-xl border-2 border-black flex">
                            <Image src={telegram} alt="Telegram" className="w-6 h-6 mr-2" />
                            <span>Telegram</span>
                        </a>
                        <a href="#" className="bg-ber-gray p-2 rounded-xl border-2 border-black flex">
                            <Image src={discord} alt="Telegram" className="w-6 h-6 mr-2" />

                            <span>Discord</span>
                        </a>
                        <a href="#" className="bg-ber-gray p-2 rounded-xl border-2 border-black flex">
                            <Image src={twitter} alt="Telegram" className="w-6 h-6 mr-2" />

                            <span>Twitter</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        </>

    )
}

export default Community 