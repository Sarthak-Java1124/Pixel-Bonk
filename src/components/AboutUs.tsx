"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function AboutUs() {
  const [currentCard, setCurrentCard] = useState(0);
  
  const cards = [
    { 
      id: 1, 
      heading: "Who We Are?",
      content: (
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
          <div className="lg:w-1/2 flex justify-center">
            <Image 
              src="/pixelatedBonk1.png" 
              alt="Pixelated Bonk" 
              width={64}
              height={64}
              className="w-16 h-16 sm:w-70 sm:h-70 object-contain"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="press-start text-2xl font-bold text-black mb-4">🧠 Pixel Minds. Meme Hearts.</h3>
            <p className="press-start text-sm text-black leading-relaxed">
              We&apos;re a bunch of devs, artists, and dreamers building a world where memes rule, cats wear crowns, and Bonk isn&apos;t just a coin—it&apos;s culture.
            </p>
            <p className="press-start text-sm text-black leading-relaxed mt-2">
              Welcome to the Pixelated Bonkverse.
            </p>
          </div>
        </div>
      )
    },
    { 
      id: 2, 
      heading: "Our Mission",
      content: (
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
          <div className="lg:w-1/2 flex justify-center">
            <Image 
              src="/pixelatedBonk2.png" 
              alt="Pixelated Bonk 2" 
              width={64}
              height={64}
              className="w-16 h-16 sm:w-70 sm:h-70 object-contain"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="press-start text-2xl font-bold text-black mb-4">🚀 Fun Over Everything.</h3>
            <p className="press-start text-sm text-black leading-relaxed">
              We&apos;re here to bring the chaotic energy of meme coins into games, art, and digital communities.
            </p>
            <p className="press-start text-sm text-black leading-relaxed mt-2">
              Think retro pixels, loud vibes, and zero boring stuff.
            </p>
            <p className="press-start text-sm text-black leading-relaxed mt-2">
              If it makes you smile, it belongs here.
            </p>
          </div>
        </div>
      )
    },
    { 
      id: 3, 
      heading: "The Bonk Culture",
      content: (
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
          <div className="lg:w-1/2 flex justify-center">
            <Image 
              src="/pixelatedBonk3.png" 
              alt="Pixelated Bonk 3" 
              width={64}
              height={64}
              className="w-16 h-16 sm:w-70 sm:h-70 object-contain"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="press-start text-2xl font-bold text-black mb-4">😼 Bonk, But Make It Feline.</h3>
            <p className="press-start text-sm text-black leading-relaxed">
              Tired of dog coins? Same.
            </p>
            <p className="press-start text-sm text-black leading-relaxed mt-2">
              We took Bonk, added a cat twist, and birthed a pixel empire.
            </p>
            <p className="press-start text-sm text-black leading-relaxed mt-2">
              Our cat doesn&apos;t chase its tail—it builds on-chain chaos, one purr at a time.
            </p>
          </div>
        </div>
      )
    },
    { 
      id: 4, 
      heading: "Our Vision",
      content: (
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
          <div className="lg:w-1/2 flex justify-center">
            <Image 
              src="/pixelatedBonk4.png" 
              alt="Pixelated Bonk 4" 
              width={64}
              height={64}
              className="w-16 h-16 sm:w-70 sm:h-70 object-contain"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="press-start text-2xl font-bold text-black mb-4">🌍 Build a Meme World Worth Living In.</h3>
            <p className="press-start text-sm text-black leading-relaxed">
              We&apos;re not just building a product—we&apos;re designing a culture.
            </p>
            <p className="press-start text-sm text-black leading-relaxed mt-2">
              From NFTs to games to good ol&apos; community chaos, we&apos;re shaping the future of fun on Solana.
            </p>
            <p className="press-start text-sm text-black leading-relaxed mt-2">
              And yes, it&apos;s gonna be very pixelated.
            </p>
          </div>
        </div>
      )
    },
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#82e3fc,_#a0e66f)] flex justify-center">
      <div className="w-[90%] max-w-[400px] sm:w-full sm:max-w-[95vw] sm:max-w-7xl mx-auto px-2 flex flex-col border-8 border-black rounded-2xl shadow-2xl bg-[url('/bgImg2.png')] bg-cover bg-center relative mt-4 mb-4 p-4 sm:p-8 transform sm:transform-none scale-95 sm:scale-100 origin-center" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-4xl sm:max-w-4xl max-w-[350px] relative">
            <div className="flex overflow-hidden">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`w-full flex-shrink-0 transition-transform duration-500 ease-in-out ${
                    index === currentCard ? 'translate-x-0' : 'translate-x-full'
                  }`}
                  style={{ transform: `translateX(-${currentCard * 100}%)` }}
                >
                  <div className="bg-white border-4 border-black rounded-xl shadow-lg p-8 mx-4 min-h-[400px] sm:min-h-[400px] min-h-[300px] transform sm:transform-none scale-75 sm:scale-100 origin-center">
                    {card.heading && (
                      <h2 className="press-start text-3xl font-bold text-black text-center mb-6">{card.heading}</h2>
                    )}
                    {card.content ? (
                      card.content
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <h2 className="press-start text-3xl font-bold text-black">Card {card.id}</h2>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={prevCard}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-300 text-black p-3 rounded-full shadow-lg border-2 border-black"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextCard}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-300 text-black p-3 rounded-full shadow-lg border-2 border-black"
            >
              <FaChevronRight className="text-xl" />
            </button>
            
            <div className="hidden sm:flex justify-center mt-4 gap-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`w-3 h-3 rounded-full border-2 border-black ${
                    index === currentCard ? 'bg-yellow-400' : 'bg-white'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center w-full mt-8">
            <Link href="/" className="press-start bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded shadow border-2 border-black text-base sm:text-xl cursor-pointer w-full max-w-xs text-center">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 