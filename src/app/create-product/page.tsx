"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { addProduct } from "@/store/slices/productsSlice";

export default function CreateProductPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title || !description || !image) return;

    const newProduct = {
      id: Date.now().toString(),
      title: title,
      description: description,
      category: "Custom",
      link: "",
      image: image,
      liked: true
    }

    dispatch(addProduct(newProduct));
    router.push('/products');
  }

  return (
    <main className="max-w-xl p-8 mt-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input className="w-full border rounded px-3 py-2" placeholder="Название собаки"
        value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea className="w-full border rounded px-3 py-2 min-h-32" placeholder="Описание"
        value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <input className="w-full border rounded px-3 py-2" type="url" placeholder="Url изображения"
        value={image} onChange={(e) => setImage(e.target.value)}/>
        <button className="px-4 py-2 bg-black text-white rounded" type="submit">Создать товар</button>
      </form>
    </main>
  );
}