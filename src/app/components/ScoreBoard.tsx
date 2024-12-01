"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function ScoreBoard (){
    const [score, setScore] = useState(()=>{
        if (typeof window !== 'undefined'){
            const from_localStorage = window.localStorage.getItem('score')
            if (from_localStorage === null || from_localStorage === undefined){
            return '12'
            }
    
            return `${from_localStorage}` ? from_localStorage : '12'
        }
        return ''
    });

    useEffect(() => {
        const storedScore = localStorage.getItem("score");
        if (storedScore) {
            setScore(storedScore);
        }

        const handleStorageChange = (event:any) => {
            if (event.key === 'score') {
                setScore(event.newValue);
            }
          };
      
          window.addEventListener('storage', handleStorageChange);

    }, []);


    return (
        <div className="mt-12 outline outline-6 outline-slate-400 outline-offset-2 p-4 rounded-3xl font-bold flex max-w-7xl mx-auto justify-between">
            <Image
                src="logo.svg"
                height={100}
                width={300}
                alt="Picture of the author"
            />
            <div className="bg-white rounded-lg py-4 px-10 text-center flex flex-col justify-center">
                <h2 className="text-scoretxt text-2xl">SCORE</h2>
                <h1 className="text-header text-8xl">{score}</h1>
            </div>
        </div>
    );
};
