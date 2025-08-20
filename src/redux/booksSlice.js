
import { createSlice } from "@reduxjs/toolkit";
import InitialBooks from "../Components/Books"; 

const booksSlice = createSlice({
  name: "books",
  initialState: InitialBooks, 
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
