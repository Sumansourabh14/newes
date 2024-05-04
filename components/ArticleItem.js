import Image from "next/image";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <div key={article.title} className="relative cursor-pointer">
      <Link href={article.url} target="_blank">
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
      </Link>
    </div>
  );
};

export default ArticleItem;
