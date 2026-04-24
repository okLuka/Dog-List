"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "@/services/productsApi";
import { setProducts } from "@/store/slices/productsSlice";
import ProductCard from "@/components/product-card/ProductCard";
import type { Product } from "@/types/product";

export default function ProductsPage() {
  
  const url = 'https://dog.ceo/api/breeds/list/all';
  const dispatch = useDispatch();

  useEffect (() => {
    const loadProducts = async () => {
      const products = await fetchProducts(url)
      dispatch(setProducts(products))
    };
    loadProducts()
  }, [dispatch, url]);

  const [filter, setFilter] = useState<"all" | "favorites">("all");

  

  const products : Product[] = useSelector((state) =>  state.products.items);

  const filteredProducts =
   filter === "all"
      ? products
      : products.filter((item) => item.liked)
  
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Список товаров</h1>

      <div className="flex gap-3 mt-4">
        <button className={`px-4 py-2 rounded border ${
          filter === "all" ? "bg-white text-black" : ""
          }`}  onClick={() => setFilter("all")}>Все</button>
        <button className={`px-4 py-2 rounded border ${
          filter === "favorites" ? "bg-white text-black" : ""
          }`} onClick={() => setFilter("favorites")}>Избранные</button>
      </div>

      <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item}/>
        ))}
      </div>
    </main>
  );
}