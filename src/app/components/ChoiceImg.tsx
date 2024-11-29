'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

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

  const handleNavigate = ({img}:navigationProps) => {
    console.log(img)
    const queryString = new URLSearchParams(img).toString()
    router.push(`/choice?${queryString}`)
  }

  
  return (
    <div className="grid grid-cols-2 gap-8 max-w-4xl justify-center mx-auto bg-triangle bg-no-repeat bg-[length:450px_500px] bg-center">
      {images.map((img) => (
        <div
          key={Math.random()}
          className={`relative rounded-full w-[300px] h-[300px] opacity-90 hover:opacity-100 transition-all duration-300 ease-out cursor-pointer overflow-hidden border-[32px] shadow-inner ${img.color=="rock"?'col-span-2':'col-span-1'} mx-auto`}
          style={{"borderColor":`var(--${img.color})`}}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={300}
            height={300}
            className="bg-white object-cover p-14 "
            priority
            onClick={()=>handleNavigate({img})}
          />
        </div>
      ))}
    </div>
  );
}
