import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBook } from "../../../shared/api/book";

export const fetchBook = createAsyncThunk(
	"book/fetchBook",
	async ({ isbn13 }: { isbn13: number }) => {
		try {
			const response: any = await getBook(isbn13);
			return response;
		} catch (err: unknown) {
			console.log(err);
		}
	}
);
