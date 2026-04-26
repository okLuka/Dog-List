"use client"
import type { Product } from "@/types/product";
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { toggleLike, deleteProduct } from "@/store/slices/productsSlice";

type Props = {
    product: Product
}

export default function ProductCard({product} : Props) {

    const dispatch = useAppDispatch();
    const router = useRouter();

    return(
        <div className="border relative rounded-xl p-4 shadow-sm bg-white h-full flex flex-col cursor-pointer"
        onClick={() => router.push(`/products/${product.id}`)}>

            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg"/>
            <h2 className="text-xl text-black font-semibold capitalize">{product.title}</h2>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2" >{product.description}</p>
            <p className="text-xs text-blue-600 mt-3">{product.category}</p>

            <button className="absolute top-3 right-3 text-2xl hover:scale-110 transition cursor-pointer" 
                onClick={(event) => {
                    event.stopPropagation();
                    dispatch(toggleLike(product.id));
                    }}>
                    {product.liked  ? "❤️" : "🤍"}
            </button>

            <button className="absolute top-3 left-3 text-2xl text-black hover:scale-110 transition cursor-pointer" 
                onClick={(event) => {
                    event.stopPropagation();
                    dispatch(deleteProduct(product.id))
                    }}>
                    🗑
            </button>
        </div>
    )
}