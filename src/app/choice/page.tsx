import { use } from 'react'
import Choice from './Choice'

export default function ChoicePage({ searchParams }: { searchParams: { [key: string]: string } }) {
  const params = use(Promise.resolve(searchParams))
  
  const initialChoice = {
    src: params.src || "/icon-paper.svg",
    alt: params.alt || "Paper-Image",
    color: params.color || "paper"
  }

  return <Choice initialChoice={initialChoice} />
}

