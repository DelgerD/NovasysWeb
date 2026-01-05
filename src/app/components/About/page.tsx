// src/pages/about.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="">NovaSys</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Trusted partner in mining equipment, industrial solutions, and operational excellence.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Who We Are
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Experience & Reliability
            </h3>
            <p className="text-gray-700 leading-relaxed">
              With over 15 years of experience, NovaSys delivers reliable mining
              equipment and industrial technologies tailored for modern operations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              End-to-End Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed">
              From heavy machinery supply to consulting and maintenance, we
              support your projects from planning to execution.
            </p>
          </div>
        </div>
      </section>

      {/* EQUIPMENT & SOLUTIONS */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
            Our Equipment & Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excavators & Loaders",
                desc: "High-performance machinery designed for efficiency and durability."
              },
              {
                title: "Crushing & Processing",
                desc: "Advanced systems for crushing, processing, and material handling."
              },
              {
                title: "Maintenance & Consulting",
                desc: "Expert support to maximize uptime and operational safety."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
          Mission & Vision
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To deliver innovative, reliable, and safe mining equipment that
              improves productivity and operational efficiency.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become a globally recognized partner for mining companies,
              known for quality, sustainability, and service excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build the Future Together
        </h2>
        <p className="text-gray-300 mb-10">
          Get in touch to discuss your mining projects and equipment needs.
        </p>

        <a
          href="/components/Contact"
          className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
};

export default About;
