import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function HardSkillLink({ skill }) {
  return (
    <Link href={skill.doc} target="_blank">
      <Image src={skill.logo} alt={skill.alt} width={100} height={100} />
    </Link>
  );
}
