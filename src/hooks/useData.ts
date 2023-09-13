import { CapitalInfo, Country } from "../interfaces/Api";
import { RootState } from "../app/index";
import { useSelector } from "react-redux";

export interface question {
  country: Country;
  capital: CapitalInfo;
  options: [string];
}
export default function useData() {
  
  
  const { Countries, Options, CorrectCountry, Capital, QuestionType, Flag, Loading } =
    useSelector((state: RootState) => state.data);
  


  return {
    Countries,
    Options,
    CorrectCountry,
    Loading,
    Capital,
    QuestionType,
    Flag,
  };
}
