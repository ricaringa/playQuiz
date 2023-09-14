import {
  Center,
  Heading,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import useGame from "../../hooks/useGame";
import useData from "../../hooks/useData";
import { useTranslation } from "react-i18next";

export default function AfterGameMessge() {
  const { Loading } = useData();
  const { currentLevel } = useGame();
  const { t } = useTranslation();
  return Loading ? (
    <Spinner />
  ) : (
    <Center
      flexDir={"column"}
      marginBottom={"-25vh"}
      rounded={{ base: "xl" }}
      boxShadow={"xl"}
      bgColor={useColorModeValue("whiteAlpha.900", "blackAlpha.900")}
      w={{ base: "65vw", sm: "55vw", md: "45vw", lg: "25vw", xl: "15vw" }}
      h={"15vh"}
      p={5}
    >
      <Heading
        color={useColorModeValue("gray.700", "accent.100")}
        lineHeight={1.1}
        fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "3xl" }}
      >
        {currentLevel === 0 ? "Oh no, " : "Booyah! "} {t("afterGameMessage1")}{" "}
        <Text
          as={"span"}
          bgGradient="linear(to-r, red.400,pink.400)"
          bgClip="text"
        >
          {currentLevel}
        </Text>{" "}
        {t("afterGameMessage2")}
        {currentLevel === 0 ? "😩" : "🤠"}
      </Heading>
    </Center>
  );
}
