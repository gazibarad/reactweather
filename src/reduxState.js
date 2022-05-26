import { createSlice } from "@reduxjs/toolkit";

export const weatherState = createSlice({
  name: "weather",
  initialState: {
    value: "",
    isLoading: false,
    data: [],
  },
  reducers: {
    fetchingData: (state) => {
      state.isLoading = true;
    },
    dataFetchedSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.value = "PULLED";
    },
    expectingInput: (state) => {
      state.value = "WAITING";
    },
  },
});

// Action creators are generated for each case reducer function
export const { expectingInput, fetchingData, dataFetchedSuccess } =
  weatherState.actions;

export default weatherState.reducer;
