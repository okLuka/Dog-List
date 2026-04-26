import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "@/types/product";

type ProductsState = {
   items: Product[]
}

const loadProducts = (): Product[] => {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem("products");

  return data ? JSON.parse(data) : [];
};

const initialState: ProductsState = {
   items: []
};

const productsSlice = createSlice({
   name: "products",
   initialState,
   reducers: {
    setProducts(state, action) {
      if (state.items.length === 0) { 
         state.items = action.payload
         localStorage.setItem("products", JSON.stringify(state.items))
      };
       
    },
    toggleLike(state, action) {
        const product = state.items.find((item) => item.id === action.payload)
        if (product) product.liked = !product.liked
        localStorage.setItem("products", JSON.stringify(state.items))
    },
    deleteProduct(state, action) {
        state.items = state.items.filter((item) => item.id !== action.payload)
        localStorage.setItem("products", JSON.stringify(state.items))
    },
    addProduct(state, action) {
      state.items.unshift(action.payload)
      localStorage.setItem("products", JSON.stringify(state.items))
    }
   }
});

export const {setProducts, toggleLike, deleteProduct, addProduct} = productsSlice.actions;
export default productsSlice.reducer;
