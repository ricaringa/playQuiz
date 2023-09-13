import { Button, Center, useToast, useColorModeValue } from "@chakra-ui/react";
import useData from "../../hooks/useData";
import { useAppDispatch } from "../../app/index"
import { GameStatus, actions } from "../../app/slices/Game/reducer";
import useGame from "../../hooks/useGame";
import { Country } from "../../interfaces/Api";
import { FaCheck, FaXmark } from 'react-icons/fa6'
import { useTranslation } from "react-i18next";

export default function OptionButtons() {
  const { Options, CorrectCountry } = useData();
  const { showAnswer, userAnswer } = useGame()
  const dispatch = useAppDispatch()
  const toast = useToast()
  const { t } = useTranslation();
  const handleClick = (index: number) => {
      dispatch(actions.toggleShowAnswer())
      dispatch(actions.setUserAnswer(Options[index].name.common))
      if(Options[index].name.common===CorrectCountry){
        toast({
          // title: 'Yeah',
          description: t("winToast"),
          status: 'success',
          variant: 'left-accent',
          duration: 1500,
          position: 'top-left',
          isClosable: true,
        })
        dispatch(actions.addCurrentLevel())
      } else {
        toast({
          // title: 'Nope',
          description: t("loseToast"),
          status: 'error',
          variant: 'left-accent',
          duration: 1500,
          position: 'top-left',
          isClosable: true,
        })
        dispatch(actions.setGameState(GameStatus.failed))
      }
  }
  const getAfterGameColor = (option : Country) => {
    const win = option.name.common === CorrectCountry
    return win ? useColorModeValue('green.500', 'green.600') : option.name.common === userAnswer ? useColorModeValue('red.700', 'red.500') : 'brand.100'
  }
  const getButtonIcon = (option : Country) => {
    const win = option.name.common === CorrectCountry
    return win ? <FaCheck /> : option.name.common === userAnswer && <FaXmark />
  }
  return (
    <Center marginTop={"10vh"} p={2} flexDir={"column"} gap={2}>
      {Options.map((option : Country, index) => (
        <Button
          isDisabled={showAnswer}
          key={index}
          colorScheme='twitter'
          color={`${!showAnswer ? 'brand.300' : getAfterGameColor(option)}`}
          whiteSpace={"initial"}
          // justifyContent={"start"}
          w={"85%"}
          h={'5vh'}
          variant="outline"
          borderWidth={2}
          fontWeight={"semibold"}
          onClick={()=>{handleClick(index)}}
        >
          <Center flexDir={'row'} w={'100%'}>
          <Center w={'95%'} justifyContent={'start'}>{option.name.common}</Center>
          <Center w={'5%'}> {showAnswer &&  getButtonIcon(option)}</Center>

          </Center>
        </Button>
      ))}
    </Center>
  );
}
