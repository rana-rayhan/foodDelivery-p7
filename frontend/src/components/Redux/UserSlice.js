import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
