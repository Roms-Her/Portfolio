import Link from 'next/link'

export default function NavbarDesktopMenu({navLinks, orbitron}) {
  return (
    <ul className="hidden xl:flex gap-2">
    {navLinks.map((link, index) => (
      <li key={index} className="relative flex items-center">
        <Link
          href={link.url}
          className={`py-2 px-2 gap-4 hover:text-orange-500 transition text-newBlack ${orbitron.className} hover:underline hover:underline-offset-8`}
        >
          {link.title}
        </Link>
      </li>
    ))}
  </ul>
  )
}
