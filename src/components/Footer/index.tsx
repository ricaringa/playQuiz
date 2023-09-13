import { Center, Link, Text} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Center bottom={0} w={'full'} p={5} position={'absolute'} justifyContent={'center'}>
      <Text fontWeight={'medium'} display={'inline-block'}>
      2023 &copy; made with 🫀 by {' '} 
      <Link href='https://github.com/ricaringa'  >
     {' '} ricaringa
</Link> {' '}
</Text>
    </Center>
  )
}
