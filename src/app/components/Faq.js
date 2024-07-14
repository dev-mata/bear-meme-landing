import React from "react";
import Image from "next/image";
import faqBg from "../assets/footer-bg.jpg";
import faqContBg from "../assets/faq-cont-bg.svg";

const Faq = () => {
  return (
    <div className="relative h-screen bg-cover bg-center">
      <Image
        src={faqBg}
        alt="Hero Image"
        layout="fill" // Ensures the image covers the entire background
        objectFit="cover" // Maintains the aspect ratio while covering the area
        priority // Optionally load before other images
        className="z-0" // Ensures it stays in the background
      />
      {/* Your section content here */}

      <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-8">
        <div className="md:relative flex flex-col justify-center items-center">
          <Image
            src={faqContBg}
            layout="intrinsic"
            objectFit="cover"
            className="hidden md:block"
          />
          <div className="md:absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <h3 className="fnt-solid text-4xl md:text-2xl">
              What is Bear Coin?
            </h3>
            <p className="fnt-sec text-xl font-bold">
              Bear Coin is a Solana-based memecoin designed to pump in both
              bullish and bearish markets.
            </p>
          </div>
        </div>

        <div className="md:relative flex flex-col justify-center items-center">
          <Image
            src={faqContBg}
            layout="intrinsic"
            objectFit="cover"
            className="hidden md:block"
          />
          <div className="md:absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <h3 className="fnt-solid text-4xl md:text-2xl">
              How does Bear Coin pump during bearish markets?
            </h3>
            <p className="fnt-sec text-xl font-bold">
              We coordinate major pumps with our community members, leveraging
              collective strategies.
            </p>
          </div>
        </div>

        <div className="md:relative flex flex-col justify-center items-center">
          <Image
            src={faqContBg}
            layout="intrinsic"
            objectFit="cover"
            className="hidden md:block"
          />
          <div className="md:absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <h3 className="fnt-solid text-4xl md:text-2xl">
              How can I buy Bear Coin?
            </h3>
            <p className="fnt-sec text-xl font-bold">
              Bear Coin will be available on key exchanges and platforms. Stay
              tuned for announcements!
            </p>
          </div>
        </div>

        <div className="md:relative flex flex-col justify-center items-center">
          <Image
            src={faqContBg}
            layout="intrinsic"
            objectFit="cover"
            className="hidden md:block"
          />
          <div className="md:absolute inset-0 flex flex-col justify-center items-center text-center p-4">
            <h3 className="fnt-solid text-4xl md:text-2xl text-white md:text-black">
              How do I join the community?
            </h3>
            <p className="fnt-sec text-xl font-bold text-white md:text-black">
              Join our Discord, follow us on Twitter, and connect with us on
              Telegram to be part of the Bear Coin community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
