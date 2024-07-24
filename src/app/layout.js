"use client";

import "./globals.css";
import React, {useRef} from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Roadmap from "./components/Roadmap";
import Gif from "./components/Gif";
import About from "./components/About";

import "@fontsource/gowun-dodum";
import "@fontsource/londrina-solid";
import "@fontsource/londrina-shadow";
import Tokenomics from "./components/Tokenomics";
import Community from "./components/Community";
import BearDivider from "./components/BearDivider";
import Faq from "./components/Faq";




export default function RootLayout() {

  const heroRef = useRef(null)
  const roadmapRef = useRef(null)
  const gifRef = useRef(null) 
  const tokenonmicsRef = useRef(null)
  const aboutRef = useRef(null)
  const communityRef = useRef(null)
  const faqRef = useRef(null)

  const handleScroll = (ref) => {
    console.log("i am clicked", ref)
    // ref.current?.scrollIntoView({behavior : 'smooth'})
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }


 

  return (
    <html lang="en">
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      <meta name="title" content="Pumping Bear Coin (PBR) The Memecoin That Pumps Bullish & Bearish Strong Community, TON Blockchain" />
      <meta name="description" content="Pumping Bear Coin (PBR) is a revolutionary TON memecoin that thrives in any market. Join our community-driven pumps, enjoy low fees & fast transactions, and be part of the memecoin revolution!" />
      
      <body className="bg-ber-yellow text-gray-800">
        <Header onMenuClick={handleScroll} refs={{ heroRef, roadmapRef, gifRef, tokenonmicsRef, aboutRef, communityRef, faqRef }} />

        <section ref={heroRef}><Hero /></section>
        <section ref={roadmapRef}><Roadmap /></section>
        <section ref={gifRef}><Gif /></section>
        <section ref={tokenonmicsRef}><Tokenomics /></section>
        <section ref={aboutRef}><About /></section>
        <section ref={communityRef}><Community /></section>
        <section ref={faqRef}><Faq /></section>
        <BearDivider />


        {/* <Hero />
        <Roadmap />
        <Gif />
        <Tokenomics />
        <About />
        <Community />
        <Faq />
        <BearDivider /> */}

      </body>

    </html>
  );
}
