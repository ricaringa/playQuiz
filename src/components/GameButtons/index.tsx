import { Button, Center } from "@chakra-ui/react";
import { FaPlay, FaEye } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";
import { useAppDispatch } from "../../app/index";
import { actions as dataActions } from "../../app/slices/Data/reducer";
import {
  GameStatus,
  actions as gameActions,
} from "../../app/slices/Game/reducer";
import useGame from "../../hooks/useGame";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function GameButtons() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { gameStatus } = useGame();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    switch (gameStatus) {
      case "Finished":
        dispatch(gameActions.restartGame());
        dispatch(dataActions.nextRound());
        navigate("/");
        break;
      case "Playing":
        dispatch(dataActions.nextRound());
        dispatch(gameActions.toggleShowAnswer());
        break;
      case "Failed":
        dispatch(gameActions.setGameState(GameStatus.finished));
        navigate("/results");
    }
  };
  return (
    <Center w={"full"} gap={2} flexDir={"row"}>
      <Button
        w={"-moz-fit-content"}
        rightIcon={
          gameStatus === "Failed" ? (
            <FaEye />
          ) : gameStatus === "Playing" ? (
            <FaPlay />
          ) : (
            <VscDebugRestart />
          )
        }
        colorScheme="yellow"
        variant="solid"
        onClick={handleClick}
      >
        {gameStatus === "Failed"
          ? t("seeResults")
          : gameStatus === "Playing"
          ? t("next")
          : t("startAgain")}
      </Button>
    </Center>
  );
}
