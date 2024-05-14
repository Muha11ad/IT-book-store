import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory } from "../../../shared/api/category";
export const fetchCategory = createAsyncThunk("category/fetchCategory", async ({ category, page }) => {
    try {
        const response = await getCategory(category, page);
        return response;
    }
    catch (err) {
        console.log(err);
    }
});
