import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBook } from "../../../shared/api/book";
export const fetchBook = createAsyncThunk("book/fetchBook", async ({ isbn13 }) => {
    try {
        const response = await getBook(isbn13);
        return response;
    }
    catch (err) {
        console.log(err);
    }
});
