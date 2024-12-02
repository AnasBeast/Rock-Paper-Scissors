'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

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

interface navigationProps {
  img: {  
    src: string,
    alt: string,
    color: string
  }
}

export const ChoiceImg = () => {
  const router = useRouter();
  useEffect(() => {
    localStorage.getItem("score") || localStorage.setItem("score", "12");
  }
  , [])

  const handleNavigate = ({img}:navigationProps) => {
    console.log(img)
    const queryString = new URLSearchParams(img).toString()
    router.push(`/choice?${queryString}`)
  }

  
  return (
    <div className="grid grid-cols-2 gap-8 max-w-4xl justify-center mx-auto bg-triangle bg-no-repeat sm:bg-[length:450px_500px] bg-[length:150px_200px] bg-center sm:pt-0 pt-8">
      {images.map((img) => (
        <div
          key={Math.random()}
          className={`relative rounded-full sm:w-[300px] sm:h-[300px] w-[140px] h-[140px] opacity-90 flex justify-center items-center
            hover:opacity-100 transition-all duration-300 ease-out cursor-pointer overflow-hidden sm:border-[32px] border-[10px]
            shadow-inner ${img.color=="rock"?'col-span-2':'col-span-1'} mx-auto`}
          style={{"borderColor":`var(--${img.color})`}}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={300}
            height={300}
            className="bg-white object-cover sm:p-14 p-7 max-w-fit filter sm:w-[300px] sm:h-[300px] w-[140px] h-[140px]"
            priority
            onClick={()=>handleNavigate({img})}
          />
        </div>
      ))}
    </div>
  );
}
