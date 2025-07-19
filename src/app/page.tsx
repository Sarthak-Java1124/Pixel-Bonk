"use client"
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="min-h-screen bg-[url('/bgImg2.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="pixelcraft text-center text-6xl sm:text-[9rem] -mt-28 sm:-mt-56 w-full" style={{ color: '#FFD100', letterSpacing: '-0.05em', textShadow: '3px 3px 0 #000, 6px 6px 0 #000, 9px 9px 0 #000' }}>Pixel Bonk</h1>
            <span 
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.9rem', color: '#111', fontWeight: 500, textAlign: 'center', lineHeight: 1.2 }} 
              className="w-full text-center sm:text-[5.2rem]"
            >
              Join the fun, earn rewards<br />and be a part of crypto trends
            </span>
            
                          <Link
              href="/play"
              className="super-mario press-start bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 sm:py-3 px-4 sm:px-8 shadow text-xl sm:text-3xl cursor-pointer z-10 mt-2 sm:mt-4 pixel-border"
            >
              Play now
            </Link>
           
            <div className="w-full flex flex-col sm:flex-row justify-center items-center sm:items-start gap-3 sm:gap-40 mt-2 sm:-mt-32">
              <motion.img
                src="/pixelatedBonk1.png"
                alt="NFT 1"
                className="mb-0 w-auto max-w-[80px] sm:max-w-[120px] md:max-w-[155px] lg:max-w-[190px] xl:max-w-[225px] z-0"
                animate={{ y: [0, -20, 0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src="/pixelatedBonk2.png"
                alt="NFT 2"
                className="mb-0 mt-25 w-auto max-w-[80px] sm:max-w-[120px] md:max-w-[155px] lg:max-w-[190px] xl:max-w-[225px] z-0"
                animate={{ y: [0, 20, 0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.img
                src="/pixelatedBonk3.png"
                alt="NFT 3"
                className="mb-0 w-auto max-w-[80px] sm:max-w-[120px] md:max-w-[155px] lg:max-w-[190px] xl:max-w-[225px] z-0"
                animate={{ y: [0, -15, 0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />

            </div>
          </div>
      </div>
      <div id="about" className="min-h-screen bg-[url('/bgImg2.png')] bg-cover bg-center bg-no-repeat">
        <AboutUs />
      </div>
    </>
  );
}
