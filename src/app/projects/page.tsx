import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-800">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-green-50 p-6 rounded-lg">
          <Image src="/project-1.jpg" alt="Project 1" width={600} height={400} className="rounded-lg" />
          <h2 className="text-2xl font-semibold text-green-800 mt-4">Project Name 1</h2>
          <p className="text-lg text-green-700 mt-2">
            Description of Project 1. Explain the goals, impact, and any key achievements.
          </p>
          <Link href="/projects/1" className="inline-block mt-4 text-green-600 hover:text-green-800">
            Learn More &rarr;
          </Link>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <Image src="/project-2.jpg" alt="Project 2" width={600} height={400} className="rounded-lg" />
          <h2 className="text-2xl font-semibold text-green-800 mt-4">Project Name 2</h2>
          <p className="text-lg text-green-700 mt-2">
            Description of Project 2. Explain the goals, impact, and any key achievements.
          </p>
          <Link href="/projects/2" className="inline-block mt-4 text-green-600 hover:text-green-800">
            Learn More &rarr;
          </Link>
        </div>
      </div>
      <div className="bg-green-100 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold text-green-800">Get Involved</h2>
        <p className="text-lg text-green-700 mt-2">
          Interested in supporting our projects? Learn how you can contribute or volunteer.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}

