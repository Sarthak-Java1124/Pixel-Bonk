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
            <h1 className="press-start text-lg sm:text-[5.2rem] mt-2" style={{ color: '#B8860B', letterSpacing: '-0.1em', textShadow: '2px 2px 0 #000, 4px 4px 0 #333' }}>Pixel Bonk</h1>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#111', fontWeight: 500, textAlign: 'center', lineHeight: 1.2 }} className="sm:text-[2rem]">
              Join the fun, earn rewards<br />and be a part of crypto trends
            </span>
            
              <Link
                href="/play"
                className="press-start bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 sm:py-3 px-4 sm:px-8 rounded shadow border-2 border-black text-base sm:text-xl cursor-pointer z-10"
              >
                Play now
              </Link>
           
            <div className="w-full flex flex-col sm:flex-row justify-center items-center sm:items-start gap-3 sm:gap-40 mt-2 sm:-mt-32">
              <motion.img
                src="/pixelatedBonk1.png"
                alt="NFT 1"
                className="mb-0 w-auto max-w-[60px] sm:max-w-[120px] md:max-w-[155px] lg:max-w-[190px] xl:max-w-[225px] rounded z-0 shadow"
                animate={{ y: [0, -20, 0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src="/pixelatedBonk2.png"
                alt="NFT 2"
                className="mb-0 mt-25 w-auto max-w-[60px] sm:max-w-[120px] md:max-w-[155px] lg:max-w-[190px] xl:max-w-[225px] rounded z-0 shadow"
                animate={{ y: [0, 20, 0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.img
                src="/pixelatedBonk3.png"
                alt="NFT 3"
                className="mb-0 w-auto max-w-[60px] sm:max-w-[120px] md:max-w-[155px] lg:max-w-[190px] xl:max-w-[225px] rounded z-0 shadow"
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
