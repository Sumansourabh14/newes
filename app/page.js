import BentoLink from "@/components/BentoLink";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="grid w-full h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center p-2">
        <BentoLink anchorText={`Business`} link={`/news/business`} />
        <BentoLink anchorText={`Entertainment`} link={`/news/entertainment`} />
        <BentoLink anchorText={`General`} link={`/news/general`} />
        <BentoLink anchorText={`Health`} link={`/news/health`} />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-8xl place-self-center">
            <span className="text-yellow-400">New</span>es
          </h1>
          <p>All the latest news at one place</p>
          <p className="text-gray-400 text-sm">
            By{" "}
            <Link
              href={`https://github.com/Sumansourabh14`}
              target="_blank"
              className="underline"
            >
              Suman Sourabh
            </Link>
          </p>
        </div>
        <BentoLink anchorText={`Science`} link={`/news/science`} />
        <BentoLink anchorText={`Sports`} link={`/news/sports`} />
        <BentoLink anchorText={`Technology`} link={`/news/technology`} />
        <BentoLink anchorText={`India`} link={`/news`} />
      </div>
    </main>
  );
}
