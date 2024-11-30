"use client"

import * as React from 'react'
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';

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

export default function Choice({ initialChoice = defaultChoice }: { initialChoice: Choice }) {
    const [choix, setChoix] = useState(initialChoice)
    const [houseChoice, setHouseChoice] = useState(defaultChoice)
    const [mounted, setMounted] = useState(false)

    const getRandomIntInclusive = useCallback((min: number, max: number) => {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }, [])

    const shuffleImage = useCallback(() => {
        let i = 0;
        const shuffle = () => {
            let choice = images[getRandomIntInclusive(0, images.length - 1)];
            setHouseChoice(choice)
            i++;
            if (i < 15) {
                setTimeout(shuffle, 200);
            }
        }
        shuffle();
    }, [getRandomIntInclusive])

    useEffect(() => {
        setChoix(initialChoice)
        shuffleImage();
        setMounted(true)
    }, [initialChoice, shuffleImage])

    const ChoiceBanner = ({ choice }: ChoiceProps) => {
      if (!choice) return null;

      return (
        <div className="flex items-center space-x-2">
          <div
            className={`relative rounded-full w-[300px] h-[300px] opacity-90 hover:opacity-100 transition-all duration-300 ease-out cursor-pointer 
                overflow-hidden border-[32px] shadow-inner ${choice.color === "rock" ? 'col-span-2' : 'col-span-1'} mx-auto bg-blue-950/20`}
            style={{ borderColor: `var(--${choice.color})` }}
          >
            <Image
                src={choice.src}
                alt={choice.alt}
                width={300}
                height={300}
                className="bg-white object-cover p-14"
                priority
            />
          </div>
        </div>
      );
    };

    if (!mounted) {
        return null; // or a loading placeholder
    }

  return (
    <div className='h-screen'>
        <div className='grid grid-cols-2 max-w-7xl mx-auto'>
            <div className='flex flex-col justify-center gap-8 text-center'>
                <h1 className='text-4xl font-semibold text-white uppercase'>You Picked</h1>
                <ChoiceBanner choice={choix} />
            </div>
            <div className='flex flex-col justify-center gap-8 text-center'>
                <h1 className='text-4xl font-semibold text-white uppercase'>The house Picked</h1>
                <ChoiceBanner choice={houseChoice} />
            </div>
        </div>
    </div>
  )
}

