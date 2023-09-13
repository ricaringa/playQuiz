import { Center, Spinner } from '@chakra-ui/react'
import GameBox from '../../components/GameBox'
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/index';
import { getCountriesData } from '../../app/slices/Data/reducer';
import useData from '../../hooks/useData';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Home() {
  const [error, setError] = useState<string>("");
const [loading, setLoading] = useState(false);
const { Countries } = useData()
const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('init')
    if(Countries.length === 0){
      try {
        setLoading(true)
        dispatch(getCountriesData("all"));
      } catch (err: any) {
        setError(err);
      } finally {
        console.log(error);
        setLoading(false);
      }
    }
}, []);
  return loading ? <Spinner /> :  (
    <Center  h={{base: '100vh', lg: 'calc(100vh)'}} fontFamily={'Urbanist'} bgImage={`${import.meta.env.VITE_PATH_TO_ASSETS}/background.png`} flexDir={'column'}>
      <Navbar />
      <GameBox />
      
<Footer />
    </Center>
  )
}