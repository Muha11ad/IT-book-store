import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCategory } from "./categoriesThunk";

interface IBookState {
	data: any;
	loading: string;
	error: null | string;
	page: number;
}
const initialState: IBookState = {
	data: {},
	loading: "starting point",
	error: null,
	page: 1,
};

export const CategorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchCategory.pending, (state) => {
				state.loading = "loading";
				state.error = null;
			})
			.addCase(fetchCategory.fulfilled, (state, action: PayloadAction<any>) => {
				state.data = action.payload;
				state.loading = "successful";
				state.error = null;
			})
			.addCase(fetchCategory.rejected, (state) => {
				state.loading = "rejected";
			}),
});

export const { setPage } = CategorySlice.actions;
export default CategorySlice.reducer;
