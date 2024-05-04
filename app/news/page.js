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

  const articles = data.articles.slice(0, 6);

  console.log(articles);

  return (
    <main className="h-screen">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  h-full gap-1">
        {articles.map((article) => (
          <div key={article.title} className="relative cursor-pointer">
            <div className="h-full">
              {!!article.urlToImage ? (
                <Image
                  src={article.urlToImage}
                  alt={article.title}
                  fill
                  objectFit="cover"
                  className="w-full h-full brightness-50 hover:brightness-75 transition-all delay-75"
                />
              ) : (
                <Image
                  src={`https://images.unsplash.com/photo-1591554338378-6dcc422b8249?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt={`Placeholder image`}
                  fill
                  objectFit="cover"
                  className="w-full h-full brightness-50 hover:brightness-75 transition-all delay-75"
                />
              )}
            </div>
            <div className="absolute bottom-4">
              <p className="px-2">{article.title}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
