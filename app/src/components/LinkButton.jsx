import Link from "next/link";
export default function LinkButton({ href, name }) {
  return (
    <Link href={href}
    className=" bg-solid px-4 py-2 rounded-xl text-white uppercase tracking-widest font-medium text-sm hover:bg-orange-500 hover:shadow-lg transition-all ease-out duration-200"
    target="blank">{name}</Link>
  );
}