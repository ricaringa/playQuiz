import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export enum GameStatus{
  preGame = 'Pre-Game',
  playing = 'Playing',
  failed = 'Failed',
  finished = 'Finished'
}



interface initialStateType {
  gameStatus: GameStatus,
  currentLevel: number,
  showResults: boolean,
  showAnswer: boolean,
  userAnswer: string
}

const initialState: initialStateType = {
  gameStatus: GameStatus.playing,
  currentLevel:0,
  showResults: false,
  showAnswer: false,
  userAnswer: ''
}
export interface getMeProps {
  userId: number,
  token: string
}
export const saveMatchHistory = createAsyncThunk(
  'games/saveMatch',
  async (data : getMeProps) => {
    const response = await fetch(`http://localhost:9999/users/${data.userId}`,{
      method: "GET",
      headers: {
        "x-token": data.token
      }
    })
    if(response.status === 200){
      return response.json()
    }
    return response.json()
  }
)
const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCurrentLevel: (state, action) => {
      state.currentLevel = action.payload
    },
    setGameState: (state, action) => {
      state.gameStatus = action.payload
      const gs : GameStatus = action.payload
      if(gs === 'Finished'){
        state.showResults = true
      }
    },
    setUserAnswer: (state, action) => {
      state.userAnswer = action.payload
    },
    addCurrentLevel: (state) => {
      state.currentLevel++
    },
    restartGame : (state) => {
      state.currentLevel = 0
      state.showResults = false
      state.showAnswer = false
      state.gameStatus = GameStatus.playing
    },
    toggleShowAnswer: (state) =>{
state.showAnswer = !state.showAnswer
    }
  }
})

export const { actions, reducer } = gameSlice;
