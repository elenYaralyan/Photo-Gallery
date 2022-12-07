import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
  loading: false,
  status: "",
};

export const getPhotosAsync = createAsyncThunk(
  "photos/getPhotosAsync",
  async (url) => {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Something is wrong");
  }
);

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPhotosAsync.pending, (state) => {
        state.loading = true;
        state.status = "loading";
      })
      .addCase(getPhotosAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "resolved";
        state.photos = action.payload;
      })
      .addCase(getPhotosAsync.rejected, (state) => {
        state.loading = false;
        state.status = "rejected";
      });
  },
});
export const {} = photoSlice.actions;
export default photoSlice.reducer;
