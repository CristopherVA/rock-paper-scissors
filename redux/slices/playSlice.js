import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   score: 0,
   choose: ''
}

export const playSlice = createSlice({
   name: 'play',
   initialState,
   reducers: {
      setScore: (state, action) => {
         state.score = action.payload
      },
      setChoose: (state, action) => {
         state.choose = action.payload
      },
   }
})

export const { setScore, setChoose } = playSlice.actions

export const selectStore = (state) => state.play.score;
export const selectChoose = (state) => state.play.choose;

export default playSlice.reducer