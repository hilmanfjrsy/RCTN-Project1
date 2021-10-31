import { createSlice } from "@reduxjs/toolkit";

export const savedSlice = createSlice({
  name: "saved",
  initialState: {
    value: [],
  },
  reducers: {
    addSaved: (state, action) => {
      return {
        value: [...state.value, action.payload],
      };
    },
    removeSaved: (state, action) => {
      return {
        value: [
          ...state.value.filter(
            (item) => JSON.stringify(item) !== JSON.stringify(action.payload)
          ),
        ],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSaved, removeSaved } = savedSlice.actions;

export default savedSlice.reducer;
