import { createSlice } from "@reduxjs/toolkit";

const localSaved = JSON.parse(localStorage.getItem("saved"));
export const savedSlice = createSlice({
  name: "saved",
  initialState: {
    value: localSaved || localSaved?.length > 0 ? localSaved : [],
  },
  reducers: {
    addSaved: (state, action) => {
      let newValue = [...state.value, action.payload];
      // localStorage.setItem('saved',JSON.stringify(newValue))
      return {
        value: newValue,
      };
    },
    removeSaved: (state, action) => {
      let newValue = [
        ...state.value.filter(
          (item) => JSON.stringify(item) !== JSON.stringify(action.payload)
        ),
      ];
      // localStorage.setItem('saved',JSON.stringify(newValue))
      return {
        value: newValue,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSaved, removeSaved } = savedSlice.actions;

export default savedSlice.reducer;
