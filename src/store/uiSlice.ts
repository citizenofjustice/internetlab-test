import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  menuIsOpen: boolean;
}

const initState: uiState = {
  menuIsOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initState,
  reducers: {
    toggleMenu(state) {
      state.menuIsOpen = !state.menuIsOpen;
    },
  },
});

export const { toggleMenu } = uiSlice.actions;
export default uiSlice.reducer;
