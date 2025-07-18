"use client"
import { useState, useEffect } from "react";
import { FaQuestionCircle, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const options = [
  "It is backed by gold reserves",
  "It focuses on real estate investments",
  "It combines pixel art and crypto culture",
  "It uses only AI for trading",
];
const correctIndex = 2;

export default function Play2() {
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    localStorage.setItem("pixelbonk-quiz-score", "0");
  }, []);

  function handleSelect(idx: number) {
    if (!answered) {
      setSelected(idx);
      setAnswered(true);
      if (idx === correctIndex) {
        const prev = parseInt(localStorage.getItem("pixelbonk-quiz-score") || "0", 10);
        localStorage.setItem("pixelbonk-quiz-score", String(prev + 1));
      }
    }
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#82e3fc,_#a0e66f)] flex justify-center items-center">
      <div className="w-full max-w-[95vw] sm:max-w-6xl mx-auto px-2 flex flex-col border-8 border-black rounded-2xl shadow-2xl bg-[url('/bgImg2.png')] bg-cover bg-center relative mt-4 mb-4 p-2 sm:p-8 overflow-auto" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
        <div className="flex flex-col gap-2 sm:gap-4 flex-1">
          <div className="flex items-center justify-between w-full">
            <h1 className="press-start text-base sm:text-3xl text-black flex items-center gap-2 truncate">
              <FaQuestionCircle className="text-yellow-500 text-lg sm:text-4xl" /> Question 1
            </h1>
            <Link href="/play3" className={!answered ? 'pointer-events-none opacity-50' : ''} tabIndex={!answered ? -1 : 0} aria-disabled={!answered}>
              <FaArrowRight className="text-2xl sm:text-4xl text-red-800 cursor-pointer hover:text-red-900 transition-colors" />
            </Link>
          </div>
          <p className="press-start text-center text-black text-xs sm:text-base mb-2 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto tracking-tight break-words" style={{ letterSpacing: '-0.07em' }}>
            In a world flooded with meme coins, Pixel Bonk stood out by blending retro 8-bit aesthetics with the energy of the crypto community. It wasn&apos;t just about tokens—it was about building a pixel-powered universe that brought nostalgia and innovation together.
          </p>
          <div className="press-start text-black text-xs sm:text-base max-w-xs sm:max-w-2xl mx-auto tracking-tight flex flex-col gap-2" style={{ letterSpacing: '-0.07em' }}>
            <div className="mb-2">Question 1:</div>
            <div className="mb-2">What makes Pixel Bonk different from most meme coins?</div>
            <div className="flex flex-col gap-2">
              {options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={answered}
                  className={`press-start text-xs sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded border-2 text-left transition-all w-full break-words
                    ${selected === idx && answered
                      ? idx === correctIndex
                        ? 'bg-green-300 border-green-700 text-green-900'
                        : 'bg-red-300 border-red-700 text-red-900'
                      : 'bg-white/80 border-black text-black hover:bg-yellow-100'}
                  `}
                >
                  {String.fromCharCode(65 + idx)}) {opt}
                </button>
              ))}
            </div>
            {answered && (
              <div className="mt-2 sm:mt-6 text-xs sm:text-xl text-center press-start">
                {selected === correctIndex ? (
                  <span className="text-green-700">Correct! 🎉</span>
                ) : (
                  <span className="text-red-700">Incorrect. The correct answer is C.</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 