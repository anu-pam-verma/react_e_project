export default function Contact() {
  return (
    <div className="contact-container px-6 md:px-20 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Contact Us
      </h1>

      <p className="contact-intro text-center text-lg text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
        Have questions or need help? Fill out the form below and our team will get in touch with you soon.
      </p>

      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Contact Form */}
        <form className="contact-form bg-white shadow-md rounded-2xl p-8 flex-1">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="contact-info flex-1 bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-3">
            <strong>Email:</strong> support@styleease.com
          </p>
          <p className="text-gray-600 mb-3">
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> Delhi, India
          </p>
        </div>
      </div>
    </div>
  );
}
