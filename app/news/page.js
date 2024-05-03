import { TOP_HEADLINES_URL } from "@/config/config";
import Image from "next/image";

async function getData() {
  const res = await fetch(TOP_HEADLINES_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch news data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  const articles = data.articles.slice(0, 4);

  console.log(articles);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {articles.map((article) => (
        <div key={article.title}>
          {!!article.urlToImage && (
            <Image
              src={article.urlToImage}
              alt={article.title}
              width={100}
              height={24}
              priority
            />
          )}
          <p>{article.title}</p>
        </div>
      ))}
    </main>
  );
}
