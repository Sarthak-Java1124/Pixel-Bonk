"use client"
import { useState } from "react";
import { FaQuestionCircle, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const options = [
  "Real cash",
  "NFTs and token boosts",
  "Event tickets",
  "iPhones",
];
const correctIndex = 1;

export default function Play6() {
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

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
      <div className="h-[80vh] sm:h-[99vh] w-full max-w-xs sm:max-w-6xl flex flex-col border-8 border-black rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,0.9),12px_12px_0_0_rgba(0,0,0,0.7)] sm:shadow-[8px_8px_16px_0_rgba(0,0,0,0.9)] relative bg-[url('/bgImg2.png')] bg-cover bg-center p-2 sm:p-8 overflow-auto">
        <div className="flex flex-col gap-2 sm:gap-4 flex-1">
          <div className="flex items-center justify-between w-full">
            <h1 className="press-start text-base sm:text-3xl text-black flex items-center gap-2 truncate">
              <FaQuestionCircle className="text-yellow-500 text-lg sm:text-4xl" /> Question 5
            </h1>
            <Link href="/play7" className={!answered ? 'pointer-events-none opacity-50' : ''} tabIndex={!answered ? -1 : 0} aria-disabled={!answered}>
              <FaArrowRight className="text-2xl sm:text-4xl text-red-800 cursor-pointer hover:text-red-900 transition-colors" />
            </Link>
          </div>
          <p className="press-start text-center text-black text-xs sm:text-base mb-2 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto tracking-tight break-words" style={{ letterSpacing: '-0.07em' }}>
            Pixel Bonk plans to introduce arcade-style web games where users can play as Bonk characters, earn rewards, and climb leaderboards. The games will include NFT rewards and token boosts for top players.
          </p>
          <div className="press-start text-black text-xs sm:text-base max-w-xs sm:max-w-2xl mx-auto tracking-tight flex flex-col gap-2" style={{ letterSpacing: '-0.07em' }}>
            <div className="mb-2">Question 5:</div>
            <div className="mb-2">What reward is offered to top performers in Pixel Bonk games?</div>
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
                  <span className="text-red-700">Incorrect. The correct answer is B.</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 