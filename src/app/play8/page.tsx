"use client"
import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";

const options = [
  "Building a crypto bank",
  "Releasing pixel comic stories",
  "Opening a coffee shop",
  "Creating solar panels",
];
const correctIndex = 1;

export default function Play8() {
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
      <div className="w-full max-w-[95vw] sm:max-w-6xl mx-auto px-2 flex flex-col border-8 border-black rounded-2xl shadow-2xl bg-[url('/bgImg2.png')] bg-cover bg-center relative mt-4 mb-4 p-4 sm:p-8" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
        <div className="flex flex-col gap-2 sm:gap-4 flex-1">
          <h1 className="press-start text-base sm:text-3xl text-black flex items-center gap-2 truncate justify-center">
            <FaQuestionCircle className="text-yellow-500 text-lg sm:text-4xl" /> Question 7
          </h1>
          <p className="press-start text-center text-black text-xs sm:text-base mb-2 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto tracking-tight break-words" style={{ letterSpacing: '-0.07em' }}>
            The Pixel Bonk roadmap includes multi-chain support, cross-game NFTs, community-run tournaments, and even pixel comic drops that tell the backstory of Bonk&apos;s world. It&apos;s not just a token—it&apos;s a full-blown metaverse in pixel form.
          </p>
          <div className="press-start text-black text-xs sm:text-base max-w-xs sm:max-w-2xl mx-auto tracking-tight flex flex-col gap-2" style={{ letterSpacing: '-0.07em' }}>
            <div className="mb-2">Question 7:</div>
            <div className="mb-2">Which of the following is part of the future plans for Pixel Bonk?</div>
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
            <div className="flex justify-center mt-8">
              <Link href="/result" className={!answered ? 'pointer-events-none opacity-50' : ''} tabIndex={!answered ? -1 : 0} aria-disabled={!answered}>
                <button className="press-start bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded shadow border-2 border-black text-xs sm:text-xl">See Result</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 