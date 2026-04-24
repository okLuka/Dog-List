import type { Product } from "@/types/product";

export default async function fetchProducts(url: string): Promise<Product[]>  {
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
    const products = await Promise.all( Object.keys(data.message).map(async (breed) => {

        const imageResponse = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        const imageData = await imageResponse.json()

        return {
            id: breed,
            title: breed,
            description: `Dog breed ${breed}`,
            category: "Dogs",
            link: '',
            image: imageData.message,
            liked: false
        }
    })) ;
    return products;

} 

// https://dog.ceo/api/breed/hound/images/random

//https://dog.ceo/api/breeds/list/all