import { configureStore  } from "@reduxjs/toolkit";
import playReducer from "./slices/playSlice";

export const store= configureStore({
   reducer: {
      play: playReducer,
   }
})

export default store