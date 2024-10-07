import Link from "next/link";
export default function LinkButton({ href, name }) {
  return (
    <Link href={href}
    className=" border border-black px-4 py-2  rounded-xl text-black uppercase tracking-widest text-sm hover:bg-orange-500 hover:shadow-lg transition-all ease-out duration-200"
    target="blank">{name}</Link>
  );
}