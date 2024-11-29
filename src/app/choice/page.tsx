"use client"
import * as React from 'react'
import Image from 'next/image';
import ScoreBoard from '../components/ScoreBoard';
import { useEffect, useState } from 'react';

interface ChoiceProps {
    choice: {color:string, src:string, alt:string};
}

export default function Choice ({searchParams}: {searchParams: { [key: string]: string }}) {

    const [choix, setChoix] = useState({
        src: "/icon-paper.svg",
        alt: "Paper-Image",
        color:"paper"
    })
    const [houseChoice, setHouseChoice] = useState({
        src: "/icon-paper.svg",
        alt: "Paper-Image",
        color:"paper"
    })
    const images = [{
        src: "/icon-paper.svg",
        alt: "Paper-Image",
        color:"paper"
      },{
        src: "/icon-scissors.svg",
        alt: "Scissors-Image",
        color:"scissors"
      },
      {
        src: "/icon-rock.svg",
        alt: "Rock-Image",
        color:"rock"
      }
    ]

    function getRandomIntInclusive(min:number, max:number) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }

    useEffect(() => {
        setChoix({
            src: (searchParams.src),
            alt: searchParams.alt,
            color: searchParams.color
        })

        let i =0;
        const shuffleImage = ()=>{
            let choix = images[getRandomIntInclusive(0,images.length-1)];
            setHouseChoice(choix)
            setTimeout(()=>{
                i++
                i==15?null:shuffleImage();
            }, 200)
        }
        shuffleImage();
    }
    , [])

    const ChoiceBanner = ({choice}:ChoiceProps) => {
      return (
        <div
          className={`flex items-center space-x-2`}
        >
          <div
            key={Math.random()}
            className={`relative rounded-full w-[300px] h-[300px] opacity-90 hover:opacity-100 transition-all duration-300 ease-out cursor-pointer 
                overflow-hidden border-[32px] shadow-inner ${choice.color=="rock"?'col-span-2':'col-span-1'} mx-auto bg-blue-950/20`}
            style={{"borderColor":`var(--${choice.color})`}}
            >
            <Image
                src={choice.src}
                alt={choice.alt}
                width={300}
                height={300}
                className="bg-white object-cover p-14 "
                priority
            />
            </div>
        </div>
      );
    };
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
