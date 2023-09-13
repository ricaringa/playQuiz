import { Button, Center, Select, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa6'
import { LANGUAGES } from "../../constants/index";
import i18n from '../../i18n';
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <Center w={'full'} top={0} p={3} justifyContent={'end'} position={'fixed'} gap={5  }>
      <Center right={'50vw'} top={'10vh'}  fontSize={'4xl'} fontWeight={'bold'} bgGradient="linear(to-br, red.400,pink.400)" bgClip="text">{import.meta.env.VITE_APP_TITLE}</Center>
      <Select w={{base: '25vw', sm: '10vw', xl: '6vw'}} defaultValue={'es'} onChange={onChangeLang}>
      {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
</Select>
      <Button onClick={toggleColorMode} size={'sm'}>
                {colorMode === 'light' ? <FaMoon /> : <FaSun />}
              </Button>
    </Center>
  )
}
