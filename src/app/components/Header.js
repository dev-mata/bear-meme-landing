import React from "react";
import twitter from '../assets/twitter.svg'
import discord from '../assets/discord.svg'
import telegram from '../assets/telegram.svg'
import Image from 'next/image'

const Header = () => {
    return(
        <header className="bg-ber-yellow py-4">
        <div className="container mx-auto flex justify-between items-center px-4 mb-[4rem] md:mb-4">
            <nav className="hidden md:block">
                <ul className="flex space-x-4 fnt-solid">
                    <li><a href="#" className="bg-ber-gray p-2 rounded-xl border-2 border-black hover:bg-ber-blue hover:text-white">Home</a></li>
                    <li><a href="#" className="bg-ber-gray p-2 rounded-xl border-2 border-black hover:bg-ber-blue hover:text-white">Roadmap</a></li>
                    <li><a href="#" className="bg-ber-gray p-2 rounded-xl border-2 border-black hover:bg-ber-blue hover:text-white">Tokenomics</a></li>
                    <li><a href="#" className="bg-ber-gray p-2 rounded-xl border-2 border-black hover:bg-ber-blue hover:text-white">About</a></li>
                </ul>
            </nav>
            <div className="flex justify-center items-center">
                <a className="m-2"><Image src={twitter} /></a>
                <a className="m-2"><Image src={telegram} /></a>
                <a className="m-2"><Image src={discord} /></a>
                <button className="bg-gray-200 py-2 px-6 rounded-xl border-2 border-black fnt-solid hover:bg-ber-blue hover:text-white">Buy</button>
            </div>
        </div> 
        </header> 
    )
}

export default Header