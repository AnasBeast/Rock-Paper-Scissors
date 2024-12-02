"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Winner({
  winner,
}: Readonly<{ winner: string | null}>) {
    const router = useRouter();
    const navigateToHome = () => {
        router.push('/');
      };

  return (
  <div className="flex z-10 transition-opacity ease-in duration-700 flex-col items-center 
    text-center justify-center sm:gap-12 gap-8">
    <h1 className="uppercase sm:text-6xl text-2xl text-white font-bold">{winner}</h1>
    <button className="bg-white text-modal sm:opacity-90 hover:opacity-100 sm:py-8 sm:px-20 py-4 px-12 
    sm:text-2xl text-xl uppercase font-semibold rounded-xl"
    onClick={navigateToHome}
    >
        Play Again
    </button>
  </div>
  )}
