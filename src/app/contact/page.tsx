import Image from "next/image"

export default function Contact() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-800">Contact Us</h1>
      <Image src="/contact-image.jpg" alt="Contact Us" width={1200} height={400} className="rounded-lg" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-green-800">Get in Touch</h2>
          <p className="text-lg text-green-700 mt-2">
            We'd love to hear from you! Whether you have questions about our work or want to get involved, please don't
            hesitate to reach out.
          </p>
          <ul className="mt-4 space-y-2 text-green-700">
            <li>Email: info@yourngonamehere.org</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 NGO Street, City, State, ZIP</li>
          </ul>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

