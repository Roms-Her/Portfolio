import Image from "next/image";
import Link from "next/link";
export default function SkillsCard({skill}) {
  return (
    
      <div className="w-16 h-16 p-4 backdrop-blur-lg bg-backgroundLigth hover:bg-orange-500 shadow-xl rounded-3xl ">
        <Link href={skill.doc} target="_blank">
          <Image
            className="w-full"
            src={skill.logo}
            alt={skill.alt}
            width={100}
            height={100}
            
          />
        </Link>
      </div>
  );
}
