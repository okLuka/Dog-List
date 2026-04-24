import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "@/types/product";

type ProductsState = {
   items: Product[]
}

const initialState: ProductsState = {
   items: []
};

const productsSlice = createSlice({
   name: "products",
   initialState,
   reducers: {
    setProducts(state, action) {
       state.items = action.payload;
    },
    toggleLike(state, action) {
        const product = state.items.find((item) => item.id === action.payload)
        if (product) product.liked = !product.liked
    },
    deleteProduct(state, action) {
        state.items = state.items.filter((item) => item.id !== action.payload)
    }
   }
});

export const {setProducts, toggleLike, deleteProduct} = productsSlice.actions;
export default productsSlice.reducer;
