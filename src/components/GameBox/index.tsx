import { Box, Center, useColorModeValue } from '@chakra-ui/react'
import GameHeader from '../GameHeader'
import OptionButtons from '../OptionButtons'
import GameButtons from '../GameButtons'
import useGame from '../../hooks/useGame'

export default function GameBox() {
  const { showAnswer } = useGame()
 
  return (
    <Center w={'full'}>
      <Box 
      w={{base: '80vw', sm:'60vw', md:'50vw', lg: '30vw', xl: '25vw'}}
      h={'-webkit-fit-content'}
      rounded={{base: '3xl'}}
      // bgColor={'accent.50'}
      bgColor={useColorModeValue('accent.50', 'gray.700')}
      boxShadow={'brand'}
      p={3}
      flexDir={'row'}
      >
<GameHeader />
<OptionButtons />
{showAnswer && <GameButtons  /> }
      </Box>
    </Center>
  )
}
