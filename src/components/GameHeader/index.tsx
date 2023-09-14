import { Center } from "@chakra-ui/react";
import Question from "../Question";
import useData from "../../hooks/useData";
import useGame from "../../hooks/useGame";
import AfterGameMessge from "../AfterGameMessage";
export default function GameHeader() {
const { QuestionType , Flag } = useData()
const { gameStatus } = useGame()
console.log(gameStatus)
  return (
    <Center
      flexDir={"column"}
      roundedTop={{ base: "3xl" }}
      roundedBottom={{ base: "xl" }}
      color={"gray.600"}
      h={"25vh"}
      background={`url(${QuestionType === 'Flag' ? Flag : gameStatus=== 'Finished' ? `/winners.svg` : `/adventure.svg`}) ${QuestionType === 'Flag' ? 'center/cover' : ''} no-repeat`}
      backdropBlur={'sm'}
      bgPosition={'center'}
      bgColor={"brand.200"}
    >
      
      {gameStatus === 'Finished' ? <AfterGameMessge /> : <Question />}
    </Center>
  );
}
