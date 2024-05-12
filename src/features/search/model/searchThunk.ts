import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory } from "../../../shared/api/category";

export const fetchSearchResult = createAsyncThunk(
	"search/fetchSearchResult",
	async ({ searchStr, page }: { searchStr: string; page?: number }) => {
		try {
			const response: any = await getCategory(searchStr, page);
			return response;
		} catch (err: unknown) {
			console.log(err);
		}
	}
);
