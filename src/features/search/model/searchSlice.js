import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchResult } from "./searchThunk";
const initialState = {
    data: {},
    loading: "idle",
    error: null,
    page: 1,
};
export const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchPage(state, action) {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => builder
        .addCase(fetchSearchResult.pending, (state) => {
        state.loading = "loading";
        state.error = null;
    })
        .addCase(fetchSearchResult.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = "successful";
        state.error = null;
    })
        .addCase(fetchSearchResult.rejected, (state) => {
        state.loading = "rejected";
    }),
});
export const { setSearchPage } = SearchSlice.actions;
export default SearchSlice.reducer;
