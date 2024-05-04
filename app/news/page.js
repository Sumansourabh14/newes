import ArticleItem from "@/components/ArticleItem";
import { TOP_HEADLINES_URL } from "@/config/config";

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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-1">
        {articles.map((article) => (
          <ArticleItem key={article.title} article={article} />
        ))}
      </div>
    </main>
  );
}
