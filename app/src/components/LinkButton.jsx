import Link from "next/link";
export default function LinkButton({ href, name }) {
  return (
    <Link href={href}
    className=" bg-solid px-6 py-3 rounded-xl uppercase border border-solid tracking-widest font-medium text-sm hover:bg-orange-500 hover:border-orange-800 hover:shadow-xl transition-all ease-out duration-200"
    target="blank">{name}</Link>
  );
}