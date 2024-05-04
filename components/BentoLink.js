import Link from "next/link";

const BentoLink = ({ link, anchorText }) => {
  return (
    <Link
      href={link}
      className="bg-slate-950 place-self-stretch text-center rounded-2xl"
    >
      {anchorText}
    </Link>
  );
};

export default BentoLink;
