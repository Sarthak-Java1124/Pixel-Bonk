"use client"
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#82e3fc,_#a0e66f)] flex justify-center">
      <div className="h-[80vh] sm:h-[99vh] w-full max-w-xs sm:max-w-7xl flex flex-col border-8 border-black rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,0.9),12px_12px_0_0_rgba(0,0,0,0.7)] sm:shadow-[8px_8px_16px_0_rgba(0,0,0,0.9)] relative bg-[url('/bgImg2.png')] bg-cover bg-center">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-start gap-4">
          <h1 className="press-start text-lg sm:text-[5.2rem] mt-2" style={{ color: '#B8860B', letterSpacing: '-0.1em', textShadow: '2px 2px 0 #000, 4px 4px 0 #333' }}>Pixel Bonk</h1>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#111', fontWeight: 500, textAlign: 'center', lineHeight: 1.2 }} className="sm:text-[2rem]">
            Join the fun, earn rewards<br />and be a part of crypto trends
          </span>
          
            <a
              href="/play"
              className="press-start bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 sm:py-3 px-4 sm:px-8 rounded shadow border-2 border-black text-base sm:text-xl cursor-pointer"
            >
              Play now
            </a>
         
          <div className="w-full flex flex-row justify-center items-start gap-40 -mt-32">
            <motion.img
              src="/pixelatedBonk1.png"
              alt="NFT 1"
              className="mb-0 w-auto max-w-[85px] sm:max-w-[120px] md:max-w-[155px] lg:max-w-[190px] xl:max-w-[225px] rounded"
              animate={{ y: [0, -20, 0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="/pixelatedBonk2.png"
              alt="NFT 2"
              className="mb-0 mt-25 w-auto max-w-[85px] sm:max-w-[120px] md:max-w-[155px] lg:max-w-[190px] xl:max-w-[225px] rounded"
              animate={{ y: [0, 20, 0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.img
              src="/pixelatedBonk3.png"
              alt="NFT 3"
              className="mb-0 w-auto max-w-[85px] sm:max-w-[120px] md:max-w-[155px] lg:max-w-[190px] xl:max-w-[225px] rounded"
              animate={{ y: [0, -15, 0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

          </div>
        </div>
      </div>
    </div>
  );
}
