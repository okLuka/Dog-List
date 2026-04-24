import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Тестовое задание</h1>

      <div className="flex flex-col gap-3">
        <Link
          href="/products"
          className="rounded bg-blue-600 px-4 py-2 text-white w-fit"
        >
          Список товаров
        </Link>

        <Link
          href="/create-product"
          className="rounded bg-green-600 px-4 py-2 text-white w-fit"
        >
          Создать товар
        </Link>
      </div>
    </main>
  );
}