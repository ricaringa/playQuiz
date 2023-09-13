import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { useDispatch } from 'react-redux'
import { reducer as dataReducer } from './slices/Data/reducer'
import { reducer as gameReducer } from './slices/Game/reducer'
const reducer = combineReducers({
  data: dataReducer,
  game: gameReducer
})

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer,
})

export type IState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>;

export default store
