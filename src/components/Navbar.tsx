"use client";
import { useMemo, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const endpoint = useMemo(() => "https://api.mainnet-beta.solana.com", []);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const targetPosition = aboutSection.offsetTop - 20;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500;
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between px-2 sm:px-8 rounded-t-2xl min-h-[80px] sm:min-h-[120px] gap-2 sm:gap-0 relative">
            <motion.span
              className="press-start text-2xl sm:text-4xl mb-2 sm:mb-0 whitespace-nowrap flex-shrink-0"
              animate={{
                color: [
                  '#B8860B',
                  '#1e90ff',
                  '#e11d48',
                  '#22c55e',
                  '#facc15',
                  '#B8860B'
                ]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              Pixel Bonk
            </motion.span>
            <button
              className="sm:hidden absolute right-4 top-4 z-30"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <nav className="hidden sm:flex flex-row gap-8 mb-2 sm:mb-0">
              <Link href="/" className="press-start text-black text-xs sm:text-sm hover:text-yellow-400 hover:underline transition-colors duration-200">HOME</Link>
              <a href="#" className="press-start text-black text-xs sm:text-sm hover:text-yellow-400 hover:underline transition-colors duration-200">WHITEPAPER</a>
              <a href="#" className="press-start text-black text-xs sm:text-sm hover:text-yellow-400 hover:underline transition-colors duration-200">CONTACT</a>
              <a href="#about" onClick={scrollToAbout} className="press-start text-black text-xs sm:text-sm hover:text-yellow-400 hover:underline transition-colors duration-200">ABOUT</a>
             
            </nav>
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
              <WalletMultiButton className="press-start w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-black text-xs sm:text-sm px-2 sm:px-4 py-2 rounded shadow border-2 border-black" />
            </div>
          </div>
          {menuOpen && (
            <div className="fixed inset-0 z-40 bg-black/40 flex flex-col">
              <div className="bg-white border-b-2 border-black p-6 flex flex-col gap-4">
                <Link href="/" className="press-start text-black text-xs hover:text-yellow-400 hover:underline transition-colors duration-200">HOME</Link>
                <a href="#" className="press-start text-black text-xs hover:text-yellow-400 hover:underline transition-colors duration-200">WHITEPAPER</a>
                <a href="#" className="press-start text-black text-xs hover:text-yellow-400 hover:underline transition-colors duration-200">CONTACT</a>
                <a href="#about" onClick={scrollToAbout} className="press-start text-black text-xs hover:text-yellow-400 hover:underline transition-colors duration-200">ABOUT</a>
                <button className="mt-4 text-black underline text-xs self-end" onClick={() => setMenuOpen(false)}>Close</button>
              </div>
            </div>
          )}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
} 