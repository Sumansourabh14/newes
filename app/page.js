import BentoLink from "@/components/BentoLink";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <div className="grid w-full h-full grid-cols-3 gap-2 place-items-center">
        <BentoLink anchorText={`Business`} link={`/news/business`} />
        <BentoLink anchorText={`Entertainment`} link={`/news/entertainment`} />
        <BentoLink anchorText={`General`} link={`/news/general`} />
        <BentoLink anchorText={`Health`} link={`/news/health`} />
        <h1 className="text-9xl place-self-center">Newes</h1>
        <BentoLink anchorText={`Science`} link={`/news/science`} />
        <BentoLink anchorText={`Sports`} link={`/news/sports`} />
        <BentoLink anchorText={`Technology`} link={`/news/technology`} />
        <BentoLink anchorText={`News`} link={`/news`} />
      </div>
    </main>
  );
}
