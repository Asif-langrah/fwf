import Image from "next/image"

export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-800">Falcon Welfare Foundation</h1>
      <Image src="/asif.jpeg" alt="About Us" width={1200} height={600} className="rounded-lg" />
      <p className="text-lg text-green-700">
        Falcon welfare Foundation Founded in 2000 working for the prospirity of neglected and marganlized community of Pakistan.
      </p>
      <h2 className="text-2xl font-semibold text-green-800">Our Vision</h2>
      <p className="text-lg text-green-700">[Describe your NGO's vision for the future]</p>
      <h2 className="text-2xl font-semibold text-green-800">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <Image
            src="/team-member-1.jpg"
            alt="Team Member 1"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
          <h3 className="mt-2 font-semibold text-green-800">Name</h3>
          <p className="text-green-700">Position</p>
        </div>
        <div className="text-center">
          <Image
            src="/team-member-2.jpg"
            alt="Team Member 2"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
          <h3 className="mt-2 font-semibold text-green-800">Name</h3>
          <p className="text-green-700">Position</p>
        </div>
        <div className="text-center">
          <Image
            src="/team-member-3.jpg"
            alt="Team Member 3"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
          <h3 className="mt-2 font-semibold text-green-800">Name</h3>
          <p className="text-green-700">Position</p>
        </div>
      </div>
    </div>
  )
}

