import Image from 'next/image';
import React from 'react';

export default function ScoreBoard (){
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
                <h1 className="text-header text-8xl">12</h1>
            </div>
        </div>
    );
};
