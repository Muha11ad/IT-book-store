import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import CategoryReducer from "../../pages/category/model/categoriesSlice";
import CartReducer from "../../pages/cart/model/CartSlice";
import SearchReducer from "../../features/search/model/searchSlice";
import PreviewCategoryReducer from "../../widgets/previewCategory/model/previewCategoriesSlice";
import BookInfoReducer from "../../pages/bookInfo/model/bookInfoSlice";
export const store = configureStore({
    reducer: {
        previewCategory: PreviewCategoryReducer,
        category: CategoryReducer,
        cart: CartReducer,
        search: SearchReducer,
        book: BookInfoReducer,
    },
});
export const useAppDispatch = useDispatch.withTypes();
export const useAppSelector = useSelector.withTypes();
