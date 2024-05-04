import Link from "next/link";

const BentoLink = ({ link, anchorText }) => {
  return (
    <Link
      href={link}
      className="bg-white text-black rounded-3xl flex items-center justify-center w-full h-full text-xl md:text-2xl hover:bg-gray-300 transition-all delay-100 hover:underline font-semibold"
    >
      {anchorText}
    </Link>
  );
};

export default BentoLink;
