type ProductPageProps = {
  params: Promise <{id: string}>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const {id} = await params;
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Страница товара</h1>

      <p className="mt-2">ID товара: {id}</p>
    </main>
  );
}