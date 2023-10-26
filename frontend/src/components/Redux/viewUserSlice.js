import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// step 3: fetch data method if needed
export const fetchUsers = createAsyncThunk("viewUser/fetchUsers", async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/`);
    return res.data;
  } catch (error) {
    throw error;
  }
});

// step 1: create view user slice
const viewUserSlice = createSlice({
  name: "viewUser",
  initialState: {
    viewUser: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    deleteUser: (state, action) => {
      const filterUser = [...state.viewUser].filter(
        (user) => user._id !== action.payload
      );
      state.viewUser = filterUser;
    },
    viewSingleUser: (state, action) => {
      const filterUser = [...state.viewUser].filter(
        (user) => user._id === action.payload
      );
      state.viewUser = filterUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.viewUser = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

// step 2 export actions and reducers
export const { deleteUser } = viewUserSlice.actions;

export default viewUserSlice.reducer;
