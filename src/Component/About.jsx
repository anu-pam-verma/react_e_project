export default function About() {
  return (
    <div className="about-container px-6 md:px-20 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        About Us
      </h1>

      <p className="about-intro text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
        Welcome to <strong>StyleEase</strong> — your trusted platform for finding top stylists and beauty experts for weddings, events, and special occasions.
      </p>

      <div className="about-sections grid gap-8 md:grid-cols-3">
        <div className="about-card bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To connect skilled professionals with clients who value quality and creativity, making every event a stylish experience.
          </p>
        </div>

        <div className="about-card bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            What We Do
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We help individuals and brands find verified stylists, makeup artists, and designers with flexible bookings and transparent pricing.
          </p>
        </div>

        <div className="about-card bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Why Choose Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We provide verified experts, secure payments, and an easy booking process — all in one simple app.
          </p>
        </div>
      </div>
    </div>
  );
}
