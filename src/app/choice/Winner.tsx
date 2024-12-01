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
  <div className="flex z-10 transition-opacity ease-in duration-700 flex-col items-center text-center justify-center gap-12">
    <h1 className="uppercase text-6xl text-white font-bold">{winner}</h1>
    <button className="bg-white text-rock opacity-90 hover:opacity-100 py-8 px-20 
    text-2xl uppercase font-semibold rounded-xl"
    onClick={navigateToHome}
    >
        Play Again
    </button>
  </div>
  )}
