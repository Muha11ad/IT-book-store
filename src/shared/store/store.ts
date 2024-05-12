import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import  CategoryReducer  from "../../pages/category/model/categoriesSlice" 
import  CartReducer  from "../../pages/cart/model/CartSlice" 
import  SearchReducer  from "../../features/search/model/searchSlice" 
import  PreviewCategoryReducer  from "../../widgets/previewCategory/model/previewCategoriesSlice" 
export const store = configureStore({
    reducer: {
        previewCategory :  PreviewCategoryReducer,
        category :  CategoryReducer,
        cart :  CartReducer,
        search :  SearchReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
export const useAppSelector = useSelector.withTypes<RootState>()