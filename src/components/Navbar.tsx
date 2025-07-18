"use client";
import { useMemo } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
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

export default function Navbar() {
  const endpoint = useMemo(() => "https://api.mainnet-beta.solana.com", []);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between px-2 sm:px-8 rounded-t-2xl min-h-[80px] sm:min-h-[120px] gap-2 sm:gap-0">
            {/* Left extreme: Pixel Bonk */}
            <motion.span
              className="press-start text-2xl sm:text-4xl mb-2 sm:mb-0"
              animate={{
                color: [
                  '#B8860B', // gold
                  '#1e90ff', // blue
                  '#e11d48', // pink/red
                  '#22c55e', // green
                  '#facc15', // yellow
                  '#B8860B'  // back to gold
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
            {/* Center: Navlinks */}
            <nav className="flex flex-col sm:flex-row gap-2 sm:gap-8 mb-2 sm:mb-0">
              <a href="#" className="press-start text-black text-xs sm:text-sm hover:underline">HOME</a>
              <a href="#" className="press-start text-black text-xs sm:text-sm hover:underline">WHITEPAPER</a>
              <a href="#" className="press-start text-black text-xs sm:text-sm hover:underline">CONTACT</a>
              <a href="#" className="press-start text-black text-xs sm:text-sm hover:underline">DEVTOOLS</a>
            </nav>
            {/* Right extreme: Connect Wallet button */}
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
              <WalletMultiButton className="press-start w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-black text-xs sm:text-sm px-2 sm:px-4 py-2 rounded shadow border-2 border-black" />
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
} 