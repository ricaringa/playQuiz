import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Country } from '../../../interfaces/Api';
export enum QuestionType{
  capital= "Capital",
  flag= "Flag"
}
export interface Data {
  Countries: Array<Country>,
  Options: Array<String>,
  CorrectCountry: String,
  Flag: string,
  QuestionType : QuestionType
}

interface initialStateType {
  Countries: Array<Country>,
  Options: Array<Country>,
  Capital: String,
  CorrectCountry: String,
  Flag: string,
  QuestionType: QuestionType
}

const initialState: initialStateType = {
  Countries: [],
  Options: [],
  Capital: '',
  CorrectCountry: '',
  Flag: '',
  QuestionType: QuestionType.capital
}
export const getCountriesData = createAsyncThunk(
  'data/getCountriesData',
  async (region: string) => {
    console.log('api: '+import.meta.env.VITE_API_BASEURL)
    const response = await fetch(import.meta.env.VITE_API_BASEURL+region)
    
    if(response.status === 200){
      return response.json()
    }
    return response.json()
  }
)
const gameDataReducer = createSlice({
  name: 'data/Data',
  initialState,
  reducers: {
    setOptions: (state) => {
      const suffled = state.Countries.sort(()=> Math.random() - 0.5).splice(0,4)
      state.Options = suffled
    },
    nextRound: (state) => {
      const qt = Math.floor(Math.random() * (2 - 0))
      const suffled = state.Countries.sort(()=> Math.random() - 0.5).slice(0,4)
      state.Options = suffled
      const country : Country = suffled[Math.floor(Math.random() * (3 - 0))]
      const capital = country.capital[0]
      state.Capital = capital
      state.CorrectCountry = country.name.common
      state.Flag = country.flags.png.toString()
      state.QuestionType = qt === 0 ? QuestionType.capital : QuestionType.flag
      
    }
  },
  extraReducers(builder) {
    builder.addCase(getCountriesData.fulfilled, (state, action)=> {
      state.Countries = action.payload
      const suffled = action.payload.sort(()=> Math.random() - 0.5).splice(0,4)
      state.Options = suffled
      const country : Country = suffled[Math.floor(Math.random() * (3 - 0 ))]
      const capital = country.capital[0]
      state.Capital = capital
      state.CorrectCountry = country.name.common
    })
  },
})

export const { actions, reducer } = gameDataReducer;
