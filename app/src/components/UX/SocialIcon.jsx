import Image from "next/image";
import Link from "next/link";

export default function socialLinks({item}) {
  return (
    <Link
      href={item.link}
      className="w-6 md:w-8 rounded-xl uppercase tracking-widest font-medium"
      target="_blank"
    >
      <Image src={item.icon} alt={item.alt} width={30} height={30} />
    </Link>
  );
}
