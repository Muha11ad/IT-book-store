import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory } from "../../../shared/api/category";
export const fetchPreviewCategory = createAsyncThunk("previewCategory/fetchPreviewCategory", async ({ category, page }) => {
    try {
        const response = await getCategory(category, page);
        return { books: response.books, category, data: response };
    }
    catch (err) {
        console.log(err);
    }
});
