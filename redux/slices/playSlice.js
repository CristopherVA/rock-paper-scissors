import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   score: 0,
   machineScore: 0,
   choose: '',
   player: '',
   chooseMachine: ''
}

export const playSlice = createSlice({
   name: 'play',
   initialState,
   reducers: {
      setChoose: (state, action) => {
         state.choose = action.payload
      },
      setMachine: (state, action) => {
         state.chooseMachine = action.payload
      },
      setPlayerWin: (state, action) => {
         state.player = action.payload
         state.score = state.score + 1
      },
      setPlayerLose: (state, action) => {
         state.player = action.payload
         state.machineScore = state.machineScore + 1
      },
      setPlayerDraw: (state, action) => {
         state.player = action.payload
         state.score = state.score
         state.machineScore = state.machineScore
      },
      setAgainGame: (state) => {
         state.choose = state.choose = ''
         state.player = state.player = ''
         state.chooseMachine = state.chooseMachine = ''
      },
      setReset: (state) => {
         state.score = state.score = 0;
         state.machineScore = state.machineScore = 0;

      }
   }
})

export const { setScore, setChoose, setMachine, setPlayerWin, setPlayerDraw, setPlayerLose, setAgainGame, setReset } = playSlice.actions

export const selectStore = (state) => state.play.score;
export const selectChoose = (state) => state.play.choose;
export const selectPlayer = (state) => state.play.player;
export const selectMachineScore = (state) => state.play.machineScore;
export const selectChooseMachine = (state) => state.play.chooseMachine

export default playSlice.reducer