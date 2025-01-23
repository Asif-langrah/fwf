import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-800">Welcome to Folcon Welfare Foundation</h1>
      <Image src="/hero-image.jpg" alt="NGO Hero Image" width={1200} height={600} className="rounded-lg" />
      <p className="text-lg text-green-700">
        Your NGO Name is dedicated to [brief description of your mission]. We work tirelessly to [main goal or activity
        of your NGO].
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-800">Our Mission</h2>
          <p className="mt-2 text-green-700">Brief description of your NGO's mission.</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-800">Our Impact</h2>
          <p className="mt-2 text-green-700">Highlight a key statistic or achievement.</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-800">Get Involved</h2>
          <p className="mt-2 text-green-700">Brief call to action for volunteers or donors.</p>
        </div>
      </div>
      <div className="text-center">
        <Link
          href="/projects"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Explore Our Projects
        </Link>
      </div>
    </div>
  )
}

