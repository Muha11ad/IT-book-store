import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory } from "../../../shared/api/category";

export const fetchCategory = createAsyncThunk(
	"category/fetchCategory",
	async ({ category, page }: { category: string; page: number }) => {
		try {
			const response: any = await getCategory(category, page);
			return response;
		} catch (err: unknown) {
			console.log(err);
		}
	}
);
