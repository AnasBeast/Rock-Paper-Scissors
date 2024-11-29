import { ChoiceImg } from "./components/ChoiceImg";
import RulesModal from "./components/RulesModal";
import ScoreBoard from "./components/ScoreBoard";

export default function Page() {
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
    return(
        <div className="h-screen w-screen p-20">
            <ChoiceImg/>
            <RulesModal/>
        </div>
    )
}