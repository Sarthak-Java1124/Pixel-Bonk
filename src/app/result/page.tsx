"use client"
import { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Result() {
  const [score, setScore] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const s = parseInt(localStorage.getItem("pixelbonk-quiz-score") || "0", 10);
    setScore(s);
  }, []);

  function handleRestart() {
    localStorage.setItem("pixelbonk-quiz-score", "0");
    router.push("/play2");
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[linear-gradient(135deg,_#82e3fc,_#a0e66f)]">
      <div className="w-full max-w-[95vw] sm:max-w-6xl mx-auto px-2 flex flex-col items-center justify-center border-8 border-black rounded-2xl shadow-2xl bg-[url('/bgImg2.png')] bg-cover bg-center relative mt-4 mb-4 p-2 sm:p-8 overflow-auto" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
          <h1 className="press-start text-lg sm:text-4xl text-yellow-500 flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
            <FaTrophy className="text-2xl sm:text-5xl text-yellow-400" /> Quiz Result
          </h1>
          <div className="press-start text-base sm:text-2xl text-black text-center w-full">
            {score !== null ? (
              <>
                You got <span className="text-green-700">{score}</span> out of <span className="text-blue-700">7</span> correct!
              </>
            ) : (
              "Loading..."
            )}
          </div>
          <button
            className="press-start bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 sm:py-3 px-4 sm:px-8 rounded shadow border-2 border-black text-xs sm:text-xl mt-4 sm:mt-8"
            onClick={handleRestart}
          >
            Restart Quiz
          </button>
          <button
            className="press-start bg-blue-400 hover:bg-blue-300 text-black font-bold py-2 sm:py-3 px-4 sm:px-8 rounded shadow border-2 border-black text-xs sm:text-xl mt-2"
            onClick={() => router.push("/")}
          >
            Go back to home
          </button>
        </div>
      </div>
    </div>
  );
} 