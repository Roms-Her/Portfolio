import { useState } from 'react';
import Navbar from '../../rendering/Nav/Navbar';

export default function Indexlogic() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  );
}
