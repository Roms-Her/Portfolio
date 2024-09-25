"use client"
import { useEffect } from 'react';
import Contact from "../src/components/main/contact/Contact";



export default function ContactPage() {
  useEffect(() => {
    const customCursor = document.getElementById('customCursor');
    
    
    // Mettre à jour la position du curseur lors du déplacement de la souris
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
  
        // Appliquer la position à l'élément du curseur
        customCursor.style.transform = `translate(${x-5}px, ${y-5}px)`; // Centrer le rond par rapport au curseur
    });
    }, []);
  return (
    <>
    
    <div id='customCursor' className='custom-cursor hidden md:flex'></div>
    <Contact></Contact>
    </>
  )
}