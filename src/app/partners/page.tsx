import Image from "next/image"
import Link from "next/link"

export default function Partners() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-800">Our Partners</h1>
      <p className="text-lg text-green-700">
        We are grateful for the support and collaboration of our esteemed partners. Together, we make a greater impact
        in our community and beyond.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Image src="/partner-logo-1.png" alt="Partner 1" width={200} height={100} className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-green-800">Partner Organization 1</h2>
          <p className="mt-2 text-green-700">Brief description of partnership and impact.</p>
          <Link href="https://partner1.com" className="inline-block mt-4 text-green-600 hover:text-green-800">
            Learn More &rarr;
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Image src="/partner-logo-2.png" alt="Partner 2" width={200} height={100} className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-green-800">Partner Organization 2</h2>
          <p className="mt-2 text-green-700">Brief description of partnership and impact.</p>
          <Link href="https://partner2.com" className="inline-block mt-4 text-green-600 hover:text-green-800">
            Learn More &rarr;
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Image src="/partner-logo-3.png" alt="Partner 3" width={200} height={100} className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-green-800">Partner Organization 3</h2>
          <p className="mt-2 text-green-700">Brief description of partnership and impact.</p>
          <Link href="https://partner3.com" className="inline-block mt-4 text-green-600 hover:text-green-800">
            Learn More &rarr;
          </Link>
        </div>
      </div>
      <div className="bg-green-100 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold text-green-800">Become a Partner</h2>
        <p className="text-lg text-green-700 mt-2">
          Interested in partnering with us? We're always looking for new collaborations to expand our impact.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Contact Us for Partnership Opportunities
        </Link>
      </div>
    </div>
  )
}

