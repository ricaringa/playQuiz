import useData from "../../hooks/useData";
import { Box, Center, Spinner, useColorModeValue } from "@chakra-ui/react";
import AfterGameMessge from "../../components/AfterGameMessage";
import useGame from "../../hooks/useGame";
import GameButtons from "../../components/GameButtons";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

export default function Results() {
  const { Loading } = useData();
  const { gameStatus } = useGame();
  const navigate = useNavigate();
  if (gameStatus === "Playing") {
    navigate("/");
  }
  return Loading ? (
    <Spinner />
  ) : (
    <Center
      h={{ base: "100vh", lg: "calc(100vh)" }}
      fontFamily={"Urbanist"}
      bgImage={`${import.meta.env.VITE_PATH_TO_ASSETS}/background.png`}
      flexDir={"column"}
      // ref={imageRef}
    >
      {/* <Navbar /> */}
      <Center w={"full"}>
        <Box
          w={{ base: "80vw", sm: "60vw", md: "50vw", lg: "30vw", xl: "25vw" }}
          h={"60vh"}
          rounded={{ base: "3xl" }}
          bgColor={useColorModeValue("accent.50", "gray.700")}
          boxShadow={"brand"}
          p={3}
          
        >
          <Center
            flexDir={"column"}
            roundedTop={{ base: "3xl" }}
            roundedBottom={{ base: "xl" }}
            color={"gray.600"}
            h={"25vh"}
            background={`url('${import.meta.env.VITE_PATH_TO_ASSETS}/winners.svg') center/cover no-repeat`}
            backdropBlur={"sm"}
            bgPosition={"center"}
            bgColor={"brand.200"}
          >
            <AfterGameMessge />
          </Center>
          <Center marginTop={"25vh"}>
            {gameStatus === "Finished" && <GameButtons />}
          </Center>
        </Box>
      </Center>
      <Footer />
    </Center>
  );
}
