import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function ResourceArticle({ params }: Props) {
  const { slug } = params;

  // Placeholder — later we’ll load from MDX
  if (!slug) return notFound();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold capitalize">{slug.replace("-", " ")}</h1>
      <p className="mt-2 text-gray-600">This is a resource article.</p>
    </main>
  );
}
