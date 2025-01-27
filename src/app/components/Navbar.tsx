import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/Logo.png" alt="NGO Logo" width={50} height={50} />
          <span className="ml-2 text-xl font-bold text-white">Falcon Welfare Foundation</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-green-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-green-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white hover:text-green-200">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/partners" className="text-white hover:text-green-200">
              Partners
            </Link>
          </li>
          <li>
            <Link href="/workshop" className="text-white hover:text-green-200">
              Workshop
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-green-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

