import { configureStore } from "@reduxjs/toolkit"
import { noteSlice } from "./noteSlice.jsx"
export const store = configureStore({
  reducer:{
    note:noteSlice.reducer
  }
})