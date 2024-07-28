import Image from "next/image";
import Link from "next/link";
export default function SoftSkills({ skill }) {
  return (
    <figure class="flex flex-col items-center justify-center gap-4">
      <Link href={skill.doc} target="_blank">
        <Image
          class="w-20 h-20 p-4 backdrop-blur-xl bg-accessible hover:bg-orange-500 rounded-3xl hover:rotate-180 duration-500 ease-in-out"
          src={skill.logo}
          alt={skill.alt}
        />
      </Link>
      <figcaption class="md:text-base2">{skill.description}</figcaption>
    </figure>
  );
}
