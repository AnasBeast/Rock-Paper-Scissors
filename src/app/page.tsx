import { ChoiceImg } from "./components/ChoiceImg";
import RulesModal from "./components/RulesModal";

export default function Page() {
  return (
    <div className="h-screen min-h-screen w-screen px-20">
      <ChoiceImg />
      <RulesModal />
    </div>
  );
}
