import { Center, useColorModeValue, Text} from '@chakra-ui/react'
import useData from '../../hooks/useData'
import { useTranslation } from 'react-i18next';
export default function QuestionBox() {
  const { t } = useTranslation();
  const { QuestionType, Capital } = useData();
  return (<Center
      flexDir={'column'}
      marginBottom={'-25vh'}
      rounded={{base: 'xl'}}
      boxShadow={'xl'}
      bgColor={useColorModeValue('whiteAlpha.900', 'blackAlpha.900')}
      w={{base: '65vw', sm:'55vw', md:'45vw', lg: '25vw', xl: '15vw'}}
      h={'15vh'}
      p={5}>
        
      <Text w={'full'} fontSize={{ base: "xl" }} fontWeight={"semibold"} display={'flex'} color={useColorModeValue('gray.700', 'accent.100')}>
        {QuestionType==='Capital' ? `${Capital} ${t("capitalQuestion")} 🤔` : `${t("flagQuestion")} 🤔`}
      </Text>
      </Center>
        
        
  )
}
