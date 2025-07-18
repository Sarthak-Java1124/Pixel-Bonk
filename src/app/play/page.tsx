import Link from "next/link";
import { FaGamepad, FaFrog, FaRegEdit, FaComments, FaBrain, FaCheckCircle, FaGamepad as FaJoystick, FaTrophy, FaFlask } from "react-icons/fa";
import { GiWizardStaff } from "react-icons/gi";

export default function Play() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#82e3fc,_#a0e66f)] flex justify-center">
      <div className="min-h-[80vh] h-auto w-full max-w-7xl flex flex-col border-8 border-black rounded-2xl shadow-[8px_8px_16px_0_rgba(0,0,0,0.9)] relative bg-[url('/bgImg2.png')] bg-cover bg-center p-8">
        <div className="flex flex-col items-center gap-6">
          <h1 className="press-start text-lg sm:text-xl text-center flex items-center gap-2 text-black">
            <FaGamepad className="inline text-3xl text-yellow-500" /> Welcome to the Pixel Bonk Quiz Challenge! <GiWizardStaff className="inline text-3xl text-blue-700" /> <FaFrog className="inline text-3xl text-green-600" />
          </h1>
          <p className="press-start text-base sm:text-lg text-center font-semibold text-black max-w-2xl">
            Think you&apos;re a true Pixel Bonker? It’s time to prove your knowledge!
          </p>
          <div className="w-full max-w-2xl flex flex-col gap-3 text-black text-xs sm:text-base font-medium">
            <div className="flex items-center gap-2">
              <FaRegEdit className="text-xl text-blue-500" />
              <span className="press-start text-xs sm:text-base">How to Play:</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <FaComments className="text-lg text-gray-700" />
              <span className="press-start text-xs sm:text-base">Read the short passage carefully — it’s your key to cracking the questions!</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <FaBrain className="text-lg text-purple-700" />
              <span className="press-start text-xs sm:text-base">Answer 8 fun questions based on the passage.</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <FaCheckCircle className="text-lg text-green-600" />
              <span className="press-start text-xs sm:text-base">Each question has only one correct answer.</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <FaJoystick className="text-lg text-pink-500" />
              <span className="press-start text-xs sm:text-base">No time limit — but real Pixel Masters finish fast!</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <FaTrophy className="text-lg text-yellow-600" />
              <span className="press-start text-xs sm:text-base">Score will be shown at the end. Share your results and challenge your friends!</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="press-start font-bold text-xs sm:text-base">Pro Tip:</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <FaFlask className="text-lg text-green-700" />
              <span className="press-start text-xs sm:text-base">Watch out for tricky details — Bonk the Wizard might try to confuse you with some pixelated spells</span>
            </div>
          </div>
          <div className="flex justify-center w-full mt-8">
            <Link href="/play2" className="press-start bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded shadow border-2 border-black text-base sm:text-xl cursor-pointer w-full max-w-xs text-center">
              Ready to Play
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 