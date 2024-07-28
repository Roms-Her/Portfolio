import Image from "next/image";
export default function SkillsCard({skill}) {
  return (
    
      <div class="w-20 h-20 p-4 backdrop-blur-xl bg-accessible hover:bg-orange-500 rounded-3xl hover:rotate-180 duration-500 ease-in-out">
        <a href={skill.doc} target="_blank">
          <Image
            class="w-full"
            src={skill.logo}
            alt={skill.alt}
            width={500}
            height={500}
          />
        </a>
      </div>
  );
}
