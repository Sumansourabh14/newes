import ArticleItem from "@/components/ArticleItem";
import { CATEGORY_URL } from "@/config/config";

export const metadata = {
  title: "Top Headlines | Newes",
  description: "A Next.js 14 project",
};

async function getData(params) {
  const res = await fetch(CATEGORY_URL + params);

  return res.json();
}

export default async function Page({ params }) {
  console.log(params);

  const data = await getData(params.category);

  const articles = data.articles.slice(0, 6);

  console.log(`data------>`, articles);

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
