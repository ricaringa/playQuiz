import { CapitalInfo, Country } from "../interfaces/Api";
import { RootState } from "../app/index";
import { useSelector } from "react-redux";

export interface question {
  country: Country;
  capital: CapitalInfo;
  options: [string];
}
export default function useGame() {
  const { gameStatus, currentLevel, showAnswer, showResults, userAnswer} =
    useSelector((state: RootState) => state.game);
  

  return {
    gameStatus,
    currentLevel,
    showAnswer,
    showResults,
    userAnswer
  };
}
