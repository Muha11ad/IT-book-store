import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory } from "../../../shared/api/category";

export const fetchPreviewCategory = createAsyncThunk(
	"previewCategory/fetchPreviewCategory",
	async ({ category, page }: { category: string, page: number }) => {
		try {
			const response: any = await getCategory(category, page);
			return { books: response.books, category, data: response };
		} catch (err: unknown) {
			console.log(err);
		}
	}
);
