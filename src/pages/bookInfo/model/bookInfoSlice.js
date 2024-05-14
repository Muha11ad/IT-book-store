import { createSlice } from "@reduxjs/toolkit";
import { fetchBook } from "./bookInfoThunk";
const initialState = {
    data: {},
    loading: "idle",
    error: null,
};
export const BookInfoSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(fetchBook.pending, (state) => {
        state.loading = "loading";
        state.error = null;
    })
        .addCase(fetchBook.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = "successful";
        state.error = null;
    })
        .addCase(fetchBook.rejected, (state) => {
        state.loading = "rejected";
    }),
});
export default BookInfoSlice.reducer;
