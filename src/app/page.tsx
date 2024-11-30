import { ChoiceImg } from "./components/ChoiceImg";
import RulesModal from "./components/RulesModal";

export default function Page() {
    return(
        <div className="h-screen w-screen p-20">
            <ChoiceImg/>
            <RulesModal/>
        </div>
    )
}