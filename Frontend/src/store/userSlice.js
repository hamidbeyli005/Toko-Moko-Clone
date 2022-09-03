import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: localStorage.getItem("firstLogin"),
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
