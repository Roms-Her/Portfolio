"use client";
import MoreInformations from "./src/components/main/home/moreInformations/MoreInformations";
import Projects from "./src/components/main/home/project/Project";
import Skills from "./src/components/main/home/skills/Skills";
// import TimeLine from "./src/components/main/home/timeline/TimeLine";
import { useEffect } from 'react';
import Welcome from "./src/components/main/home/Welcome";
export default function Home() {
  useEffect(() => {
    const customCursor = document.getElementById('customCursor');
    
    
    // Mettre à jour la position du curseur lors du déplacement de la souris
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
  
        // Appliquer la position à l'élément du curseur
        customCursor.style.transform = `translate(${x}px, ${y}px)`; // Centrer le rond par rapport au curseur
    });
    }, []);
  return (
    <>
       <div id='customCursor' className='custom-cursor'></div>

      <Welcome />
      <Projects />
      <Skills />
      {/* <TimeLine /> */}
      <MoreInformations />
    </>
  );
}
