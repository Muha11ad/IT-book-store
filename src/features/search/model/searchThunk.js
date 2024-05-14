import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory } from "../../../shared/api/category";
export const fetchSearchResult = createAsyncThunk("search/fetchSearchResult", async ({ searchStr, page }) => {
    try {
        const response = await getCategory(searchStr, page);
        return response;
    }
    catch (err) {
        console.log(err);
    }
});
