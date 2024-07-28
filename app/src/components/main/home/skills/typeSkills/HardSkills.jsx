import Image from "next/image";
import Link from "next/link";
export default function SkillsCard({skill}) {
  return (
    
      <div className="w-20 h-20 p-4 backdrop-blur-xl bg-accessible hover:bg-orange-500 shadow-xl rounded-3xl hover:rotate-180 duration-500 ease-in-out">
        <Link href={skill.doc} target="_blank">
          <Image
            className="w-full"
            src={skill.logo}
            alt={skill.alt}
            width={500}
            height={500}
          />
        </Link>
      </div>
  );
}
