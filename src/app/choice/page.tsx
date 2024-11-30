import Choice from './Choice'

interface SearchParams {
  [key: string]: string | string[] | undefined
}

interface PageProps {
  searchParams: SearchParams
}

export default function ChoicePage({ searchParams }: PageProps) {
  const initialChoice = {
    src: (searchParams.src as string) || "/icon-paper.svg",
    alt: (searchParams.alt as string) || "Paper-Image",
    color: (searchParams.color as string) || "paper"
  }

  return <Choice initialChoice={initialChoice} />
}
