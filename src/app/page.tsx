import { ChoiceImg } from "./components/ChoiceImg";
import ScoreBoard from "./components/ScoreBoard";

export default function Page() {
    return(
        <div className="h-screen w-screen p-20 space-y-16">
            <ScoreBoard/>
            <ChoiceImg/>
        </div>
    )
}