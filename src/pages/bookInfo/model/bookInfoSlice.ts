import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBook } from "./bookInfoThunk";

interface IBook {
	data: any;
	loading: string;
	error: null | string;
}
const initialState: IBook = {
	data: {},
	loading: "idle",
	error: null,
};
export const BookInfoSlice = createSlice({
	name: "book",
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchBook.pending, (state) => {
				state.loading = "loading";
				state.error = null;
			})
			.addCase(fetchBook.fulfilled, (state, action: PayloadAction<any>) => {
				state.data = action.payload;
				state.loading = "successful";
				state.error = null;
			})
			.addCase(fetchBook.rejected, (state) => {
				state.loading = "rejected";
			}),
});

export default BookInfoSlice.reducer;
