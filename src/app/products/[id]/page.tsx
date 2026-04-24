"use client";
import type { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import React from "react";

type ProductPageProps = {
  params: Promise<{ id: string }>
};

export default function ProductPage({ params }: ProductPageProps) {
  const {id} = React.use(params) ;
  const router = useRouter();
  const product : Product | undefined = useSelector((state : any) => state.products.items.find((item : Product) => item.id === id));
  if (!product) {
    return (
      <>
        <button className="mt-6 px-4 py-2 bg-black text-white rounded"
        onClick={() => router.push(`/products`)}>Назад</button>
        <p>Товар не найден</p>
      </>
    )
  }
  return (
    <main className="max-w-3xl mx-auto p-8">
      <button className="mb-4 px-4 py-2 bg-black text-white rounded"
        onClick={() => router.push(`/products`)}>Назад</button>
      <img src={product.image} alt={product.title} className="w-full h-96 object-cover rounded-xl"/>
      <h1 className="text-3xl text-white font-bold capitalize">{product.title}</h1>
      <p className="text-gray-600 text-sm mt-2" >{product.description}</p>
      <p className="text-xs text-blue-600 mt-3">{product.category}</p>
    </main>
  );
}