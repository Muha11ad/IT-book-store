import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPreviewCategory } from "./previewCategoriesThunk";

interface IBookState {
	books: any;
	loading: string;
	error: null | string;
}
const initialState: IBookState = {
	books: {},
	loading: "starting point",
	error: null,
};

export const PreviewCategorySlice = createSlice({
	name: "previewCategory",
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchPreviewCategory.pending, (state) => {
				state.loading = "loading";
				state.error = null;
			})
			.addCase(fetchPreviewCategory.fulfilled, (state, action: PayloadAction<any>) => {
				state.books = {
					...state.books,
					[action.payload.category]: action.payload.books,
				};
				state.loading = "successful";
				state.error = null;
			})
			.addCase(fetchPreviewCategory.rejected, (state) => {
				state.loading = "rejected";
			}),
});

export default PreviewCategorySlice.reducer;
