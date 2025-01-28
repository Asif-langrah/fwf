import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-800">Welcome to Folcon Welfare Foundation</h1>
      <Image src="/Whats.jpeg" alt="NGO Hero Image" width={1200} height={600} className="rounded-lg" />
      <p className="text-lg text-green-700">
    Falcon Welfare Foundation working in the field of welfare activities since 1987.  
    It is an independent, non-profit, non-governmental, and social welfare organization registered in September, 2003.
    Foundation is working for the services, care, awareness campaign support and rescue of different factions of the society, mainly education, relief, orphans, prisoners and the needy in Distt Rahim Yar Khan.
    The Organization is running several mega educational and rehabilitation projects in different areas of Rahim Yar Khan.

      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-800">Falcon Schools</h2>
          <p className="mt-2 text-green-700"> A Greate Learnings in Our schools.</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-800">Falcon College</h2>
          <p className="mt-2 text-green-700">Advance studies of Medical science.</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-800">Falcon IT-Center & Software House</h2>
          <p className="mt-2 text-green-700">Learn with Emmerging Technologies For Earn.</p>
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

