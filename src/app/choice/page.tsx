import Choice from './Choice'
import { use } from 'react'

interface SearchParams {
  [key: string]: string | string[] | undefined
}

interface PageProps {
  searchParams: Promise<SearchParams>
}

export default function ChoicePage({ searchParams }: PageProps) {
  const params = use(searchParams)
  
  const initialChoice = {
    src: (params.src as string) || "/icon-paper.svg",
    alt: (params.alt as string) || "Paper-Image",
    color: (params.color as string) || "paper"
  }

  return <Choice initialChoice={initialChoice} />
}
