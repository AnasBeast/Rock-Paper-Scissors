"use client"

import * as React from 'react'
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import Winner from './Winner';

interface Choice {
    color: string;
    src: string;
    alt: string;
}

interface ChoiceProps {
    choice: Choice;
}

const images: Choice[] = [
  {
    src: "/icon-paper.svg",
    alt: "Paper-Image",
    color: "paper"
  },
  {
    src: "/icon-scissors.svg",
    alt: "Scissors-Image",
    color: "scissors"
  },
  {
    src: "/icon-rock.svg",
    alt: "Rock-Image",
    color: "rock"
  }
]

const defaultChoice: Choice = {
  src: "/icon-paper.svg",
  alt: "Paper-Image",
  color: "paper"
}

const emptyChoice: Choice = {
    src: "",
    alt: "",
    color: "transparent"
  }

export default function Choice({ initialChoice = defaultChoice }: { initialChoice: Choice }) {
    const [choix, setChoix] = useState(initialChoice);
    const [houseChoice, setHouseChoice] = useState(emptyChoice);
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(false);
    const [winner, setWinner] = useState<string | null>(null);

    const getRandomIntInclusive = useCallback((min: number, max: number) => {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }, [])

    const shuffleImage = useCallback(() => {
        let i = 0;
        let isShuffled = true;
        const shuffle = () => {
            let choice = images[getRandomIntInclusive(0, images.length - 1)];
            setHouseChoice(choice)
            i++;
            if (i < 15) {
                setTimeout(shuffle, 200);
            }
            if(i==15 && isShuffled){
              isShuffled = false;
              if (choix.color === choice.color) {
                setWinner("draw");
              } else if (
                (choix.color === "rock" && choice.color === "scissors") ||
                (choix.color === "scissors" && choice.color === "paper") ||
                (choix.color === "paper" && choice.color === "rock")
              ) {
                setWinner("YOU WIN");
                let x = (parseInt(localStorage.getItem("score") || "0") + 1).toString();
                localStorage.setItem("score", x);
                window.dispatchEvent(new StorageEvent('storage', { key: 'score', newValue: x }));
                console.log("win")
                console.log(i)
              }
              else {
                setWinner("YOU LOSE");
                let x = (parseInt(localStorage.getItem("score") || "0") - 1).toString();
                localStorage.setItem("score", x);
                window.dispatchEvent(new StorageEvent('storage', { key: 'score', newValue: x }));
                console.log("lose")
                console.log(i)

              }
              setShow(true);

            }
        }
        
        shuffle();
    }, [images, choix.color, getRandomIntInclusive])

    useEffect(() => {
        setChoix(initialChoice)
        setTimeout(shuffleImage, 1000);
        setMounted(true)
    }, [initialChoice, shuffleImage])

    const ChoiceBanner = ({ choice }: ChoiceProps) => {
      if (!choice) return null;

      return (
        <div className="flex z-10 items-center space-x-2">
          <div
            className={`relative rounded-full w-[300px] h-[300px] opacity-100 transition-all duration-300 ease-out
                overflow-hidden ${choice.color=="transparent"?"border-none":"border-[32px]"} shadow-inner ${choice.color === "rock" ? 'col-span-2' : 'col-span-1'} mx-auto bg-blue-950/20`}
            style={{ borderColor: `var(--${choice.color})` }}
          >
            {choice.src && 
            <Image
                src={choice.src}
                alt={choice.alt}
                width={300}
                height={300}
                className="bg-white object-cover p-14"
                priority
            />
            }
          </div>
        </div>
      );
    };

    if (!mounted) {
        return null; // or a loading placeholder
    }

  return (
    <div className="h-screen min-h-screen">
      
      
      <div className={`grid ${show?"grid-cols-3":"grid-cols-2"} max-w-7xl mx-auto`}>
        <div className="flex flex-col justify-center gap-8 text-center">
          <h1 className="text-4xl font-semibold text-white uppercase">
            You Picked
          </h1>
          <div className="relative">
            {/* ChoiceBanner container */}
            <ChoiceBanner choice={choix} />
            {(winner === "draw" || winner === "YOU WIN") && (
                <div className="absolute inset-0 pointer-events-none">
                    {/* Outer Ripple */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-0 animate-ripple-slow">
                        <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.03)]" />
                    </div>
                    {/* Middle Ripple */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-0 animate-ripple-medium">
                        <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.03)]" />
                    </div>
                    {/* Inner Ripple */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-0 animate-ripple-fast">
                        <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.03)]" />
                    </div>
                </div>
            )}
            </div>
        </div>

        {show && <Winner winner={winner} />}
        
        <div className="flex flex-col justify-center gap-8 text-center">
          <h1 className="text-4xl font-semibold text-white uppercase">
            The house Picked
          </h1>
          <div className="relative">
            <ChoiceBanner choice={houseChoice} />
            {(winner=="draw" || winner=="YOU LOSE") && 
                <div className="absolute inset-0 pointer-events-none">
                    {/* Outer Ripple */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-0 animate-ripple-slow">
                        <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.03)]" />
                    </div>
                    {/* Middle Ripple */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-0 animate-ripple-medium">
                        <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.03)]" />
                    </div>
                    {/* Inner Ripple */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-0 animate-ripple-fast">
                        <div className="absolute inset-0 rounded-full bg-[rgba(255,255,255,0.03)]" />
                    </div>
                </div>
                }
          </div>
        </div>
      </div>
    </div>
  );
}

