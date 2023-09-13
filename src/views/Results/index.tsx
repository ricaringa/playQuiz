import useData from "../../hooks/useData";
import { Box, Center, Spinner, useColorModeValue } from "@chakra-ui/react";
import AfterGameMessge from "../../components/AfterGameMessage";
import useGame from "../../hooks/useGame";
import GameButtons from "../../components/GameButtons";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Results() {
  const { Loading } = useData();
  const { gameStatus } = useGame();
  const navigate = useNavigate();
  // const imageRef = useRef<HTMLDivElement>(null);
  // const handleShare = async () => {
  //   if (imageRef.current === null) {
  //     return
  //   } else {
  //     if(imageRef.current!==null){
  //     const newFile = await toBlob(imageRef.current);
      
  //     const data = {
  //       files: [
  //         //@ts-ignore
  //         new File([newFile], "image.png", {
  //           //@ts-ignore
  //           type: newFile.type
  //         })
  //       ],
  //       title: 'PlayQuiz',
  //       text: `Ven y prueba tus skills en geografia`,
  //       url: 'https://rickquizz.web.app/'
  //     };
  //     try {
  //       if (!navigator.canShare(data)) {
  //         console.error("Can't share");
  //       }
  //       await navigator.share(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
      
  // }
  // };
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
      <Navbar />
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
            {/* <Button
              w={"-moz-fit-content"}
              rightIcon={<FaShareFromSquare />}
              colorScheme="yellow"
              variant="solid"
              onClick={handleShare}
            >
              Share
            </Button> */}
            {gameStatus === "Finished" && <GameButtons />}
          </Center>
        </Box>
      </Center>
      <Footer />
    </Center>
  );
}
